// ============ STATE ============
let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
let servingsState = JSON.parse(localStorage.getItem('servingsState') || '{}');
let activeMethodFilter = 'all';
let activeMealFilter = 'all';
let cookState = { recipeId: null, step: 0, timerInterval: null, timerSeconds: 0, timerRunning: false, slotServings: null };
let wakeLock = null;

// Custom plan state
let expandedDays = new Set([0]);
let editingDays = new Set();

function loadPlan() {
  try {
    const saved = localStorage.getItem('customPlan');
    if (saved) {
      const plan = JSON.parse(saved);
      return plan.map(d => ({
        meals: (d.meals || []).map(m => ({
          ...m,
          type: m.type ? m.type.toLowerCase() : 'dinner'
        }))
      }));
    }
  } catch(e) {}
  return JSON.parse(JSON.stringify(defaultWeekPlan));
}

let customPlan = loadPlan();

function savePlan() {
  localStorage.setItem('customPlan', JSON.stringify(customPlan));
  localStorage.removeItem('groceryChecks');
}

function resetPlan() {
  if (!confirm(t('resetConfirm'))) return;
  customPlan = JSON.parse(JSON.stringify(defaultWeekPlan));
  localStorage.removeItem('customPlan');
  localStorage.removeItem('groceryChecks');
  editingDays.clear();
  renderWeekPlan();
  renderGrocery();
}

// ============ HELPERS ============
function getRecipe(id) { return recipes.find(r => r.id === id); }
function isFav(id) { return favorites.includes(id); }
function getServings(id) { const r = getRecipe(id); return servingsState[id] || r.servings; }
function getScale(id) { const r = getRecipe(id); return getServings(id) / r.servings; }

function toggleFavorite(id) {
  if (isFav(id)) { favorites = favorites.filter(f => f !== id); }
  else { favorites.push(id); }
  localStorage.setItem('favorites', JSON.stringify(favorites));
  renderAll();
}

function setServings(id, val) {
  val = Math.max(1, Math.min(20, val));
  servingsState[id] = val;
  localStorage.setItem('servingsState', JSON.stringify(servingsState));
  renderRecipes();
}

function methodBadge(m) {
  const methods = td('methods');
  const clsMap = { pressure: 'badge-pressure', air: 'badge-air', combo: 'badge-combo', saute: 'badge-saute' };
  const label = methods[m] || '';
  const cls = clsMap[m] || '';
  return `<span class="badge ${cls}">${label}</span>`;
}

function formatAmount(amount, scale) {
  if (amount === 0) return '';
  const v = amount * scale;
  if (v === Math.floor(v)) return String(v);
  const fracs = [[0.25,'\u00bc'],[0.333,'\u2153'],[0.5,'\u00bd'],[0.666,'\u2154'],[0.75,'\u00be']];
  const whole = Math.floor(v);
  const frac = v - whole;
  for (const [val, sym] of fracs) {
    if (Math.abs(frac - val) < 0.05) return whole ? `${whole}${sym}` : sym;
  }
  return v.toFixed(1).replace(/\.0$/, '');
}

function renderIngredients(recipe, scale, recipeText) {
  return recipe.ingredients.map((ing, idx) => {
    const amt = formatAmount(ing.amount, scale);
    const itemText = recipeText ? recipeText.items[idx] : ing.item;
    const unitText = recipeText ? recipeText.units[idx] : ing.unit;
    return `<div class="ing-item"><span class="ing-amount">${amt}${amt && unitText ? ' ' + unitText : ''}</span> ${itemText}</div>`;
  }).join('');
}

function getDaysForRecipe(id) {
  const days = td('days');
  return customPlan.map((d, i) => ({ d, i })).filter(({ d }) => d.meals.some(m => m.recipeId === id)).map(({ i }) => days[i].slice(0,3));
}

