const dayEmojis = ["\ud83d\udcd6", "\ud83c\udf72", "\ud83c\udf5f", "\ud83c\udf5c", "\ud83c\udf36\ufe0f", "\ud83c\udf89", "\u2615"];

// ============ DATA ============
const recipes = [

  // ─────────────────────────────────────────────
  //  BREAKFAST (10)
  // ─────────────────────────────────────────────

  {
    id: "hard-boiled-eggs",
    name: "Hard Boiled Eggs + Toast",
    methods: ["pressure"],
    mealType: "breakfast",
    servings: 2,
    ingredients: [
      { amount: 1, unit: "cup", item: "water", cat: null },
      { amount: 6, unit: "", item: "eggs", cat: "Proteins" }
    ],
    steps: [
      "Add 1 cup water to the pot and place eggs on the trivet.",
      "Pressure Cook 5 min, Quick Release.",
      "Transfer eggs to an ice bath for 5 min. Peel and serve with toast."
    ],
    timer: { minutes: 5, label: "Pressure Cook" }
  },
  {
    id: "steel-cut-oatmeal",
    name: "Steel Cut Oatmeal",
    methods: ["pressure"],
    mealType: "breakfast",
    servings: 2,
    ingredients: [
      { amount: 1, unit: "cup", item: "steel cut oats", cat: "Grains & Pasta" },
      { amount: 3, unit: "cups", item: "water", cat: null },
      { amount: 0, unit: "", item: "pinch salt", cat: "Pantry" },
      { amount: 0, unit: "", item: "banana, blueberries, cinnamon, brown sugar for topping", cat: "Pantry" }
    ],
    steps: [
      "Add oats, water, and a pinch of salt to the pot.",
      "Pressure Cook 10 min, Natural Release 10 min.",
      "Top with fruit, cinnamon, or brown sugar as desired."
    ],
    timer: { minutes: 10, label: "Pressure Cook" }
  },
  {
    id: "hash-browns-eggs",
    name: "Air Fryer Hash Browns + Eggs",
    methods: ["air"],
    mealType: "breakfast",
    servings: 2,
    ingredients: [
      { amount: 0, unit: "", item: "frozen hash browns", cat: "Frozen" },
      { amount: 2, unit: "", item: "eggs", cat: "Proteins" },
      { amount: 0, unit: "", item: "oil spray, salt", cat: "Pantry" }
    ],
    steps: [
      "Place hash browns in the air fryer basket, spray with oil, and season with salt.",
      "Air Crisp 400\u00b0F, 12 min, flip halfway through.",
      "Cook eggs separately on the stove."
    ],
    timer: { minutes: 12, label: "Air Crisp" }
  },
  {
    id: "sausage-hash-browns",
    name: "Air Fryer Sausage Links + Hash Browns",
    methods: ["air"],
    mealType: "breakfast",
    servings: 2,
    ingredients: [
      { amount: 6, unit: "", item: "pork sausage links", cat: "Proteins" },
      { amount: 0, unit: "", item: "frozen hash browns", cat: "Frozen" },
      { amount: 0, unit: "", item: "oil spray, salt", cat: "Pantry" }
    ],
    steps: [
      "Place sausage links in the air fryer basket.",
      "Air Crisp 400\u00b0F, 10 min, turn halfway through.",
      "Cook hash browns using the same method (oil spray, salt, 400\u00b0F, 12 min)."
    ],
    timer: { minutes: 10, label: "Air Crisp" }
  },
  {
    id: "egg-bites",
    name: "Egg Bites",
    methods: ["pressure"],
    mealType: "breakfast",
    servings: 4,
    ingredients: [
      { amount: 6, unit: "", item: "eggs", cat: "Proteins" },
      { amount: 0.25, unit: "cup", item: "oat milk", cat: "Pantry" },
      { amount: 0.5, unit: "cup", item: "bell pepper, diced", cat: "Produce" },
      { amount: 0.25, unit: "cup", item: "green onion, sliced", cat: "Produce" },
      { amount: 0, unit: "", item: "salt, pepper", cat: "Pantry" },
      { amount: 1, unit: "cup", item: "water", cat: null }
    ],
    steps: [
      "Whisk eggs, oat milk, salt, and pepper together.",
      "Stir in diced bell pepper and sliced green onion.",
      "Pour mixture into a greased silicone egg bite mold.",
      "Add 1 cup water to the pot and place the mold on the trivet.",
      "Pressure Cook 8 min, Natural Release 5 min."
    ],
    timer: { minutes: 8, label: "Pressure Cook" }
  },
  {
    id: "banana-oat-pancakes",
    name: "Banana Oat Pancakes",
    methods: ["air"],
    mealType: "breakfast",
    servings: 2,
    ingredients: [
      { amount: 1, unit: "cup", item: "rolled oats", cat: "Grains & Pasta" },
      { amount: 2, unit: "", item: "bananas, mashed", cat: "Produce" },
      { amount: 2, unit: "", item: "eggs", cat: "Proteins" },
      { amount: 1, unit: "tsp", item: "baking powder", cat: "Pantry" },
      { amount: 0, unit: "", item: "cinnamon", cat: "Pantry" }
    ],
    steps: [
      "Blend rolled oats into a fine flour.",
      "Mix oat flour with mashed bananas, eggs, baking powder, and a pinch of cinnamon.",
      "Spoon batter into small rounds on parchment paper in the air fryer basket.",
      "Air Crisp 350\u00b0F, 8 min, flip halfway through."
    ],
    timer: { minutes: 8, label: "Air Crisp" }
  },
  {
    id: "breakfast-burritos",
    name: "Breakfast Burritos",
    methods: ["air"],
    mealType: "breakfast",
    servings: 2,
    ingredients: [
      { amount: 4, unit: "", item: "eggs", cat: "Proteins" },
      { amount: 4, unit: "", item: "flour tortillas", cat: "Grains & Pasta" },
      { amount: 0.5, unit: "cup", item: "black beans", cat: "Canned / Jarred" },
      { amount: 0.5, unit: "cup", item: "salsa", cat: "Canned / Jarred" },
      { amount: 0, unit: "", item: "salt, pepper", cat: "Pantry" },
      { amount: 0, unit: "", item: "oil spray", cat: "Pantry" }
    ],
    steps: [
      "Scramble eggs on the stove with salt and pepper.",
      "Fill each tortilla with scrambled eggs, black beans, and salsa.",
      "Roll up tight and spray the outside with oil.",
      "Air Crisp 400\u00b0F, 5 min until golden and crispy."
    ],
    timer: { minutes: 5, label: "Air Crisp" }
  },
  {
    id: "french-toast-sticks",
    name: "French Toast Sticks",
    methods: ["air"],
    mealType: "breakfast",
    servings: 2,
    ingredients: [
      { amount: 4, unit: "slices", item: "bread", cat: "Grains & Pasta" },
      { amount: 2, unit: "", item: "eggs", cat: "Proteins" },
      { amount: 0.25, unit: "cup", item: "oat milk", cat: "Pantry" },
      { amount: 1, unit: "tsp", item: "cinnamon", cat: "Pantry" },
      { amount: 1, unit: "tbsp", item: "maple syrup", cat: "Pantry" },
      { amount: 0, unit: "", item: "oil spray", cat: "Pantry" }
    ],
    steps: [
      "Cut each bread slice into 3 sticks.",
      "Whisk together eggs, oat milk, and cinnamon.",
      "Dip each stick in the egg mixture.",
      "Place sticks in the air fryer basket and spray with oil.",
      "Air Crisp 370\u00b0F, 8 min, flip halfway through.",
      "Drizzle with maple syrup before serving."
    ],
    timer: { minutes: 8, label: "Air Crisp" }
  },
  {
    id: "shakshuka",
    name: "Shakshuka",
    methods: ["saute", "pressure"],
    mealType: "breakfast",
    servings: 2,
    ingredients: [
      { amount: 1, unit: "tbsp", item: "olive oil", cat: "Pantry" },
      { amount: 1, unit: "", item: "onion, diced", cat: "Produce" },
      { amount: 2, unit: "cloves", item: "garlic, minced", cat: "Produce" },
      { amount: 1, unit: "can", item: "diced tomatoes", cat: "Canned / Jarred" },
      { amount: 1, unit: "tsp", item: "cumin", cat: "Pantry" },
      { amount: 1, unit: "tsp", item: "paprika", cat: "Pantry" },
      { amount: 4, unit: "", item: "eggs", cat: "Proteins" },
      { amount: 0, unit: "", item: "salt, pepper", cat: "Pantry" }
    ],
    steps: [
      "Saut\u00e9 diced onion in olive oil for 3 min.",
      "Add garlic, cumin, and paprika. Stir for 1 min.",
      "Add diced tomatoes, salt, and pepper. Stir to combine.",
      "Make 4 wells in the sauce and crack an egg into each.",
      "Pressure Cook 1 min, Quick Release. Eggs should be just set."
    ],
    timer: { minutes: 1, label: "Pressure Cook" }
  },
  {
    id: "rice-porridge",
    name: "Rice Porridge",
    methods: ["pressure"],
    mealType: "breakfast",
    servings: 2,
    ingredients: [
      { amount: 0.5, unit: "cup", item: "white rice", cat: "Grains & Pasta" },
      { amount: 4, unit: "cups", item: "water", cat: null },
      { amount: 1, unit: "tsp", item: "fresh ginger, grated", cat: "Produce" },
      { amount: 2, unit: "", item: "green onions, sliced", cat: "Produce" },
      { amount: 1, unit: "tbsp", item: "soy sauce", cat: "Pantry" },
      { amount: 0, unit: "", item: "salt", cat: "Pantry" }
    ],
    steps: [
      "Add rice, water, grated ginger, and salt to the pot.",
      "Pressure Cook 20 min, Natural Release 10 min.",
      "Stir until creamy. Top with sliced green onions and a drizzle of soy sauce."
    ],
    timer: { minutes: 20, label: "Pressure Cook" }
  },

  // ─────────────────────────────────────────────
  //  LUNCH (10)
  // ─────────────────────────────────────────────

  {
    id: "air-fryer-fries",
    name: "Air Fryer Fries",
    methods: ["air"],
    mealType: "lunch",
    servings: 2,
    ingredients: [
      { amount: 0, unit: "", item: "frozen french fries (half bag)", cat: "Frozen" }
    ],
    steps: [
      "Place frozen fries in the air fryer basket.",
      "Air Crisp 400\u00b0F, 15 min. Shake basket halfway through."
    ],
    timer: { minutes: 15, label: "Air Crisp" }
  },
  {
    id: "chicken-noodle-soup",
    name: "Chicken Noodle Soup",
    methods: ["pressure"],
    mealType: "lunch",
    servings: 4,
    ingredients: [
      { amount: 2, unit: "", item: "chicken thighs", cat: "Proteins" },
      { amount: 4, unit: "cups", item: "chicken broth", cat: "Canned / Jarred" },
      { amount: 2, unit: "", item: "carrots, diced", cat: "Produce" },
      { amount: 2, unit: "stalks", item: "celery, diced", cat: "Produce" },
      { amount: 1, unit: "cup", item: "egg noodles", cat: "Grains & Pasta" },
      { amount: 1, unit: "tbsp", item: "olive oil", cat: "Pantry" },
      { amount: 0, unit: "", item: "salt, pepper", cat: "Pantry" }
    ],
    steps: [
      "Add chicken thighs, broth, carrots, celery, olive oil, salt, and pepper to the pot.",
      "Pressure Cook 10 min, Quick Release.",
      "Remove chicken and shred with two forks.",
      "Add egg noodles and Saut\u00e9 5 min until noodles are tender.",
      "Return shredded chicken to the pot and stir."
    ],
    timer: { minutes: 10, label: "Pressure Cook" }
  },
  {
    id: "lentil-soup",
    name: "Lentil Soup",
    methods: ["pressure"],
    mealType: "lunch",
    servings: 4,
    ingredients: [
      { amount: 1, unit: "cup", item: "dried lentils", cat: "Grains & Pasta" },
      { amount: 1, unit: "", item: "onion, diced", cat: "Produce" },
      { amount: 2, unit: "", item: "carrots, diced", cat: "Produce" },
      { amount: 2, unit: "cloves", item: "garlic, minced", cat: "Produce" },
      { amount: 4, unit: "cups", item: "vegetable broth", cat: "Canned / Jarred" },
      { amount: 1, unit: "can", item: "diced tomatoes", cat: "Canned / Jarred" },
      { amount: 1, unit: "tsp", item: "cumin", cat: "Pantry" },
      { amount: 0, unit: "", item: "salt, pepper", cat: "Pantry" }
    ],
    steps: [
      "Add all ingredients to the pot and stir well.",
      "Pressure Cook 15 min, Natural Release 10 min.",
      "Stir and season to taste."
    ],
    timer: { minutes: 15, label: "Pressure Cook" }
  },
  {
    id: "black-bean-tacos",
    name: "Black Bean Tacos",
    methods: ["pressure"],
    mealType: "lunch",
    servings: 4,
    ingredients: [
      { amount: 1, unit: "cup", item: "dried black beans", cat: "Grains & Pasta" },
      { amount: 2, unit: "cups", item: "water", cat: null },
      { amount: 1, unit: "tsp", item: "cumin", cat: "Pantry" },
      { amount: 1, unit: "tsp", item: "chili powder", cat: "Pantry" },
      { amount: 8, unit: "", item: "corn tortillas", cat: "Grains & Pasta" },
      { amount: 1, unit: "", item: "avocado, sliced", cat: "Produce" },
      { amount: 0, unit: "", item: "salsa", cat: "Canned / Jarred" },
      { amount: 0, unit: "", item: "salt", cat: "Pantry" }
    ],
    steps: [
      "Add black beans, water, cumin, chili powder, and salt to the pot.",
      "Pressure Cook 25 min, Natural Release 15 min.",
      "Mash beans slightly with a fork.",
      "Serve in corn tortillas topped with avocado slices and salsa."
    ],
    timer: { minutes: 25, label: "Pressure Cook" }
  },
  {
    id: "egg-fried-rice",
    name: "Egg Fried Rice",
    methods: ["saute"],
    mealType: "lunch",
    servings: 2,
    ingredients: [
      { amount: 2, unit: "cups", item: "cooked rice", cat: "Grains & Pasta" },
      { amount: 2, unit: "", item: "eggs", cat: "Proteins" },
      { amount: 1, unit: "cup", item: "frozen peas and carrots", cat: "Frozen" },
      { amount: 2, unit: "tbsp", item: "soy sauce", cat: "Pantry" },
      { amount: 1, unit: "tbsp", item: "sesame oil", cat: "Pantry" },
      { amount: 2, unit: "", item: "green onions, sliced", cat: "Produce" }
    ],
    steps: [
      "Set the Instant Pot to Saut\u00e9 mode and heat sesame oil.",
      "Scramble the eggs in the pot, then set aside.",
      "Add frozen peas and carrots, cook 2 min.",
      "Add cooked rice and stir-fry for 3 min.",
      "Pour in soy sauce and return the scrambled eggs. Toss to combine.",
      "Top with sliced green onions."
    ],
    timer: { minutes: 8, label: "Saut\u00e9" }
  },
  {
    id: "tomato-basil-soup",
    name: "Tomato Basil Soup",
    methods: ["saute", "pressure"],
    mealType: "lunch",
    servings: 4,
    ingredients: [
      { amount: 1, unit: "tbsp", item: "olive oil", cat: "Pantry" },
      { amount: 1, unit: "", item: "onion, diced", cat: "Produce" },
      { amount: 2, unit: "cloves", item: "garlic, minced", cat: "Produce" },
      { amount: 2, unit: "cans", item: "diced tomatoes", cat: "Canned / Jarred" },
      { amount: 1, unit: "cup", item: "vegetable broth", cat: "Canned / Jarred" },
      { amount: 0, unit: "", item: "fresh basil leaves", cat: "Produce" },
      { amount: 0, unit: "", item: "salt, pepper", cat: "Pantry" }
    ],
    steps: [
      "Saut\u00e9 diced onion in olive oil for 3 min.",
      "Add garlic and cook 1 min.",
      "Add diced tomatoes, vegetable broth, salt, and pepper.",
      "Pressure Cook 10 min, Quick Release.",
      "Blend until smooth with an immersion blender.",
      "Stir in torn fresh basil leaves."
    ],
    timer: { minutes: 10, label: "Pressure Cook" }
  },
  {
    id: "quinoa-veggie-bowl",
    name: "Quinoa Veggie Bowl",
    methods: ["pressure"],
    mealType: "lunch",
    servings: 2,
    ingredients: [
      { amount: 1, unit: "cup", item: "quinoa", cat: "Grains & Pasta" },
      { amount: 1.25, unit: "cups", item: "water", cat: null },
      { amount: 1, unit: "can", item: "chickpeas, drained", cat: "Canned / Jarred" },
      { amount: 1, unit: "cup", item: "cherry tomatoes, halved", cat: "Produce" },
      { amount: 1, unit: "", item: "cucumber, diced", cat: "Produce" },
      { amount: 2, unit: "tbsp", item: "olive oil", cat: "Pantry" },
      { amount: 1, unit: "tbsp", item: "lemon juice", cat: "Pantry" },
      { amount: 0, unit: "", item: "salt, pepper", cat: "Pantry" }
    ],
    steps: [
      "Add quinoa, water, and a pinch of salt to the pot.",
      "Pressure Cook 1 min, Natural Release 10 min.",
      "Fluff quinoa with a fork.",
      "Top with chickpeas, cherry tomatoes, and diced cucumber.",
      "Drizzle with olive oil and lemon juice."
    ],
    timer: { minutes: 1, label: "Pressure Cook" }
  },
  {
    id: "chicken-lettuce-wraps",
    name: "Chicken Lettuce Wraps",
    methods: ["pressure"],
    mealType: "lunch",
    servings: 2,
    ingredients: [
      { amount: 2, unit: "", item: "chicken thighs", cat: "Proteins" },
      { amount: 0.5, unit: "cup", item: "chicken broth", cat: "Canned / Jarred" },
      { amount: 2, unit: "tbsp", item: "soy sauce", cat: "Pantry" },
      { amount: 1, unit: "tbsp", item: "sesame oil", cat: "Pantry" },
      { amount: 1, unit: "head", item: "lettuce", cat: "Produce" },
      { amount: 1, unit: "", item: "carrot, shredded", cat: "Produce" },
      { amount: 0, unit: "", item: "salt, pepper", cat: "Pantry" }
    ],
    steps: [
      "Add chicken thighs, chicken broth, soy sauce, and sesame oil to the pot.",
      "Pressure Cook 10 min, Quick Release.",
      "Shred chicken with two forks.",
      "Serve shredded chicken in lettuce leaves with shredded carrot."
    ],
    timer: { minutes: 10, label: "Pressure Cook" }
  },
  {
    id: "stuffed-sweet-potatoes",
    name: "Stuffed Sweet Potatoes",
    methods: ["combo"],
    mealType: "lunch",
    servings: 2,
    ingredients: [
      { amount: 2, unit: "", item: "sweet potatoes", cat: "Produce" },
      { amount: 1, unit: "cup", item: "water", cat: null },
      { amount: 1, unit: "can", item: "black beans, drained", cat: "Canned / Jarred" },
      { amount: 0.5, unit: "cup", item: "salsa", cat: "Canned / Jarred" },
      { amount: 1, unit: "", item: "avocado", cat: "Produce" },
      { amount: 0, unit: "", item: "salt, pepper", cat: "Pantry" }
    ],
    steps: [
      "Add water to the pot and place sweet potatoes on the trivet.",
      "Pressure Cook 15 min, Quick Release.",
      "Cut sweet potatoes open and transfer to the air fryer basket.",
      "Air Crisp 400\u00b0F, 5 min for crispy skin.",
      "Fill with black beans, salsa, and sliced avocado."
    ],
    timer: { minutes: 15, label: "Pressure Cook" }
  },
  {
    id: "minestrone-soup",
    name: "Minestrone Soup",
    methods: ["pressure"],
    mealType: "lunch",
    servings: 4,
    ingredients: [
      { amount: 1, unit: "can", item: "diced tomatoes", cat: "Canned / Jarred" },
      { amount: 1, unit: "can", item: "kidney beans, drained", cat: "Canned / Jarred" },
      { amount: 4, unit: "cups", item: "vegetable broth", cat: "Canned / Jarred" },
      { amount: 1, unit: "", item: "zucchini, diced", cat: "Produce" },
      { amount: 1, unit: "cup", item: "small pasta", cat: "Grains & Pasta" },
      { amount: 1, unit: "", item: "onion, diced", cat: "Produce" },
      { amount: 2, unit: "", item: "carrots, diced", cat: "Produce" },
      { amount: 1, unit: "tbsp", item: "olive oil", cat: "Pantry" },
      { amount: 0, unit: "", item: "Italian seasoning", cat: "Pantry" },
      { amount: 0, unit: "", item: "salt, pepper", cat: "Pantry" }
    ],
    steps: [
      "Add all ingredients except the pasta to the pot.",
      "Pressure Cook 5 min, Quick Release.",
      "Add pasta and switch to Saut\u00e9 mode for 8 min until pasta is tender.",
      "Season to taste and serve."
    ],
    timer: { minutes: 5, label: "Pressure Cook" }
  },

  // ─────────────────────────────────────────────
  //  DINNER (12)
  // ─────────────────────────────────────────────

  {
    id: "rice-chicken",
    name: "White Rice + Seasoned Chicken Thighs",
    methods: ["pressure"],
    mealType: "dinner",
    servings: 2,
    ingredients: [
      { amount: 1, unit: "cup", item: "white rice", cat: "Grains & Pasta" },
      { amount: 1, unit: "cup", item: "water (for rice)", cat: null },
      { amount: 4, unit: "", item: "chicken thighs", cat: "Proteins" },
      { amount: 0, unit: "", item: "salt, pepper, paprika, garlic powder", cat: "Pantry" }
    ],
    steps: [
      "Rice: Add 1 cup rice + 1 cup water. Pressure Cook 4 min, Natural Release 10 min.",
      "Chicken: Season thighs with salt, pepper, paprika, and garlic powder.",
      "Pressure Cook chicken 10 min, Natural Release 5 min.",
      "Serve chicken over fluffy rice."
    ],
    timer: { minutes: 10, label: "Pressure Cook" }
  },
  {
    id: "one-pot-pasta",
    name: "One-Pot Pasta",
    methods: ["pressure"],
    mealType: "dinner",
    servings: 4,
    ingredients: [
      { amount: 1, unit: "lb", item: "penne pasta", cat: "Grains & Pasta" },
      { amount: 1, unit: "jar", item: "marinara sauce (dairy-free)", cat: "Canned / Jarred" },
      { amount: 3, unit: "cups", item: "water", cat: null },
      { amount: 0, unit: "", item: "salt", cat: "Pantry" }
    ],
    steps: [
      "Add penne, marinara sauce, water, and salt to the pot.",
      "Stir so pasta is fully submerged.",
      "Pressure Cook 5 min, Quick Release. Stir well before serving."
    ],
    timer: { minutes: 5, label: "Pressure Cook" }
  },
  {
    id: "crispy-chicken",
    name: "Crispy Chicken Thighs (Combo Move!)",
    methods: ["combo"],
    mealType: "dinner",
    servings: 2,
    ingredients: [
      { amount: 4, unit: "", item: "chicken thighs, seasoned", cat: "Proteins" },
      { amount: 1, unit: "cup", item: "water", cat: null }
    ],
    steps: [
      "Season chicken thighs with your favorite spices.",
      "Add 1 cup water to the pot and place chicken on the trivet.",
      "Pressure Cook 10 min, Quick Release.",
      "Transfer chicken to the air fryer basket.",
      "Air Crisp 400\u00b0F, 8 min until skin is golden and crispy.",
      "Serve with leftover rice or a side salad."
    ],
    timer: { minutes: 10, label: "Pressure Cook" }
  },
  {
    id: "veggie-potato-soup",
    name: "Veggie Potato Soup",
    methods: ["saute", "pressure"],
    mealType: "dinner",
    servings: 4,
    ingredients: [
      { amount: 1, unit: "", item: "onion, diced", cat: "Produce" },
      { amount: 3, unit: "", item: "carrots, diced", cat: "Produce" },
      { amount: 3, unit: "stalks", item: "celery, diced", cat: "Produce" },
      { amount: 2, unit: "tbsp", item: "olive oil", cat: "Pantry" },
      { amount: 4, unit: "", item: "potatoes, diced", cat: "Produce" },
      { amount: 4, unit: "cups", item: "chicken broth", cat: "Canned / Jarred" },
      { amount: 0, unit: "", item: "salt, pepper", cat: "Pantry" }
    ],
    steps: [
      "Saut\u00e9 diced onion, carrots, and celery in olive oil for 4 min.",
      "Add diced potatoes, chicken broth, salt, and pepper.",
      "Pressure Cook 8 min, Quick Release.",
      "Mash some potatoes in the pot for a thicker texture."
    ],
    timer: { minutes: 8, label: "Pressure Cook" }
  },
  {
    id: "beef-chili",
    name: "Beef Chili",
    methods: ["saute", "pressure"],
    mealType: "dinner",
    servings: 4,
    ingredients: [
      { amount: 1, unit: "lb", item: "ground beef", cat: "Proteins" },
      { amount: 1, unit: "", item: "onion, diced", cat: "Produce" },
      { amount: 2, unit: "cans", item: "diced tomatoes", cat: "Canned / Jarred" },
      { amount: 1, unit: "can", item: "kidney beans, drained", cat: "Canned / Jarred" },
      { amount: 1, unit: "small can", item: "tomato paste", cat: "Canned / Jarred" },
      { amount: 0, unit: "", item: "chili powder, cumin, garlic powder, salt", cat: "Pantry" }
    ],
    steps: [
      "Saut\u00e9 ground beef and diced onion for 5 min, breaking up the meat.",
      "Add diced tomatoes, kidney beans (drained), and tomato paste.",
      "Season with chili powder, cumin, garlic powder, and salt.",
      "Pressure Cook 20 min, Natural Release 10 min."
    ],
    timer: { minutes: 20, label: "Pressure Cook" }
  },
  {
    id: "coconut-rice-chicken",
    name: "Coconut Rice + Chicken",
    methods: ["pressure"],
    mealType: "dinner",
    servings: 2,
    ingredients: [
      { amount: 1, unit: "cup", item: "white rice", cat: "Grains & Pasta" },
      { amount: 1, unit: "can", item: "coconut milk (full fat)", cat: "Canned / Jarred" },
      { amount: 2, unit: "", item: "chicken thighs", cat: "Proteins" },
      { amount: 0, unit: "", item: "salt, pepper, garlic powder", cat: "Pantry" },
      { amount: 0, unit: "", item: "water (to top off to 1.5 cups liquid)", cat: null }
    ],
    steps: [
      "Season chicken thighs with salt, pepper, and garlic powder.",
      "Add rice and coconut milk to the pot, top off with water to reach 1.5 cups total liquid.",
      "Place seasoned chicken on top of the rice.",
      "Pressure Cook 10 min, Natural Release 10 min.",
      "Shred chicken with two forks, fluff rice, and serve together."
    ],
    timer: { minutes: 10, label: "Pressure Cook" }
  },
  {
    id: "pulled-pork",
    name: "Pulled Pork",
    methods: ["pressure"],
    mealType: "dinner",
    servings: 6,
    ingredients: [
      { amount: 2, unit: "lb", item: "pork shoulder", cat: "Proteins" },
      { amount: 1, unit: "cup", item: "chicken broth", cat: "Canned / Jarred" },
      { amount: 2, unit: "tbsp", item: "brown sugar", cat: "Pantry" },
      { amount: 1, unit: "tbsp", item: "paprika", cat: "Pantry" },
      { amount: 1, unit: "tbsp", item: "garlic powder", cat: "Pantry" },
      { amount: 1, unit: "tbsp", item: "onion powder", cat: "Pantry" },
      { amount: 0, unit: "", item: "salt, pepper", cat: "Pantry" }
    ],
    steps: [
      "Mix brown sugar, paprika, garlic powder, onion powder, salt, and pepper in a bowl.",
      "Rub the spice mixture all over the pork shoulder.",
      "Add chicken broth to the pot and place the pork inside.",
      "Pressure Cook 60 min, Natural Release 15 min.",
      "Shred pork with two forks and mix with the pot juices."
    ],
    timer: { minutes: 60, label: "Pressure Cook" }
  },
  {
    id: "air-fryer-salmon",
    name: "Air Fryer Salmon + Veggies",
    methods: ["air"],
    mealType: "dinner",
    servings: 2,
    ingredients: [
      { amount: 2, unit: "", item: "salmon fillets", cat: "Proteins" },
      { amount: 2, unit: "cups", item: "broccoli florets", cat: "Produce" },
      { amount: 1, unit: "tbsp", item: "olive oil", cat: "Pantry" },
      { amount: 1, unit: "tbsp", item: "soy sauce", cat: "Pantry" },
      { amount: 1, unit: "tsp", item: "garlic powder", cat: "Pantry" },
      { amount: 0, unit: "", item: "lemon wedges", cat: "Produce" },
      { amount: 0, unit: "", item: "salt, pepper", cat: "Pantry" }
    ],
    steps: [
      "Toss broccoli florets with olive oil and salt.",
      "Place salmon fillets in the air fryer basket and brush with soy sauce and garlic powder.",
      "Arrange broccoli around the salmon.",
      "Air Crisp 400\u00b0F, 10 min.",
      "Serve with fresh lemon wedges."
    ],
    timer: { minutes: 10, label: "Air Crisp" }
  },
  {
    id: "beef-stew",
    name: "Beef Stew",
    methods: ["saute", "pressure"],
    mealType: "dinner",
    servings: 4,
    ingredients: [
      { amount: 1, unit: "lb", item: "beef chuck, cubed", cat: "Proteins" },
      { amount: 3, unit: "", item: "potatoes, cubed", cat: "Produce" },
      { amount: 3, unit: "", item: "carrots, sliced", cat: "Produce" },
      { amount: 1, unit: "", item: "onion, diced", cat: "Produce" },
      { amount: 2, unit: "cups", item: "beef broth", cat: "Canned / Jarred" },
      { amount: 2, unit: "tbsp", item: "tomato paste", cat: "Canned / Jarred" },
      { amount: 2, unit: "tbsp", item: "olive oil", cat: "Pantry" },
      { amount: 0, unit: "", item: "salt, pepper, thyme", cat: "Pantry" }
    ],
    steps: [
      "Saut\u00e9 beef cubes in olive oil until browned, about 5 min.",
      "Add diced onion and cook 2 min.",
      "Add beef broth, tomato paste, thyme, salt, and pepper. Stir.",
      "Add potatoes and carrots.",
      "Pressure Cook 20 min, Natural Release 10 min."
    ],
    timer: { minutes: 20, label: "Pressure Cook" }
  },
  {
    id: "teriyaki-chicken-rice",
    name: "Teriyaki Chicken + Rice",
    methods: ["pressure"],
    mealType: "dinner",
    servings: 2,
    ingredients: [
      { amount: 4, unit: "", item: "chicken thighs", cat: "Proteins" },
      { amount: 1, unit: "cup", item: "white rice", cat: "Grains & Pasta" },
      { amount: 1, unit: "cup", item: "water", cat: null },
      { amount: 3, unit: "tbsp", item: "soy sauce", cat: "Pantry" },
      { amount: 2, unit: "tbsp", item: "maple syrup", cat: "Pantry" },
      { amount: 1, unit: "tsp", item: "garlic powder", cat: "Pantry" },
      { amount: 1, unit: "tsp", item: "ginger powder", cat: "Pantry" },
      { amount: 1, unit: "tbsp", item: "cornstarch", cat: "Pantry" },
      { amount: 0, unit: "", item: "green onions for garnish", cat: "Produce" }
    ],
    steps: [
      "Mix soy sauce, maple syrup, garlic powder, and ginger powder for the teriyaki sauce.",
      "Add rice and water to the pot. Lay chicken thighs on top.",
      "Pour the sauce over the chicken.",
      "Pressure Cook 10 min, Natural Release 5 min.",
      "Remove chicken. Mix cornstarch with 1 tbsp water, stir into sauce on Saut\u00e9 mode to thicken.",
      "Serve chicken over rice and top with sliced green onions."
    ],
    timer: { minutes: 10, label: "Pressure Cook" }
  },
  {
    id: "chicken-curry",
    name: "Chicken Curry",
    methods: ["saute", "pressure"],
    mealType: "dinner",
    servings: 4,
    ingredients: [
      { amount: 4, unit: "", item: "chicken thighs, cubed", cat: "Proteins" },
      { amount: 1, unit: "can", item: "coconut milk", cat: "Canned / Jarred" },
      { amount: 1, unit: "", item: "onion, diced", cat: "Produce" },
      { amount: 2, unit: "cloves", item: "garlic, minced", cat: "Produce" },
      { amount: 1, unit: "tbsp", item: "curry powder", cat: "Pantry" },
      { amount: 1, unit: "tsp", item: "turmeric", cat: "Pantry" },
      { amount: 1, unit: "can", item: "diced tomatoes", cat: "Canned / Jarred" },
      { amount: 1, unit: "tbsp", item: "olive oil", cat: "Pantry" },
      { amount: 0, unit: "", item: "salt", cat: "Pantry" }
    ],
    steps: [
      "Saut\u00e9 diced onion in olive oil for 3 min.",
      "Add garlic, curry powder, and turmeric. Stir for 1 min.",
      "Add cubed chicken, diced tomatoes, coconut milk, and salt.",
      "Pressure Cook 10 min, Natural Release 5 min.",
      "Serve over steamed rice."
    ],
    timer: { minutes: 10, label: "Pressure Cook" }
  },
  {
    id: "pork-chops-potatoes",
    name: "Pork Chops + Potatoes",
    methods: ["combo"],
    mealType: "dinner",
    servings: 2,
    ingredients: [
      { amount: 2, unit: "", item: "bone-in pork chops", cat: "Proteins" },
      { amount: 4, unit: "", item: "small potatoes, halved", cat: "Produce" },
      { amount: 1, unit: "cup", item: "chicken broth", cat: "Canned / Jarred" },
      { amount: 1, unit: "tbsp", item: "olive oil", cat: "Pantry" },
      { amount: 0, unit: "", item: "garlic powder, paprika, salt, pepper", cat: "Pantry" }
    ],
    steps: [
      "Season pork chops with garlic powder, paprika, salt, and pepper.",
      "Add chicken broth to the pot. Place potatoes and pork chops inside.",
      "Pressure Cook 8 min, Quick Release.",
      "Transfer pork chops to the air fryer basket.",
      "Air Crisp 400\u00b0F, 5 min until crispy on the outside.",
      "Serve pork chops with the cooked potatoes."
    ],
    timer: { minutes: 8, label: "Pressure Cook" }
  },

  // ─────────────────────────────────────────────
  //  DESSERT (10)
  // ─────────────────────────────────────────────

  {
    id: "coconut-rice-pudding",
    name: "Coconut Rice Pudding",
    methods: ["pressure"],
    mealType: "dessert",
    servings: 4,
    ingredients: [
      { amount: 1, unit: "cup", item: "white rice", cat: "Grains & Pasta" },
      { amount: 1, unit: "can", item: "coconut milk", cat: "Canned / Jarred" },
      { amount: 1, unit: "cup", item: "water", cat: null },
      { amount: 3, unit: "tbsp", item: "maple syrup", cat: "Pantry" },
      { amount: 1, unit: "tsp", item: "vanilla extract", cat: "Pantry" },
      { amount: 0, unit: "", item: "cinnamon for topping", cat: "Pantry" }
    ],
    steps: [
      "Add rice, coconut milk, water, maple syrup, and vanilla extract to the pot.",
      "Pressure Cook 10 min, Natural Release 10 min.",
      "Stir well and sprinkle with cinnamon.",
      "Serve warm or chilled."
    ],
    timer: { minutes: 10, label: "Pressure Cook" }
  },
  {
    id: "banana-bread",
    name: "Banana Bread",
    methods: ["air"],
    mealType: "dessert",
    servings: 6,
    ingredients: [
      { amount: 3, unit: "", item: "ripe bananas, mashed", cat: "Produce" },
      { amount: 1.5, unit: "cups", item: "flour", cat: "Grains & Pasta" },
      { amount: 0.33, unit: "cup", item: "coconut oil, melted", cat: "Pantry" },
      { amount: 0.33, unit: "cup", item: "maple syrup", cat: "Pantry" },
      { amount: 1, unit: "tsp", item: "baking soda", cat: "Pantry" },
      { amount: 1, unit: "tsp", item: "vanilla extract", cat: "Pantry" },
      { amount: 0, unit: "", item: "pinch salt", cat: "Pantry" }
    ],
    steps: [
      "Mix mashed bananas, melted coconut oil, maple syrup, and vanilla in a bowl.",
      "Add flour, baking soda, and salt. Stir until just combined.",
      "Pour batter into a greased loaf pan that fits the air fryer.",
      "Air Crisp 310\u00b0F, 30 min. Test with a toothpick\u2014it should come out clean."
    ],
    timer: { minutes: 30, label: "Air Crisp" }
  },
  {
    id: "brownies",
    name: "Dairy-Free Brownies",
    methods: ["pressure"],
    mealType: "dessert",
    servings: 8,
    ingredients: [
      { amount: 0.5, unit: "cup", item: "coconut oil, melted", cat: "Pantry" },
      { amount: 0.75, unit: "cup", item: "sugar", cat: "Pantry" },
      { amount: 2, unit: "", item: "eggs", cat: "Proteins" },
      { amount: 0.5, unit: "cup", item: "cocoa powder", cat: "Pantry" },
      { amount: 0.5, unit: "cup", item: "flour", cat: "Grains & Pasta" },
      { amount: 1, unit: "tsp", item: "vanilla extract", cat: "Pantry" },
      { amount: 0, unit: "", item: "pinch salt", cat: "Pantry" },
      { amount: 1, unit: "cup", item: "water", cat: null }
    ],
    steps: [
      "Mix melted coconut oil, sugar, eggs, and vanilla in a bowl.",
      "Stir in cocoa powder, flour, and salt until smooth.",
      "Pour batter into a greased pan and cover tightly with foil.",
      "Add 1 cup water to the pot and place the pan on the trivet.",
      "Pressure Cook 25 min, Natural Release 10 min.",
      "Let cool completely before cutting into squares."
    ],
    timer: { minutes: 25, label: "Pressure Cook" }
  },
  {
    id: "chocolate-lava-cake",
    name: "Chocolate Lava Cake",
    methods: ["pressure"],
    mealType: "dessert",
    servings: 2,
    ingredients: [
      { amount: 3, unit: "tbsp", item: "coconut oil", cat: "Pantry" },
      { amount: 0.25, unit: "cup", item: "dairy-free chocolate chips", cat: "Pantry" },
      { amount: 1, unit: "", item: "egg", cat: "Proteins" },
      { amount: 2, unit: "tbsp", item: "sugar", cat: "Pantry" },
      { amount: 2, unit: "tbsp", item: "flour", cat: "Grains & Pasta" },
      { amount: 1, unit: "cup", item: "water", cat: null }
    ],
    steps: [
      "Melt coconut oil and chocolate chips together, stirring until smooth.",
      "Whisk in the egg and sugar.",
      "Fold in the flour gently.",
      "Pour into 2 greased ramekins and cover each with foil.",
      "Add 1 cup water to the pot and place ramekins on the trivet.",
      "Pressure Cook 8 min, Quick Release.",
      "Let sit 2 min, then invert onto plates. Centers should be gooey."
    ],
    timer: { minutes: 8, label: "Pressure Cook" }
  },
  {
    id: "air-fryer-donuts",
    name: "Air Fryer Donuts",
    methods: ["air"],
    mealType: "dessert",
    servings: 6,
    ingredients: [
      { amount: 1, unit: "cup", item: "flour", cat: "Grains & Pasta" },
      { amount: 0.25, unit: "cup", item: "sugar", cat: "Pantry" },
      { amount: 1, unit: "tsp", item: "baking powder", cat: "Pantry" },
      { amount: 0.25, unit: "cup", item: "oat milk", cat: "Pantry" },
      { amount: 2, unit: "tbsp", item: "coconut oil, melted", cat: "Pantry" },
      { amount: 1, unit: "", item: "egg", cat: "Proteins" },
      { amount: 1, unit: "tsp", item: "vanilla extract", cat: "Pantry" },
      { amount: 0, unit: "", item: "cinnamon sugar for coating", cat: "Pantry" }
    ],
    steps: [
      "Mix flour, sugar, and baking powder in a bowl.",
      "Add oat milk, melted coconut oil, egg, and vanilla. Stir until smooth.",
      "Pipe batter into a greased donut mold or shape by hand.",
      "Air Crisp 350\u00b0F, 8 min.",
      "Toss warm donuts in cinnamon sugar to coat."
    ],
    timer: { minutes: 8, label: "Air Crisp" }
  },
  {
    id: "baked-pears",
    name: "Baked Pears with Walnuts",
    methods: ["air"],
    mealType: "dessert",
    servings: 2,
    ingredients: [
      { amount: 2, unit: "", item: "pears, halved and cored", cat: "Produce" },
      { amount: 2, unit: "tbsp", item: "walnuts, chopped", cat: "Pantry" },
      { amount: 1, unit: "tbsp", item: "maple syrup", cat: "Pantry" },
      { amount: 0.5, unit: "tsp", item: "cinnamon", cat: "Pantry" },
      { amount: 1, unit: "tsp", item: "coconut oil", cat: "Pantry" }
    ],
    steps: [
      "Place pear halves cut-side up in the air fryer basket.",
      "Mix chopped walnuts, maple syrup, cinnamon, and coconut oil in a small bowl.",
      "Spoon the walnut mixture into the center of each pear half.",
      "Air Crisp 350\u00b0F, 12 min until pears are tender."
    ],
    timer: { minutes: 12, label: "Air Crisp" }
  },
  {
    id: "mango-sticky-rice",
    name: "Mango Sticky Rice",
    methods: ["pressure"],
    mealType: "dessert",
    servings: 2,
    ingredients: [
      { amount: 1, unit: "cup", item: "sticky rice (glutinous rice)", cat: "Grains & Pasta" },
      { amount: 1, unit: "cup", item: "water", cat: null },
      { amount: 0.5, unit: "can", item: "coconut milk", cat: "Canned / Jarred" },
      { amount: 2, unit: "tbsp", item: "sugar", cat: "Pantry" },
      { amount: 0, unit: "", item: "pinch salt", cat: "Pantry" },
      { amount: 1, unit: "", item: "mango, sliced", cat: "Produce" }
    ],
    steps: [
      "Soak sticky rice in water for 30 min, then drain.",
      "Add soaked rice and 1 cup water to the pot.",
      "Pressure Cook 3 min, Natural Release 10 min.",
      "Warm coconut milk with sugar and a pinch of salt, then stir into the cooked rice.",
      "Let the rice sit for 10 min to absorb the coconut mixture.",
      "Serve topped with sliced mango."
    ],
    timer: { minutes: 3, label: "Pressure Cook" }
  },
  {
    id: "energy-oat-bites",
    name: "Energy Oat Bites",
    methods: ["air"],
    mealType: "dessert",
    servings: 4,
    ingredients: [
      { amount: 1, unit: "cup", item: "rolled oats", cat: "Grains & Pasta" },
      { amount: 0.5, unit: "cup", item: "peanut butter", cat: "Pantry" },
      { amount: 3, unit: "tbsp", item: "maple syrup", cat: "Pantry" },
      { amount: 0.25, unit: "cup", item: "dairy-free chocolate chips", cat: "Pantry" },
      { amount: 2, unit: "tbsp", item: "coconut flakes", cat: "Pantry" }
    ],
    steps: [
      "Mix rolled oats, peanut butter, maple syrup, chocolate chips, and coconut flakes in a bowl.",
      "Roll the mixture into 12 even balls.",
      "Place balls on parchment paper in the air fryer basket.",
      "Air Crisp 300\u00b0F, 8 min.",
      "Let cool completely to firm up before serving."
    ],
    timer: { minutes: 8, label: "Air Crisp" }
  },
  {
    id: "poached-plums",
    name: "Poached Cinnamon Plums",
    methods: ["pressure"],
    mealType: "dessert",
    servings: 2,
    ingredients: [
      { amount: 4, unit: "", item: "plums, halved and pitted", cat: "Produce" },
      { amount: 0.5, unit: "cup", item: "water", cat: null },
      { amount: 2, unit: "tbsp", item: "maple syrup", cat: "Pantry" },
      { amount: 1, unit: "", item: "cinnamon stick", cat: "Pantry" },
      { amount: 1, unit: "tsp", item: "vanilla extract", cat: "Pantry" }
    ],
    steps: [
      "Add water, maple syrup, cinnamon stick, and vanilla extract to the pot.",
      "Place plum halves in the liquid, cut-side down.",
      "Pressure Cook 2 min, Quick Release.",
      "Carefully remove the plums to a serving dish.",
      "Switch to Saut\u00e9 mode and reduce the liquid for 3 min to create a syrup.",
      "Drizzle the syrup over the plums."
    ],
    timer: { minutes: 2, label: "Pressure Cook" }
  },
  {
    id: "sweet-potato-pudding",
    name: "Sweet Potato Pudding",
    methods: ["pressure"],
    mealType: "dessert",
    servings: 4,
    ingredients: [
      { amount: 2, unit: "", item: "sweet potatoes, peeled and cubed", cat: "Produce" },
      { amount: 1, unit: "can", item: "coconut milk", cat: "Canned / Jarred" },
      { amount: 3, unit: "tbsp", item: "maple syrup", cat: "Pantry" },
      { amount: 1, unit: "tsp", item: "cinnamon", cat: "Pantry" },
      { amount: 0.5, unit: "tsp", item: "nutmeg", cat: "Pantry" },
      { amount: 1, unit: "tsp", item: "vanilla extract", cat: "Pantry" },
      { amount: 0, unit: "", item: "pinch salt", cat: "Pantry" }
    ],
    steps: [
      "Add cubed sweet potatoes, coconut milk, maple syrup, cinnamon, nutmeg, vanilla, and a pinch of salt to the pot.",
      "Pressure Cook 8 min, Quick Release.",
      "Mash or blend the mixture until smooth and creamy.",
      "Serve warm or chilled."
    ],
    timer: { minutes: 8, label: "Pressure Cook" }
  }
];

const defaultWeekPlan = [
  { meals: [] },
  { meals: [] },
  { meals: [] },
  { meals: [] },
  { meals: [] },
  { meals: [] },
  { meals: [] }
];
