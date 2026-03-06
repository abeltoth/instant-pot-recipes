// ============ I18N ============
let lang = localStorage.getItem('lang') || 'en';


const i18n = {
  en: {
    ui: {
      title: 'Instant Pot Pro Crisp',
      subtitle: 'Week 1 Meal Plan',
      badge: '\ud83c\udf31 Dairy-Free \u2022 Beginner Friendly',
      weekPlan: 'Week Plan',
      recipesTab: 'Recipes',
      grocery: 'Grocery List',
      quickRef: 'Quick Ref',
      servings: 'servings',
      fave: 'Fave',
      cook: 'Cook',
      startCooking: 'Start Cooking',
      resetDefault: '\u21ba Reset to Default',
      resetConfirm: 'Reset meal plan to default? Your customizations will be lost.',
      noMeals: 'No meals planned \u2014 tap \u270e to add meals',
      skip: '\u2014 Skip \u2014',
      eatingOut: 'Eating out / Skipped',
      addMeal: '+ Add Meal',
      remove: 'Remove',
      editDay: 'Edit day',
      doneEditing: 'Done editing',
      method: 'Method',
      mealFilter: 'Meal',
      noMatch: 'No recipes match these filters.',
      favLabel: 'Favorites',
      allRecipes: 'All Recipes',
      grocerySummary: 'Based on your meal plan ({0} meals, {1} servings)',
      noMealsPlanned: 'No meals planned',
      addMealsPrompt: 'Add meals to your week plan to generate a grocery list.',
      items: 'items',
      clearAll: 'Clear All Checks',
      ingredients: 'Ingredients',
      stepOf: 'Step {0} of {1}',
      prev: '\u2190 Prev',
      next: 'Next \u2192',
      done: 'Done \u2714',
      start: 'Start',
      pause: 'Pause',
      resetTimer: 'Reset',
      footer1: 'Instant Pot Pro Crisp \u2014 Week 1 Meal Plan',
      footer2: 'Dairy-Free \u2022 Beginner Friendly',
      proTips: '\ud83d\udca1 Pro Tips',
      food: 'Food',
      time: 'Time',
      release: 'Release',
      temp: 'Temp',
      notes: 'Notes'
    },
    data: {
      days: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      planTheme: 'Plan Your Meals',
      mealTypes: ['Breakfast','Dinner','Dessert','Snack'],
      mealTypeKeys: ['breakfast','dinner','dessert','snack'],
      mealTypeMap: { breakfast:'Breakfast', dinner:'Dinner', dessert:'Dessert', snack:'Snack' },
      methods: { pressure:'Pressure Cook', air:'Air Crisp', combo:'Combo', saute:'Saut\u00e9' },
      categories: {
        'Proteins': '\ud83e\udd69 Proteins',
        'Grains & Pasta': '\ud83c\udf5a Grains & Pasta',
        'Produce': '\ud83e\udd66 Produce',
        'Canned / Jarred': '\ud83e\udd6b Canned / Jarred',
        'Pantry': '\ud83c\udfea Pantry',
        'Frozen': '\u2744\ufe0f Frozen'
      },
      pressureTable: [
        ['White rice','4 min','Natural 10 min'],
        ['Steel cut oats','10 min','Natural 10 min'],
        ['Hard boiled eggs','5 min','Quick'],
        ['Chicken thighs','10 min','Natural 5 min'],
        ['Ground beef chili','20 min','Natural 10 min'],
        ['Diced potatoes','8 min','Quick'],
        ['Pasta','4-6 min','Quick']
      ],
      airTable: [
        ['Frozen fries','400\u00b0F','15 min','Shake halfway'],
        ['Hash browns','400\u00b0F','12 min','Flip halfway'],
        ['Chicken skin','400\u00b0F','8 min','After pressure cook'],
        ['Sausage links','400\u00b0F','10 min','Turn halfway'],
        ['Baked apples','350\u00b0F','15 min','\u2014']
      ],
      tips: [
        ['Natural Release',' = just let it sit, pressure drops on its own.'],
        ['Quick Release',' = turn the valve to vent steam immediately.'],
        [null,'Always use at least <strong>1 cup liquid</strong> for pressure cooking.'],
        [null,'All recipes in this plan are <strong>dairy-free</strong>.']
      ]
    }
  },
  hu: {
    ui: {
      title: 'Instant Pot Pro Crisp',
      subtitle: '1. heti \u00e9tkezési terv',
      badge: '\ud83c\udf31 Tejmentes \u2022 Kezd\u0151knek',
      weekPlan: 'Heti terv',
      recipesTab: 'Receptek',
      grocery: 'Bev\u00e1s\u00e1rl\u00f3lista',
      quickRef: 'Gyors referencia',
      servings: 'adag',
      fave: 'Kedvenc',
      cook: 'F\u0151z\u00e9s',
      startCooking: 'F\u0151z\u00e9s ind\u00edt\u00e1sa',
      resetDefault: '\u21ba Alap\u00e9rtelmez\u00e9s',
      resetConfirm: 'Vissza\u00e1ll\u00edtod az \u00e9tkezési tervet? A m\u00f3dos\u00edt\u00e1sok elvesznek.',
      noMeals: 'Nincs tervezett \u00e9tkez\u00e9s \u2014 nyomd meg a \u270e gombot',
      skip: '\u2014 Kihagy \u2014',
      eatingOut: '\u00c9tterem / Kihagyva',
      addMeal: '+ \u00c9tkez\u00e9s hozz\u00e1ad\u00e1sa',
      remove: 'Elt\u00e1vol\u00edt\u00e1s',
      editDay: 'Nap szerkeszt\u00e9se',
      doneEditing: 'Szerkeszt\u00e9s k\u00e9sz',
      method: 'M\u00f3dszer',
      mealFilter: '\u00c9tkez\u00e9s',
      noMatch: 'Nincs tal\u00e1lat a sz\u0171r\u0151knek.',
      favLabel: 'Kedvencek',
      allRecipes: '\u00d6sszes recept',
      grocerySummary: 'Az \u00e9tkezési terv alapj\u00e1n ({0} \u00e9tkez\u00e9s, {1} adag)',
      noMealsPlanned: 'Nincs tervezett \u00e9tkez\u00e9s',
      addMealsPrompt: 'Adj hozz\u00e1 \u00e9tkez\u00e9seket a heti tervhez a bev\u00e1s\u00e1rl\u00f3lista gener\u00e1l\u00e1s\u00e1hoz.',
      items: 't\u00e9tel',
      clearAll: '\u00d6sszes t\u00f6rl\u00e9se',
      ingredients: 'Hozz\u00e1val\u00f3k',
      stepOf: '{0}. l\u00e9p\u00e9s / {1}',
      prev: '\u2190 El\u0151z\u0151',
      next: 'K\u00f6vetkez\u0151 \u2192',
      done: 'K\u00e9sz \u2714',
      start: 'Ind\u00edt\u00e1s',
      pause: 'Sz\u00fcnet',
      resetTimer: '\u00dajraind\u00edt\u00e1s',
      footer1: 'Instant Pot Pro Crisp \u2014 1. heti \u00e9tkezési terv',
      footer2: 'Tejmentes \u2022 Kezd\u0151knek',
      proTips: '\ud83d\udca1 Tippek',
      food: '\u00c9tel',
      time: 'Id\u0151',
      release: 'G\u0151zkiereszt\u00e9s',
      temp: 'H\u0151fok',
      notes: 'Megjegyz\u00e9s'
    },
    data: {
      days: ['H\u00e9tf\u0151','Kedd','Szerda','Cs\u00fct\u00f6rt\u00f6k','P\u00e9ntek','Szombat','Vas\u00e1rnap'],
      planTheme: 'Tervezd meg az \u00e9tkez\u00e9seidet',
      mealTypes: ['Reggeli','Vacsora','Desszert','Snack'],
      mealTypeKeys: ['breakfast','dinner','dessert','snack'],
      mealTypeMap: { breakfast:'Reggeli', dinner:'Vacsora', dessert:'Desszert', snack:'Snack' },
      methods: { pressure:'Nyom\u00e1sf\u0151z\u00e9s', air:'Forr\u00f3leveg\u0151', combo:'Komb\u00f3', saute:'P\u00edr\u00edt\u00e1s' },
      categories: {
        'Proteins': '\ud83e\udd69 Feh\u00e9rj\u00e9k',
        'Grains & Pasta': '\ud83c\udf5a Gabona & T\u00e9szta',
        'Produce': '\ud83e\udd66 Z\u00f6lds\u00e9g & Gy\u00fcm\u00f6lcs',
        'Canned / Jarred': '\ud83e\udd6b Konzerv',
        'Pantry': '\ud83c\udfea Kamra',
        'Frozen': '\u2744\ufe0f Fagyasztott'
      },
      pressureTable: [
        ['Feh\u00e9r rizs','4 perc','Term\u00e9szetes 10 perc'],
        ['Dar\u00e1lt zab','10 perc','Term\u00e9szetes 10 perc'],
        ['F\u0151tt toj\u00e1s','5 perc','Gyors'],
        ['Csirkecomb','10 perc','Term\u00e9szetes 5 perc'],
        ['Dar\u00e1lt marha chili','20 perc','Term\u00e9szetes 10 perc'],
        ['Kock\u00e1zott krumpli','8 perc','Gyors'],
        ['T\u00e9szta','4-6 perc','Gyors']
      ],
      airTable: [
        ['Fagyasztott s\u00fcltkrumpli','200\u00b0C','15 perc','Fel\u00e9n\u00e9l r\u00e1zd meg'],
        ['R\u00f6szti','200\u00b0C','12 perc','Fel\u00e9n\u00e9l ford\u00edtsd meg'],
        ['Csirkeb\u0151r','200\u00b0C','8 perc','Nyom\u00e1sf\u0151z\u00e9s ut\u00e1n'],
        ['Kolb\u00e1sz','200\u00b0C','10 perc','Fel\u00e9n\u00e9l ford\u00edtsd meg'],
        ['S\u00fclt alma','175\u00b0C','15 perc','\u2014']
      ],
      tips: [
        ['Term\u00e9szetes g\u0151zkiereszt\u00e9s',' = csak hagyd \u00e1llni, a nyom\u00e1s mag\u00e1t\u00f3l cs\u00f6kken.'],
        ['Gyors g\u0151zkiereszt\u00e9s',' = ford\u00edtsd el a szelepet a g\u0151z azonnali kiereszt\u00e9s\u00e9hez.'],
        [null,'Mindig haszn\u00e1lj legal\u00e1bb <strong>1 cs\u00e9sze folyadékot</strong> nyom\u00e1sf\u0151z\u00e9shez.'],
        [null,'Ebben a tervben minden recept <strong>tejmentes</strong>.']
      ]
    },
    recipes: {
      'hard-boiled-eggs': {
        name: 'F\u0151tt toj\u00e1s + pir\u00edt\u00f3s',
        items: ['v\u00edz', 'toj\u00e1s'],
        units: ['cs\u00e9sze', ''],
        steps: ['Adj 1 cs\u00e9sze vizet \u00e9s helyezd a toj\u00e1sokat az \u00e1llv\u00e1nyra.', 'Nyom\u00e1sf\u0151z\u00e9s 5 perc, Gyors g\u0151zkiereszt\u00e9s.', 'Jeges v\u00edzbe 5 percre. T\u00e1lald pir\u00edt\u00f3ssal.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'rice-chicken': {
        name: 'Feh\u00e9r rizs + f\u0171szeres csirkecomb',
        items: ['feh\u00e9r rizs', 'v\u00edz (rizshez)', 'csirkecomb', 's\u00f3, bors, pirospaprika, fokhagymapor'],
        units: ['cs\u00e9sze', 'cs\u00e9sze', '', ''],
        steps: ['Rizs: 1 cs\u00e9sze rizs + 1 cs\u00e9sze v\u00edz. Nyom\u00e1sf\u0151z\u00e9s 4 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 10 perc.', 'Csirke: F\u0171szerezd s\u00f3val, borssal, pirospaprik\u00e1val, fokhagymaporral.', 'Nyom\u00e1sf\u0151z\u00e9s 10 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 5 perc.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s (Csirke)'
      },
      'air-fryer-fries': {
        name: 'Forr\u00f3leveg\u0151s s\u00fclt krumpli',
        items: ['fagyasztott has\u00e1bburgonya (f\u00e9l csomag)'],
        units: [''],
        steps: ['Helyezd a fagyasztott krumplit a kos\u00e1rba.', 'Forr\u00f3leveg\u0151 200\u00b0C, 15 perc. Fel\u00e9n\u00e9l r\u00e1zd meg.'],
        timerLabel: 'Forr\u00f3leveg\u0151'
      },
      'oatmeal-banana': {
        name: 'Zabk\u00e1sa ban\u00e1nnal',
        items: ['dar\u00e1lt zab', 'v\u00edz', 'ban\u00e1n, szeletelve', 'csipet s\u00f3, fah\u00e9j'],
        units: ['cs\u00e9sze', 'cs\u00e9sze', '', ''],
        steps: ['Adj 1 cs\u00e9sze zabot + 3 cs\u00e9sze vizet + csipet s\u00f3t.', 'Nyom\u00e1sf\u0151z\u00e9s 10 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 10 perc.', 'Tedd r\u00e1 a szeletelt ban\u00e1nt + fah\u00e9jat.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'one-pot-pasta': {
        name: 'Egyt\u00e1las t\u00e9szta',
        items: ['penne t\u00e9szta', 'paradicsomszósz (tejmentes)', 'v\u00edz', 's\u00f3'],
        units: ['font', '\u00fcveg', 'cs\u00e9sze', ''],
        steps: ['Adj 1 font penn\u00e9t + 1 \u00fcveg paradicsomszószt + 3 cs\u00e9sze vizet + s\u00f3t.', 'Keverd meg, hogy a t\u00e9szta elmer\u00fclj\u00f6n.', 'Nyom\u00e1sf\u0151z\u00e9s 5 perc, Gyors g\u0151zkiereszt\u00e9s. J\u00f3l keverd \u00e1t.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'hash-browns-eggs': {
        name: 'Forr\u00f3leveg\u0151s r\u00f6szti + toj\u00e1s',
        items: ['fagyasztott r\u00f6szti', 'toj\u00e1s', 'olajspray, s\u00f3'],
        units: ['', '', ''],
        steps: ['Helyezd a r\u00f6sztit a kos\u00e1rba olajspray-vel + s\u00f3val.', 'Forr\u00f3leveg\u0151 200\u00b0C, 12 perc, fel\u00e9n\u00e9l ford\u00edtsd meg.', 'A toj\u00e1st k\u00fcl\u00f6n s\u00fcsd meg.'],
        timerLabel: 'Forr\u00f3leveg\u0151'
      },
      'crispy-chicken': {
        name: 'Ropog\u00f3s csirkecomb (Komb\u00f3!)',
        items: ['csirkecomb, f\u0171szerezve', 'v\u00edz'],
        units: ['', 'cs\u00e9sze'],
        steps: ['F\u0171szerezd meg a csirkecombot.', 'Nyom\u00e1sf\u0151z\u00e9s 10 perc, Gyors g\u0151zkiereszt\u00e9s.', 'Helyezd a forr\u00f3leveg\u0151s kos\u00e1rba.', 'Forr\u00f3leveg\u0151 200\u00b0C, 8 perc, am\u00edg a b\u0151re aranybarna.', 'T\u00e1lald marad\u00e9k rizzsel.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'eggs-oatmeal-leftover': {
        name: 'F\u0151tt toj\u00e1s + zabk\u00e1sa',
        items: ['toj\u00e1s', 'dar\u00e1lt zab', 'v\u00edz'],
        units: ['', 'cs\u00e9sze', 'cs\u00e9sze'],
        steps: ['Haszn\u00e1ld a h\u00e9tf\u0151i (toj\u00e1s) \u00e9s/vagy keddi (zabk\u00e1sa) m\u00f3dszert.', 'Haszn\u00e1ld a marad\u00e9kot vagy k\u00e9sz\u00edtsd frissen.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'veggie-potato-soup': {
        name: 'Z\u00f6lds\u00e9ges krumplileves',
        items: ['hagyma, kock\u00e1zva', 's\u00e1rgar\u00e9pa, kock\u00e1zva', 'zeller, kock\u00e1zva', 'ol\u00edvaolaj', 'krumpli, kock\u00e1zva', 'csirke alapl\u00e9', 's\u00f3, bors'],
        units: ['', '', 'sz\u00e1r', 'ek', '', 'cs\u00e9sze', ''],
        steps: ['P\u00edr\u00edtsd meg a hagym\u00e1t, s\u00e1rgar\u00e9p\u00e1t, zellert ol\u00edvaolajban (P\u00edr\u00edt\u00e1s m\u00f3d, 4 perc).', 'Add hozz\u00e1 a kock\u00e1zott krumplit + 4 cs\u00e9sze alapl\u00e9t + s\u00f3t + borsot.', 'Nyom\u00e1sf\u0151z\u00e9s 8 perc, Gyors g\u0151zkiereszt\u00e9s.', 'T\u00f6rj \u00f6ssze n\u00e9h\u00e1ny krumplit a s\u0171r\u00edt\u00e9shez.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'oatmeal-blueberries': {
        name: 'Zabk\u00e1sa \u00e1fony\u00e1val',
        items: ['dar\u00e1lt zab', 'v\u00edz', '\u00e1fonya', 'csipet s\u00f3, barna cukor'],
        units: ['cs\u00e9sze', 'cs\u00e9sze', 'cs\u00e9sze', ''],
        steps: ['Mint kedden: 1 cs\u00e9sze zab + 3 cs\u00e9sze v\u00edz + csipet s\u00f3.', 'Nyom\u00e1sf\u0151z\u00e9s 10 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 10 perc.', 'Tedd r\u00e1 az \u00e1fony\u00e1t + barna cukrot.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'beef-chili': {
        name: 'Marhah\u00fas chili',
        items: ['dar\u00e1lt marha', 'hagyma, kock\u00e1zva', 'kock\u00e1zott paradicsom', 'vesebab, lecsepegtetva', 'paradicsompüré', 'chilipor, k\u00f6m\u00e9ny, fokhagymapor, s\u00f3'],
        units: ['font', '', 'doboz', 'doboz', 'kis doboz', ''],
        steps: ['P\u00edr\u00edtsd meg az 1 font dar\u00e1lt marh\u00e1t + kock\u00e1zott hagym\u00e1t (P\u00edr\u00edt\u00e1s m\u00f3d, 5 perc, t\u00f6rdelve).', 'Add hozz\u00e1 a 2 doboz kock\u00e1zott paradicsomot + 1 doboz babot + paradicsompürét.', 'F\u0171szerezd chiliporral, k\u00f6m\u00e9nnyel, fokhagymaval, s\u00f3val.', 'Nyom\u00e1sf\u0151z\u00e9s 20 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 10 perc.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'sausage-hash-browns': {
        name: 'Forr\u00f3leveg\u0151s kolb\u00e1sz + r\u00f6szti',
        items: ['sert\u00e9s kolb\u00e1sz', 'fagyasztott r\u00f6szti', 'olajspray, s\u00f3'],
        units: ['', '', ''],
        steps: ['Helyezd a kolb\u00e1szt a kos\u00e1rba. Forr\u00f3leveg\u0151 200\u00b0C, 10 perc, fel\u00e9n\u00e9l ford\u00edtsd meg.', 'A r\u00f6szti ugyanúgy, mint szerd\u00e1n.'],
        timerLabel: 'Forr\u00f3leveg\u0151'
      },
      'chili-over-rice': {
        name: 'Marad\u00e9k chili rizsen',
        items: ['feh\u00e9r rizs', 'v\u00edz', 'marad\u00e9k marhahús chili'],
        units: ['cs\u00e9sze', 'cs\u00e9sze', ''],
        steps: ['K\u00e9sz\u00edts rizst (mint h\u00e9tf\u0151n: 1 cs\u00e9sze rizs + 1 cs\u00e9sze v\u00edz, Nyom\u00e1sf\u0151z\u00e9s 4 perc, TG 10 perc).', 'Meleg\u00edtsd fel a chilit P\u00edr\u00edt\u00e1s m\u00f3dban vagy Melegen tart\u00e1sban.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s (Rizs)'
      },
      'baked-apples': {
        name: 'Forr\u00f3leveg\u0151s s\u00fclt alma',
        items: ['alma, kimagozva', 'zab', 'barna cukor', 'fah\u00e9j, k\u00f3kuszolaj'],
        units: ['', 'cs\u00e9sze', 'ek', ''],
        steps: ['Magozd ki a 3 alm\u00e1t.', 'T\u00f6ltsd meg zab + barna cukor + fah\u00e9j + k\u00f3kuszolaj kever\u00e9kkel.', 'Forr\u00f3leveg\u0151 175\u00b0C, 15 perc.'],
        timerLabel: 'Forr\u00f3leveg\u0151'
      },
      'big-oatmeal-bowl': {
        name: 'Nagy zabk\u00e1sa t\u00e1l',
        items: ['dar\u00e1lt zab', 'v\u00edz', 'ban\u00e1n, szeletelve', '\u00e1fonya', 'fah\u00e9j, zabital'],
        units: ['cs\u00e9sze', 'cs\u00e9sze', '', 'cs\u00e9sze', ''],
        steps: ['Dar\u00e1lt zab (ugyanaz: 1 cs\u00e9sze zab + 3 cs\u00e9sze v\u00edz, Nyom\u00e1sf\u0151z\u00e9s 10 perc, TG 10 perc).', 'Tedd r\u00e1 a szeletelt ban\u00e1nt + \u00e1fony\u00e1t + fah\u00e9jat + egy kev\u00e9s zabitalt.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'coconut-rice': {
        name: 'K\u00f3kuszos rizs',
        items: ['feh\u00e9r rizs', 'k\u00f3kusztej (teljes zs\u00edros)', 'v\u00edz (kieg\u00e9sz\u00edt\u00e9s 1.5 cs\u00e9sze folyad\u00e9kra)'],
        units: ['cs\u00e9sze', 'doboz', ''],
        steps: ['Adj 1 cs\u00e9sze rizst + 1 doboz k\u00f3kusztejet (eg\u00e9sz\u00edtsd ki v\u00edzzel 1.5 cs\u00e9sze folyad\u00e9kra).', 'Nyom\u00e1sf\u0151z\u00e9s 4 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 10 perc.', 'T\u00e1lald marad\u00e9k csirk\u00e9vel vagy feh\u00e9rj\u00e9vel.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'cinnamon-apples': {
        name: 'Forr\u00f3leveg\u0151s fah\u00e9jas alma',
        items: ['alma, szeletelve', 'barna cukor', 'fah\u00e9j, citroml\u00e9'],
        units: ['', 'ek', ''],
        steps: ['Szeleteld az alm\u00e1kat, keverd \u00f6ssze fah\u00e9jjal + barna cukorral + citroml\u00e9vel.', 'Forr\u00f3leveg\u0151 175\u00b0C, 10 perc.'],
        timerLabel: 'Forr\u00f3leveg\u0151'
      }
    }
  }
};

function t(key) { return i18n[lang].ui[key] || i18n.en.ui[key] || key; }
function tf(key, ...args) { let s = t(key); args.forEach((a, i) => { s = s.replace('{' + i + '}', a); }); return s; }
function td(key) { return i18n[lang].data[key] || i18n.en.data[key]; }

function tr(id) {
  if (lang !== 'en' && i18n[lang].recipes && i18n[lang].recipes[id]) {
    return i18n[lang].recipes[id];
  }
  const r = recipes.find(x => x.id === id);
  if (!r) return null;
  return {
    name: r.name,
    items: r.ingredients.map(i => i.item),
    units: r.ingredients.map(i => i.unit),
    steps: r.steps,
    timerLabel: r.timer.label
  };
}

function setLang(newLang) {
  lang = newLang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  document.title = t('title') + ' \u2014 ' + t('subtitle');
  document.getElementById('headerTitle').textContent = t('title');
  document.getElementById('headerSub').textContent = t('subtitle');
  document.getElementById('headerBadge').innerHTML = t('badge');
  document.getElementById('tabPlan').textContent = t('weekPlan');
  document.getElementById('tabRecipes').textContent = t('recipesTab');
  document.getElementById('tabGrocery').textContent = t('grocery');
  document.getElementById('tabRef').textContent = t('quickRef');
  document.getElementById('footerText').innerHTML = t('footer1') + '<br>' + t('footer2');
  document.querySelector('.lang-toggle').textContent = lang === 'en' ? 'HU' : 'EN';
  renderAll();
}

function toggleLang() {
  setLang(lang === 'en' ? 'hu' : 'en');
}