// ============ SLOT MANAGEMENT ============
function setSlotServings(di, mi, val) {
  val = Math.max(1, Math.min(20, val));
  customPlan[di].meals[mi].servings = val;
  savePlan();
  renderWeekPlan();
  renderGrocery();
}

function setSlotRecipe(di, mi, recipeId) {
  customPlan[di].meals[mi].recipeId = recipeId || null;
  if (recipeId) {
    const r = getRecipe(recipeId);
    if (r) customPlan[di].meals[mi].servings = r.servings;
  }
  savePlan();
  renderWeekPlan();
  renderGrocery();
}

function setSlotType(di, mi, type) {
  customPlan[di].meals[mi].type = type;
  savePlan();
  renderWeekPlan();
}

function addSlot(di) {
  if (customPlan[di].meals.length >= 4) return;
  customPlan[di].meals.push({ recipeId: null, type: "dinner", servings: 2 });
  savePlan();
  renderWeekPlan();
}

function removeSlot(di, mi) {
  customPlan[di].meals.splice(mi, 1);
  savePlan();
  renderWeekPlan();
  renderGrocery();
}

function toggleEditDay(di) {
  if (editingDays.has(di)) {
    editingDays.delete(di);
  } else {
    editingDays.add(di);
    expandedDays.add(di);
  }
  renderWeekPlan();
}

function toggleDay(di) {
  if (expandedDays.has(di)) expandedDays.delete(di);
  else expandedDays.add(di);
  renderWeekPlan();
}

// ============ RECIPE DROPDOWN OPTIONS ============
function renderRecipeOptions(selectedId) {
  const typeMap = td('mealTypeMap');
  const groups = {
    breakfast: recipes.filter(r => r.mealType === 'breakfast'),
    dinner: recipes.filter(r => r.mealType === 'dinner'),
    dessert: recipes.filter(r => r.mealType === 'dessert'),
    snack: recipes.filter(r => r.mealType === 'snack')
  };
  return Object.entries(groups).map(([type, recs]) => {
    if (!recs.length) return '';
    const label = typeMap[type] || type;
    return `<optgroup label="${label}">${recs.map(r => {
      const rt = tr(r.id);
      return `<option value="${r.id}" ${r.id===selectedId?'selected':''}>${rt ? rt.name : r.name}</option>`;
    }).join('')}</optgroup>`;
  }).join('');
}

// ============ RENDER WEEK PLAN ============
function renderDayViewMode(day, di) {
  if (!day.meals.length) {
    return `<div class="skip-label" style="text-align:center;padding:0.5rem;">${t('noMeals')}</div>`;
  }
  const typeMap = td('mealTypeMap');
  return day.meals.map((m, mi) => {
    const typeLabel = typeMap[m.type] || m.type;
    if (!m.recipeId) {
      return `
        <div class="meal skipped">
          <div class="meal-header">
            <span class="meal-type">${typeLabel}</span>
          </div>
          <div class="skip-label">${t('eatingOut')}</div>
        </div>`;
    }
    const r = getRecipe(m.recipeId);
    if (!r) return '';
    const rt = tr(r.id);
    const scale = m.servings / r.servings;
    return `
      <div class="meal">
        <div class="meal-header">
          <span class="meal-type">${typeLabel}</span>
          ${r.methods.map(methodBadge).join('')}
        </div>
        <div class="meal-name">${rt.name}</div>
        <div class="servings-ctrl">
          <button onclick="event.stopPropagation();setSlotServings(${di},${mi},${m.servings-1})">-</button>
          <span class="servings-val">${m.servings}</span>
          <button onclick="event.stopPropagation();setSlotServings(${di},${mi},${m.servings+1})">+</button>
          <span>${t('servings')}</span>
        </div>
        <div class="ingredients-list">${renderIngredients(r, scale, rt)}</div>
        <div class="meal-steps">${rt.steps.map((st,i) => `<div class="step">${i+1}. ${st}</div>`).join('')}</div>
        <div class="meal-actions">
          <button class="btn-heart ${isFav(r.id)?'active':''}" onclick="event.stopPropagation();toggleFavorite('${r.id}')">${isFav(r.id)?'\u2764\ufe0f':'\ud83e\ude76'} ${t('fave')}</button>
          <button class="btn-cook" onclick="event.stopPropagation();openCookMode('${r.id}',${m.servings})">&#x1F373; ${t('cook')}</button>
        </div>
      </div>`;
  }).join('');
}

