// ============ I18N ============
let lang = localStorage.getItem('lang') || 'en';


const i18n = {
  en: {
    ui: {
      title: 'Instant Pot Pro Crisp',
      subtitle: 'Week 1 Meal Plan',
      badge: '\ud83c\udf73 Beginner Friendly',
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
      footer2: 'Beginner Friendly',
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
        ['Hard boiled eggs','5 min','Natural 5 min (5-5-5)'],
        ['Chicken thighs','8-10 min','Natural 10 min'],
        ['Beef stew chunks','35 min','Natural 10 min'],
        ['Diced potatoes','5-8 min','Quick'],
        ['Pasta (penne)','4 min','Natural 5 min']
      ],
      airTable: [
        ['Frozen fries','400\u00b0F','15 min','Shake halfway'],
        ['Hash browns','400\u00b0F','15 min','Shake every 5 min'],
        ['Chicken skin','400\u00b0F','6 min','After pressure cook'],
        ['Sausage links','400\u00b0F','10 min','Turn halfway'],
        ['Salmon','400\u00b0F','8 min','Check at 7 min']
      ],
      tips: [
        ['Natural Release',' = just let it sit, pressure drops on its own.'],
        ['Quick Release',' = turn the valve to vent steam immediately.'],
        [null,'Always use at least <strong>1 cup liquid</strong> for pressure cooking.'],
        [null,'Most recipes are <strong>dairy-free</strong>. Dairy items are marked in the recipe.']
      ]
    }
  },
  hu: {
    ui: {
      title: 'Instant Pot Pro Crisp',
      subtitle: '1. heti \u00e9tkezési terv',
      badge: '\ud83c\udf73 Kezd\u0151knek',
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
      footer2: 'Kezd\u0151knek',
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
        ['F\u0151tt toj\u00e1s','5 perc','Term\u00e9szetes 5 perc (5-5-5)'],
        ['Csirkecomb','8-10 perc','Term\u00e9szetes 10 perc'],
        ['Marhap\u00f6rk\u00f6lt kocka','35 perc','Term\u00e9szetes 10 perc'],
        ['Kock\u00e1zott krumpli','5-8 perc','Gyors'],
        ['T\u00e9szta (penne)','4 perc','Term\u00e9szetes 5 perc']
      ],
      airTable: [
        ['Fagyasztott s\u00fcltkrumpli','200\u00b0C','15 perc','Fel\u00e9n\u00e9l r\u00e1zd meg'],
        ['R\u00f6szti','200\u00b0C','15 perc','5 percenk\u00e9nt r\u00e1zd meg'],
        ['Csirkeb\u0151r','200\u00b0C','6 perc','Nyom\u00e1sf\u0151z\u00e9s ut\u00e1n'],
        ['Kolb\u00e1sz','200\u00b0C','10 perc','Fel\u00e9n\u00e9l ford\u00edtsd meg'],
        ['Lazac','200\u00b0C','8 perc','7 percn\u00e9l ellen\u0151rizd']
      ],
      tips: [
        ['Term\u00e9szetes g\u0151zkiereszt\u00e9s',' = csak hagyd \u00e1llni, a nyom\u00e1s mag\u00e1t\u00f3l cs\u00f6kken.'],
        ['Gyors g\u0151zkiereszt\u00e9s',' = ford\u00edtsd el a szelepet a g\u0151z azonnali kiereszt\u00e9s\u00e9hez.'],
        [null,'Mindig haszn\u00e1lj legal\u00e1bb <strong>2.5 dl folyadékot</strong> nyom\u00e1sf\u0151z\u00e9shez.'],
        [null,'A legt\u00f6bb recept <strong>tejmentes</strong>. A tejtermékek jelölve vannak.']
      ]
    },
    recipes: {
      // === BREAKFAST (1-10) ===
      'hard-boiled-eggs': {
        name: 'F\u0151tt toj\u00e1s + pir\u00edt\u00f3s',
        items: ['v\u00edz', 'toj\u00e1s'],
        units: ['dl', ''],
        amounts: [2.5, null],
        steps: ['Adj 2.5 dl vizet \u00e9s helyezd a toj\u00e1sokat az \u00e1llv\u00e1nyra.', 'Nyom\u00e1sf\u0151z\u00e9s 5 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 5 perc.', 'Jeges v\u00edzbe 5 percre. T\u00e1lald pir\u00edt\u00f3ssal.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'steel-cut-oatmeal': {
        name: 'Zabk\u00e1sa',
        items: ['acél vágott zab', 'víz', 'csipet só', 'banán, áfonya, fahéj, barna cukor feltéthez'],
        units: ['dl', 'dl', '', ''],
        amounts: [2.5, 7, null, null],
        steps: ['Adj 2.5 dl zabot + 7 dl vizet + csipet s\u00f3t.', 'Nyom\u00e1sf\u0151z\u00e9s 10 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 10 perc.', '\u00cdz\u00e9s szerint t\u00e1lald gy\u00fcm\u00f6lccsel vagy fah\u00e9jjal.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'hash-browns-eggs': {
        name: 'Forr\u00f3leveg\u0151s r\u00f6szti + toj\u00e1s',
        items: ['fagyasztott r\u00f6szti', 'toj\u00e1s', 'olajspray, s\u00f3'],
        units: ['', '', ''],
        steps: ['Helyezd a r\u00f6sztit a kos\u00e1rba olajspray-vel + s\u00f3val.', 'Forr\u00f3leveg\u0151 200\u00b0C, 15 perc, r\u00e1zd meg 5 percenk\u00e9nt.', 'A toj\u00e1st k\u00fcl\u00f6n s\u00fcsd meg.'],
        timerLabel: 'Forr\u00f3leveg\u0151'
      },
      'sausage-hash-browns': {
        name: 'Forr\u00f3leveg\u0151s kolb\u00e1sz + r\u00f6szti',
        items: ['sert\u00e9s kolb\u00e1sz', 'fagyasztott r\u00f6szti', 'olajspray, s\u00f3'],
        units: ['', '', ''],
        steps: ['Helyezd a kolb\u00e1szt a kos\u00e1rba. Forr\u00f3leveg\u0151 200\u00b0C, 10 perc, fel\u00e9n\u00e9l ford\u00edtsd meg.', 'A r\u00f6szti olajspray-vel \u00e9s s\u00f3val, Forr\u00f3leveg\u0151 200\u00b0C, 12 perc.'],
        timerLabel: 'Forr\u00f3leveg\u0151'
      },
      'egg-bites': {
        name: 'Toj\u00e1s falatok',
        items: ['toj\u00e1s', 'zabtej', 'kaliforniai paprika, kock\u00e1zva', '\u00fajhagyma, szeletelve', 's\u00f3, bors', 'v\u00edz'],
        units: ['', 'dl', 'dl', 'dl', '', 'dl'],
        amounts: [null, 0.6, 1.2, 0.6, null, 2.5],
        steps: ['Keverd \u00f6ssze a 6 toj\u00e1st \u00e9s 0,60 dl zabitalt.', 'Add hozz\u00e1 a kock\u00e1zott paprik\u00e1t, szeletelt \u00fajhagym\u00e1t, s\u00f3t \u00e9s borsot.', 'Adj 2.5 dl vizet az ed\u00e9nybe, helyezd az \u00e1llv\u00e1nyra a form\u00e1kat.', 'Nyom\u00e1sf\u0151z\u00e9s 8 perc, Gyors g\u0151zkiereszt\u00e9s.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'cinnamon-apple-chips': {
        name: 'Fahéjas almachips',
        items: ['alma, vékonyra szeletelve (1-2mm)', 'fahéj', 'cukor (opcionális)', 'olajspray'],
        units: ['', 'tk', 'ek', ''],
        steps: ['Szeleteld vékonyra az almákat mandolinnal vagy éles késsel. Távolítsd el a magokat.', 'Forgasd meg a szeleteket fahéjjal és cukorral.', 'Permetezd meg a kosarat olajspray-vel. Rendezd a szeleteket egy rétegben.', 'Forrólevegő 150°C, 15 perc. Ellenőrizd 12 percnél — a chipeknek száraznak és feltekeredettnek kell lenniük.', 'Hagyd teljesen kihűlni a ropogósságért. Tálald joghurttal vagy zabkásával.'],
        timerLabel: 'Forrólevegő'
      },
      'breakfast-burritos': {
        name: 'Reggeli burrit\u00f3',
        items: ['toj\u00e1s', 'liszt tortilla', 'feketebab', 'salsa', 's\u00f3, bors', 'olajspray'],
        units: ['', '', 'dl', 'dl', '', ''],
        amounts: [null, null, 1.2, 1.2, null, null],
        steps: ['Keverd fel a 4 toj\u00e1st s\u00f3val \u00e9s borssal.', 'T\u00f6ltsd meg a tortill\u00e1kat a r\u00e1ntott\u00e1val, 0,12 dl feketebabbal \u00e9s 0,12 dl sals\u00e1val.', 'Tekerd fel \u00e9s permetezd meg olajspray-vel.', 'Helyezd a varrat oldal\u00e1val lefel\u00e9 a kos\u00e1rba.', 'Forr\u00f3leveg\u0151 200\u00b0C, 8 perc \u2014 fel\u00e9n\u00e9l ford\u00edtsd meg.'],
        timerLabel: 'Forr\u00f3leveg\u0151'
      },
      'french-toast-sticks': {
        name: 'Bund\u00e1s keny\u00e9r rudacsk\u00e1k',
        items: ['keny\u00e9rszelet', 'toj\u00e1s', 'zabital', 'fah\u00e9j', 'j\u00e1harszir\u00f3p', 'olajspray'],
        units: ['szelet', '', 'dl', 'tk', 'ek', ''],
        amounts: [null, null, 0.6, null, null, null],
        steps: ['V\u00e1gd cs\u00edkokra a 4 szelet kenyeret.', 'Keverd \u00f6ssze a 2 toj\u00e1st, 0,60 dl zabitalt, 1 tk fah\u00e9jat \u00e9s 1 ek j\u00e1harszir\u00f3pot.', 'M\u00e1rtsd bele a keny\u00e9rcs\u00edkokat, permetezd meg olajspray-vel.', 'Forr\u00f3leveg\u0151 190\u00b0C, 8 perc, fel\u00e9n\u00e9l ford\u00edtsd meg.'],
        timerLabel: 'Forr\u00f3leveg\u0151'
      },
      'shakshuka': {
        name: 'Shakshuka',
        items: ['ol\u00edvaolaj', 'hagyma', 'fokhagyma', 'kock\u00e1zott paradicsom', 'k\u00f6m\u00e9ny', 'pirospaprika', 'toj\u00e1s', 's\u00f3, bors'],
        units: ['ek', '', 'gerezd', 'doboz', 'tk', 'tk', '', ''],
        steps: ['P\u00edr\u00edtsd meg a hagym\u00e1t ol\u00edvaolajban 3 percig. Add hozz\u00e1 a fokhagym\u00e1t, k\u00f6m\u00e9nyt \u00e9s pirospaprik\u00e1t, keverd 1 percig.', 'Add hozz\u00e1 a kock\u00e1zott paradicsomot, s\u00f3t \u00e9s borsot.', 'Nyom\u00e1sf\u0151z\u00e9s 5 perc, Gyors g\u0151zkiereszt\u00e9s.', '\u00dcsd bele a 4 toj\u00e1st a szószba.', 'Nyom\u00e1sf\u0151z\u00e9s 0 perc (a toj\u00e1s a nyom\u00e1sn\u00f6vel\u00e9s alatt f\u0151 meg), Gyors g\u0151zkiereszt\u00e9s.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'rice-porridge': {
        name: 'Rizsk\u00e1sa',
        items: ['feh\u00e9r rizs', 'v\u00edz', 'gyömbér', '\u00fajhagyma', 'sz\u00f3jasz\u00f3sz', 's\u00f3'],
        units: ['dl', 'dl', '', '', 'ek', ''],
        amounts: [1.2, 12, null, null, null, null],
        steps: ['Adj 0,12 dl rizst + 12 dl vizet + szeletelt gy\u00f6mb\u00e9rt + s\u00f3t.', 'Nyom\u00e1sf\u0151z\u00e9s 30 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 15 perc.', 'T\u00e1lald szeletelt \u00fajhagym\u00e1val \u00e9s sz\u00f3jasz\u00f3sszal.'],
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
        units: ['', 'dl', '', '', '', 'ek', ''],
        amounts: [null, 10, null, null, null, null, null],
        steps: ['Add a csirkecombot, csirke alaplevet, s\u00e1rgar\u00e9p\u00e1t, zellert, ol\u00edvaolajat, s\u00f3t \u00e9s borsot az ed\u00e9nybe.', 'Nyom\u00e1sf\u0151z\u00e9s 10 perc, Gyors g\u0151zkiereszt\u00e9s.', 'Vedd ki a csirk\u00e9t, t\u00e9pkedve tedd vissza, add hozz\u00e1 a t\u00e9szt\u00e1t \u00e9s f\u0151zd 3 percig P\u00edr\u00edt\u00e1s m\u00f3dban.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'lentil-soup': {
        name: 'Lencseleves',
        items: ['lencse', 'hagyma', 's\u00e1rgar\u00e9pa', 'fokhagyma', 'z\u00f6lds\u00e9galaplé', 'kock\u00e1zott paradicsom', 'k\u00f6m\u00e9ny', 's\u00f3, bors'],
        units: ['dl', '', '', 'gerezd', 'dl', 'doboz', 'tk', ''],
        amounts: [2.5, null, null, null, 10, null, null, null],
        steps: ['P\u00edr\u00edtsd meg a kock\u00e1zott hagym\u00e1t, s\u00e1rgar\u00e9p\u00e1t \u00e9s fokhagym\u00e1t (P\u00edr\u00edt\u00e1s m\u00f3d, 3 perc).', 'Add hozz\u00e1 a lencset, z\u00f6lds\u00e9galaplevet, kock\u00e1zott paradicsomot \u00e9s k\u00f6m\u00e9nyt.', 'Nyom\u00e1sf\u0151z\u00e9s 15 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 10 perc.', '\u00cdzes\u00edtsd s\u00f3val \u00e9s borssal.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'black-bean-tacos': {
        name: 'Feketebab taco',
        items: ['feketebab', 'v\u00edz', 'k\u00f6m\u00e9ny', 'chilipor', 'kukorica tortilla', 'avok\u00e1d\u00f3', 'salsa', 's\u00f3'],
        units: ['dl', 'dl', 'tk', 'tk', '', '', '', ''],
        amounts: [2.5, 7, null, null, null, null, null, null],
        steps: ['Adj feketebebabot + 7 dl vizet + k\u00f6m\u00e9nyt + chiliport az ed\u00e9nybe. S\u00f3t M\u00c9G NE adj hozz\u00e1.', 'Nyom\u00e1sf\u0151z\u00e9s 30 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 20 perc. F\u0151z\u00e9s ut\u00e1n s\u00f3zd meg.', 'T\u00f6rj \u00f6ssze n\u00e9h\u00e1ny szemet vill\u00e1val a kr\u00e9mes \u00e1llag\u00e9rt.', 'T\u00e1lald kukorica tortill\u00e1n avok\u00e1d\u00f3val \u00e9s sals\u00e1val.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'egg-fried-rice': {
        name: 'Toj\u00e1sos s\u00fclt rizs',
        items: ['f\u0151tt rizs', 'toj\u00e1s', 'fagyasztott bors\u00f3 \u00e9s s\u00e1rgar\u00e9pa', 'sz\u00f3jasz\u00f3sz', 'sz\u00e9zamolaj', '\u00fajhagyma'],
        units: ['dl', '', 'dl', 'ek', 'tk', ''],
        amounts: [5, null, 2.5, null, null, null],
        steps: ['P\u00edr\u00edtsd meg a toj\u00e1sokat sz\u00e9zamolajban (P\u00edr\u00edt\u00e1s m\u00f3d, 2 perc).', 'Add hozz\u00e1 a f\u0151tt rizst \u00e9s a fagyasztott z\u00f6lds\u00e9geket.', '\u00d6ntsd r\u00e1 a sz\u00f3jasz\u00f3szt \u00e9s keverd \u00e1t 3 percig.', 'T\u00e1lald szeletelt \u00fajhagym\u00e1val.'],
        timerLabel: 'P\u00edr\u00edt\u00e1s'
      },
      'tomato-basil-soup': {
        name: 'Paradicsom-bazsalikom leves',
        items: ['ol\u00edvaolaj', 'hagyma', 'fokhagyma', 'kock\u00e1zott paradicsom', 'z\u00f6lds\u00e9galaplé', 'friss bazsalikom', 's\u00f3, bors'],
        units: ['ek', '', 'gerezd', 'doboz', 'dl', '', ''],
        amounts: [null, null, null, null, 2.5, null, null],
        steps: ['P\u00edr\u00edtsd meg a hagym\u00e1t \u00e9s fokhagym\u00e1t ol\u00edvaolajban (P\u00edr\u00edt\u00e1s m\u00f3d, 3 perc).', 'Add hozz\u00e1 a 2 doboz kock\u00e1zott paradicsomot, z\u00f6lds\u00e9galaplevet, s\u00f3t \u00e9s borsot.', 'Nyom\u00e1sf\u0151z\u00e9s 10 perc, Gyors g\u0151zkiereszt\u00e9s.', 'Turmixold \u00f6ssze \u00e9s d\u00edsz\u00edtsd friss bazsalikommal.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'quinoa-veggie-bowl': {
        name: 'Quinoa z\u00f6lds\u00e9gt\u00e1l',
        items: ['quinoa', 'v\u00edz', 'csicseribors\u00f3', 'kokt\u00e9lparadicsom', 'uborka', 'ol\u00edvaolaj', 'citroml\u00e9', 's\u00f3, bors'],
        units: ['dl', 'dl', 'doboz', '', '', 'ek', 'ek', ''],
        amounts: [2.5, 3, null, null, null, null, null, null],
        steps: ['Adj quinoat \u00e9s vizet az ed\u00e9nybe.', 'Nyom\u00e1sf\u0151z\u00e9s 1 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 10 perc.', 'Laz\u00edtsd fel vill\u00e1val, keverd hozz\u00e1 a csicseribors\u00f3t, paradicsomot, ubork\u00e1t.', 'Locsold meg ol\u00edvaolajjal \u00e9s citroml\u00e9vel, \u00edzlés szerint s\u00f3zd \u00e9s borsozd.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'chicken-lettuce-wraps': {
        name: 'Csirk\u00e9s sal\u00e1talevelek',
        items: ['csirkecomb', 'csirke alaplé', 'sz\u00f3jasz\u00f3sz', 'sz\u00e9zamolaj', 'j\u00e9gsal\u00e1ta', 's\u00e1rgar\u00e9pa, reszelve', 's\u00f3, bors'],
        units: ['', 'dl', 'ek', 'tk', '', '', ''],
        amounts: [null, 1.2, null, null, null, null, null],
        steps: ['Adj csirkecombot, csirke alaplevet, sz\u00f3jasz\u00f3szt, s\u00f3t \u00e9s borsot az ed\u00e9nybe.', 'Nyom\u00e1sf\u0151z\u00e9s 10 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 5 perc.', 'T\u00e9pkedve tedd a csirk\u00e9t sal\u00e1talevelekre.', 'D\u00edsz\u00edtsd reszelt s\u00e1rgar\u00e9p\u00e1val \u00e9s sz\u00e9zamolajjal.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'stuffed-sweet-potatoes': {
        name: 'T\u00f6lt\u00f6tt \u00e9desburgonya',
        items: ['\u00e9desburgonya', 'v\u00edz', 'feketebab', 'salsa', 'avok\u00e1d\u00f3', 's\u00f3, bors'],
        units: ['', 'dl', 'doboz', '', '', ''],
        amounts: [null, 2.5, null, null, null, null],
        steps: ['Sz\u00fark\u00e1ld meg az \u00e9desburgony\u00e1kat vill\u00e1val. Adj 2.5 dl vizet az ed\u00e9nybe \u00e9s helyezd az \u00e1llv\u00e1nyra.', 'Nyom\u00e1sf\u0151z\u00e9s 15 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 10 perc.', 'V\u00e1gd fel, helyezd a forr\u00f3leveg\u0151s kos\u00e1rba, Forr\u00f3leveg\u0151 200\u00b0C, 5 perc.', 'T\u00f6ltsd meg feketebabbal, sals\u00e1val \u00e9s avok\u00e1d\u00f3val.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'minestrone-soup': {
        name: 'Minestrone leves',
        items: ['kock\u00e1zott paradicsom', 'vesebab', 'z\u00f6lds\u00e9galaplé', 'cukkini', 'kis t\u00e9szta', 'hagyma', 's\u00e1rgar\u00e9pa', 'ol\u00edvaolaj', 'olasz f\u0171szerkever\u00e9k', 's\u00f3, bors'],
        units: ['doboz', 'doboz', 'dl', '', 'dl', '', '', 'ek', 'tk', ''],
        amounts: [null, null, 10, null, 2.5, null, null, null, null, null],
        steps: ['P\u00edr\u00edtsd meg a kock\u00e1zott hagym\u00e1t \u00e9s s\u00e1rgar\u00e9p\u00e1t ol\u00edvaolajban (P\u00edr\u00edt\u00e1s m\u00f3d, 3 perc).', 'Add hozz\u00e1 a paradicsomot, vesebebabot, alaplevet, cukkini kock\u00e1kat \u00e9s az olasz f\u0171szerkever\u00e9ket.', 'Nyom\u00e1sf\u0151z\u00e9s 5 perc, Gyors g\u0151zkiereszt\u00e9s.', 'Add hozz\u00e1 a kis t\u00e9szt\u00e1t \u00e9s f\u0151zd P\u00edr\u00edt\u00e1s m\u00f3dban 4 percig. S\u00f3zd, borsozd.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      // === DINNER (21-32) ===
      'rice-chicken': {
        name: 'Feh\u00e9r rizs + f\u0171szeres csirkecomb',
        items: ['feh\u00e9r rizs', 'v\u00edz (rizshez)', 'csirkecomb', 's\u00f3, bors, pirospaprika, fokhagymapor'],
        units: ['dl', 'dl', '', ''],
        amounts: [2.5, 2.5, null, null],
        steps: ['Adj 2.5 dl rizst + 2.5 dl vizet az ed\u00e9nybe.', 'F\u0171szerezd a csirkecombot s\u00f3val, borssal, pirospaprik\u00e1val, fokhagymaporral. Helyezd a rizsre.', 'Nyom\u00e1sf\u0151z\u00e9s 8 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 10 perc.', 'Vedd ki a csirk\u00e9t, laz\u00edtsd fel a rizst vill\u00e1val, t\u00e1lald egy\u00fctt.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'one-pot-pasta': {
        name: 'Egyt\u00e1las t\u00e9szta',
        items: ['penne t\u00e9szta', 'paradicsomszósz (tejmentes)', 'v\u00edz', 's\u00f3'],
        units: ['g', '\u00fcveg', 'dl', ''],
        amounts: [450, null, 7, null],
        steps: ['El\u0151sz\u00f6r vizet \u00e9s s\u00f3t adj az ed\u00e9nybe, majd a t\u00e9szt\u00e1t. A sz\u00f3szt a TETEJ\u00c9RE \u00f6ntsd \u2014 NE keverd \u00f6ssze.', 'Nyom\u00e1sf\u0151z\u00e9s 4 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 5 perc.', 'J\u00f3l keverd \u00e1t. Ha h\u00edg, P\u00edr\u00edt\u00e1s m\u00f3dban 2 percig s\u0171r\u00edtsd.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'crispy-chicken': {
        name: 'Ropog\u00f3s csirkecomb (Komb\u00f3!)',
        items: ['csirkecomb, f\u0171szerezve', 'v\u00edz'],
        units: ['', 'dl'],
        amounts: [null, 2.5],
        steps: ['F\u0171szerezd meg a csirkecombot.', 'Nyom\u00e1sf\u0151z\u00e9s 10 perc, Gyors g\u0151zkiereszt\u00e9s.', 'Helyezd a forr\u00f3leveg\u0151s kos\u00e1rba.', 'Forr\u00f3leveg\u0151 200\u00b0C, 6 perc, am\u00edg a b\u0151re aranybarna.', 'T\u00e1lald marad\u00e9k rizzsel.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'veggie-potato-soup': {
        name: 'Z\u00f6lds\u00e9ges krumplileves',
        items: ['hagyma, kock\u00e1zva', 's\u00e1rgar\u00e9pa, kock\u00e1zva', 'zeller, kock\u00e1zva', 'ol\u00edvaolaj', 'krumpli, kock\u00e1zva', 'csirke alapl\u00e9', 's\u00f3, bors'],
        units: ['', '', 'sz\u00e1r', 'ek', '', 'dl', ''],
        amounts: [null, null, null, null, null, 10, null],
        steps: ['P\u00edr\u00edtsd meg a hagym\u00e1t, s\u00e1rgar\u00e9p\u00e1t, zellert ol\u00edvaolajban (P\u00edr\u00edt\u00e1s m\u00f3d, 4 perc).', 'Add hozz\u00e1 a kock\u00e1zott krumplit + 10 dl alapl\u00e9t + s\u00f3t + borsot.', 'Nyom\u00e1sf\u0151z\u00e9s 8 perc, Gyors g\u0151zkiereszt\u00e9s.', 'T\u00f6rj \u00f6ssze n\u00e9h\u00e1ny krumplit a s\u0171r\u00edt\u00e9shez.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'beef-chili': {
        name: 'Marhah\u00fas chili',
        items: ['dar\u00e1lt marha', 'hagyma, kock\u00e1zva', 'kock\u00e1zott paradicsom', 'vesebab, lecsepegtetett', 'paradicsompüré', 'chilipor, k\u00f6m\u00e9ny, fokhagymapor, s\u00f3'],
        units: ['g', '', 'doboz', 'doboz', 'kis doboz', ''],
        amounts: [450, null, null, null, null, null],
        steps: ['Pírítsd meg a 450 g darált marhát + kockázott hagymát (Pírítás mód, 5 perc, tördelve).', 'Add hozz\u00e1 a 2 doboz kock\u00e1zott paradicsomot + 1 doboz babot + paradicsompürét.', 'F\u0171szerezd chiliporral, k\u00f6m\u00e9nnyel, fokhagymaval, s\u00f3val.', 'Nyom\u00e1sf\u0151z\u00e9s 20 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 10 perc.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'coconut-rice-chicken': {
        name: 'K\u00f3kuszos rizs + csirke',
        items: ['feh\u00e9r rizs', 'k\u00f3kusztej', 'csirkecomb', 's\u00f3, bors, fokhagymapor', 'v\u00edz'],
        units: ['dl', 'doboz', '', '', 'dl'],
        amounts: [2.5, null, null, null, 0],
        steps: ['Adj 2.5 dl rizst + 1 doboz k\u00f3kusztejet + vizet az ed\u00e9nybe.', 'F\u0171szerezd a csirkecombot s\u00f3val, borssal \u00e9s fokhagymaporral, helyezd a rizsre.', 'Nyom\u00e1sf\u0151z\u00e9s 10 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 10 perc.', 'T\u00e9pkedve keverd \u00f6ssze a csirk\u00e9t a rizzsel.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'pulled-pork': {
        name: 'T\u00e9pett sert\u00e9s',
        items: ['sert\u00e9slapocka', 'csirke alaplé', 'barna cukor', 'pirospaprika', 'fokhagymapor', 'hagymapor', 's\u00f3, bors'],
        units: ['g', 'dl', 'ek', 'ek', 'tk', 'tk', ''],
        amounts: [900, 2.5, null, null, null, null, null],
        steps: ['V\u00e1gd a sert\u00e9slapock\u00e1t 3\u20134 egyforma darabra.', 'D\u00f6rzs\u00f6ld be barna cukorral, pirospaprik\u00e1val, fokhagymaporral, hagymaporral, s\u00f3val \u00e9s borssal.', 'Adj csirke alaplevet az ed\u00e9nybe, helyezd r\u00e1 a h\u00fast.', 'Nyom\u00e1sf\u0151z\u00e9s 45 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 15 perc.', 'T\u00e9pkedve t\u00e1lald.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'air-fryer-salmon': {
        name: 'Forr\u00f3leveg\u0151s lazac + z\u00f6lds\u00e9gek',
        items: ['lazacfilé', 'brokkoli', 'ol\u00edvaolaj', 'sz\u00f3jasz\u00f3sz', 'fokhagymapor', 'citromcikk', 's\u00f3, bors'],
        units: ['', '', 'ek', 'ek', 'tk', '', ''],
        steps: ['Kend meg a lazacot ol\u00edvaolajjal, sz\u00f3jasz\u00f3sszal \u00e9s fokhagymaporral.', 'Helyezd a brokkolit \u00e9s a lazacot a kos\u00e1rba.', 'Forr\u00f3leveg\u0151 200\u00b0C, 8 perc. Ellen\u0151rizd 7 percn\u00e9l \u2014 k\u00e9sz, ha el\u00e9ri a 63\u00b0C-ot.', 'T\u00e1lald citromcikkel, s\u00f3zd \u00e9s borsozd \u00edz\u00e9s szerint.'],
        timerLabel: 'Forr\u00f3leveg\u0151'
      },
      'beef-stew': {
        name: 'Marhap\u00f6rk\u00f6lt',
        items: ['marhahús, kock\u00e1zva', 'krumpli, kock\u00e1zva', 's\u00e1rgar\u00e9pa, szeletelve', 'hagyma', 'marha alaplé', 'paradicsompüré', 'ol\u00edvaolaj', 's\u00f3, bors, kakukkf\u0171'],
        units: ['g', '', '', '', 'dl', 'ek', 'ek', ''],
        amounts: [450, null, null, null, 5, null, null, null],
        steps: ['P\u00edr\u00edtsd meg a kock\u00e1zott marh\u00e1t ol\u00edvaolajban adagonk\u00e9nt (P\u00edr\u00edt\u00e1s m\u00f3d, 5\u20136 perc adagonk\u00e9nt).', 'Add hozz\u00e1 a hagym\u00e1t, krumplit, s\u00e1rgar\u00e9p\u00e1t, marha alaplevet \u00e9s paradicsompürét.', 'F\u0171szerezd s\u00f3val, borssal \u00e9s kakukkf\u0171vel.', 'Nyom\u00e1sf\u0151z\u00e9s 35 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 10 perc.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'teriyaki-chicken-rice': {
        name: 'Teriyaki csirke rizzsel',
        items: ['csirkecomb', 'feh\u00e9r rizs', 'v\u00edz', 'sz\u00f3jasz\u00f3sz', 'j\u00e1harszir\u00f3p', 'fokhagymapor', 'gy\u00f6mb\u00e9rpor', 'kukoricakeményítő', '\u00fajhagyma'],
        units: ['', 'dl', 'dl', 'ek', 'ek', 'tk', 'tk', 'tk', ''],
        amounts: [null, 2.5, 2.5, null, null, null, null, null, null],
        steps: ['Helyezd a rizst + vizet az ed\u00e9nybe, a csirkecombot a tetej\u00e9re.', 'Keverd \u00f6ssze a sz\u00f3jasz\u00f3szt, j\u00e1harszir\u00f3pot, fokhagymapor \u00e9s gy\u00f6mb\u00e9rport, \u00f6ntsd a csirk\u00e9re.', 'Nyom\u00e1sf\u0151z\u00e9s 8 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 10 perc.', 'Vedd ki a csirk\u00e9t, szeleteld, s\u0171r\u00edtsd be a sz\u00f3szt kukoricakem\u00e9ny\u00edt\u0151vel.', 'T\u00e1lald szeletelt \u00fajhagym\u00e1val.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'chicken-curry': {
        name: 'Csirke curry',
        items: ['csirkecomb, kock\u00e1zva', 'k\u00f3kusztej', 'hagyma', 'fokhagyma', 'currypor', 'kurkuma', 'kock\u00e1zott paradicsom', 'ol\u00edvaolaj', 's\u00f3'],
        units: ['', 'doboz', '', 'gerezd', 'ek', 'tk', 'doboz', 'ek', ''],
        steps: ['P\u00edr\u00edtsd meg a hagym\u00e1t \u00e9s fokhagym\u00e1t ol\u00edvaolajban (P\u00edr\u00edt\u00e1s m\u00f3d, 3 perc).', 'Add hozz\u00e1 a kock\u00e1zott csirk\u00e9t, curryport \u00e9s kurkum\u00e1t, keverd \u00e1t.', 'Add hozz\u00e1 a kock\u00e1zott paradicsomot \u00e9s s\u00f3t. A k\u00f3kusztejet a TETEJ\u00c9RE \u00f6ntsd \u2014 ne keverd \u00f6ssze.', 'Nyom\u00e1sf\u0151z\u00e9s 5 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 10 perc.', 'T\u00e1lald rizzsel.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'pork-chops-potatoes': {
        name: 'Sert\u00e9sszelet krumplival',
        items: ['sert\u00e9sszelet', 'kis krumpli', 'csirke alaplé', 'ol\u00edvaolaj', 'fokhagymapor, pirospaprika, s\u00f3, bors'],
        units: ['', '', 'dl', 'ek', ''],
        amounts: [null, null, 2.5, null, null],
        steps: ['F\u0171szerezd a sert\u00e9sszeleteket fokhagymaporral, pirospaprik\u00e1val, s\u00f3val \u00e9s borssal.', 'P\u00edr\u00edtsd meg ol\u00edvaolajban mindkét oldalukat (P\u00edr\u00edt\u00e1s m\u00f3d, 2 perc oldalanként).', 'Add hozz\u00e1 a kis krumplikat \u00e9s a csirke alaplevet.', 'Nyom\u00e1sf\u0151z\u00e9s 15 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 5 perc.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      // === DESSERT (33-42) ===
      'coconut-rice-pudding': {
        name: 'K\u00f3kuszos rizspuding',
        items: ['feh\u00e9r rizs', 'k\u00f3kusztej', 'v\u00edz', 'j\u00e1harszir\u00f3p', 'vanília kivonat', 'fah\u00e9j'],
        units: ['dl', 'doboz', 'dl', 'ek', 'tk', ''],
        amounts: [2.5, null, 2.5, null, null, null],
        steps: ['Adj rizst, k\u00f3kusztejet, vizet \u00e9s j\u00e1harszir\u00f3pot az ed\u00e9nybe.', 'Nyom\u00e1sf\u0151z\u00e9s 10 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 10 perc.', 'Keverd hozz\u00e1 a van\u00edlia kivonatot \u00e9s sz\u00f3rd meg fah\u00e9jjal.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'banana-bread': {
        name: 'Ban\u00e1nkeny\u00e9r',
        items: ['\u00e9rett ban\u00e1n', 'liszt', 'k\u00f3kuszolaj', 'j\u00e1harszir\u00f3p', 's\u00fct\u0151szóda', 'vanília kivonat', 's\u00f3'],
        units: ['', 'dl', 'ek', 'ek', 'tk', 'tk', ''],
        amounts: [null, 3.5, null, null, null, null, null],
        steps: ['T\u00f6rd \u00f6ssze a ban\u00e1nokat, keverd \u00f6ssze a k\u00f3kuszolajjal, j\u00e1harszir\u00f3ppal \u00e9s van\u00edli\u00e1val.', 'Add hozz\u00e1 a lisztet, s\u00fct\u0151sz\u00f3d\u00e1t \u00e9s s\u00f3t, keverd \u00f6ssze.', '\u00d6ntsd s\u00fct\u0151form\u00e1ba.', 'Forr\u00f3leveg\u0151 155\u00b0C, 45 perc. 20 percn\u00e9l takard le al\u00faf\u00f3li\u00e1val.', 'Ellen\u0151rizd fogpiszk\u00e1l\u00f3val \u2014 tiszt\u00e1n kell kij\u00f6nnie.'],
        timerLabel: 'Forr\u00f3leveg\u0151'
      },
      'brownies': {
        name: 'Tejmentes brownie',
        items: ['k\u00f3kuszolaj', 'cukor', 'toj\u00e1s', 'kaka\u00f3por', 'liszt', 'vanília kivonat', 's\u00f3', 'v\u00edz'],
        units: ['ek', 'dl', '', 'dl', 'dl', 'tk', '', 'dl'],
        amounts: [null, 1.8, null, 1.2, 1.2, null, null, 2.5],
        steps: ['Olvaszd fel a k\u00f3kuszolajat, keverd \u00f6ssze a cukorral \u00e9s toj\u00e1ssal.', 'Add hozz\u00e1 a kaka\u00f3port, lisztet, van\u00edli\u00e1t \u00e9s s\u00f3t.', '\u00d6ntsd s\u00fct\u0151form\u00e1ba, adj 2.5 dl vizet az ed\u00e9nybe, helyezd az \u00e1llv\u00e1nyra.', 'Nyom\u00e1sf\u0151z\u00e9s 25 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 10 perc.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'chocolate-lava-cake': {
        name: 'Csokol\u00e1d\u00e9 l\u00e1va torta',
        items: ['k\u00f3kuszolaj', 'tejmentes csokol\u00e1d\u00e9 chips', 'toj\u00e1s', 'cukor', 'liszt', 'v\u00edz'],
        units: ['ek', 'dl', '', 'ek', 'ek', 'dl'],
        amounts: [null, 0.6, null, null, null, 2.5],
        steps: ['Olvaszd \u00f6ssze a k\u00f3kuszolajat \u00e9s csokol\u00e1d\u00e9 chipset.', 'Keverd hozz\u00e1 a toj\u00e1st, cukrot \u00e9s lisztet.', '\u00d6ntsd szilikon form\u00e1kba, adj 2.5 dl vizet az ed\u00e9nybe, helyezd az \u00e1llv\u00e1nyra.', 'Nyom\u00e1sf\u0151z\u00e9s 8 perc, Gyors g\u0151zkiereszt\u00e9s. T\u00e1lald azonnal.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'air-fryer-donuts': {
        name: 'Forr\u00f3leveg\u0151s f\u00e1nk',
        items: ['liszt', 'cukor', 's\u00fct\u0151por', 'zabital', 'k\u00f3kuszolaj', 'toj\u00e1s', 'vanília kivonat', 'fah\u00e9jas cukor'],
        units: ['dl', 'ek', 'tk', 'dl', 'ek', '', 'tk', ''],
        amounts: [2.5, null, null, 0.6, null, null, null, null],
        steps: ['Keverd \u00f6ssze a lisztet, cukrot \u00e9s s\u00fct\u0151port.', 'Add hozz\u00e1 a zabitalt, olvasztott k\u00f3kuszolajat, toj\u00e1st \u00e9s van\u00edli\u00e1t.', 'Form\u00e1zd f\u00e1nk alak\u00fara, helyezd a kos\u00e1rba.', 'Forr\u00f3leveg\u0151 175\u00b0C, 5 perc.', 'Forgasd meg fah\u00e9jas cukorban.'],
        timerLabel: 'Forr\u00f3leveg\u0151'
      },
      'baked-pears': {
        name: 'S\u00fclt k\u00f6rte di\u00f3val',
        items: ['k\u00f6rte', 'di\u00f3', 'j\u00e1harszir\u00f3p', 'fah\u00e9j', 'k\u00f3kuszolaj'],
        units: ['', '', 'ek', '', 'tk'],
        steps: ['F\u00e9lbev\u00e1gd a k\u00f6rt\u00e9ket \u00e9s magozd ki.', 'T\u00f6ltsd meg a k\u00f6rt\u00e9k k\u00f6zep\u00e9t dar\u00e1lt di\u00f3val, locsold meg j\u00e1harszir\u00f3ppal, sz\u00f3rd meg fah\u00e9jjal.', 'Kend meg k\u00f3kuszolajjal.', 'Forr\u00f3leveg\u0151 175\u00b0C, 12 perc.'],
        timerLabel: 'Forr\u00f3leveg\u0151'
      },
      'mango-sticky-rice': {
        name: 'Mang\u00f3s ragacsos rizs',
        items: ['ragacsos rizs', 'v\u00edz', 'k\u00f3kusztej', 'cukor', 's\u00f3', 'mang\u00f3'],
        units: ['dl', 'dl', 'dl', 'ek', '', ''],
        amounts: [2.5, 2.5, 1.2, null, null, null],
        steps: ['Adj ragacsos rizst + 2.5 dl vizet egy f\u00e9mt\u00e1lba. Helyezd az \u00e1llv\u00e1nyra, adj 2.5 dl vizet az ed\u00e9nybe.', 'Nyom\u00e1sf\u0151z\u00e9s 12 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 10 perc.', 'Meleg\u00edtsd a k\u00f3kusztejet cukorral \u00e9s s\u00f3val, \u00f6ntsd a rizsre.', 'Hagyd \u00e1llni 10 percig. T\u00e1lald szeletelt mang\u00f3val.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'energy-oat-bites': {
        name: 'Energiagoly\u00f3k',
        items: ['zabliszt', 'mogyor\u00f3vaj', 'j\u00e1harszir\u00f3p', 'tejmentes csokol\u00e1d\u00e9 chips', 'k\u00f3kuszreszel\u00e9k'],
        units: ['dl', 'dl', 'ek', 'dl', 'ek'],
        amounts: [2.5, 1.2, null, 0.6, null],
        steps: ['Keverd \u00f6ssze az \u00f6sszes hozz\u00e1val\u00f3t egy t\u00e1lban.', 'Form\u00e1zz kis goly\u00f3kat a kever\u00e9kb\u0151l.', 'Helyezd a kos\u00e1rba, Forr\u00f3leveg\u0151 160\u00b0C, 5 perc, hogy kicsit megszil\u00e1rduljanak.', 'H\u0171tsd le t\u00e1lal\u00e1s el\u0151tt.'],
        timerLabel: 'Forr\u00f3leveg\u0151'
      },
      'poached-plums': {
        name: 'Fah\u00e9jas p\u00e1rolt szilva',
        items: ['szilva', 'v\u00edz', 'j\u00e1harszir\u00f3p', 'fah\u00e9jr\u00fad', 'vanília kivonat'],
        units: ['', 'dl', 'ek', '', 'tk'],
        amounts: [null, 1.2, null, null, null],
        steps: ['F\u00e9lbev\u00e1gd \u00e9s magozd ki a szilv\u00e1kat.', 'Adj vizet, j\u00e1harszir\u00f3pot \u00e9s fah\u00e9jr\u00fadat az ed\u00e9nybe.', 'Nyom\u00e1sf\u0151z\u00e9s 3 perc, Gyors g\u0151zkiereszt\u00e9s.', 'Adj hozz\u00e1 van\u00edlia kivonatot, t\u00e1lald melegen.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'sweet-potato-pudding': {
        name: '\u00c9desburgonya puding',
        items: ['\u00e9desburgonya', 'k\u00f3kusztej', 'j\u00e1harszir\u00f3p', 'fah\u00e9j', 'szerecsendi\u00f3', 'vanília kivonat', 's\u00f3'],
        units: ['', 'dl', 'ek', 'tk', 'csipet', 'tk', ''],
        amounts: [null, 2.5, null, null, null, null, null],
        steps: ['H\u00e1mozd meg \u00e9s kock\u00e1zd az \u00e9desburgony\u00e1kat.', 'Adj k\u00f3kusztejet, j\u00e1harszir\u00f3pot, fah\u00e9jat, szerecsendi\u00f3t \u00e9s s\u00f3t az ed\u00e9nybe.', 'Nyom\u00e1sf\u0151z\u00e9s 8 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 10 perc.', 'Turmixold kr\u00e9mes \u00e1llag\u00fara, adj hozz\u00e1 van\u00edlia kivonatot.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      // === POPULAR PICKS (43-52) ===
      'pot-roast': {
        name: 'Marhaszegy',
        items: ['marhaszegy', 'marha alapl\u00e9', 'hagyma, negyedelve', 's\u00e1rgar\u00e9pa, darabokra v\u00e1gva', 'krumpli, negyedelve', 'fokhagyma', 'Worcestershire sz\u00f3sz', 'ol\u00edvaolaj', 's\u00f3, bors, kakukkf\u0171'],
        units: ['kg', 'dl', '', '', '', 'gerezd', 'ek', 'ek', ''],
        amounts: [1.4, 2.5, null, null, null, null, null, null, null],
        steps: ['F\u0171szerezd a marhaszegyet s\u00f3val, borssal \u00e9s kakukkf\u0171vel.', 'P\u00edr\u00edtsd meg ol\u00edvaolajban minden oldal\u00e1t 3\u20134 percig.', 'Add hozz\u00e1 a marha alaplevet \u00e9s a Worcestershire sz\u00f3szt. \u00d6bl\u00edtsd ki az ed\u00e9ny alj\u00e1t.', 'Add hozz\u00e1 a hagym\u00e1t \u00e9s fokhagym\u00e1t.', 'Nyom\u00e1sf\u0151z\u00e9s 60 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 15 perc.', 'Add hozz\u00e1 a s\u00e1rgar\u00e9p\u00e1t \u00e9s krumplit, Nyom\u00e1sf\u0151z\u00e9s 8 perc, Gyors g\u0151zkiereszt\u00e9s.', 'Szeleteld \u00e9s t\u00e1lald a z\u00f6lds\u00e9gekkel.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'butter-chicken': {
        name: 'Vajas csirke',
        items: ['csirkecomb, kock\u00e1zva', 'vaj', 'paradicsomszósz', 'tejsz\u00edn', 'hagyma', 'fokhagyma', 'gy\u00f6mb\u00e9r', 'garam masala', 'k\u00f6m\u00e9ny', 'kurkuma', 's\u00f3'],
        units: ['', 'ek', 'dl', 'dl', '', 'gerezd', 'ek', 'ek', 'tk', 'tk', ''],
        amounts: [null, null, 2.5, 1.2, null, null, null, null, null, null, null],
        steps: ['P\u00edr\u00edtsd meg a hagym\u00e1t vajban 3 percig. Add hozz\u00e1 a fokhagym\u00e1t, gy\u00f6mb\u00e9rt \u00e9s f\u0171szereket.', 'Add hozz\u00e1 a kock\u00e1zott csirk\u00e9t \u00e9s paradicsomszószt.', 'Nyom\u00e1sf\u0151z\u00e9s 5 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 5 perc.', 'Keverd hozz\u00e1 a tejsz\u00ednt, P\u00edr\u00edt\u00e1s m\u00f3dban 2 percig s\u0171r\u00edtsd.', 'T\u00e1lald basmati rizzsel.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'salsa-chicken': {
        name: 'Sals\u00e1s csirke',
        items: ['csirkemell', 'salsa (\u00fcveg)', 'k\u00f6m\u00e9ny', 'fokhagymapor', 's\u00f3, bors'],
        units: ['', '\u00fcveg', 'tk', 'tk', ''],
        steps: ['Helyezd a csirkemellet az ed\u00e9nybe, \u00f6ntsd r\u00e1 a sals\u00e1t.', 'F\u0171szerezd k\u00f6m\u00e9nnyel, fokhagymaporral, s\u00f3val \u00e9s borssal.', 'Nyom\u00e1sf\u0151z\u00e9s 8 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 5 perc.', 'T\u00e9pkedve keverd \u00f6ssze a sals\u00e1val.', 'T\u00e1lald tac\u00f3ban, rizsen vagy t\u00e1lban.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'cheesecake': {
        name: 'New York sajttorta',
        items: ['kr\u00e9msajt', 'cukor', 'toj\u00e1s', 'tejf\u00f6l', 'van\u00edlia kivonat', 'liszt', 'darált keksz', 'vaj, olvasztott', 'v\u00edz'],
        units: ['g', 'dl', '', 'dl', 'tk', 'ek', 'dl', 'ek', 'dl'],
        amounts: [450, 1.2, null, 0.8, null, null, 2.5, null, 3.5],
        steps: ['Keverd \u00f6ssze a darált kekszet az olvasztott vajjal, nyomd a 18 cm-es form\u00e1ba.', 'Keverj kr\u00e9msajtot cukorral, adj hozz\u00e1 toj\u00e1sokat egyenk\u00e9nt, majd tejf\u00f6lt, van\u00edli\u00e1t \u00e9s lisztet.', '\u00d6ntsd a kéregre, takard le f\u00f3li\u00e1val.', 'Adj 1,12 dl vizet, helyezd az \u00e1llv\u00e1nyra.', 'Nyom\u00e1sf\u0151z\u00e9s 25 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 10 perc.', 'H\u0171tsd legal\u00e1bb 4 \u00f3r\u00e1ig t\u00e1lal\u00e1s el\u0151tt.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'honey-garlic-chicken': {
        name: 'M\u00e9zes-fokhagym\u00e1s csirke',
        items: ['csirkecomb', 'm\u00e9z', 'sz\u00f3jasz\u00f3sz', 'fokhagyma', 'ol\u00edvaolaj', 'kukoricakeményítő', 's\u00f3, bors'],
        units: ['', 'dl', 'ek', 'gerezd', 'ek', 'ek', ''],
        amounts: [null, 0.8, null, null, null, null, null],
        steps: ['Keverd \u00f6ssze a m\u00e9zet, sz\u00f3jasz\u00f3szt \u00e9s fokhagym\u00e1t.', 'P\u00edr\u00edtsd meg a csirkecombot ol\u00edvaolajban, 2 perc oldalanként.', '\u00d6ntsd r\u00e1 a m\u00e9zes-fokhagym\u00e1s sz\u00f3szt.', 'Nyom\u00e1sf\u0151z\u00e9s 8 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 5 perc.', 'S\u0171r\u00edtsd be a sz\u00f3szt kukoricakem\u00e9ny\u00edt\u0151vel P\u00edr\u00edt\u00e1s m\u00f3dban.', 'T\u00e1lald rizzsel.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'mac-and-cheese': {
        name: 'Sajtos makar\u00f3ni',
        items: ['k\u00f6ny\u00f6k makar\u00f3ni', 'v\u00edz', 'vaj', 's\u00f3', 'must\u00e1rpor', 'tej', 'reszelt cheddar sajt'],
        units: ['g', 'dl', 'ek', 'tk', 'tk', 'dl', 'dl'],
        amounts: [450, 10, null, null, null, 1.2, 5],
        steps: ['Adj makar\u00f3nit, vizet, vajat, s\u00f3t \u00e9s must\u00e1rport az ed\u00e9nybe.', 'Nyom\u00e1sf\u0151z\u00e9s 4 perc, Gyors g\u0151zkiereszt\u00e9s.', 'Keverd hozz\u00e1 a tejet \u00e9s reszelt sajtot, am\u00edg kr\u00e9mes.', 'Azonnal t\u00e1lald.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'carnitas': {
        name: 'Carnitas',
        items: ['sert\u00e9slapocka', 'narancsl\u00e9', 'limel\u00e9', 'fokhagyma', 'k\u00f6m\u00e9ny', 'oreg\u00e1n\u00f3', 's\u00f3, bors', 'kis tortilla'],
        units: ['g', 'dl', 'ek', 'gerezd', 'ek', 'tk', '', ''],
        amounts: [900, 1.2, null, null, null, null, null, null],
        steps: ['V\u00e1gd a sert\u00e9slapock\u00e1t 3\u20134 darabra. F\u0171szerezd k\u00f6m\u00e9nnyel, oreg\u00e1n\u00f3val, s\u00f3val \u00e9s borssal.', 'Adj narancsl\u00e9t, limel\u00e9t \u00e9s fokhagym\u00e1t az ed\u00e9nybe.', 'Nyom\u00e1sf\u0151z\u00e9s 45 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 15 perc.', 'T\u00e9pkedve helyezd a forr\u00f3leveg\u0151s kos\u00e1rba.', 'Forr\u00f3leveg\u0151 200\u00b0C, 5 perc, am\u00edg ropog\u00f3s.', 'T\u00e1lald tortill\u00e1ban.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'bone-broth': {
        name: 'Csontl\u00e9',
        items: ['marha vagy csirke csont', 'v\u00edz', 'almaecet', 'hagyma', 'zeller', 'fokhagyma', 'bab\u00e9rlev\u00e9l', 's\u00f3, borsszem'],
        units: ['g', 'dl', 'ek', '', 'sz\u00e1r', 'gerezd', '', ''],
        amounts: [900, 19, null, null, null, null, null, null],
        steps: ['Adj csontokat, vizet, almaecetet, z\u00f6lds\u00e9geket \u00e9s f\u0171szereket az ed\u00e9nybe.', 'Nyom\u00e1sf\u0151z\u00e9s 120 perc, teljes Term\u00e9szetes g\u0151zkiereszt\u00e9s.', 'Sz\u0171rd le a levet. Dobd el a marad\u00e9kot.', 'S\u00f3zd meg \u00edz\u00e9s szerint. H\u0171t\u0151ben 5 napig \u00e1ll.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'chow-mein': {
        name: 'Chow Mein',
        items: ['chow mein t\u00e9szta', 'csirkemell, v\u00e9konyra szeletelve', 'k\u00e1poszta, szeletelve', 's\u00e1rgar\u00e9pa, csíkokra v\u00e1gva', 'sz\u00f3jasz\u00f3sz', 'sz\u00e9zamolaj', 'osztrigasz\u00f3sz', 'fokhagyma', 'n\u00f6v\u00e9nyi olaj'],
        units: ['g', '', 'dl', '', 'ek', 'ek', 'ek', 'gerezd', 'ek'],
        amounts: [225, null, 5, null, null, null, null, null, null],
        steps: ['F\u0151zd meg a t\u00e9szt\u00e1t a csomagol\u00e1s szerint, csepegtesd le.', 'P\u00edr\u00edtsd meg a szeletelt csirk\u00e9t olajban 4 percig. Vedd ki.', 'Add hozz\u00e1 a fokhagym\u00e1t, k\u00e1poszt\u00e1t \u00e9s s\u00e1rgar\u00e9p\u00e1t, P\u00edr\u00edt\u00e1s 3 perc.', 'Tedd vissza a csirk\u00e9t, add hozz\u00e1 a t\u00e9szt\u00e1t \u00e9s sz\u00f3szokat, keverd \u00f6ssze 2 percig.'],
        timerLabel: 'P\u00edr\u00edt\u00e1s'
      },
      'korean-beef': {
        name: 'Koreai marha (Bulgogi)',
        items: ['marha szegy, v\u00e9konyra szeletelve', 'sz\u00f3jasz\u00f3sz', 'barna cukor', 'sz\u00e9zamolaj', 'fokhagyma', 'gy\u00f6mb\u00e9r', 'k\u00f6rte, reszelve', 'kukoricakeményítő', 'szez\u00e1mmag, \u00fajhagyma d\u00edsz\u00edt\u00e9shez'],
        units: ['g', 'dl', 'ek', 'ek', 'gerezd', 'ek', '', 'ek', ''],
        amounts: [700, 0.8, null, null, null, null, null, null, null],
        steps: ['Keverd \u00f6ssze a sz\u00f3jasz\u00f3szt, barna cukrot, sz\u00e9zamolajat, fokhagym\u00e1t, gy\u00f6mb\u00e9rt \u00e9s reszelt k\u00f6rt\u00e9t.', 'P\u00edr\u00edtsd meg a szeletelt marh\u00e1t adagonk\u00e9nt 2 perc oldalanként.', '\u00d6ntsd r\u00e1 a p\u00e1cot.', 'Nyom\u00e1sf\u0151z\u00e9s 10 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 5 perc.', 'S\u0171r\u00edtsd be a sz\u00f3szt kukoricakem\u00e9ny\u00edt\u0151vel P\u00edr\u00edt\u00e1s m\u00f3dban.', 'T\u00e1lald rizzsel, szez\u00e1mmaggal \u00e9s \u00fajhagym\u00e1val.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      // === INSTANT POT OFFICIAL (53-57) ===
      'italian-pot-roast': {
        name: 'Olasz marhaszegy',
        items: ['marhaszegy', 'vaj', 'marha alapl\u00e9', 'paradicsompüré', 'k\u00f3kusz amin\u00f3 vagy sz\u00f3jasz\u00f3sz', 'fokhagyma, szeletelve', 's\u00e1rgar\u00e9pa', 'pasztern\u00e1k', 'hagyma, negyedelve', 'zeller', 'bab\u00e9rlev\u00e9l, kakukkf\u0171, oreg\u00e1n\u00f3, bazsalikom, s\u00f3, bors'],
        units: ['kg', 'ek', 'dl', 'ek', 'ek', 'gerezd', '', '', '', 'sz\u00e1r', ''],
        amounts: [1.4, null, 2.5, null, null, null, null, null, null, null, null],
        steps: ['V\u00e1gj kis r\u00e9seket a h\u00fasba \u00e9s t\u00f6md meg fokhagymaszeletekkel.', 'P\u00edr\u00edtsd meg vajban minden oldal\u00e1t 3\u20134 percig.', 'Add hozz\u00e1 az alaplevet, paradicsompürét, zellert \u00e9s olasz f\u0171szereket.', 'Nyom\u00e1sf\u0151z\u00e9s 45 perc, Gyors g\u0151zkiereszt\u00e9s.', 'Add hozz\u00e1 a hagym\u00e1t, s\u00e1rgar\u00e9p\u00e1t \u00e9s pasztern\u00e1kot.', 'Nyom\u00e1sf\u0151z\u00e9s 10 perc, Gyors g\u0151zkiereszt\u00e9s. T\u00e1lald a z\u00f6lds\u00e9gekkel.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'hot-pot': {
        name: 'Hot Pot',
        items: ['marha alapl\u00e9', 'csirke alapl\u00e9', 'z\u00f6lds\u00e9g alapl\u00e9', 'hagyma', '\u00fajhagyma', 'v\u00e9konyra szeletelt marha vagy sert\u00e9s', 'udon vagy r\u00e1men t\u00e9szta', 'gomba, szeletelve', 'bok choy', 's\u00f3, bors, Old Bay f\u0171szer'],
        units: ['dl', 'dl', 'dl', '', '', 'g', 'g', 'dl', 'dl', ''],
        amounts: [5, 5, 5, null, null, 225, 225, 2.5, 5, null],
        steps: ['P\u00edr\u00edtsd meg a hagym\u00e1t \u00e9s \u00fajhagym\u00e1t 3 percig. Add hozz\u00e1 az alapleveket \u00e9s f\u0171szereket.', 'F\u0151zd P\u00edr\u00edt\u00e1s m\u00f3dban 10 percig.', 'Add hozz\u00e1 a gomb\u00e1t. Nyom\u00e1sf\u0151z\u00e9s 5 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 5 perc.', 'V\u00e1lts P\u00edr\u00edt\u00e1s m\u00f3dra. Add hozz\u00e1 a t\u00e9szt\u00e1t, h\u00fast \u00e9s bok choyt.', 'F\u0151zd 3\u20135 percig, am\u00edg k\u00e9sz. T\u00e1lald t\u00e1lakban.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'harissa-chicken': {
        name: 'Harissa csirke fet\u00e1val',
        items: ['csirkecomb, csonttal', 'harissa paszta', 'csirke alapl\u00e9', 'k\u00f6m\u00e9ny', 'f\u00fcst\u00f6lt pirospaprika', 'morzsolt feta sajt', 'friss f\u0171szern\u00f6v\u00e9nyek', 's\u00f3, bors'],
        units: ['g', 'ek', 'dl', 'tk', 'tk', 'dl', '', ''],
        amounts: [900, null, 1.2, null, null, 1.2, null, null],
        steps: ['F\u0171szerezd a csirk\u00e9t k\u00f6m\u00e9nnyel, f\u00fcst\u00f6lt pirospaprik\u00e1val, s\u00f3val \u00e9s borssal.', 'Helyezd az ed\u00e9nybe. Keverd \u00f6ssze a hariss\u00e1t az alapl\u00e9vel \u00e9s \u00f6ntsd r\u00e1.', 'Nyom\u00e1sf\u0151z\u00e9s 10 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 5 perc.', 'T\u00e1lald morzsolt fet\u00e1val \u00e9s friss f\u0171szern\u00f6v\u00e9nyekkel.'],
        timerLabel: 'Nyom\u00e1sf\u0151z\u00e9s'
      },
      'beef-arayes': {
        name: 'Marhah\u00fas arayes (t\u00f6lt\u00f6tt pita)',
        items: ['sov\u00e1ny dar\u00e1lt marha', 'hagyma, apr\u00f3ra v\u00e1gva', 'fokhagyma', 'friss petrezselyem', 'k\u00f6m\u00e9ny', 'pirospaprika', 'fah\u00e9j', 'pita keny\u00e9r', 'ol\u00edvaolaj, s\u00f3, bors'],
        units: ['g', '', 'gerezd', 'dl', 'tk', 'tk', 'tk', '', ''],
        amounts: [450, null, null, 0.6, null, null, null, null, null],
        steps: ['Keverd \u00f6ssze a dar\u00e1lt marh\u00e1t a hagym\u00e1val, fokhagym\u00e1val, petrezselyemmel \u00e9s f\u0171szerekkel.', 'T\u00f6ltsd meg a f\u00e9lbev\u00e1gott pit\u00e1kat a h\u00faskever\u00e9kkel.', 'Kend meg mindk\u00e9t oldalukat ol\u00edvaolajjal.', 'Forr\u00f3leveg\u0151 200\u00b0C, 14 perc, fel\u00e9n\u00e9l ford\u00edtsd meg.', 'T\u00e1lald joghurtsz\u00f3sszal vagy tahini sz\u00f3sszal.'],
        timerLabel: 'Forr\u00f3leveg\u0151'
      },
      'tajin-beef-stew': {
        name: 'Tajin marhap\u00f6rk\u00f6lt',
        items: ['marhah\u00fas, kock\u00e1zva', 'krumpli, kock\u00e1zva', 's\u00e1rgar\u00e9pa, szeletelve', 'hagyma', 'marha alapl\u00e9', 'kock\u00e1zott paradicsom', 'Tajin f\u0171szer', 'k\u00f6m\u00e9ny', 'ol\u00edvaolaj', 's\u00f3, bors, lime cikk'],
        units: ['g', '', '', '', 'dl', 'doboz', 'ek', 'tk', 'ek', ''],
        amounts: [700, null, null, null, 5, null, null, null, null, null],
        steps: ['F\u0171szerezd a marh\u00e1t Tajin f\u0171szerrel, k\u00f6m\u00e9nnyel, s\u00f3val \u00e9s borssal.', 'P\u00edr\u00edtsd meg adagonk\u00e9nt ol\u00edvaolajban, 5 perc adagonk\u00e9nt.', 'Add hozz\u00e1 a hagym\u00e1t 2 percre, majd az alaplevet. Kaparj\u00e1l le minden odaragadt darabot.', 'Add hozz\u00e1 a paradicsomot, krumplit \u00e9s s\u00e1rgar\u00e9p\u00e1t.', 'Nyom\u00e1sf\u0151z\u00e9s 35 perc, Term\u00e9szetes g\u0151zkiereszt\u00e9s 10 perc.', 'T\u00e1lald lime cikkel.'],
        timerLabel: 'Nyomásfőzés'
      },
      // === DAMN DELICIOUS (58-65) ===
      'chicken-burrito-bowls': {
        name: 'Csirkés burrito tálak',
        items: ['csirkemell', 'fehér rizs', 'csirke alaplé', 'salsa', 'fekete bab, lecsepegtetett', 'fagyasztott kukorica', 'zöld chili', 'taco fűszerkeverék', 'reszelt mexikói sajt', 'koriander, tejföl díszítéshez'],
        units: ['', 'dl', 'dl', 'dl', 'doboz', 'dl', 'doboz', 'ek', 'dl', ''],
        amounts: [null, 2.5, 2.5, 2.5, null, 2.5, null, null, 2.5, null],
        steps: ['Add a rizst, alaplevet, salsát, zöld chilit és taco fűszert az edénybe.', 'Helyezd a csirkemellet a tetejére. NE keverd meg.', 'Nyomásfőzés 10 perc, Természetes gőzkieresztés 10 perc.', 'Vedd ki a csirkét és tépd szét két villával. Lazítsd fel a rizst.', 'Keverd hozzá a fekete babot, kukoricát és a tépett csirkét.', 'Tálald sajttal, korianderrel és tejföllel.'],
        timerLabel: 'Nyomásfőzés'
      },
      'mushroom-risotto': {
        name: 'Gombás risottó',
        items: ['arborio rizs', 'gomba, szeletelve', 'csirke alaplé', 'parmezán sajt, reszelve', 'fokhagyma', 'spenót', 'fagyasztott borsó', 'vaj', 'kakukkfű', 'só, bors'],
        units: ['dl', 'g', 'dl', 'dl', 'gerezd', 'dl', 'dl', 'ek', 'tk', ''],
        amounts: [3.5, 225, 10, 1.2, null, 2.5, 1.2, null, null, null],
        steps: ['Pírítsd meg a gombát vajban 4 percig. Add hozzá a fokhagymát és kakukkfüvet, 1 perc.', 'Add hozzá a rizst és keverd be, 1 perc.', 'Öntsd hozzá a csirke alaplevet, sózd és borsozd.', 'Nyomásfőzés 6 perc, Gyors gőzkieresztés.', 'Keverd bele a parmezánt, spenótot és borsót. Várd meg 2 percig, amíg a spenót összeesik.', 'Azonnal tálald.'],
        timerLabel: 'Nyomásfőzés'
      },
      'red-beans-rice': {
        name: 'Vörösbab és rizs',
        items: ['szárított vörösbab (nem kell áztatni)', 'andouille kolbász, szeletelve', 'hagyma', 'paprika', 'zeller', 'fokhagyma', 'zöldség alaplé', 'Cajun fűszerkeverék', 'babérlevél', 'só, bors, csípős szósz'],
        units: ['g', 'g', '', '', 'szár', 'gerezd', 'dl', 'tk', '', ''],
        amounts: [450, 350, null, null, null, null, 10, null, null, null],
        steps: ['Pírítsd meg a kolbászt 3 percig. Add hozzá a zöldségeket és fokhagymát, 3 perc.', 'Add hozzá a babot, alaplevet, Cajun fűszert és babérlevelet.', 'Nyomásfőzés 35 perc, Természetes gőzkieresztés 25 perc.', 'Vedd ki a babérleveleket. Nyomd szét néhány babot a sűrítéshez.', 'Tálald főtt rizs fölé csípős szósszal.'],
        timerLabel: 'Nyomásfőzés'
      },
      'potato-corn-chowder': {
        name: 'Krumplis-kukoricás krémleves',
        items: ['szalonna, felkockázva', 'piros krumpli, kockázva', 'fagyasztott kukorica', 'hagyma', 'fokhagyma', 'zöldség alaplé', 'tejszín', 'liszt', 'kakukkfű', 'só, bors, snidling díszítéshez'],
        units: ['szelet', '', 'dl', '', 'gerezd', 'dl', 'dl', 'ek', 'tk', ''],
        amounts: [null, null, 5, null, null, 7, 1.2, null, null, null],
        steps: ['Pírítsd meg a szalonnát ropogósra, kb. 4 perc. Vedd ki.', 'Pírítsd meg a hagymát és fokhagymát a szalonnazsiradékban, 2 perc.', 'Add hozzá a krumplit, kukoricát, alaplevet, kakukkfüvet, sót és borsot.', 'Nyomásfőzés 10 perc, Gyors gőzkieresztés.', 'Keverd össze a lisztet a tejszínnel, add a leveshez. Pírítás 3 perc a sűrítéshez.', 'Szórd meg ropogós szalonnával és snidlinggel.'],
        timerLabel: 'Nyomásfőzés'
      },
      'white-chicken-chili': {
        name: 'Fehér csirke chili',
        items: ['csirkecomb', 'fehér bab, lecsepegtetett', 'enyhe zöld chili', 'hagyma', 'fokhagyma', 'csirke alaplé', 'tejföl', 'kömény', 'só, bors, koriander'],
        units: ['', 'doboz', 'doboz', '', 'gerezd', 'dl', 'dl', 'tk', ''],
        amounts: [null, null, null, null, null, 7, 1.2, null, null],
        steps: ['Pírítsd meg a hagymát és fokhagymát 3 percig.', 'Add hozzá a csirkecombot, babot, chilit, alaplevet és köményt.', 'Nyomásfőzés 12 perc, Természetes gőzkieresztés 10 perc.', 'Vedd ki a csirkét és tépd szét. Tedd vissza az edénybe.', 'Keverd bele a tejfölt. Ízesítsd.', 'Tálald korianderrel.'],
        timerLabel: 'Nyomásfőzés'
      },
      'chicken-tacos': {
        name: 'Csirkés tacos',
        items: ['csirkecomb', 'salsa', 'mexikói sör (vagy csirke alaplé)', 'chipotle chilipor', 'kömény', 'oregánó', 'kis tortilla', 'avokádó, lime, jalapeño díszítéshez'],
        units: ['', 'dl', 'dl', 'ek', 'tk', 'tk', '', ''],
        amounts: [null, 2.5, 1.2, null, null, null, null, null],
        steps: ['Fűszerezd a csirkét chipotle chiliporral, köménnyel és oregánóval.', 'Pírítsd meg a csirkét 2 perc oldalanként.', 'Add hozzá a salsát és sört (vagy alaplevet).', 'Nyomásfőzés 8 perc, Természetes gőzkieresztés 5 perc.', 'Tépd szét a csirkét két villával és keverd össze a szósszal.', 'Tálald tortillában avokádóval, lime-mal és jalapeñóval.'],
        timerLabel: 'Nyomásfőzés'
      },
      'ground-beef-pasta': {
        name: 'Darált marhás tészta',
        items: ['darált marha', 'campanelle vagy fusilli tészta', 'marinara szósz (700 ml)', 'víz', 'olasz fűszerkeverék', 'só, bors', 'parmezán díszítéshez'],
        units: ['g', 'g', 'üveg', 'dl', 'tk', '', ''],
        amounts: [450, 225, null, 5, null, null, null],
        steps: ['Pírítsd meg a darált marhát 5 percig. Csepegtesd le a felesleges zsírt.', 'Add hozzá a vizet, tésztát és olasz fűszert. Öntsd a szószt a TETEJÉRE — NE keverd meg.', 'Nyomásfőzés 4 perc, Természetes gőzkieresztés 5 perc.', 'Keverd jól össze. Sózd-borsozd.', 'Szórd meg parmezánnal.'],
        timerLabel: 'Nyomásfőzés'
      },
      'sweet-potato-casserole': {
        name: 'Édesburgonya rakottas',
        items: ['édesburgonya, meghámozva és felkockázva', 'víz', 'vaj', 'barna cukor', 'fahéj', 'szerecsendió', 'vanília kivonat', 'mini pillecukor', 'pekándió, aprítva'],
        units: ['kg', 'dl', 'ek', 'dl', 'tk', 'tk', 'tk', 'dl', 'dl'],
        amounts: [1.4, 2.5, null, 0.6, null, null, null, 2.5, 1.2],
        steps: ['Add az édesburgonyát és vizet az edénybe.', 'Nyomásfőzés 8 perc, Gyors gőzkieresztés.', 'Csepegtesd le és törd össze vajjal, barna cukorral, fahéjjal, szerecsendióval és vaníliával.', 'Tedd tűzálló tálba. Szórd meg pillecukorral és pekándióval.', 'Forrólevegő 200°C, 3 perc amíg a pillecukor aranybarnára sül.'],
        timerLabel: 'Nyomásfőzés'
      },
      // === PINCH OF YUM (66-75) ===
      'wild-rice-soup': {
        name: 'Vadrizs leves',
        items: ['vadrizs', 'gomba, szeletelve', 'vaj', 'sárgarépa', 'zeller', 'hagyma', 'csirke alaplé', 'tejszín', 'liszt', 'só, bors, kakukkfű'],
        units: ['dl', 'g', 'ek', '', 'szár', '', 'dl', 'dl', 'ek', ''],
        amounts: [2.5, 225, null, null, null, null, 14, 1.2, null, null],
        steps: ['Pírítsd meg a gombát vajban 4 percig. Add hozzá a hagymát, sárgarépát, zellert és kakukkfüvet, 3 perc.', 'Add hozzá a vadrizst és csirke alaplevet.', 'Nyomásfőzés 35 perc, Természetes gőzkieresztés 10 perc.', 'Keverd össze a lisztet a tejszínnel, add a leveshez. Pírítás 3 perc a sűrítéshez.', 'Ízesítsd és tálald.'],
        timerLabel: 'Nyomásfőzés'
      },
      'short-rib-ragu': {
        name: 'Bordaszelet ragú',
        items: ['csonttal bordaszelet', 'hagyma', 'fokhagyma', 'száraz vörösbor', 'marinara szósz', 'szárított chili pehely', 'gnocchi vagy tészta', 'só, bors', 'parmezán díszítéshez'],
        units: ['g', '', 'gerezd', 'dl', 'üveg', 'tk', 'g', '', ''],
        amounts: [900, null, null, 1.2, null, null, 450, null, null],
        steps: ['Sózd-borsozd a bordaszeleteket. Pírítsd meg adagonként, 3 perc oldalanként.', 'Pírítsd a hagymát és fokhagymát 2 percig. Öblítsd le vörösborral.', 'Add hozzá a marinara szószt és chilit. Tedd vissza a bordákat.', 'Nyomásfőzés 45 perc, Természetes gőzkieresztés 10 perc.', 'Vedd ki a bordákat, tépd szét, dobd el a csontokat. Pírítsd a szószt 5 percig.', 'Tálald gnocchi vagy tészta fölé parmezánnal.'],
        timerLabel: 'Nyomásfőzés'
      },
      'cauliflower-curry': {
        name: 'Karfiol curry',
        items: ['karfiol, rózsáira szedve', 'vajsütőtök, kockázva', 'vörös lencse', 'kókusztej', 'kockázott paradicsom', 'vörös curry paszta', 'hagyma', 'fokhagyma', 'kurkuma', 'só, bors'],
        units: ['fej', 'dl', 'dl', 'doboz', 'doboz', 'ek', '', 'gerezd', 'tk', ''],
        amounts: [null, 5, 2.5, null, null, null, null, null, null, null],
        steps: ['Add az összes hozzávalót az edénybe és keverd össze.', 'Nyomásfőzés 5 perc, Természetes gőzkieresztés 10 perc.', 'Keverd jól össze — a lencse krémes állagot ad.', 'Tálald rizs fölé.'],
        timerLabel: 'Nyomásfőzés'
      },
      'coconut-tandoori-chicken': {
        name: 'Kókuszos tandoori csirke',
        items: ['csirkecomb', 'kókusztej', 'fehér rizs', 'víz', 'garam masala', 'chilipor', 'kömény', 'kurkuma', 'gyömbér por', 'méz', 'só, bors'],
        units: ['', 'doboz', 'dl', 'dl', 'ek', 'tk', 'tk', 'tk', 'tk', 'ek', ''],
        amounts: [null, null, 2.5, 2.5, null, null, null, null, null, null, null],
        steps: ['Keverd össze a fűszereket és dörzsöld be a csirkébe.', 'Add a rizst és vizet az edénybe. Helyezd a csirkét a tetejére.', 'Keverd össze a kókusztejet a mézzel, öntsd a csirkére.', 'Nyomásfőzés 12 perc, Természetes gőzkieresztés 10 perc.', 'Lazítsd fel a rizst és tálald a csirkét a tetejére.'],
        timerLabel: 'Nyomásfőzés'
      },
      'spicy-short-rib-soup': {
        name: 'Csípős bordaszelet leves',
        items: ['csont nélküli bordaszelet', 'gochujang szósz', 'paradicsompüré', 'gyömbér, reszelve', 'fokhagyma', 'mogyoróhagyma, szeletelve', 'marha alaplé', 'ramen vagy stir-fry tészta', 'spenót', 'újhagyma, szezámmag díszítéshez'],
        units: ['g', 'ek', 'ek', 'ek', 'gerezd', '', 'dl', 'g', 'dl', ''],
        amounts: [700, null, null, null, null, null, 14, 225, 5, null],
        steps: ['Sózd meg a bordaszeleteket. Pírítsd meg 3 perc oldalanként.', 'Add hozzá a mogyoróhagymát, fokhagymát, gyömbért, gochujangot és paradicsompürét, 1 perc.', 'Öntsd hozzá a marha alaplevet.', 'Nyomásfőzés 30 perc, Természetes gőzkieresztés 10 perc.', 'Vedd ki a húst, tépd szét. Válts Pírítás módra. Add hozzá a tésztát, 3 perc.', 'Tedd vissza a húst, add hozzá a spenótot. Tálald újhagymával és szezámmaggal.'],
        timerLabel: 'Nyomásfőzés'
      },
      'hawaiian-chicken-tacos': {
        name: 'Hawaii csirkés tacos',
        items: ['csirkecomb', 'friss ananász, kockázva', 'jalapeño', 'lilahagyma, szeletelve', 'fokhagyma', 'chilipor', 'kömény', 'csirke alaplé', 'kis tortilla', 'coleslaw, Sriracha díszítéshez'],
        units: ['', 'dl', '', '', 'gerezd', 'ek', 'tk', 'dl', '', ''],
        amounts: [null, 2.5, null, null, null, null, null, 1.2, null, null],
        steps: ['Fűszerezd a csirkét chiliporral, köménnyel és sóval.', 'Add a csirkét, ananászt, jalapeñót, lilahagymát, fokhagymát és alaplevet az edénybe.', 'Nyomásfőzés 10 perc, Természetes gőzkieresztés 5 perc.', 'Tépd szét a csirkét és keverd össze az ananászos keverékkel.', 'Tedd a forrólevegős kosárba. Forrólevegő 200°C, 5 perc a ropogós szélekért.', 'Tálald tortillában coleslaw-val és Srirachával.'],
        timerLabel: 'Nyomásfőzés'
      },
      'italian-beef-sandwiches': {
        name: 'Olasz marhás szendvics',
        items: ['marhaszegy', 'marha alaplé', 'fokhagyma', 'hagyma, szeletelve', 'oregánó', 'bazsalikom', 'pirospaprika', 'chili pehely', 'ropogós zsemle', 'giardiniera', 'provolone sajt'],
        units: ['kg', 'dl', 'gerezd', '', 'tk', 'tk', 'tk', 'tk', '', 'dl', 'szelet'],
        amounts: [1.4, 2.5, null, null, null, null, null, null, null, 2.5, null],
        steps: ['Fűszerezd a marhát oregánóval, bazsalikommal, pirospaprikával, chili pehellyel, sóval és borssal.', 'Tedd az edénybe az alapléval, fokhagymával és hagymával.', 'Nyomásfőzés 60 perc, Természetes gőzkieresztés 15 perc.', 'Tépd szét két villával. Áztasd a szaftban 5 percig.', 'Halmozd a húst zsemlébe, tedd rá a giardinierát és provolonét.', 'Tálald szafttal mártogatáshoz.'],
        timerLabel: 'Nyomásfőzés'
      },
      'chicken-tinga-tacos': {
        name: 'Chicken tinga tacos',
        items: ['csirkemell', 'chipotle paprika adobo szószban', 'tűzön pirított paradicsom', 'hagyma', 'fokhagyma', 'oregánó', 'kömény', 'csirke alaplé', 'kukorica tortilla', 'avokádó, cotija sajt, koriander, lime'],
        units: ['', '', 'doboz', '', 'gerezd', 'tk', 'tk', 'dl', '', ''],
        amounts: [null, null, null, null, null, null, null, 1.2, null, null],
        steps: ['Turmixold össze a paradicsomot, chipotlét, hagymát, fokhagymát, oregánót és köményt szósszá.', 'Öntsd a szószt és alaplevet az edénybe. Add hozzá a csirkemellet.', 'Nyomásfőzés 10 perc, Természetes gőzkieresztés 5 perc.', 'Tépd szét a csirkét és keverd össze a füstös szósszal.', 'Tálald tortillában avokádóval, cotija sajttal, korianderrel és lime-mal.'],
        timerLabel: 'Nyomásfőzés'
      },
      'mashed-potatoes': {
        name: 'Krumplipüré',
        items: ['krumpli, meghámozva és negyedelve', 'víz', 'vaj (1 tábla)', 'fokhagyma', 'friss zsálya, aprítva', 'friss kakukkfű', 'krémsajt vagy tejföl', 'parmezán, reszelve', 'só, bors'],
        units: ['kg', 'dl', 'dl', 'gerezd', 'ek', 'ek', 'dl', 'dl', ''],
        amounts: [2.3, 2.5, 1.2, null, null, null, 1.2, 1.2, null],
        steps: ['Add a krumplit és vizet az edénybe.', 'Nyomásfőzés 12 perc, Gyors gőzkieresztés. Öntsd le a vizet.', 'Míg a krumpli fő, olvaszd fel a vajat egy serpenyőben fokhagymával, zsályával és kakukkfűvel, 3 perc.', 'Törd össze a krumplit azonnal. Keverd bele a fűszervajas keveréket, krémsajtot és parmezánt.', 'Sózd-borsozd. Tálald melegen.'],
        timerLabel: 'Nyomásfőzés'
      },
      'sausage-kale-soup': {
        name: 'Kolbászos kelkáposztás fehérbab leves',
        items: ['olasz kolbász', 'cannellini bab, lecsepegtetett', 'kelkáposzta, aprítva', 'krumpli, kockázva', 'csirke alaplé', 'hagyma', 'fokhagyma', 'füstölt pirospaprika', 'tejszín', 'só, bors'],
        units: ['g', 'doboz', 'dl', '', 'dl', '', 'gerezd', 'tk', 'dl', ''],
        amounts: [450, null, 10, null, 14, null, null, null, 1.2, null],
        steps: ['Pírítsd meg az olasz kolbászt morzsolva 5 percig. Add hozzá a hagymát és fokhagymát, 2 perc.', 'Add hozzá a krumplit, babot, alaplevet és füstölt pirospaprikát.', 'Nyomásfőzés 3 perc, Természetes gőzkieresztés 10 perc.', 'Keverd bele az aprított kelkáposztát és tejszínt. Pírítás 3 perc, amíg a káposzta összeesik.', 'Ízesítsd és tálald.'],
        timerLabel: 'Nyomásfőzés'
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
