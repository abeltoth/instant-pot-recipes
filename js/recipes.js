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
      "Pressure Cook 5 min, Natural Release 5 min.",
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
      "Air Crisp 400\u00b0F, 15 min, shake basket every 5 min.",
      "Cook eggs separately on the stove."
    ],
    timer: { minutes: 15, label: "Air Crisp" }
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
    id: "cinnamon-apple-chips",
    name: "Cinnamon Apple Chips",
    methods: ["air"],
    mealType: "breakfast",
    servings: 2,
    ingredients: [
      { amount: 2, unit: "", item: "apples, thinly sliced (1-2mm)", cat: "Produce" },
      { amount: 1, unit: "tsp", item: "cinnamon", cat: "Pantry" },
      { amount: 1, unit: "tbsp", item: "sugar (optional)", cat: "Pantry" },
      { amount: 0, unit: "", item: "oil spray", cat: "Pantry" }
    ],
    steps: [
      "Slice apples thinly using a mandoline or sharp knife. Remove seeds.",
      "Toss slices with cinnamon and sugar.",
      "Lightly spray the air fryer basket with oil. Arrange slices in a single layer.",
      "Air Crisp 300°F, 15 min. Check at 12 min — chips should be dry and curled.",
      "Let cool completely to crisp up. Serve with yogurt or oatmeal."
    ],
    timer: { minutes: 15, label: "Air Crisp" }
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
      "Place seam-side down in the air fryer basket.",
      "Air Crisp 400\u00b0F, 8 min total \u2014 flip halfway through."
    ],
    timer: { minutes: 8, label: "Air Crisp" }
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
      "Saut\u00e9 diced onion in olive oil for 3 min. Add garlic, cumin, and paprika, stir 1 min.",
      "Add diced tomatoes, salt, and pepper. Stir to combine.",
      "Pressure Cook 5 min, Quick Release.",
      "Make 4 wells in the sauce and crack an egg into each.",
      "Pressure Cook 0 min (eggs cook as pot comes to pressure), Quick Release. Eggs should be just set."
    ],
    timer: { minutes: 5, label: "Pressure Cook" }
  },
  {
    id: "rice-porridge",
    name: "Rice Porridge",
    methods: ["pressure"],
    mealType: "breakfast",
    servings: 2,
    ingredients: [
      { amount: 0.5, unit: "cup", item: "white rice", cat: "Grains & Pasta" },
      { amount: 5, unit: "cups", item: "water", cat: null },
      { amount: 1, unit: "tsp", item: "fresh ginger, grated", cat: "Produce" },
      { amount: 2, unit: "", item: "green onions, sliced", cat: "Produce" },
      { amount: 1, unit: "tbsp", item: "soy sauce", cat: "Pantry" },
      { amount: 0, unit: "", item: "salt", cat: "Pantry" }
    ],
    steps: [
      "Add rice, water, grated ginger, and salt to the pot.",
      "Pressure Cook 30 min, Natural Release 15 min.",
      "Stir until creamy. Top with sliced green onions and a drizzle of soy sauce."
    ],
    timer: { minutes: 30, label: "Pressure Cook" }
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
      { amount: 3, unit: "cups", item: "water", cat: null },
      { amount: 1, unit: "tsp", item: "cumin", cat: "Pantry" },
      { amount: 1, unit: "tsp", item: "chili powder", cat: "Pantry" },
      { amount: 8, unit: "", item: "corn tortillas", cat: "Grains & Pasta" },
      { amount: 1, unit: "", item: "avocado, sliced", cat: "Produce" },
      { amount: 0, unit: "", item: "salsa", cat: "Canned / Jarred" },
      { amount: 0, unit: "", item: "salt", cat: "Pantry" }
    ],
    steps: [
      "Add black beans, water, cumin, and chili powder to the pot. Do NOT add salt yet.",
      "Pressure Cook 30 min, Natural Release 20 min. Add salt after cooking.",
      "Mash beans slightly with a fork.",
      "Serve in corn tortillas topped with avocado slices and salsa."
    ],
    timer: { minutes: 30, label: "Pressure Cook" }
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
      "Pierce sweet potatoes with a fork. Add water to the pot and place them on the trivet.",
      "Pressure Cook 15 min, Natural Release 10 min.",
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
      "Add 1 cup rice + 1 cup water to the pot.",
      "Season chicken thighs with salt, pepper, paprika, and garlic powder. Place on top of rice.",
      "Pressure Cook 8 min, Natural Release 10 min.",
      "Remove chicken, fluff rice with a fork, and serve together."
    ],
    timer: { minutes: 8, label: "Pressure Cook" }
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
      "Add water and salt to the pot first. Add penne. Pour marinara sauce on TOP \u2014 do NOT stir.",
      "Pressure Cook 4 min, Natural Release 5 min.",
      "Stir well to combine. If sauce is thin, Saut\u00e9 2 min to reduce."
    ],
    timer: { minutes: 4, label: "Pressure Cook" }
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
      "Air Crisp 400\u00b0F, 6 min until skin is golden and crispy.",
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
      "Cut pork shoulder into 3\u20134 even chunks for faster, even cooking.",
      "Mix brown sugar, paprika, garlic powder, onion powder, salt, and pepper. Rub all over the pork.",
      "Add chicken broth to the pot and place the pork inside.",
      "Pressure Cook 45 min, Natural Release 15 min.",
      "Shred pork with two forks and mix with the pot juices."
    ],
    timer: { minutes: 45, label: "Pressure Cook" }
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
      "Air Crisp 400\u00b0F, 8 min. Check at 7 min \u2014 salmon is done at 145\u00b0F.",
      "Serve with fresh lemon wedges."
    ],
    timer: { minutes: 8, label: "Air Crisp" }
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
      "Pressure Cook 35 min, Natural Release 10 min."
    ],
    timer: { minutes: 35, label: "Pressure Cook" }
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
      "Pressure Cook 8 min, Natural Release 10 min.",
      "Remove chicken. Mix cornstarch with 1 tbsp water, stir into sauce on Saut\u00e9 mode to thicken.",
      "Serve chicken over rice and top with sliced green onions."
    ],
    timer: { minutes: 8, label: "Pressure Cook" }
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
      "Add cubed chicken, diced tomatoes, and salt. Add coconut milk on top \u2014 do not stir.",
      "Pressure Cook 5 min, Natural Release 10 min.",
      "Serve over steamed rice."
    ],
    timer: { minutes: 5, label: "Pressure Cook" }
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
      "Air Crisp 310\u00b0F, 45 min. Cover with foil at 20 min to prevent over-browning.",
      "Test with a toothpick \u2014 it should come out clean."
    ],
    timer: { minutes: 45, label: "Air Crisp" }
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
      "Air Crisp 350\u00b0F, 5 min.",
      "Toss warm donuts in cinnamon sugar to coat."
    ],
    timer: { minutes: 5, label: "Air Crisp" }
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
      "Add sticky rice and 1 cup water to a stainless steel bowl. Place on trivet with 1 cup water in the pot.",
      "Pressure Cook 12 min, Natural Release 10 min.",
      "Warm coconut milk with sugar and a pinch of salt, then stir into the cooked rice.",
      "Let the rice sit for 10 min to absorb the coconut mixture.",
      "Serve topped with sliced mango."
    ],
    timer: { minutes: 12, label: "Pressure Cook" }
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
      "Pressure Cook 8 min, Natural Release 10 min.",
      "Mash or blend the mixture until smooth and creamy.",
      "Serve warm or chilled."
    ],
    timer: { minutes: 8, label: "Pressure Cook" }
  },

  // ─────────────────────────────────────────────
  //  POPULAR PICKS (10) — may contain dairy
  // ─────────────────────────────────────────────

  {
    id: "pot-roast",
    name: "Pot Roast",
    methods: ["saute", "pressure"],
    mealType: "dinner",
    servings: 6,
    ingredients: [
      { amount: 3, unit: "lb", item: "chuck roast", cat: "Proteins" },
      { amount: 1, unit: "cup", item: "beef broth", cat: "Canned / Jarred" },
      { amount: 1, unit: "", item: "onion, quartered", cat: "Produce" },
      { amount: 4, unit: "", item: "carrots, chunked", cat: "Produce" },
      { amount: 4, unit: "", item: "potatoes, quartered", cat: "Produce" },
      { amount: 4, unit: "cloves", item: "garlic, smashed", cat: "Produce" },
      { amount: 2, unit: "tbsp", item: "Worcestershire sauce", cat: "Pantry" },
      { amount: 2, unit: "tbsp", item: "olive oil", cat: "Pantry" },
      { amount: 0, unit: "", item: "salt, pepper, thyme", cat: "Pantry" }
    ],
    steps: [
      "Season chuck roast generously with salt, pepper, and thyme.",
      "Saut\u00e9 in olive oil, searing each side 3\u20134 min until browned.",
      "Add beef broth and Worcestershire sauce. Deglaze the pot.",
      "Add onion and garlic around the roast.",
      "Pressure Cook 60 min, Natural Release 15 min.",
      "Add carrots and potatoes, Pressure Cook 8 min, Quick Release.",
      "Slice roast against the grain and serve with vegetables and pot juices."
    ],
    timer: { minutes: 60, label: "Pressure Cook" }
  },
  {
    id: "butter-chicken",
    name: "Butter Chicken",
    methods: ["saute", "pressure"],
    mealType: "dinner",
    servings: 4,
    ingredients: [
      { amount: 4, unit: "", item: "chicken thighs, cubed", cat: "Proteins" },
      { amount: 2, unit: "tbsp", item: "butter", cat: "Pantry" },
      { amount: 1, unit: "cup", item: "tomato sauce", cat: "Canned / Jarred" },
      { amount: 0.5, unit: "cup", item: "heavy cream", cat: "Produce" },
      { amount: 1, unit: "", item: "onion, diced", cat: "Produce" },
      { amount: 3, unit: "cloves", item: "garlic, minced", cat: "Produce" },
      { amount: 1, unit: "tbsp", item: "ginger, grated", cat: "Produce" },
      { amount: 1, unit: "tbsp", item: "garam masala", cat: "Pantry" },
      { amount: 1, unit: "tsp", item: "cumin", cat: "Pantry" },
      { amount: 1, unit: "tsp", item: "turmeric", cat: "Pantry" },
      { amount: 0, unit: "", item: "salt", cat: "Pantry" }
    ],
    steps: [
      "Saut\u00e9 diced onion in butter for 3 min. Add garlic, ginger, garam masala, cumin, and turmeric. Stir 1 min.",
      "Add cubed chicken and tomato sauce. Stir to combine.",
      "Pressure Cook 5 min, Natural Release 5 min.",
      "Stir in heavy cream. Saut\u00e9 2 min to thicken.",
      "Serve over basmati rice."
    ],
    timer: { minutes: 5, label: "Pressure Cook" }
  },
  {
    id: "salsa-chicken",
    name: "Salsa Chicken",
    methods: ["pressure"],
    mealType: "lunch",
    servings: 4,
    ingredients: [
      { amount: 4, unit: "", item: "chicken breasts", cat: "Proteins" },
      { amount: 1, unit: "jar", item: "salsa (16 oz)", cat: "Canned / Jarred" },
      { amount: 1, unit: "tsp", item: "cumin", cat: "Pantry" },
      { amount: 1, unit: "tsp", item: "garlic powder", cat: "Pantry" },
      { amount: 0, unit: "", item: "salt, pepper", cat: "Pantry" }
    ],
    steps: [
      "Place chicken breasts in the pot. Pour salsa over the top.",
      "Season with cumin, garlic powder, salt, and pepper.",
      "Pressure Cook 8 min, Natural Release 5 min.",
      "Shred chicken with two forks and mix with the salsa.",
      "Serve in tacos, over rice, or in bowls."
    ],
    timer: { minutes: 8, label: "Pressure Cook" }
  },
  {
    id: "cheesecake",
    name: "New York Cheesecake",
    methods: ["pressure"],
    mealType: "dessert",
    servings: 8,
    ingredients: [
      { amount: 16, unit: "oz", item: "cream cheese, softened", cat: "Produce" },
      { amount: 0.5, unit: "cup", item: "sugar", cat: "Pantry" },
      { amount: 2, unit: "", item: "eggs", cat: "Proteins" },
      { amount: 0.33, unit: "cup", item: "sour cream", cat: "Produce" },
      { amount: 1, unit: "tsp", item: "vanilla extract", cat: "Pantry" },
      { amount: 2, unit: "tbsp", item: "flour", cat: "Grains & Pasta" },
      { amount: 1, unit: "cup", item: "graham cracker crumbs", cat: "Grains & Pasta" },
      { amount: 3, unit: "tbsp", item: "butter, melted", cat: "Pantry" },
      { amount: 1.5, unit: "cups", item: "water", cat: null }
    ],
    steps: [
      "Mix graham cracker crumbs with melted butter. Press into the bottom of a 7-inch springform pan.",
      "Beat cream cheese and sugar until smooth. Add eggs one at a time. Mix in sour cream, vanilla, and flour.",
      "Pour filling over the crust. Cover pan tightly with foil.",
      "Add 1.5 cups water to the pot. Place pan on trivet.",
      "Pressure Cook 25 min, Natural Release 10 min.",
      "Remove and chill in the fridge for at least 4 hours before serving."
    ],
    timer: { minutes: 25, label: "Pressure Cook" }
  },
  {
    id: "honey-garlic-chicken",
    name: "Honey Garlic Chicken",
    methods: ["saute", "pressure"],
    mealType: "dinner",
    servings: 4,
    ingredients: [
      { amount: 6, unit: "", item: "chicken thighs", cat: "Proteins" },
      { amount: 0.33, unit: "cup", item: "honey", cat: "Pantry" },
      { amount: 3, unit: "tbsp", item: "soy sauce", cat: "Pantry" },
      { amount: 4, unit: "cloves", item: "garlic, minced", cat: "Produce" },
      { amount: 1, unit: "tbsp", item: "olive oil", cat: "Pantry" },
      { amount: 1, unit: "tbsp", item: "cornstarch", cat: "Pantry" },
      { amount: 0, unit: "", item: "salt, pepper", cat: "Pantry" }
    ],
    steps: [
      "Mix honey, soy sauce, and minced garlic in a bowl.",
      "Saut\u00e9 chicken thighs in olive oil, 2 min per side.",
      "Pour honey garlic sauce over the chicken.",
      "Pressure Cook 8 min, Natural Release 5 min.",
      "Remove chicken. Mix cornstarch with 1 tbsp water, stir into sauce on Saut\u00e9 to thicken.",
      "Serve chicken with sauce over rice."
    ],
    timer: { minutes: 8, label: "Pressure Cook" }
  },
  {
    id: "mac-and-cheese",
    name: "Mac & Cheese",
    methods: ["pressure"],
    mealType: "lunch",
    servings: 4,
    ingredients: [
      { amount: 1, unit: "lb", item: "elbow macaroni", cat: "Grains & Pasta" },
      { amount: 4, unit: "cups", item: "water", cat: null },
      { amount: 2, unit: "tbsp", item: "butter", cat: "Pantry" },
      { amount: 1, unit: "tsp", item: "salt", cat: "Pantry" },
      { amount: 1, unit: "tsp", item: "mustard powder", cat: "Pantry" },
      { amount: 0.5, unit: "cup", item: "whole milk", cat: "Produce" },
      { amount: 2, unit: "cups", item: "shredded cheddar cheese", cat: "Produce" }
    ],
    steps: [
      "Add macaroni, water, butter, salt, and mustard powder to the pot.",
      "Pressure Cook 4 min, Quick Release.",
      "Stir in milk and shredded cheddar cheese until melted and creamy.",
      "Season to taste and serve immediately."
    ],
    timer: { minutes: 4, label: "Pressure Cook" }
  },
  {
    id: "carnitas",
    name: "Carnitas",
    methods: ["pressure", "air"],
    mealType: "lunch",
    servings: 6,
    ingredients: [
      { amount: 2, unit: "lb", item: "pork shoulder", cat: "Proteins" },
      { amount: 0.5, unit: "cup", item: "orange juice", cat: "Pantry" },
      { amount: 2, unit: "tbsp", item: "lime juice", cat: "Pantry" },
      { amount: 4, unit: "cloves", item: "garlic, minced", cat: "Produce" },
      { amount: 1, unit: "tbsp", item: "cumin", cat: "Pantry" },
      { amount: 1, unit: "tsp", item: "oregano", cat: "Pantry" },
      { amount: 0, unit: "", item: "salt, pepper", cat: "Pantry" },
      { amount: 8, unit: "", item: "small tortillas", cat: "Grains & Pasta" }
    ],
    steps: [
      "Cut pork shoulder into 3\u20134 chunks. Season with cumin, oregano, salt, and pepper.",
      "Add orange juice, lime juice, and garlic to the pot. Place pork inside.",
      "Pressure Cook 45 min, Natural Release 15 min.",
      "Shred pork with two forks. Spread on the air fryer basket.",
      "Air Crisp 400\u00b0F, 5 min until edges are crispy.",
      "Serve in tortillas with your favorite toppings."
    ],
    timer: { minutes: 45, label: "Pressure Cook" }
  },
  {
    id: "bone-broth",
    name: "Bone Broth",
    methods: ["pressure"],
    mealType: "lunch",
    servings: 8,
    ingredients: [
      { amount: 2, unit: "lb", item: "beef or chicken bones", cat: "Proteins" },
      { amount: 8, unit: "cups", item: "water", cat: null },
      { amount: 2, unit: "tbsp", item: "apple cider vinegar", cat: "Pantry" },
      { amount: 1, unit: "", item: "onion, halved", cat: "Produce" },
      { amount: 2, unit: "stalks", item: "celery, halved", cat: "Produce" },
      { amount: 4, unit: "cloves", item: "garlic", cat: "Produce" },
      { amount: 2, unit: "", item: "bay leaves", cat: "Pantry" },
      { amount: 0, unit: "", item: "salt, peppercorns", cat: "Pantry" }
    ],
    steps: [
      "Add bones, water, apple cider vinegar, and all vegetables and seasonings to the pot.",
      "Pressure Cook 120 min, Natural Release fully.",
      "Strain broth through a fine mesh strainer. Discard solids.",
      "Season with salt to taste. Store in fridge up to 5 days or freeze."
    ],
    timer: { minutes: 120, label: "Pressure Cook" }
  },
  {
    id: "chow-mein",
    name: "Chow Mein",
    methods: ["saute"],
    mealType: "dinner",
    servings: 4,
    ingredients: [
      { amount: 8, unit: "oz", item: "chow mein noodles", cat: "Grains & Pasta" },
      { amount: 2, unit: "", item: "chicken breasts, sliced thin", cat: "Proteins" },
      { amount: 2, unit: "cups", item: "cabbage, shredded", cat: "Produce" },
      { amount: 2, unit: "", item: "carrots, julienned", cat: "Produce" },
      { amount: 3, unit: "tbsp", item: "soy sauce", cat: "Pantry" },
      { amount: 1, unit: "tbsp", item: "sesame oil", cat: "Pantry" },
      { amount: 1, unit: "tbsp", item: "oyster sauce", cat: "Pantry" },
      { amount: 2, unit: "cloves", item: "garlic, minced", cat: "Produce" },
      { amount: 1, unit: "tbsp", item: "vegetable oil", cat: "Pantry" }
    ],
    steps: [
      "Cook noodles according to package directions, drain and set aside.",
      "Saut\u00e9 sliced chicken in vegetable oil for 4 min until cooked through. Remove.",
      "Add garlic, cabbage, and carrots. Saut\u00e9 3 min.",
      "Return chicken, add noodles, soy sauce, oyster sauce, and sesame oil.",
      "Toss everything together for 2 min until heated through."
    ],
    timer: { minutes: 10, label: "Saut\u00e9" }
  },
  {
    id: "korean-beef",
    name: "Korean Beef (Bulgogi)",
    methods: ["saute", "pressure"],
    mealType: "dinner",
    servings: 4,
    ingredients: [
      { amount: 1.5, unit: "lb", item: "beef sirloin, sliced thin", cat: "Proteins" },
      { amount: 0.33, unit: "cup", item: "soy sauce", cat: "Pantry" },
      { amount: 2, unit: "tbsp", item: "brown sugar", cat: "Pantry" },
      { amount: 1, unit: "tbsp", item: "sesame oil", cat: "Pantry" },
      { amount: 4, unit: "cloves", item: "garlic, minced", cat: "Produce" },
      { amount: 1, unit: "tbsp", item: "ginger, grated", cat: "Produce" },
      { amount: 1, unit: "", item: "pear, grated", cat: "Produce" },
      { amount: 1, unit: "tbsp", item: "cornstarch", cat: "Pantry" },
      { amount: 0, unit: "", item: "sesame seeds, green onions for garnish", cat: "Produce" }
    ],
    steps: [
      "Mix soy sauce, brown sugar, sesame oil, garlic, ginger, and grated pear for the marinade.",
      "Saut\u00e9 sliced beef in batches for 2 min per side.",
      "Pour marinade over the beef.",
      "Pressure Cook 10 min, Natural Release 5 min.",
      "Mix cornstarch with 1 tbsp water, stir into sauce on Saut\u00e9 to thicken.",
      "Serve over rice with sesame seeds and sliced green onions."
    ],
    timer: { minutes: 10, label: "Pressure Cook" }
  },

  // ─────────────────────────────────────────────
  //  INSTANT POT OFFICIAL PICKS (5)
  // ─────────────────────────────────────────────

  {
    id: "italian-pot-roast",
    name: "Italian Pot Roast",
    methods: ["saute", "pressure"],
    mealType: "dinner",
    servings: 6,
    ingredients: [
      { amount: 3, unit: "lb", item: "chuck roast", cat: "Proteins" },
      { amount: 2, unit: "tbsp", item: "butter", cat: "Pantry" },
      { amount: 1, unit: "cup", item: "beef broth", cat: "Canned / Jarred" },
      { amount: 2, unit: "tbsp", item: "tomato paste", cat: "Canned / Jarred" },
      { amount: 1, unit: "tbsp", item: "coconut aminos or soy sauce", cat: "Pantry" },
      { amount: 4, unit: "cloves", item: "garlic, sliced", cat: "Produce" },
      { amount: 2, unit: "", item: "carrots, chunked", cat: "Produce" },
      { amount: 2, unit: "", item: "parsnips, chunked", cat: "Produce" },
      { amount: 1, unit: "", item: "onion, quartered", cat: "Produce" },
      { amount: 2, unit: "stalks", item: "celery, chopped", cat: "Produce" },
      { amount: 0, unit: "", item: "bay leaf, thyme, oregano, basil, salt, pepper", cat: "Pantry" }
    ],
    steps: [
      "Make small slits in the roast and insert garlic slices.",
      "Saut\u00e9 roast in butter, searing each side 3\u20134 min.",
      "Add broth, coconut aminos, tomato paste, celery, bay leaf, thyme, oregano, and basil.",
      "Pressure Cook 45 min, Quick Release.",
      "Add onion, carrots, and parsnips.",
      "Pressure Cook 10 min, Quick Release. Serve with vegetables and pan juices."
    ],
    timer: { minutes: 45, label: "Pressure Cook" }
  },
  {
    id: "hot-pot",
    name: "Hot Pot",
    methods: ["saute", "pressure"],
    mealType: "dinner",
    servings: 4,
    ingredients: [
      { amount: 2, unit: "cups", item: "beef broth", cat: "Canned / Jarred" },
      { amount: 2, unit: "cups", item: "chicken broth", cat: "Canned / Jarred" },
      { amount: 2, unit: "cups", item: "vegetable broth", cat: "Canned / Jarred" },
      { amount: 1, unit: "", item: "onion, chopped", cat: "Produce" },
      { amount: 4, unit: "", item: "scallions, sliced", cat: "Produce" },
      { amount: 0.5, unit: "lb", item: "thinly sliced beef or pork", cat: "Proteins" },
      { amount: 8, unit: "oz", item: "udon or ramen noodles", cat: "Grains & Pasta" },
      { amount: 1, unit: "cup", item: "mushrooms, sliced", cat: "Produce" },
      { amount: 2, unit: "cups", item: "bok choy, chopped", cat: "Produce" },
      { amount: 0, unit: "", item: "salt, pepper, Old Bay seasoning", cat: "Pantry" }
    ],
    steps: [
      "Saut\u00e9 onion and scallions for 3 min. Add all three broths, salt, pepper, and Old Bay.",
      "Simmer on Saut\u00e9 for 10 min to build flavor.",
      "Add mushrooms. Pressure Cook 5 min, Natural Release 5 min.",
      "Switch to Saut\u00e9 mode. Add noodles, sliced meat, and bok choy.",
      "Cook 3\u20135 min until meat is cooked through and noodles are tender.",
      "Serve in bowls with broth and toppings."
    ],
    timer: { minutes: 5, label: "Pressure Cook" }
  },
  {
    id: "harissa-chicken",
    name: "Harissa Chicken with Feta",
    methods: ["pressure"],
    mealType: "dinner",
    servings: 4,
    ingredients: [
      { amount: 2, unit: "lb", item: "chicken thighs, bone-in", cat: "Proteins" },
      { amount: 3, unit: "tbsp", item: "harissa paste", cat: "Pantry" },
      { amount: 0.5, unit: "cup", item: "chicken broth", cat: "Canned / Jarred" },
      { amount: 1, unit: "tsp", item: "cumin", cat: "Pantry" },
      { amount: 1, unit: "tsp", item: "smoked paprika", cat: "Pantry" },
      { amount: 0.5, unit: "cup", item: "crumbled feta cheese", cat: "Produce" },
      { amount: 0, unit: "", item: "fresh herbs (cilantro or parsley)", cat: "Produce" },
      { amount: 0, unit: "", item: "salt, pepper", cat: "Pantry" }
    ],
    steps: [
      "Season chicken with cumin, smoked paprika, salt, and pepper.",
      "Place chicken in the pot. Mix harissa paste with chicken broth and pour over.",
      "Pressure Cook 10 min, Natural Release 5 min.",
      "Serve topped with crumbled feta and fresh herbs."
    ],
    timer: { minutes: 10, label: "Pressure Cook" }
  },
  {
    id: "beef-arayes",
    name: "Beef Arayes (Stuffed Pita)",
    methods: ["air"],
    mealType: "lunch",
    servings: 4,
    ingredients: [
      { amount: 1, unit: "lb", item: "extra lean ground beef", cat: "Proteins" },
      { amount: 1, unit: "", item: "onion, finely diced", cat: "Produce" },
      { amount: 3, unit: "cloves", item: "garlic, minced", cat: "Produce" },
      { amount: 0.25, unit: "cup", item: "fresh parsley, chopped", cat: "Produce" },
      { amount: 1, unit: "tsp", item: "cumin", cat: "Pantry" },
      { amount: 1, unit: "tsp", item: "paprika", cat: "Pantry" },
      { amount: 0.5, unit: "tsp", item: "cinnamon", cat: "Pantry" },
      { amount: 4, unit: "", item: "pita breads, halved", cat: "Grains & Pasta" },
      { amount: 0, unit: "", item: "olive oil, salt, pepper", cat: "Pantry" }
    ],
    steps: [
      "Mix ground beef with onion, garlic, parsley, cumin, paprika, cinnamon, salt, and pepper.",
      "Stuff each pita half with the meat mixture, spreading evenly.",
      "Brush both sides with olive oil.",
      "Air Crisp 400\u00b0F, 14 min, flip halfway through.",
      "Serve with yogurt sauce or tahini."
    ],
    timer: { minutes: 14, label: "Air Crisp" }
  },
  {
    id: "tajin-beef-stew",
    name: "Tajin Beef Stew",
    methods: ["saute", "pressure"],
    mealType: "dinner",
    servings: 4,
    ingredients: [
      { amount: 1.5, unit: "lb", item: "beef chuck, cubed", cat: "Proteins" },
      { amount: 3, unit: "", item: "potatoes, cubed", cat: "Produce" },
      { amount: 2, unit: "", item: "carrots, sliced", cat: "Produce" },
      { amount: 1, unit: "", item: "onion, diced", cat: "Produce" },
      { amount: 2, unit: "cups", item: "beef broth", cat: "Canned / Jarred" },
      { amount: 1, unit: "can", item: "diced tomatoes", cat: "Canned / Jarred" },
      { amount: 2, unit: "tbsp", item: "Tajin seasoning", cat: "Pantry" },
      { amount: 1, unit: "tsp", item: "cumin", cat: "Pantry" },
      { amount: 2, unit: "tbsp", item: "olive oil", cat: "Pantry" },
      { amount: 0, unit: "", item: "salt, pepper, lime wedges", cat: "Pantry" }
    ],
    steps: [
      "Toss beef cubes with Tajin seasoning, cumin, salt, and pepper.",
      "Saut\u00e9 beef in olive oil in batches, 5 min per batch.",
      "Add onion, cook 2 min. Add broth and deglaze the pot.",
      "Add diced tomatoes, potatoes, and carrots.",
      "Pressure Cook 35 min, Natural Release 10 min.",
      "Serve with lime wedges."
    ],
    timer: { minutes: 35, label: "Pressure Cook" }
  },

  // ─────────────────────────────────────────────
  //  DAMN DELICIOUS PICKS (8)
  // ─────────────────────────────────────────────

  {
    id: "chicken-burrito-bowls",
    name: "Chicken Burrito Bowls",
    methods: ["pressure"],
    mealType: "dinner",
    servings: 4,
    ingredients: [
      { amount: 4, unit: "", item: "chicken breasts", cat: "Proteins" },
      { amount: 1, unit: "cup", item: "white rice", cat: "Grains & Pasta" },
      { amount: 1, unit: "cup", item: "chicken broth", cat: "Canned / Jarred" },
      { amount: 1, unit: "cup", item: "salsa", cat: "Canned / Jarred" },
      { amount: 1, unit: "can", item: "black beans, drained", cat: "Canned / Jarred" },
      { amount: 1, unit: "cup", item: "frozen corn", cat: "Frozen" },
      { amount: 1, unit: "can", item: "green chiles", cat: "Canned / Jarred" },
      { amount: 1, unit: "tbsp", item: "taco seasoning", cat: "Pantry" },
      { amount: 1, unit: "cup", item: "shredded Mexican cheese", cat: "Produce" },
      { amount: 0, unit: "", item: "cilantro, sour cream for topping", cat: "Produce" }
    ],
    steps: [
      "Add rice, chicken broth, salsa, green chiles, and taco seasoning to the pot.",
      "Place chicken breasts on top. Do NOT stir.",
      "Pressure Cook 10 min, Natural Release 10 min.",
      "Remove chicken and shred with two forks. Fluff rice.",
      "Stir in black beans, corn, and shredded chicken.",
      "Top with cheese, cilantro, and sour cream."
    ],
    timer: { minutes: 10, label: "Pressure Cook" }
  },
  {
    id: "mushroom-risotto",
    name: "Mushroom Risotto",
    methods: ["saute", "pressure"],
    mealType: "dinner",
    servings: 4,
    ingredients: [
      { amount: 1.5, unit: "cups", item: "arborio rice", cat: "Grains & Pasta" },
      { amount: 8, unit: "oz", item: "mushrooms, sliced", cat: "Produce" },
      { amount: 4, unit: "cups", item: "chicken broth", cat: "Canned / Jarred" },
      { amount: 0.5, unit: "cup", item: "Parmesan cheese, grated", cat: "Produce" },
      { amount: 2, unit: "cloves", item: "garlic, minced", cat: "Produce" },
      { amount: 1, unit: "cup", item: "spinach", cat: "Produce" },
      { amount: 0.5, unit: "cup", item: "frozen peas", cat: "Frozen" },
      { amount: 2, unit: "tbsp", item: "butter", cat: "Pantry" },
      { amount: 1, unit: "tsp", item: "thyme", cat: "Pantry" },
      { amount: 0, unit: "", item: "salt, pepper", cat: "Pantry" }
    ],
    steps: [
      "Sauté mushrooms in butter for 4 min until golden. Add garlic and thyme, stir 1 min.",
      "Add arborio rice and stir to coat, 1 min.",
      "Pour in chicken broth and season with salt and pepper.",
      "Pressure Cook 6 min, Quick Release.",
      "Stir in Parmesan, spinach, and peas. Let sit 2 min until spinach wilts.",
      "Serve immediately."
    ],
    timer: { minutes: 6, label: "Pressure Cook" }
  },
  {
    id: "red-beans-rice",
    name: "Red Beans and Rice",
    methods: ["saute", "pressure"],
    mealType: "dinner",
    servings: 6,
    ingredients: [
      { amount: 1, unit: "lb", item: "dried red beans (no soak needed)", cat: "Grains & Pasta" },
      { amount: 12, unit: "oz", item: "andouille sausage, sliced", cat: "Proteins" },
      { amount: 1, unit: "", item: "onion, diced", cat: "Produce" },
      { amount: 1, unit: "", item: "bell pepper, diced", cat: "Produce" },
      { amount: 2, unit: "stalks", item: "celery, diced", cat: "Produce" },
      { amount: 3, unit: "cloves", item: "garlic, minced", cat: "Produce" },
      { amount: 4, unit: "cups", item: "vegetable broth", cat: "Canned / Jarred" },
      { amount: 2, unit: "tsp", item: "Cajun seasoning", cat: "Pantry" },
      { amount: 2, unit: "", item: "bay leaves", cat: "Pantry" },
      { amount: 0, unit: "", item: "salt, pepper, hot sauce", cat: "Pantry" }
    ],
    steps: [
      "Sauté andouille sausage for 3 min. Add onion, bell pepper, celery, and garlic, cook 3 min.",
      "Add red beans, broth, Cajun seasoning, and bay leaves.",
      "Pressure Cook 35 min, Natural Release 25 min.",
      "Remove bay leaves. Mash some beans against the side to thicken.",
      "Serve over cooked rice with hot sauce."
    ],
    timer: { minutes: 35, label: "Pressure Cook" }
  },
  {
    id: "potato-corn-chowder",
    name: "Potato Corn Chowder",
    methods: ["saute", "pressure"],
    mealType: "lunch",
    servings: 6,
    ingredients: [
      { amount: 4, unit: "slices", item: "bacon, chopped", cat: "Proteins" },
      { amount: 4, unit: "", item: "red potatoes, diced", cat: "Produce" },
      { amount: 2, unit: "cups", item: "frozen corn", cat: "Frozen" },
      { amount: 1, unit: "", item: "onion, diced", cat: "Produce" },
      { amount: 2, unit: "cloves", item: "garlic, minced", cat: "Produce" },
      { amount: 3, unit: "cups", item: "vegetable stock", cat: "Canned / Jarred" },
      { amount: 0.5, unit: "cup", item: "heavy cream", cat: "Produce" },
      { amount: 2, unit: "tbsp", item: "flour", cat: "Grains & Pasta" },
      { amount: 1, unit: "tsp", item: "thyme", cat: "Pantry" },
      { amount: 0, unit: "", item: "salt, pepper, chives for garnish", cat: "Pantry" }
    ],
    steps: [
      "Sauté chopped bacon until crispy, about 4 min. Remove and set aside.",
      "Sauté onion and garlic in the bacon fat for 2 min.",
      "Add potatoes, corn, stock, thyme, salt, and pepper.",
      "Pressure Cook 10 min, Quick Release.",
      "Mix flour with heavy cream, stir into the chowder. Sauté 3 min to thicken.",
      "Top with crispy bacon and chives."
    ],
    timer: { minutes: 10, label: "Pressure Cook" }
  },
  {
    id: "white-chicken-chili",
    name: "White Chicken Chili",
    methods: ["saute", "pressure"],
    mealType: "dinner",
    servings: 6,
    ingredients: [
      { amount: 4, unit: "", item: "chicken thighs", cat: "Proteins" },
      { amount: 2, unit: "cans", item: "Great Northern beans, drained", cat: "Canned / Jarred" },
      { amount: 2, unit: "cans", item: "mild green chiles", cat: "Canned / Jarred" },
      { amount: 1, unit: "", item: "onion, diced", cat: "Produce" },
      { amount: 3, unit: "cloves", item: "garlic, minced", cat: "Produce" },
      { amount: 3, unit: "cups", item: "chicken stock", cat: "Canned / Jarred" },
      { amount: 0.5, unit: "cup", item: "sour cream", cat: "Produce" },
      { amount: 1, unit: "tsp", item: "cumin", cat: "Pantry" },
      { amount: 0, unit: "", item: "salt, pepper, cilantro", cat: "Pantry" }
    ],
    steps: [
      "Sauté diced onion and garlic for 3 min.",
      "Add chicken thighs, beans, green chiles, stock, and cumin.",
      "Pressure Cook 12 min, Natural Release 10 min.",
      "Remove chicken and shred. Return to pot.",
      "Stir in sour cream until creamy. Season to taste.",
      "Serve topped with cilantro."
    ],
    timer: { minutes: 12, label: "Pressure Cook" }
  },
  {
    id: "chicken-tacos",
    name: "Chicken Tacos",
    methods: ["saute", "pressure"],
    mealType: "lunch",
    servings: 4,
    ingredients: [
      { amount: 4, unit: "", item: "chicken thighs", cat: "Proteins" },
      { amount: 1, unit: "cup", item: "salsa", cat: "Canned / Jarred" },
      { amount: 0.5, unit: "cup", item: "Mexican beer (or chicken broth)", cat: "Canned / Jarred" },
      { amount: 1, unit: "tbsp", item: "chipotle chili powder", cat: "Pantry" },
      { amount: 1, unit: "tsp", item: "cumin", cat: "Pantry" },
      { amount: 1, unit: "tsp", item: "oregano", cat: "Pantry" },
      { amount: 8, unit: "", item: "small tortillas", cat: "Grains & Pasta" },
      { amount: 0, unit: "", item: "avocado, lime, jalapeños for topping", cat: "Produce" }
    ],
    steps: [
      "Season chicken with chipotle chili powder, cumin, and oregano.",
      "Sauté chicken 2 min per side to brown.",
      "Add salsa and beer (or broth).",
      "Pressure Cook 8 min, Natural Release 5 min.",
      "Shred chicken with two forks and mix with sauce.",
      "Serve in tortillas with avocado, lime, and jalapeños."
    ],
    timer: { minutes: 8, label: "Pressure Cook" }
  },
  {
    id: "ground-beef-pasta",
    name: "Ground Beef & Pasta",
    methods: ["saute", "pressure"],
    mealType: "dinner",
    servings: 4,
    ingredients: [
      { amount: 1, unit: "lb", item: "ground beef", cat: "Proteins" },
      { amount: 8, unit: "oz", item: "campanelle or fusilli pasta", cat: "Grains & Pasta" },
      { amount: 1, unit: "jar", item: "marinara sauce (24 oz)", cat: "Canned / Jarred" },
      { amount: 2, unit: "cups", item: "water", cat: null },
      { amount: 1, unit: "tsp", item: "Italian seasoning", cat: "Pantry" },
      { amount: 0, unit: "", item: "salt, pepper", cat: "Pantry" },
      { amount: 0, unit: "", item: "Parmesan for topping", cat: "Produce" }
    ],
    steps: [
      "Sauté ground beef for 5 min, breaking up the meat. Drain excess fat.",
      "Add water, pasta, and Italian seasoning. Pour marinara on top — do NOT stir.",
      "Pressure Cook 4 min, Natural Release 5 min.",
      "Stir well to combine. Season with salt and pepper.",
      "Top with Parmesan cheese."
    ],
    timer: { minutes: 4, label: "Pressure Cook" }
  },
  {
    id: "sweet-potato-casserole",
    name: "Sweet Potato Casserole",
    methods: ["pressure", "air"],
    mealType: "dessert",
    servings: 6,
    ingredients: [
      { amount: 3, unit: "lb", item: "sweet potatoes, peeled and cubed", cat: "Produce" },
      { amount: 1, unit: "cup", item: "water", cat: null },
      { amount: 3, unit: "tbsp", item: "butter", cat: "Pantry" },
      { amount: 0.25, unit: "cup", item: "brown sugar", cat: "Pantry" },
      { amount: 1, unit: "tsp", item: "cinnamon", cat: "Pantry" },
      { amount: 0.5, unit: "tsp", item: "nutmeg", cat: "Pantry" },
      { amount: 1, unit: "tsp", item: "vanilla extract", cat: "Pantry" },
      { amount: 1, unit: "cup", item: "mini marshmallows", cat: "Pantry" },
      { amount: 0.5, unit: "cup", item: "pecans, chopped", cat: "Pantry" }
    ],
    steps: [
      "Add sweet potatoes and water to the pot.",
      "Pressure Cook 8 min, Quick Release.",
      "Drain and mash with butter, brown sugar, cinnamon, nutmeg, and vanilla.",
      "Transfer to an oven-safe dish. Top with marshmallows and pecans.",
      "Air Crisp 400°F, 3 min until marshmallows are golden."
    ],
    timer: { minutes: 8, label: "Pressure Cook" }
  },

  // ─────────────────────────────────────────────
  //  PINCH OF YUM PICKS (10)
  // ─────────────────────────────────────────────

  {
    id: "wild-rice-soup",
    name: "Wild Rice Soup",
    methods: ["saute", "pressure"],
    mealType: "dinner",
    servings: 6,
    ingredients: [
      { amount: 1, unit: "cup", item: "wild rice", cat: "Grains & Pasta" },
      { amount: 8, unit: "oz", item: "mushrooms, sliced", cat: "Produce" },
      { amount: 2, unit: "tbsp", item: "butter", cat: "Pantry" },
      { amount: 2, unit: "", item: "carrots, diced", cat: "Produce" },
      { amount: 2, unit: "stalks", item: "celery, diced", cat: "Produce" },
      { amount: 1, unit: "", item: "onion, diced", cat: "Produce" },
      { amount: 6, unit: "cups", item: "chicken broth", cat: "Canned / Jarred" },
      { amount: 0.5, unit: "cup", item: "heavy cream", cat: "Produce" },
      { amount: 2, unit: "tbsp", item: "flour", cat: "Grains & Pasta" },
      { amount: 0, unit: "", item: "salt, pepper, thyme", cat: "Pantry" }
    ],
    steps: [
      "Sauté mushrooms in butter for 4 min. Add onion, carrots, celery, and thyme, cook 3 min.",
      "Add wild rice and chicken broth.",
      "Pressure Cook 35 min, Natural Release 10 min.",
      "Mix flour with heavy cream, stir into soup. Sauté 3 min to thicken.",
      "Season to taste and serve."
    ],
    timer: { minutes: 35, label: "Pressure Cook" }
  },
  {
    id: "short-rib-ragu",
    name: "Short Rib Ragu",
    methods: ["saute", "pressure"],
    mealType: "dinner",
    servings: 4,
    ingredients: [
      { amount: 2, unit: "lb", item: "bone-in short ribs", cat: "Proteins" },
      { amount: 1, unit: "", item: "onion, diced", cat: "Produce" },
      { amount: 4, unit: "cloves", item: "garlic, minced", cat: "Produce" },
      { amount: 0.5, unit: "cup", item: "dry red wine", cat: "Pantry" },
      { amount: 1, unit: "jar", item: "marinara sauce", cat: "Canned / Jarred" },
      { amount: 0.5, unit: "tsp", item: "crushed red pepper", cat: "Pantry" },
      { amount: 1, unit: "lb", item: "gnocchi or pasta", cat: "Grains & Pasta" },
      { amount: 0, unit: "", item: "salt, pepper", cat: "Pantry" },
      { amount: 0, unit: "", item: "Parmesan for topping", cat: "Produce" }
    ],
    steps: [
      "Season short ribs with salt and pepper. Sauté in batches until browned, 3 min per side.",
      "Sauté onion and garlic for 2 min. Deglaze with red wine.",
      "Add marinara sauce and crushed red pepper. Return ribs to pot.",
      "Pressure Cook 45 min, Natural Release 10 min.",
      "Remove ribs, shred meat, discard bones. Sauté sauce 5 min to reduce.",
      "Serve over gnocchi or pasta with Parmesan."
    ],
    timer: { minutes: 45, label: "Pressure Cook" }
  },
  {
    id: "cauliflower-curry",
    name: "Cauliflower Curry",
    methods: ["pressure"],
    mealType: "dinner",
    servings: 4,
    ingredients: [
      { amount: 1, unit: "head", item: "cauliflower, cut into florets", cat: "Produce" },
      { amount: 2, unit: "cups", item: "butternut squash, cubed", cat: "Produce" },
      { amount: 1, unit: "cup", item: "red lentils", cat: "Grains & Pasta" },
      { amount: 1, unit: "can", item: "coconut milk", cat: "Canned / Jarred" },
      { amount: 1, unit: "can", item: "diced tomatoes", cat: "Canned / Jarred" },
      { amount: 2, unit: "tbsp", item: "red curry paste", cat: "Pantry" },
      { amount: 1, unit: "", item: "onion, diced", cat: "Produce" },
      { amount: 2, unit: "cloves", item: "garlic, minced", cat: "Produce" },
      { amount: 1, unit: "tsp", item: "turmeric", cat: "Pantry" },
      { amount: 0, unit: "", item: "salt, pepper", cat: "Pantry" }
    ],
    steps: [
      "Add all ingredients to the pot and stir to combine.",
      "Pressure Cook 5 min, Natural Release 10 min.",
      "Stir well — lentils will create a creamy texture.",
      "Serve over rice."
    ],
    timer: { minutes: 5, label: "Pressure Cook" }
  },
  {
    id: "coconut-tandoori-chicken",
    name: "Coconut Tandoori Chicken",
    methods: ["pressure"],
    mealType: "dinner",
    servings: 6,
    ingredients: [
      { amount: 6, unit: "", item: "chicken thighs", cat: "Proteins" },
      { amount: 1, unit: "can", item: "coconut milk", cat: "Canned / Jarred" },
      { amount: 1, unit: "cup", item: "white rice", cat: "Grains & Pasta" },
      { amount: 1, unit: "cup", item: "water", cat: null },
      { amount: 1, unit: "tbsp", item: "garam masala", cat: "Pantry" },
      { amount: 1, unit: "tsp", item: "chili powder", cat: "Pantry" },
      { amount: 1, unit: "tsp", item: "cumin", cat: "Pantry" },
      { amount: 1, unit: "tsp", item: "turmeric", cat: "Pantry" },
      { amount: 1, unit: "tsp", item: "ginger powder", cat: "Pantry" },
      { amount: 1, unit: "tbsp", item: "honey", cat: "Pantry" },
      { amount: 0, unit: "", item: "salt, pepper", cat: "Pantry" }
    ],
    steps: [
      "Mix garam masala, chili powder, cumin, turmeric, ginger, salt, and pepper. Rub onto chicken.",
      "Add rice and water to the pot. Place chicken on top.",
      "Mix coconut milk with honey, pour over chicken.",
      "Pressure Cook 12 min, Natural Release 10 min.",
      "Fluff rice and serve chicken on top."
    ],
    timer: { minutes: 12, label: "Pressure Cook" }
  },
  {
    id: "spicy-short-rib-soup",
    name: "Spicy Short Rib Noodle Soup",
    methods: ["saute", "pressure"],
    mealType: "dinner",
    servings: 4,
    ingredients: [
      { amount: 1.5, unit: "lb", item: "boneless short ribs", cat: "Proteins" },
      { amount: 2, unit: "tbsp", item: "gochujang sauce", cat: "Pantry" },
      { amount: 1, unit: "tbsp", item: "tomato paste", cat: "Canned / Jarred" },
      { amount: 1, unit: "tbsp", item: "ginger, grated", cat: "Produce" },
      { amount: 3, unit: "cloves", item: "garlic, minced", cat: "Produce" },
      { amount: 2, unit: "", item: "shallots, sliced", cat: "Produce" },
      { amount: 6, unit: "cups", item: "beef broth", cat: "Canned / Jarred" },
      { amount: 8, unit: "oz", item: "ramen or stir-fry noodles", cat: "Grains & Pasta" },
      { amount: 2, unit: "cups", item: "spinach", cat: "Produce" },
      { amount: 0, unit: "", item: "scallions, sesame seeds for topping", cat: "Produce" }
    ],
    steps: [
      "Season short ribs with salt. Sauté until browned, 3 min per side.",
      "Add shallots, garlic, ginger, gochujang, and tomato paste. Stir 1 min.",
      "Add beef broth.",
      "Pressure Cook 30 min, Natural Release 10 min.",
      "Remove ribs and shred. Switch to Sauté. Add noodles, cook 3 min.",
      "Return meat, add spinach. Serve with scallions and sesame seeds."
    ],
    timer: { minutes: 30, label: "Pressure Cook" }
  },
  {
    id: "hawaiian-chicken-tacos",
    name: "Hawaiian Chicken Tacos",
    methods: ["pressure", "air"],
    mealType: "lunch",
    servings: 4,
    ingredients: [
      { amount: 4, unit: "", item: "chicken thighs", cat: "Proteins" },
      { amount: 1, unit: "cup", item: "fresh pineapple, diced", cat: "Produce" },
      { amount: 1, unit: "", item: "jalapeño, diced", cat: "Produce" },
      { amount: 0.5, unit: "", item: "red onion, sliced", cat: "Produce" },
      { amount: 2, unit: "cloves", item: "garlic, minced", cat: "Produce" },
      { amount: 1, unit: "tbsp", item: "chili powder", cat: "Pantry" },
      { amount: 1, unit: "tsp", item: "cumin", cat: "Pantry" },
      { amount: 0.5, unit: "cup", item: "chicken broth", cat: "Canned / Jarred" },
      { amount: 8, unit: "", item: "small tortillas", cat: "Grains & Pasta" },
      { amount: 0, unit: "", item: "coleslaw, Sriracha for topping", cat: "Produce" }
    ],
    steps: [
      "Season chicken with chili powder, cumin, and salt.",
      "Add chicken, pineapple, jalapeño, red onion, garlic, and broth to the pot.",
      "Pressure Cook 10 min, Natural Release 5 min.",
      "Shred chicken and toss with pineapple-jalapeño mixture.",
      "Spread on air fryer basket. Air Crisp 400°F, 5 min for crispy edges.",
      "Serve in tortillas with coleslaw and Sriracha."
    ],
    timer: { minutes: 10, label: "Pressure Cook" }
  },
  {
    id: "italian-beef-sandwiches",
    name: "Italian Beef Sandwiches",
    methods: ["pressure"],
    mealType: "dinner",
    servings: 6,
    ingredients: [
      { amount: 3, unit: "lb", item: "beef chuck roast", cat: "Proteins" },
      { amount: 1, unit: "cup", item: "beef broth", cat: "Canned / Jarred" },
      { amount: 4, unit: "cloves", item: "garlic, minced", cat: "Produce" },
      { amount: 1, unit: "", item: "onion, sliced", cat: "Produce" },
      { amount: 1, unit: "tsp", item: "oregano", cat: "Pantry" },
      { amount: 1, unit: "tsp", item: "basil", cat: "Pantry" },
      { amount: 1, unit: "tsp", item: "paprika", cat: "Pantry" },
      { amount: 0.5, unit: "tsp", item: "red pepper flakes", cat: "Pantry" },
      { amount: 6, unit: "", item: "crusty rolls", cat: "Grains & Pasta" },
      { amount: 1, unit: "cup", item: "giardiniera", cat: "Canned / Jarred" },
      { amount: 6, unit: "slices", item: "provolone cheese", cat: "Produce" }
    ],
    steps: [
      "Season chuck roast with oregano, basil, paprika, red pepper flakes, salt, and pepper.",
      "Place in pot with beef broth, garlic, and onion.",
      "Pressure Cook 60 min, Natural Release 15 min.",
      "Shred beef with two forks. Let soak in juices 5 min.",
      "Pile beef on crusty rolls, top with giardiniera and provolone.",
      "Serve with a side of au jus for dipping."
    ],
    timer: { minutes: 60, label: "Pressure Cook" }
  },
  {
    id: "chicken-tinga-tacos",
    name: "Chicken Tinga Tacos",
    methods: ["pressure"],
    mealType: "lunch",
    servings: 4,
    ingredients: [
      { amount: 4, unit: "", item: "chicken breasts", cat: "Proteins" },
      { amount: 2, unit: "", item: "chipotle peppers in adobo, chopped", cat: "Canned / Jarred" },
      { amount: 1, unit: "can", item: "fire-roasted tomatoes", cat: "Canned / Jarred" },
      { amount: 1, unit: "", item: "onion, diced", cat: "Produce" },
      { amount: 3, unit: "cloves", item: "garlic, minced", cat: "Produce" },
      { amount: 1, unit: "tsp", item: "oregano", cat: "Pantry" },
      { amount: 1, unit: "tsp", item: "cumin", cat: "Pantry" },
      { amount: 0.5, unit: "cup", item: "chicken stock", cat: "Canned / Jarred" },
      { amount: 8, unit: "", item: "corn tortillas", cat: "Grains & Pasta" },
      { amount: 0, unit: "", item: "avocado, cotija cheese, cilantro, lime", cat: "Produce" }
    ],
    steps: [
      "Blend tomatoes, chipotle peppers, onion, garlic, oregano, and cumin into a sauce.",
      "Pour sauce and stock into the pot. Add chicken breasts.",
      "Pressure Cook 10 min, Natural Release 5 min.",
      "Shred chicken and mix with the smoky sauce.",
      "Serve in tortillas with avocado, cotija, cilantro, and lime."
    ],
    timer: { minutes: 10, label: "Pressure Cook" }
  },
  {
    id: "mashed-potatoes",
    name: "Mashed Potatoes",
    methods: ["pressure"],
    mealType: "lunch",
    servings: 6,
    ingredients: [
      { amount: 5, unit: "lb", item: "potatoes, peeled and quartered", cat: "Produce" },
      { amount: 1, unit: "cup", item: "water", cat: null },
      { amount: 0.5, unit: "cup", item: "butter (1 stick)", cat: "Pantry" },
      { amount: 4, unit: "cloves", item: "garlic, minced", cat: "Produce" },
      { amount: 2, unit: "tbsp", item: "fresh sage, chopped", cat: "Produce" },
      { amount: 1, unit: "tbsp", item: "fresh thyme", cat: "Produce" },
      { amount: 0.5, unit: "cup", item: "cream cheese or sour cream", cat: "Produce" },
      { amount: 0.5, unit: "cup", item: "Parmesan, grated", cat: "Produce" },
      { amount: 0, unit: "", item: "salt, pepper", cat: "Pantry" }
    ],
    steps: [
      "Add potatoes and water to the pot.",
      "Pressure Cook 12 min, Quick Release. Drain water.",
      "While potatoes cook, melt butter in a skillet with garlic, sage, and thyme for 3 min.",
      "Mash potatoes immediately. Stir in herb butter, cream cheese, and Parmesan.",
      "Season with salt and pepper. Serve warm."
    ],
    timer: { minutes: 12, label: "Pressure Cook" }
  },
  {
    id: "sausage-kale-soup",
    name: "Sausage, Kale & White Bean Soup",
    methods: ["saute", "pressure"],
    mealType: "dinner",
    servings: 6,
    ingredients: [
      { amount: 1, unit: "lb", item: "Italian sausage", cat: "Proteins" },
      { amount: 2, unit: "cans", item: "cannellini beans, drained", cat: "Canned / Jarred" },
      { amount: 4, unit: "cups", item: "kale, chopped", cat: "Produce" },
      { amount: 3, unit: "", item: "potatoes, diced", cat: "Produce" },
      { amount: 6, unit: "cups", item: "chicken broth", cat: "Canned / Jarred" },
      { amount: 1, unit: "", item: "onion, diced", cat: "Produce" },
      { amount: 3, unit: "cloves", item: "garlic, minced", cat: "Produce" },
      { amount: 1, unit: "tsp", item: "smoked paprika", cat: "Pantry" },
      { amount: 0.5, unit: "cup", item: "heavy cream", cat: "Produce" },
      { amount: 0, unit: "", item: "salt, pepper", cat: "Pantry" }
    ],
    steps: [
      "Sauté Italian sausage, breaking it up, for 5 min. Add onion and garlic, cook 2 min.",
      "Add potatoes, beans, broth, and smoked paprika.",
      "Pressure Cook 3 min, Natural Release 10 min.",
      "Stir in chopped kale and heavy cream. Sauté 3 min until kale wilts.",
      "Season to taste and serve."
    ],
    timer: { minutes: 3, label: "Pressure Cook" }
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