function renderDayEditMode(day, di) {
  const mealTypes = td('mealTypes');
  const mealTypeKeys = td('mealTypeKeys');
  let html = day.meals.map((m, mi) => {
    return `
      <div class="meal-edit-slot">
        <div class="meal-edit-row">
          <select class="meal-type-select" onchange="setSlotType(${di},${mi},this.value)">
            ${mealTypeKeys.map((k, i) =>
              `<option value="${k}" ${m.type===k?'selected':''}>${mealTypes[i]}</option>`
            ).join('')}
          </select>
          <select onchange="setSlotRecipe(${di},${mi},this.value)">
            <option value="" ${!m.recipeId?'selected':''}>${t('skip')}</option>
            ${renderRecipeOptions(m.recipeId)}
          </select>
          <button class="remove-meal-btn" onclick="removeSlot(${di},${mi})" title="${t('remove')}">&times;</button>
        </div>
        ${m.recipeId ? `
          <div class="servings-ctrl">
            <button onclick="setSlotServings(${di},${mi},${m.servings-1})">-</button>
            <span class="servings-val">${m.servings}</span>
            <button onclick="setSlotServings(${di},${mi},${m.servings+1})">+</button>
            <span>${t('servings')}</span>
          </div>
        ` : `<div class="skip-label">${t('eatingOut')}</div>`}
      </div>`;
  }).join('');

  if (day.meals.length < 4) {
    html += `<button class="add-meal-btn" onclick="addSlot(${di})">${t('addMeal')}</button>`;
  }

  return html;
}

function renderWeekPlan() {
  const el = document.getElementById('plan');
  const days = td('days');
  let html = `<button class="reset-plan-btn" onclick="resetPlan()">${t('resetDefault')}</button>`;

  html += customPlan.map((day, di) => {
    const isEditing = editingDays.has(di);
    const isExpanded = expandedDays.has(di);
    const mealsHtml = isEditing ? renderDayEditMode(day, di) : renderDayViewMode(day, di);

    return `
      <div class="day-card ${isExpanded ? 'expanded' : ''}">
        <div class="day-header" onclick="toggleDay(${di})">
          <div class="day-emoji">${dayEmojis[di]}</div>
          <div class="day-info">
            <div class="day-name">${days[di]}</div>
            <div class="day-theme">${td('planTheme')}</div>
          </div>
          <div class="day-header-actions">
            <button class="edit-btn ${isEditing?'active':''}" onclick="event.stopPropagation();toggleEditDay(${di})" title="${isEditing?t('doneEditing'):t('editDay')}">
              ${isEditing ? '\u2713' : '\u270e'}
            </button>
            <div class="day-chevron">\u25bc</div>
          </div>
        </div>
        <div class="day-body"><div class="day-content">${mealsHtml}</div></div>
      </div>`;
  }).join('');

  el.innerHTML = html;
}

