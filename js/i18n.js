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
      mealTypes: ['Breakfast','Lunch','Dinner','Dessert'],
      mealTypeKeys: ['breakfast','lunch','dinner','dessert'],
      mealTypeMap: { breakfast:'Breakfast', lunch:'Lunch', dinner:'Dinner', dessert:'Dessert' },
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
      mealTypes: ['Reggeli','Eb\u00e9d','Vacsora','Desszert'],
      mealTypeKeys: ['breakfast','lunch','dinner','dessert'],
      mealTypeMap: { breakfast:'Reggeli', lunch:'Eb\u00e9d', dinner:'Vacsora', dessert:'Desszert' },
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
      // === BREAKFAST (1-10) ===
      'hard-boiled-eggs': {
        name: 'F\u0151tt toj\u00e1s + pir\u00edt\u00f3s',
        items: ['v\u00edz', 'toj\u00e1s'],
        units: ['cs\u00e9sze', ''],
        steps: ['Adj 1 cs\u00e9sze vizet \u00e9s helyezd a toj\u00e1sokat az \u00e1llv\u00e1nyra.', 'Nyom\u00e1sf\u0151z\u00e9s 5 perc, Gyors g\u0151zkiereszt\u00e9s.', 'Jeges v\u00edzbe 5 percre. T\u00e1lald pir\u00edt\u00f3ssal.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'steel-cut-oatmeal': {
        name: 'Zabk\u00e1sa',
        items: ['dar\u00e1lt zab', 'v\u00edz', 'csipet s\u00f3'],
        units: ['cs\u00e9sze', 'cs\u00e9sze', ''],
        steps: ['Adj 1 cs\u00e9sze zabot + 3 cs\u00e9sze vizet + csipet s\u00f3t.', 'Nyom\u00e1sf\u0151z\u00e9s 10 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 10 perc.', '\u00cdz\u00e9s szerint t\u00e1lald gy\u00fcm\u00f6lccsel vagy fah\u00e9jjal.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'hash-browns-eggs': {
        name: 'Forr\u00f3leveg\u0151s r\u00f6szti + toj\u00e1s',
        items: ['fagyasztott r\u00f6szti', 'toj\u00e1s', 'olajspray, s\u00f3'],
        units: ['', '', ''],
        steps: ['Helyezd a r\u00f6sztit a kos\u00e1rba olajspray-vel + s\u00f3val.', 'Forr\u00f3leveg\u0151 200\u00b0C, 12 perc, fel\u00e9n\u00e9l ford\u00edtsd meg.', 'A toj\u00e1st k\u00fcl\u00f6n s\u00fcsd meg.'],
        timerLabel: 'Forr\u00f3leveg\u0151'
      },
      'sausage-hash-browns': {
        name: 'Forr\u00f3leveg\u0151s kolb\u00e1sz + r\u00f6szti',
        items: ['sert\u00e9s kolb\u00e1sz', 'fagyasztott r\u00f6szti', 'olajspray, s\u00f3'],
        units: ['', '', ''],
        steps: ['Helyezd a kolb\u00e1szt a kos\u00e1rba. Forr\u00f3leveg\u0151 200\u00b0C, 10 perc, fel\u00e9n\u00e9l ford\u00edtsd meg.', 'A r\u00f6szti ugyanúgy, mint szerd\u00e1n.'],
        timerLabel: 'Forr\u00f3leveg\u0151'
      },
      'egg-bites': {
        name: 'Toj\u00e1s falatok',
        items: ['toj\u00e1s', 'zabital', 'kaliforniai paprika, kock\u00e1zva', '\u00fajhagyma, szeletelve', 's\u00f3, bors', 'v\u00edz'],
        units: ['', 'cs\u00e9sze', 'cs\u00e9sze', 'cs\u00e9sze', '', 'cs\u00e9sze'],
        steps: ['Keverd \u00f6ssze a 6 toj\u00e1st \u00e9s 0,25 cs\u00e9sze zabitalt.', 'Add hozz\u00e1 a kock\u00e1zott paprik\u00e1t, szeletelt \u00fajhagym\u00e1t, s\u00f3t \u00e9s borsot.', 'Adj 1 cs\u00e9sze vizet az ed\u00e9nybe, helyezd az \u00e1llv\u00e1nyra a form\u00e1kat.', 'Nyom\u00e1sf\u0151z\u00e9s 8 perc, Gyors g\u0151zkiereszt\u00e9s.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'banana-oat-pancakes': {
        name: 'Ban\u00e1nos zabpalacsinta',
        items: ['zabliszt', 'ban\u00e1n', 'toj\u00e1s', 's\u00fct\u0151por', 'fah\u00e9j'],
        units: ['cs\u00e9sze', '', '', 'tk', ''],
        steps: ['Turmixold \u00f6ssze az 1 cs\u00e9sze zabot, 2 ban\u00e1nt, 2 toj\u00e1st, 1 tk s\u00fct\u0151port \u00e9s fah\u00e9jat.', '\u00d6ntsd a t\u00e9szt\u00e1t a forr\u00f3leveg\u0151s kos\u00e1rba (b\u00e9lelve).', 'Forr\u00f3leveg\u0151 175\u00b0C, 10 perc, fel\u00e9n\u00e9l ford\u00edtsd meg.'],
        timerLabel: 'Forr\u00f3leveg\u0151'
      },
      'breakfast-burritos': {
        name: 'Reggeli burrit\u00f3',
        items: ['toj\u00e1s', 'liszt tortilla', 'feketebab', 'salsa', 's\u00f3, bors', 'olajspray'],
        units: ['', '', 'cs\u00e9sze', 'cs\u00e9sze', '', ''],
        steps: ['Keverd fel a 4 toj\u00e1st s\u00f3val \u00e9s borssal.', 'T\u00f6ltsd meg a tortill\u00e1kat a r\u00e1ntott\u00e1val, 0,5 cs\u00e9sze feketebabbal \u00e9s 0,5 cs\u00e9sze sals\u00e1val.', 'Tekerd fel \u00e9s permetezd meg olajspray-vel.', 'Forr\u00f3leveg\u0151 190\u00b0C, 8 perc, fel\u00e9n\u00e9l ford\u00edtsd meg.'],
        timerLabel: 'Forr\u00f3leveg\u0151'
      },
      'french-toast-sticks': {
        name: 'Bund\u00e1s keny\u00e9r rudacsk\u00e1k',
        items: ['keny\u00e9rszelet', 'toj\u00e1s', 'zabital', 'fah\u00e9j', 'j\u00e1harszir\u00f3p', 'olajspray'],
        units: ['szelet', '', 'cs\u00e9sze', 'tk', 'ek', ''],
        steps: ['V\u00e1gd cs\u00edkokra a 4 szelet kenyeret.', 'Keverd \u00f6ssze a 2 toj\u00e1st, 0,25 cs\u00e9sze zabitalt, 1 tk fah\u00e9jat \u00e9s 1 ek j\u00e1harszir\u00f3pot.', 'M\u00e1rtsd bele a keny\u00e9rcs\u00edkokat, permetezd meg olajspray-vel.', 'Forr\u00f3leveg\u0151 190\u00b0C, 8 perc, fel\u00e9n\u00e9l ford\u00edtsd meg.'],
        timerLabel: 'Forr\u00f3leveg\u0151'
      },
      'shakshuka': {
        name: 'Shakshuka',
        items: ['ol\u00edvaolaj', 'hagyma', 'fokhagyma', 'kock\u00e1zott paradicsom', 'k\u00f6m\u00e9ny', 'pirospaprika', 'toj\u00e1s', 's\u00f3, bors'],
        units: ['ek', '', 'gerezd', 'doboz', 'tk', 'tk', '', ''],
        steps: ['P\u00edr\u00edtsd meg a hagym\u00e1t \u00e9s fokhagym\u00e1t ol\u00edvaolajban (P\u00edr\u00edt\u00e1s m\u00f3d, 3 perc).', 'Add hozz\u00e1 a kock\u00e1zott paradicsomot, k\u00f6m\u00e9nyt, pirospaprik\u00e1t, s\u00f3t \u00e9s borsot.', '\u00dcsd bele a toj\u00e1sokat a szószba.', 'Nyom\u00e1sf\u0151z\u00e9s 5 perc, Gyors g\u0151zkiereszt\u00e9s.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'rice-porridge': {
        name: 'Rizsk\u00e1sa',
        items: ['feh\u00e9r rizs', 'v\u00edz', 'gyömbér', '\u00fajhagyma', 'sz\u00f3jasz\u00f3sz', 's\u00f3'],
        units: ['cs\u00e9sze', 'cs\u00e9sze', '', '', 'ek', ''],
        steps: ['Adj 1 cs\u00e9sze rizst + 5 cs\u00e9sze vizet + szeletelt gyömbért + s\u00f3t.', 'Nyom\u00e1sf\u0151z\u00e9s 20 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 10 perc.', 'T\u00e1lald szeletelt \u00fajhagym\u00e1val \u00e9s sz\u00f3jasz\u00f3sszal.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      // === LUNCH (11-20) ===
      'air-fryer-fries': {
        name: 'Forr\u00f3leveg\u0151s s\u00fclt krumpli',
        items: ['fagyasztott has\u00e1bburgonya (f\u00e9l csomag)'],
        units: [''],
        steps: ['Helyezd a fagyasztott krumplit a kos\u00e1rba.', 'Forr\u00f3leveg\u0151 200\u00b0C, 15 perc. Fel\u00e9n\u00e9l r\u00e1zd meg.'],
        timerLabel: 'Forr\u00f3leveg\u0151'
      },
      'chicken-noodle-soup': {
        name: 'Csirkeh\u00fasleves t\u00e9szt\u00e1val',
        items: ['csirkecomb', 'csirke alaplé', 's\u00e1rgar\u00e9pa', 'zeller', 'toj\u00e1sos t\u00e9szta', 'ol\u00edvaolaj', 's\u00f3, bors'],
        units: ['', 'cs\u00e9sze', '', '', '', 'ek', ''],
        steps: ['P\u00edr\u00edtsd meg a csirkecombot ol\u00edvaolajban (P\u00edr\u00edt\u00e1s m\u00f3d, 3 perc oldalanként).', 'Add hozz\u00e1 a csirke alaplevet, szeletelt s\u00e1rgar\u00e9p\u00e1t, zellert, s\u00f3t \u00e9s borsot.', 'Nyom\u00e1sf\u0151z\u00e9s 10 perc, Gyors g\u0151zkiereszt\u00e9s.', 'Vedd ki a csirk\u00e9t, t\u00e9pkedve tedd vissza, add hozz\u00e1 a t\u00e9szt\u00e1t \u00e9s f\u0151zd 3 percig P\u00edr\u00edt\u00e1s m\u00f3dban.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'lentil-soup': {
        name: 'Lencsefőzelék',
        items: ['lencse', 'hagyma', 's\u00e1rgar\u00e9pa', 'fokhagyma', 'z\u00f6lds\u00e9galaplé', 'kock\u00e1zott paradicsom', 'k\u00f6m\u00e9ny', 's\u00f3, bors'],
        units: ['cs\u00e9sze', '', '', 'gerezd', 'cs\u00e9sze', 'doboz', 'tk', ''],
        steps: ['P\u00edr\u00edtsd meg a kock\u00e1zott hagym\u00e1t, s\u00e1rgar\u00e9p\u00e1t \u00e9s fokhagym\u00e1t (P\u00edr\u00edt\u00e1s m\u00f3d, 3 perc).', 'Add hozz\u00e1 a lencset, z\u00f6lds\u00e9galaplevet, kock\u00e1zott paradicsomot \u00e9s k\u00f6m\u00e9nyt.', 'Nyom\u00e1sf\u0151z\u00e9s 15 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 10 perc.', '\u00cdzes\u00edtsd s\u00f3val \u00e9s borssal.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'black-bean-tacos': {
        name: 'Feketebab taco',
        items: ['feketebab', 'v\u00edz', 'k\u00f6m\u00e9ny', 'chilipor', 'kukorica tortilla', 'avok\u00e1d\u00f3', 'salsa', 's\u00f3'],
        units: ['cs\u00e9sze', 'cs\u00e9sze', 'tk', 'tk', '', '', '', ''],
        steps: ['Adj feketebebabot + vizet + k\u00f6m\u00e9nyt + chiliport + s\u00f3t az ed\u00e9nybe.', 'Nyom\u00e1sf\u0151z\u00e9s 25 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 10 perc.', 'T\u00f6rj \u00f6ssze n\u00e9h\u00e1ny szemet villával a krémes állagért.', 'T\u00e1lald kukorica tortill\u00e1n avok\u00e1d\u00f3val \u00e9s sals\u00e1val.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'egg-fried-rice': {
        name: 'Toj\u00e1sos s\u00fclt rizs',
        items: ['f\u0151tt rizs', 'toj\u00e1s', 'fagyasztott bors\u00f3 \u00e9s s\u00e1rgar\u00e9pa', 'sz\u00f3jasz\u00f3sz', 'sz\u00e9zamolaj', '\u00fajhagyma'],
        units: ['cs\u00e9sze', '', 'cs\u00e9sze', 'ek', 'tk', ''],
        steps: ['P\u00edr\u00edtsd meg a toj\u00e1sokat sz\u00e9zamolajban (P\u00edr\u00edt\u00e1s m\u00f3d, 2 perc).', 'Add hozz\u00e1 a f\u0151tt rizst \u00e9s a fagyasztott z\u00f6lds\u00e9geket.', '\u00d6ntsd r\u00e1 a sz\u00f3jasz\u00f3szt \u00e9s keverd \u00e1t 3 percig.', 'T\u00e1lald szeletelt \u00fajhagym\u00e1val.'],
        timerLabel: 'P\u00edr\u00edt\u00e1s'
      },
      'tomato-basil-soup': {
        name: 'Paradicsom-bazsalikom leves',
        items: ['ol\u00edvaolaj', 'hagyma', 'fokhagyma', 'kock\u00e1zott paradicsom', 'z\u00f6lds\u00e9galaplé', 'friss bazsalikom', 's\u00f3, bors'],
        units: ['ek', '', 'gerezd', 'doboz', 'cs\u00e9sze', '', ''],
        steps: ['P\u00edr\u00edtsd meg a hagym\u00e1t \u00e9s fokhagym\u00e1t ol\u00edvaolajban (P\u00edr\u00edt\u00e1s m\u00f3d, 3 perc).', 'Add hozz\u00e1 a 2 doboz kock\u00e1zott paradicsomot, z\u00f6lds\u00e9galaplevet, s\u00f3t \u00e9s borsot.', 'Nyom\u00e1sf\u0151z\u00e9s 10 perc, Gyors g\u0151zkiereszt\u00e9s.', 'Turmixold \u00f6ssze \u00e9s d\u00edsz\u00edtsd friss bazsalikommal.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'quinoa-veggie-bowl': {
        name: 'Quinoa z\u00f6lds\u00e9gt\u00e1l',
        items: ['quinoa', 'v\u00edz', 'csicseribors\u00f3', 'kokt\u00e9lparadicsom', 'uborka', 'ol\u00edvaolaj', 'citroml\u00e9', 's\u00f3, bors'],
        units: ['cs\u00e9sze', 'cs\u00e9sze', 'doboz', '', '', 'ek', 'ek', ''],
        steps: ['Adj quinoat \u00e9s vizet az ed\u00e9nybe.', 'Nyom\u00e1sf\u0151z\u00e9s 1 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 10 perc.', 'Laz\u00edtsd fel vill\u00e1val, keverd hozz\u00e1 a csicseribors\u00f3t, paradicsomot, ubork\u00e1t.', 'Locsold meg ol\u00edvaolajjal \u00e9s citroml\u00e9vel, \u00edzlés szerint s\u00f3zd \u00e9s borsozd.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'chicken-lettuce-wraps': {
        name: 'Csirk\u00e9s sal\u00e1talevelek',
        items: ['csirkecomb', 'csirke alaplé', 'sz\u00f3jasz\u00f3sz', 'sz\u00e9zamolaj', 'j\u00e9gsal\u00e1ta', 's\u00e1rgar\u00e9pa, reszelve', 's\u00f3, bors'],
        units: ['', 'cs\u00e9sze', 'ek', 'tk', '', '', ''],
        steps: ['Adj csirkecombot, csirke alaplevet, sz\u00f3jasz\u00f3szt, s\u00f3t \u00e9s borsot az ed\u00e9nybe.', 'Nyom\u00e1sf\u0151z\u00e9s 10 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 5 perc.', 'T\u00e9pkedve tedd a csirk\u00e9t sal\u00e1talevelekre.', 'D\u00edsz\u00edtsd reszelt s\u00e1rgar\u00e9p\u00e1val \u00e9s sz\u00e9zamolajjal.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'stuffed-sweet-potatoes': {
        name: 'T\u00f6lt\u00f6tt \u00e9desburgonya',
        items: ['\u00e9desburgonya', 'v\u00edz', 'feketebab', 'salsa', 'avok\u00e1d\u00f3', 's\u00f3, bors'],
        units: ['', 'cs\u00e9sze', 'doboz', '', '', ''],
        steps: ['Adj 1 cs\u00e9sze vizet az ed\u00e9nybe \u00e9s helyezd az \u00e9desburgony\u00e1kat az \u00e1llv\u00e1nyra.', 'Nyom\u00e1sf\u0151z\u00e9s 15 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 10 perc.', 'V\u00e1gd fel \u00e9s t\u00f6ltsd meg feketebabbal, sals\u00e1val \u00e9s avok\u00e1d\u00f3val.', '\u00cdzes\u00edtsd s\u00f3val \u00e9s borssal.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'minestrone-soup': {
        name: 'Minestrone leves',
        items: ['kock\u00e1zott paradicsom', 'vesebab', 'z\u00f6lds\u00e9galaplé', 'cukkini', 'kis t\u00e9szta', 'hagyma', 's\u00e1rgar\u00e9pa', 'ol\u00edvaolaj', 'olasz f\u0171szerkever\u00e9k', 's\u00f3, bors'],
        units: ['doboz', 'doboz', 'cs\u00e9sze', '', 'cs\u00e9sze', '', '', 'ek', 'tk', ''],
        steps: ['P\u00edr\u00edtsd meg a kock\u00e1zott hagym\u00e1t \u00e9s s\u00e1rgar\u00e9p\u00e1t ol\u00edvaolajban (P\u00edr\u00edt\u00e1s m\u00f3d, 3 perc).', 'Add hozz\u00e1 a paradicsomot, vesebebabot, alaplevet, cukkini kock\u00e1kat \u00e9s az olasz f\u0171szerkever\u00e9ket.', 'Nyom\u00e1sf\u0151z\u00e9s 5 perc, Gyors g\u0151zkiereszt\u00e9s.', 'Add hozz\u00e1 a kis t\u00e9szt\u00e1t \u00e9s f\u0151zd P\u00edr\u00edt\u00e1s m\u00f3dban 4 percig. S\u00f3zd, borsozd.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      // === DINNER (21-32) ===
      'rice-chicken': {
        name: 'Feh\u00e9r rizs + f\u0171szeres csirkecomb',
        items: ['feh\u00e9r rizs', 'v\u00edz (rizshez)', 'csirkecomb', 's\u00f3, bors, pirospaprika, fokhagymapor'],
        units: ['cs\u00e9sze', 'cs\u00e9sze', '', ''],
        steps: ['Rizs: 1 cs\u00e9sze rizs + 1 cs\u00e9sze v\u00edz. Nyom\u00e1sf\u0151z\u00e9s 4 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 10 perc.', 'Csirke: F\u0171szerezd s\u00f3val, borssal, pirospaprik\u00e1val, fokhagymaporral.', 'Nyom\u00e1sf\u0151z\u00e9s 10 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 5 perc.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s (Csirke)'
      },
      'one-pot-pasta': {
        name: 'Egyt\u00e1las t\u00e9szta',
        items: ['penne t\u00e9szta', 'paradicsomszósz (tejmentes)', 'v\u00edz', 's\u00f3'],
        units: ['font', '\u00fcveg', 'cs\u00e9sze', ''],
        steps: ['Adj 1 font penn\u00e9t + 1 \u00fcveg paradicsomszószt + 3 cs\u00e9sze vizet + s\u00f3t.', 'Keverd meg, hogy a t\u00e9szta elmer\u00fclj\u00f6n.', 'Nyom\u00e1sf\u0151z\u00e9s 5 perc, Gyors g\u0151zkiereszt\u00e9s. J\u00f3l keverd \u00e1t.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'crispy-chicken': {
        name: 'Ropog\u00f3s csirkecomb (Komb\u00f3!)',
        items: ['csirkecomb, f\u0171szerezve', 'v\u00edz'],
        units: ['', 'cs\u00e9sze'],
        steps: ['F\u0171szerezd meg a csirkecombot.', 'Nyom\u00e1sf\u0151z\u00e9s 10 perc, Gyors g\u0151zkiereszt\u00e9s.', 'Helyezd a forr\u00f3leveg\u0151s kos\u00e1rba.', 'Forr\u00f3leveg\u0151 200\u00b0C, 8 perc, am\u00edg a b\u0151re aranybarna.', 'T\u00e1lald marad\u00e9k rizzsel.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'veggie-potato-soup': {
        name: 'Z\u00f6lds\u00e9ges krumplileves',
        items: ['hagyma, kock\u00e1zva', 's\u00e1rgar\u00e9pa, kock\u00e1zva', 'zeller, kock\u00e1zva', 'ol\u00edvaolaj', 'krumpli, kock\u00e1zva', 'csirke alapl\u00e9', 's\u00f3, bors'],
        units: ['', '', 'sz\u00e1r', 'ek', '', 'cs\u00e9sze', ''],
        steps: ['P\u00edr\u00edtsd meg a hagym\u00e1t, s\u00e1rgar\u00e9p\u00e1t, zellert ol\u00edvaolajban (P\u00edr\u00edt\u00e1s m\u00f3d, 4 perc).', 'Add hozz\u00e1 a kock\u00e1zott krumplit + 4 cs\u00e9sze alapl\u00e9t + s\u00f3t + borsot.', 'Nyom\u00e1sf\u0151z\u00e9s 8 perc, Gyors g\u0151zkiereszt\u00e9s.', 'T\u00f6rj \u00f6ssze n\u00e9h\u00e1ny krumplit a s\u0171r\u00edt\u00e9shez.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'beef-chili': {
        name: 'Marhah\u00fas chili',
        items: ['dar\u00e1lt marha', 'hagyma, kock\u00e1zva', 'kock\u00e1zott paradicsom', 'vesebab, lecsepegtetva', 'paradicsompüré', 'chilipor, k\u00f6m\u00e9ny, fokhagymapor, s\u00f3'],
        units: ['font', '', 'doboz', 'doboz', 'kis doboz', ''],
        steps: ['P\u00edr\u00edtsd meg az 1 font dar\u00e1lt marh\u00e1t + kock\u00e1zott hagym\u00e1t (P\u00edr\u00edt\u00e1s m\u00f3d, 5 perc, t\u00f6rdelve).', 'Add hozz\u00e1 a 2 doboz kock\u00e1zott paradicsomot + 1 doboz babot + paradicsompürét.', 'F\u0171szerezd chiliporral, k\u00f6m\u00e9nnyel, fokhagymaval, s\u00f3val.', 'Nyom\u00e1sf\u0151z\u00e9s 20 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 10 perc.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'coconut-rice-chicken': {
        name: 'K\u00f3kuszos rizs + csirke',
        items: ['feh\u00e9r rizs', 'k\u00f3kusztej', 'csirkecomb', 's\u00f3, bors, fokhagymapor', 'v\u00edz'],
        units: ['cs\u00e9sze', 'doboz', '', '', 'cs\u00e9sze'],
        steps: ['Adj 1 cs\u00e9sze rizst + 1 doboz k\u00f3kusztejet + vizet az ed\u00e9nybe.', 'F\u0171szerezd a csirkecombot s\u00f3val, borssal \u00e9s fokhagymaporral, helyezd a rizsre.', 'Nyom\u00e1sf\u0151z\u00e9s 10 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 10 perc.', 'T\u00e9pkedve keverd \u00f6ssze a csirk\u00e9t a rizzsel.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'pulled-pork': {
        name: 'T\u00e9pett sert\u00e9s',
        items: ['sert\u00e9slapocka', 'csirke alaplé', 'barna cukor', 'pirospaprika', 'fokhagymapor', 'hagymapor', 's\u00f3, bors'],
        units: ['font', 'cs\u00e9sze', 'ek', 'ek', 'tk', 'tk', ''],
        steps: ['D\u00f6rzs\u00f6ld be a sert\u00e9slapock\u00e1t barna cukorral, pirospaprik\u00e1val, fokhagymaporral, hagymaorral, s\u00f3val \u00e9s borssal.', 'Adj csirke alaplevet az ed\u00e9nybe, helyezd r\u00e1 a h\u00fast.', 'Nyom\u00e1sf\u0151z\u00e9s 60 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 15 perc.', 'T\u00e9pkedve t\u00e1lald.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'air-fryer-salmon': {
        name: 'Forr\u00f3leveg\u0151s lazac + z\u00f6lds\u00e9gek',
        items: ['lazacfilé', 'brokkoli', 'ol\u00edvaolaj', 'sz\u00f3jasz\u00f3sz', 'fokhagymapor', 'citromcikk', 's\u00f3, bors'],
        units: ['', '', 'ek', 'ek', 'tk', '', ''],
        steps: ['Kend meg a lazacot ol\u00edvaolajjal, sz\u00f3jasz\u00f3sszal \u00e9s fokhagymaporral.', 'Helyezd a brokkolit \u00e9s a lazacot a kos\u00e1rba.', 'Forr\u00f3leveg\u0151 200\u00b0C, 10 perc.', 'T\u00e1lald citromcikkel, s\u00f3zd \u00e9s borsozd \u00edz\u00e9s szerint.'],
        timerLabel: 'Forr\u00f3leveg\u0151'
      },
      'beef-stew': {
        name: 'Marhap\u00f6rk\u00f6lt',
        items: ['marhahús, kock\u00e1zva', 'krumpli, kock\u00e1zva', 's\u00e1rgar\u00e9pa, szeletelve', 'hagyma', 'marha alaplé', 'paradicsompüré', 'ol\u00edvaolaj', 's\u00f3, bors, kakukkf\u0171'],
        units: ['font', '', '', '', 'cs\u00e9sze', 'ek', 'ek', ''],
        steps: ['P\u00edr\u00edtsd meg a kock\u00e1zott marh\u00e1t ol\u00edvaolajban (P\u00edr\u00edt\u00e1s m\u00f3d, 5 perc).', 'Add hozz\u00e1 a hagym\u00e1t, krumplit, s\u00e1rgar\u00e9p\u00e1t, marha alaplevet \u00e9s paradicsompürét.', 'F\u0171szerezd s\u00f3val, borssal \u00e9s kakukkf\u0171vel.', 'Nyom\u00e1sf\u0151z\u00e9s 35 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 10 perc.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'teriyaki-chicken-rice': {
        name: 'Teriyaki csirke rizzsel',
        items: ['csirkecomb', 'feh\u00e9r rizs', 'v\u00edz', 'sz\u00f3jasz\u00f3sz', 'j\u00e1harszir\u00f3p', 'fokhagymapor', 'gy\u00f6mb\u00e9rpor', 'kukoricakeményítő', '\u00fajhagyma'],
        units: ['', 'cs\u00e9sze', 'cs\u00e9sze', 'ek', 'ek', 'tk', 'tk', 'tk', ''],
        steps: ['Helyezd a rizst + vizet az ed\u00e9nybe, a csirkecombot a tetej\u00e9re.', 'Keverd \u00f6ssze a sz\u00f3jasz\u00f3szt, j\u00e1harszir\u00f3pot, fokhagymapor \u00e9s gy\u00f6mb\u00e9rport, \u00f6ntsd a csirk\u00e9re.', 'Nyom\u00e1sf\u0151z\u00e9s 10 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 5 perc.', 'Vedd ki a csirk\u00e9t, szeleteld, s\u0171r\u00edtsd be a sz\u00f3szt kukoricakeményítővel.', 'T\u00e1lald szeletelt \u00fajhagym\u00e1val.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'chicken-curry': {
        name: 'Csirke curry',
        items: ['csirkecomb, kock\u00e1zva', 'k\u00f3kusztej', 'hagyma', 'fokhagyma', 'currypor', 'kurkuma', 'kock\u00e1zott paradicsom', 'ol\u00edvaolaj', 's\u00f3'],
        units: ['', 'doboz', '', 'gerezd', 'ek', 'tk', 'doboz', 'ek', ''],
        steps: ['P\u00edr\u00edtsd meg a hagym\u00e1t \u00e9s fokhagym\u00e1t ol\u00edvaolajban (P\u00edr\u00edt\u00e1s m\u00f3d, 3 perc).', 'Add hozz\u00e1 a kock\u00e1zott csirk\u00e9t, curryport \u00e9s kurkum\u00e1t, keverd \u00e1t.', 'Add hozz\u00e1 a k\u00f3kusztejet, kock\u00e1zott paradicsomot \u00e9s s\u00f3t.', 'Nyom\u00e1sf\u0151z\u00e9s 10 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 5 perc.', 'T\u00e1lald rizzsel.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'pork-chops-potatoes': {
        name: 'Sert\u00e9sszelet krumplival',
        items: ['sert\u00e9sszelet', 'kis krumpli', 'csirke alaplé', 'ol\u00edvaolaj', 'fokhagymapor, pirospaprika, s\u00f3, bors'],
        units: ['', '', 'cs\u00e9sze', 'ek', ''],
        steps: ['F\u0171szerezd a sert\u00e9sszeleteket fokhagymaporral, pirospaprik\u00e1val, s\u00f3val \u00e9s borssal.', 'P\u00edr\u00edtsd meg ol\u00edvaolajban mindkét oldalukat (P\u00edr\u00edt\u00e1s m\u00f3d, 2 perc oldalanként).', 'Add hozz\u00e1 a kis krumplikat \u00e9s a csirke alaplevet.', 'Nyom\u00e1sf\u0151z\u00e9s 15 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 5 perc.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      // === DESSERT (33-42) ===
      'coconut-rice-pudding': {
        name: 'K\u00f3kuszos rizspuding',
        items: ['feh\u00e9r rizs', 'k\u00f3kusztej', 'v\u00edz', 'j\u00e1harszir\u00f3p', 'vanília kivonat', 'fah\u00e9j'],
        units: ['cs\u00e9sze', 'doboz', 'cs\u00e9sze', 'ek', 'tk', ''],
        steps: ['Adj rizst, k\u00f3kusztejet, vizet \u00e9s j\u00e1harszir\u00f3pot az ed\u00e9nybe.', 'Nyom\u00e1sf\u0151z\u00e9s 10 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 10 perc.', 'Keverd hozz\u00e1 a van\u00edlia kivonatot \u00e9s sz\u00f3rd meg fah\u00e9jjal.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'banana-bread': {
        name: 'Ban\u00e1nkeny\u00e9r',
        items: ['\u00e9rett ban\u00e1n', 'liszt', 'k\u00f3kuszolaj', 'j\u00e1harszir\u00f3p', 's\u00fct\u0151szóda', 'vanília kivonat', 's\u00f3'],
        units: ['', 'cs\u00e9sze', 'ek', 'ek', 'tk', 'tk', ''],
        steps: ['T\u00f6rd \u00f6ssze a ban\u00e1nokat, keverd \u00f6ssze a k\u00f3kuszolajjal, j\u00e1harszir\u00f3ppal \u00e9s van\u00edli\u00e1val.', 'Add hozz\u00e1 a lisztet, s\u00fct\u0151sz\u00f3d\u00e1t \u00e9s s\u00f3t, keverd \u00f6ssze.', '\u00d6ntsd s\u00fct\u0151form\u00e1ba.', 'Forr\u00f3leveg\u0151 160\u00b0C, 35 perc, vagy am\u00edg a fogpiszk\u00e1l\u00f3 tiszt\u00e1n j\u00f6n ki.'],
        timerLabel: 'Forr\u00f3leveg\u0151'
      },
      'brownies': {
        name: 'Tejmentes brownie',
        items: ['k\u00f3kuszolaj', 'cukor', 'toj\u00e1s', 'kaka\u00f3por', 'liszt', 'vanília kivonat', 's\u00f3', 'v\u00edz'],
        units: ['ek', 'cs\u00e9sze', '', 'cs\u00e9sze', 'cs\u00e9sze', 'tk', '', 'cs\u00e9sze'],
        steps: ['Olvaszd fel a k\u00f3kuszolajat, keverd \u00f6ssze a cukorral \u00e9s toj\u00e1ssal.', 'Add hozz\u00e1 a kaka\u00f3port, lisztet, van\u00edli\u00e1t \u00e9s s\u00f3t.', '\u00d6ntsd s\u00fct\u0151form\u00e1ba, adj 1 cs\u00e9sze vizet az ed\u00e9nybe, helyezd az \u00e1llv\u00e1nyra.', 'Nyom\u00e1sf\u0151z\u00e9s 25 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 10 perc.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'chocolate-lava-cake': {
        name: 'Csokol\u00e1d\u00e9 l\u00e1va torta',
        items: ['k\u00f3kuszolaj', 'tejmentes csokol\u00e1d\u00e9 chips', 'toj\u00e1s', 'cukor', 'liszt', 'v\u00edz'],
        units: ['ek', 'cs\u00e9sze', '', 'ek', 'ek', 'cs\u00e9sze'],
        steps: ['Olvaszd \u00f6ssze a k\u00f3kuszolajat \u00e9s csokol\u00e1d\u00e9 chipset.', 'Keverd hozz\u00e1 a toj\u00e1st, cukrot \u00e9s lisztet.', '\u00d6ntsd szilikon form\u00e1kba, adj 1 cs\u00e9sze vizet az ed\u00e9nybe, helyezd az \u00e1llv\u00e1nyra.', 'Nyom\u00e1sf\u0151z\u00e9s 8 perc, Gyors g\u0151zkiereszt\u00e9s. T\u00e1lald azonnal.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'air-fryer-donuts': {
        name: 'Forr\u00f3leveg\u0151s f\u00e1nk',
        items: ['liszt', 'cukor', 's\u00fct\u0151por', 'zabital', 'k\u00f3kuszolaj', 'toj\u00e1s', 'vanília kivonat', 'fah\u00e9jas cukor'],
        units: ['cs\u00e9sze', 'ek', 'tk', 'cs\u00e9sze', 'ek', '', 'tk', ''],
        steps: ['Keverd \u00f6ssze a lisztet, cukrot \u00e9s s\u00fct\u0151port.', 'Add hozz\u00e1 a zabitalt, olvasztott k\u00f3kuszolajat, toj\u00e1st \u00e9s van\u00edli\u00e1t.', 'Form\u00e1zd f\u00e1nk alak\u00fara, helyezd a kos\u00e1rba.', 'Forr\u00f3leveg\u0151 175\u00b0C, 8 perc, fel\u00e9n\u00e9l ford\u00edtsd meg.', 'Forgasd meg fah\u00e9jas cukorban.'],
        timerLabel: 'Forr\u00f3leveg\u0151'
      },
      'baked-pears': {
        name: 'S\u00fclt k\u00f6rte di\u00f3val',
        items: ['k\u00f6rte', 'di\u00f3', 'j\u00e1harszir\u00f3p', 'fah\u00e9j', 'k\u00f3kuszolaj'],
        units: ['', '', 'ek', '', 'tk'],
        steps: ['F\u00e9lbev\u00e1gd a k\u00f6rt\u00e9ket \u00e9s magozd ki.', 'T\u00f6ltsd meg darabolót di\u00f3val, locsold meg j\u00e1harszir\u00f3ppal, sz\u00f3rd meg fah\u00e9jjal.', 'Kend meg k\u00f3kuszolajjal.', 'Forr\u00f3leveg\u0151 175\u00b0C, 12 perc.'],
        timerLabel: 'Forr\u00f3leveg\u0151'
      },
      'mango-sticky-rice': {
        name: 'Mang\u00f3s ragacsos rizs',
        items: ['ragacsos rizs', 'v\u00edz', 'k\u00f3kusztej', 'cukor', 's\u00f3', 'mang\u00f3'],
        units: ['cs\u00e9sze', 'cs\u00e9sze', 'cs\u00e9sze', 'ek', '', ''],
        steps: ['\u00c1ztasd a ragacsos rizst 30 percig, csepegtesd le.', 'F\u0151zd meg a rizst v\u00edzzel: Nyom\u00e1sf\u0151z\u00e9s 12 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 10 perc.', 'Meleg\u00edtsd a k\u00f3kusztejet cukorral \u00e9s s\u00f3val, \u00f6ntsd a rizsre.', 'T\u00e1lald szeletelt mang\u00f3val.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'energy-oat-bites': {
        name: 'Energiagoly\u00f3k',
        items: ['zabliszt', 'mogyor\u00f3vaj', 'j\u00e1harszir\u00f3p', 'tejmentes csokol\u00e1d\u00e9 chips', 'k\u00f3kuszreszel\u00e9k'],
        units: ['cs\u00e9sze', 'cs\u00e9sze', 'ek', 'cs\u00e9sze', 'ek'],
        steps: ['Keverd \u00f6ssze az \u00f6sszes hozz\u00e1val\u00f3t egy t\u00e1lban.', 'Form\u00e1zz kis goly\u00f3kat a kever\u00e9kb\u0151l.', 'Helyezd a kos\u00e1rba, Forr\u00f3leveg\u0151 160\u00b0C, 5 perc, hogy kicsit megszil\u00e1rduljanak.', 'H\u0171tsd le t\u00e1lal\u00e1s el\u0151tt.'],
        timerLabel: 'Forr\u00f3leveg\u0151'
      },
      'poached-plums': {
        name: 'Fah\u00e9jas p\u00e1rolt szilva',
        items: ['szilva', 'v\u00edz', 'j\u00e1harszir\u00f3p', 'fah\u00e9jr\u00fad', 'vanília kivonat'],
        units: ['', 'cs\u00e9sze', 'ek', '', 'tk'],
        steps: ['F\u00e9lbev\u00e1gd \u00e9s magozd ki a szilv\u00e1kat.', 'Adj vizet, j\u00e1harszir\u00f3pot \u00e9s fah\u00e9jr\u00fadat az ed\u00e9nybe.', 'Nyom\u00e1sf\u0151z\u00e9s 3 perc, Gyors g\u0151zkiereszt\u00e9s.', 'Adj hozz\u00e1 van\u00edlia kivonatot, t\u00e1lald melegen.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'sweet-potato-pudding': {
        name: '\u00c9desburgonya puding',
        items: ['\u00e9desburgonya', 'k\u00f3kusztej', 'j\u00e1harszir\u00f3p', 'fah\u00e9j', 'szerecsendi\u00f3', 'vanília kivonat', 's\u00f3'],
        units: ['', 'cs\u00e9sze', 'ek', 'tk', 'csipet', 'tk', ''],
        steps: ['H\u00e1mozd meg \u00e9s kock\u00e1zd az \u00e9desburgony\u00e1kat.', 'Adj k\u00f3kusztejet, j\u00e1harszir\u00f3pot, fah\u00e9jat, szerecsendi\u00f3t \u00e9s s\u00f3t az ed\u00e9nybe.', 'Nyom\u00e1sf\u0151z\u00e9s 12 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 10 perc.', 'Turmixold krémes állagúra, adj hozz\u00e1 van\u00edlia kivonatot.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
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