// ============ RENDER RECIPES ============
function renderRecipes() {
  const el = document.getElementById('recipes');
  let filtered = recipes.filter(r => {
    if (activeMethodFilter !== 'all' && !r.methods.includes(activeMethodFilter)) return false;
    if (activeMealFilter !== 'all' && r.mealType !== activeMealFilter) return false;
    return true;
  });

  const favRecipes = filtered.filter(r => isFav(r.id));
  const otherRecipes = filtered.filter(r => !isFav(r.id));

  const methods = td('methods');
  const mealTypeMap = td('mealTypeMap');
  const methodFilters = [['all','All'], ...Object.entries(methods)];
  const mealFilters = [['all','All'], ...Object.entries(mealTypeMap)];

  let html = `
    <div class="filter-bar">
      <div class="filter-label">${t('method')}</div>
      ${methodFilters.map(([v,l]) => `<button class="filter-pill ${activeMethodFilter===v?'active':''}" onclick="activeMethodFilter='${v}';renderRecipes()">${l}</button>`).join('')}
    </div>
    <div class="filter-bar">
      <div class="filter-label">${t('mealFilter')}</div>
      ${mealFilters.map(([v,l]) => `<button class="filter-pill ${activeMealFilter===v?'active':''}" onclick="activeMealFilter='${v}';renderRecipes()">${l}</button>`).join('')}
    </div>`;

  if (favRecipes.length) {
    html += `<div class="fav-divider">\u2764\ufe0f ${t('favLabel')} (${favRecipes.length})</div>`;
    html += favRecipes.map(r => renderRecipeCard(r)).join('');
    if (otherRecipes.length) {
      html += `<div class="fav-divider">${t('allRecipes')}</div>`;
    }
  }
  html += otherRecipes.map(r => renderRecipeCard(r)).join('');

  if (!filtered.length) {
    html += `<div style="text-align:center;padding:2rem;color:var(--text-light);">${t('noMatch')}</div>`;
  }

  el.innerHTML = html;
}

function renderRecipeCard(r) {
  const scale = getScale(r.id);
  const s = getServings(r.id);
  const days = getDaysForRecipe(r.id);
  const rt = tr(r.id);
  const typeLabel = td('mealTypeMap')[r.mealType] || r.mealType;
  return `
    <div class="recipe-card" id="rc-${r.id}">
      <div class="recipe-card-header" onclick="toggleRecipeCard('${r.id}')">
        <div class="recipe-card-info">
          <div class="recipe-card-name">${rt.name}</div>
          <div class="recipe-card-meta">${typeLabel} ${days.length ? '&bull; ' + days.join(', ') : ''}</div>
          <div class="recipe-card-badges">${r.methods.map(methodBadge).join('')}</div>
        </div>
        <span class="recipe-card-heart" onclick="event.stopPropagation();toggleFavorite('${r.id}')">${isFav(r.id)?'\u2764\ufe0f':'\ud83e\ude76'}</span>
        <span class="recipe-card-chevron">\u25bc</span>
      </div>
      <div class="recipe-card-body">
        <div class="recipe-card-content">
          <div class="servings-ctrl">
            <button onclick="event.stopPropagation();setServings('${r.id}',${s-1})">-</button>
            <span class="servings-val">${s}</span>
            <button onclick="event.stopPropagation();setServings('${r.id}',${s+1})">+</button>
            <span>${t('servings')}</span>
          </div>
          <div class="ingredients-list">${renderIngredients(r, scale, rt)}</div>
          <div class="meal-steps">${rt.steps.map((st,i) => `<div class="step">${i+1}. ${st}</div>`).join('')}</div>
          <div class="meal-actions" style="margin-top:0.75rem;">
            <button class="btn-cook" onclick="event.stopPropagation();openCookMode('${r.id}')">&#x1F373; ${t('startCooking')}</button>
          </div>
        </div>
      </div>
    </div>`;
}

function toggleRecipeCard(id) {
  document.getElementById('rc-' + id).classList.toggle('expanded');
}

// ============ GROCERY LIST COMPUTATION ============
function normalizeItem(item) {
  return item.toLowerCase()
    .replace(/,\s*(diced|sliced|cored|seasoned|drained|chopped|minced)\b/gi, '')
    .trim();
}

function computeGroceryList() {
  const mergeMap = {};
  let mealCount = 0;
  let totalServings = 0;

  for (const day of customPlan) {
    for (const slot of day.meals) {
      if (!slot.recipeId) continue;
      const r = getRecipe(slot.recipeId);
      if (!r) continue;
      mealCount++;
      totalServings += slot.servings;
      const scale = slot.servings / r.servings;
      const rt = tr(r.id);

      r.ingredients.forEach((ing, idx) => {
        if (!ing.cat) return;

        const normName = normalizeItem(ing.item);
        const key = normName + '||' + (ing.amount === 0 ? '_zero_' : ing.unit);

        if (!mergeMap[key]) {
          const displayName = rt ? rt.items[idx] : ing.item;
          const displayUnit = rt ? rt.units[idx] : ing.unit;
          mergeMap[key] = {
            item: normName,
            displayItem: normalizeItem(displayName),
            displayUnit: displayUnit,
            amount: 0,
            unit: ing.unit,
            cat: ing.cat,
            isZero: ing.amount === 0
          };
        }

        if (ing.amount > 0) {
          mergeMap[key].amount += ing.amount * scale;
          mergeMap[key].isZero = false;
        }
      });
    }
  }

  const catOrder = ["Proteins", "Grains & Pasta", "Produce", "Canned / Jarred", "Pantry", "Frozen"];
  const categories = {};
  for (const entry of Object.values(mergeMap)) {
    if (!categories[entry.cat]) categories[entry.cat] = [];
    categories[entry.cat].push(entry);
  }

  return { categories, catOrder, mealCount, totalServings };
}

// ============ RENDER GROCERY ============
function renderGrocery() {
  const el = document.getElementById('grocery');
  const { categories, catOrder, mealCount, totalServings } = computeGroceryList();
  const catLabels = td('categories');

  if (mealCount === 0) {
    el.innerHTML = `
      <div class="grocery-summary">${t('noMealsPlanned')}</div>
      <div class="grocery-empty">${t('addMealsPrompt')}</div>`;
    return;
  }

  let gIdx = 0;
  const sections = catOrder.filter(cat => categories[cat] && categories[cat].length).map(cat => {
    const items = categories[cat].map(entry => {
      gIdx++;
      let label;
      if (entry.isZero || entry.amount === 0) {
        label = entry.displayItem;
      } else {
        const amt = formatAmount(entry.amount, 1);
        label = `${amt}${entry.displayUnit ? ' ' + entry.displayUnit : ''} ${entry.displayItem}`;
      }
      return `<div class="grocery-item"><input type="checkbox" id="g${gIdx}" onchange="updateProgress()"><label for="g${gIdx}">${label}</label></div>`;
    }).join('');
    return `<div class="grocery-section"><h3>${catLabels[cat] || cat}</h3>${items}</div>`;
  }).join('');

  el.innerHTML = `
    <div class="grocery-summary">${tf('grocerySummary', mealCount, totalServings)}</div>
    <div class="grocery-progress">
      <div class="progress-text"><span id="checkedCount">0</span> / <span id="totalCount">0</span> ${t('items')}</div>
      <div class="progress-bar"><div class="progress-fill" id="progressFill"></div></div>
      <button class="clear-btn" onclick="clearChecks()">${t('clearAll')}</button>
    </div>
    ${sections}`;
  restoreGrocery();
}

// ============ RENDER QUICK REF ============
function renderQuickRef() {
  const pt = td('pressureTable');
  const at = td('airTable');
  const tips = td('tips');
  const methods = td('methods');

  document.getElementById('ref').innerHTML = `
    <div class="ref-card">
      <h3><span class="badge badge-pressure">${methods.pressure}</span> ${t('time')}</h3>
      <table class="ref-table">
        <thead><tr><th>${t('food')}</th><th>${t('time')}</th><th>${t('release')}</th></tr></thead>
        <tbody>${pt.map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join('')}</tbody>
      </table>
    </div>
    <div class="ref-card">
      <h3><span class="badge badge-air">${methods.air}</span> ${t('time')}</h3>
      <table class="ref-table">
        <thead><tr><th>${t('food')}</th><th>${t('temp')}</th><th>${t('time')}</th><th>${t('notes')}</th></tr></thead>
        <tbody>${at.map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td></tr>`).join('')}</tbody>
      </table>
    </div>
    <div class="tips-card">
      <h3>${t('proTips')}</h3>
      ${tips.map(tip => tip[0]
        ? `<div class="tip"><strong>${tip[0]}</strong>${tip[1]}</div>`
        : `<div class="tip">${tip[1]}</div>`
      ).join('')}
    </div>`;
}

// ============ COOK MODE ============
function openCookMode(id, slotServings) {
  cookState.recipeId = id;
  cookState.step = 0;
  cookState.slotServings = slotServings || null;
  cookState.timerSeconds = getRecipe(id).timer.minutes * 60;
  cookState.timerRunning = false;
  if (cookState.timerInterval) clearInterval(cookState.timerInterval);
  cookState.timerInterval = null;
  renderCookMode();
  document.getElementById('cookOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
  requestWakeLock();
}

function closeCookMode() {
  document.getElementById('cookOverlay').classList.remove('active');
  document.body.style.overflow = '';
  if (cookState.timerInterval) clearInterval(cookState.timerInterval);
  cookState.timerRunning = false;
  releaseWakeLock();
}

function renderCookMode() {
  const r = getRecipe(cookState.recipeId);
  const rt = tr(r.id);
  const cookServings = cookState.slotServings || getServings(r.id);
  const cookScale = cookServings / r.servings;
  const s = cookState.step;
  const total = rt.steps.length;
  const mm = String(Math.floor(cookState.timerSeconds / 60)).padStart(2, '0');
  const ss = String(cookState.timerSeconds % 60).padStart(2, '0');
  const timerClass = cookState.timerRunning ? 'running' : (cookState.timerSeconds === 0 ? 'done' : '');

  document.getElementById('cookModal').innerHTML = `
    <div class="cook-header">
      <button class="cook-close" onclick="closeCookMode()">&times;</button>
      <div class="cook-title">${rt.name}</div>
    </div>
    <div class="cook-ingredients">
      <h3>${t('ingredients')} (${cookServings} ${t('servings')})</h3>
      ${r.ingredients.map((ing, idx) => {
        const amt = formatAmount(ing.amount, cookScale);
        const itemText = rt.items[idx];
        const unitText = rt.units[idx];
        return `<div class="cook-ing-item"><span class="cook-ing-amount">${amt}${amt && unitText ? ' ' + unitText : ''}</span> ${itemText}</div>`;
      }).join('')}
    </div>
    <div class="cook-step-area">
      <div class="cook-step-progress">${tf('stepOf', s+1, total)}</div>
      <div class="cook-step-text">${rt.steps[s]}</div>
    </div>
    <div class="cook-timer">
      <div>
        <div class="timer-label">${rt.timerLabel}</div>
        <div class="timer-display ${timerClass}">${mm}:${ss}</div>
      </div>
      ${cookState.timerRunning
        ? `<button class="timer-btn stop" onclick="pauseTimer()">${t('pause')}</button>`
        : `<button class="timer-btn" onclick="startTimer()">${t('start')}</button>`
      }
      <button class="timer-reset" onclick="resetTimer()">${t('resetTimer')}</button>
    </div>
    <div class="cook-nav">
      <button class="cook-prev" onclick="cookStep(-1)" ${s===0?'disabled':''}>${t('prev')}</button>
      <button class="cook-next" onclick="cookStep(1)">${s===total-1?t('done'):t('next')}</button>
    </div>`;
}

function cookStep(dir) {
  const r = getRecipe(cookState.recipeId);
  if (dir === 1 && cookState.step === r.steps.length - 1) { closeCookMode(); return; }
  cookState.step = Math.max(0, Math.min(r.steps.length - 1, cookState.step + dir));
  renderCookMode();
}

function startTimer() {
  if (cookState.timerSeconds <= 0) return;
  cookState.timerRunning = true;
  cookState.timerInterval = setInterval(() => {
    cookState.timerSeconds--;
    if (cookState.timerSeconds <= 0) {
      cookState.timerSeconds = 0;
      clearInterval(cookState.timerInterval);
      cookState.timerRunning = false;
      playBeep();
    }
    renderCookMode();
  }, 1000);
  renderCookMode();
}

function pauseTimer() {
  clearInterval(cookState.timerInterval);
  cookState.timerRunning = false;
  renderCookMode();
}

function resetTimer() {
  clearInterval(cookState.timerInterval);
  cookState.timerRunning = false;
  const r = getRecipe(cookState.recipeId);
  cookState.timerSeconds = r.timer.minutes * 60;
  renderCookMode();
}

function playBeep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    [0, 0.3, 0.6].forEach(delay => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = 880;
      osc.type = 'sine';
      gain.gain.value = 0.3;
      osc.start(ctx.currentTime + delay);
      osc.stop(ctx.currentTime + delay + 0.15);
    });
  } catch(e) {}
}

async function requestWakeLock() {
  try { if ('wakeLock' in navigator) wakeLock = await navigator.wakeLock.request('screen'); } catch(e) {}
}
function releaseWakeLock() {
  if (wakeLock) { wakeLock.release(); wakeLock = null; }
}

// ============ TABS ============
document.querySelectorAll('.tab').forEach(t => {
  t.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    t.classList.add('active');
    document.getElementById(t.dataset.tab).classList.add('active');
  });
});

// ============ GROCERY ============
function updateProgress() {
  const cbs = document.querySelectorAll('#grocery input[type="checkbox"]');
  const checked = document.querySelectorAll('#grocery input[type="checkbox"]:checked');
  const cnt = document.getElementById('checkedCount');
  const tot = document.getElementById('totalCount');
  const fill = document.getElementById('progressFill');
  if (cnt) cnt.textContent = checked.length;
  if (tot) tot.textContent = cbs.length;
  if (fill) fill.style.width = (cbs.length ? checked.length / cbs.length * 100 : 0) + '%';
  cbs.forEach(cb => cb.closest('.grocery-item').classList.toggle('checked', cb.checked));
  const state = {};
  cbs.forEach(cb => { state[cb.id] = cb.checked; });
  localStorage.setItem('groceryChecks', JSON.stringify(state));
}

function clearChecks() {
  document.querySelectorAll('#grocery input[type="checkbox"]').forEach(cb => { cb.checked = false; });
  localStorage.removeItem('groceryChecks');
  updateProgress();
}

function restoreGrocery() {
  try {
    const state = JSON.parse(localStorage.getItem('groceryChecks'));
    if (state) Object.keys(state).forEach(id => { const cb = document.getElementById(id); if (cb) cb.checked = state[id]; });
  } catch(e) {}
  updateProgress();
}

// ============ DARK MODE ============
function toggleDarkMode() {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('darkMode', isDark ? '1' : '0');
  document.querySelector('.dark-toggle').textContent = isDark ? '\ud83c\udf19' : '\u2600\ufe0f';
}

function initDarkMode() {
  const stored = localStorage.getItem('darkMode');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (stored === '1' || (stored === null && prefersDark)) {
    document.body.classList.add('dark');
    document.querySelector('.dark-toggle').textContent = '\ud83c\udf19';
  }
}

// ============ RENDER ALL ============
function renderAll() {
  renderWeekPlan();
  renderRecipes();
  renderGrocery();
  renderQuickRef();
}

// ============ INIT ============
initDarkMode();
document.documentElement.lang = lang;
document.querySelector('.lang-toggle').textContent = lang === 'en' ? 'HU' : 'EN';
if (lang !== 'en') {
  setLang(lang);
} else {
  renderAll();
}
