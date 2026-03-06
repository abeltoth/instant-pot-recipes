const dayEmojis = ["\ud83d\udcd6", "\ud83c\udf72", "\ud83c\udf5f", "\ud83c\udf5c", "\ud83c\udf36\ufe0f", "\ud83c\udf89", "\u2615"];

// ============ DATA ============
const recipes = [
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
      "Add 1 cup water and place eggs on trivet.",
      "Pressure Cook 5 min, Quick Release.",
      "Ice bath 5 min. Serve with toast."
    ],
    timer: { minutes: 5, label: "Pressure Cook" }
  },
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
      "Rice: 1 cup rice + 1 cup water. Pressure Cook 4 min, Natural Release 10 min.",
      "Chicken: Season with salt, pepper, paprika, garlic powder.",
      "Pressure Cook 10 min, Natural Release 5 min."
    ],
    timer: { minutes: 10, label: "Pressure Cook (Chicken)" }
  },
  {
    id: "air-fryer-fries",
    name: "Air Fryer Fries",
    methods: ["air"],
    mealType: "snack",
    servings: 2,
    ingredients: [
      { amount: 0, unit: "", item: "frozen french fries (half bag)", cat: "Frozen" }
    ],
    steps: [
      "Place frozen fries in air fryer basket.",
      "Air Crisp 400\u00b0F, 15 min. Shake halfway."
    ],
    timer: { minutes: 15, label: "Air Crisp" }
  },
  {
    id: "oatmeal-banana",
    name: "Steel Cut Oatmeal with Banana",
    methods: ["pressure"],
    mealType: "breakfast",
    servings: 2,
    ingredients: [
      { amount: 1, unit: "cup", item: "steel cut oats", cat: "Grains & Pasta" },
      { amount: 3, unit: "cups", item: "water", cat: null },
      { amount: 1, unit: "", item: "banana, sliced", cat: "Produce" },
      { amount: 0, unit: "", item: "pinch salt, cinnamon", cat: "Pantry" }
    ],
    steps: [
      "Add 1 cup oats + 3 cups water + pinch salt.",
      "Pressure Cook 10 min, Natural Release 10 min.",
      "Top with sliced banana + cinnamon."
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
      "Add 1 lb penne + 1 jar marinara + 3 cups water + salt.",
      "Stir so pasta is submerged.",
      "Pressure Cook 5 min, Quick Release. Stir well."
    ],
    timer: { minutes: 5, label: "Pressure Cook" }
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
      "Place hash browns in basket with oil spray + salt.",
      "Air Crisp 400\u00b0F, 12 min, flip halfway.",
      "Cook eggs on stove separately."
    ],
    timer: { minutes: 12, label: "Air Crisp" }
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
      "Season chicken thighs.",
      "Pressure Cook 10 min, Quick Release.",
      "Transfer to air fryer basket.",
      "Air Crisp 400\u00b0F, 8 min until skin is golden.",
      "Serve with leftover rice."
    ],
    timer: { minutes: 10, label: "Pressure Cook" }
  },
  {
    id: "eggs-oatmeal-leftover",
    name: "Hard Boiled Eggs + Oatmeal",
    methods: ["pressure"],
    mealType: "breakfast",
    servings: 2,
    ingredients: [
      { amount: 6, unit: "", item: "eggs", cat: "Proteins" },
      { amount: 1, unit: "cup", item: "steel cut oats", cat: "Grains & Pasta" },
      { amount: 3, unit: "cups", item: "water", cat: null }
    ],
    steps: [
      "Use same method as Monday (eggs) and/or Tuesday (oatmeal).",
      "Use leftovers or make fresh."
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
      "Saut\u00e9 diced onion, carrots, celery in olive oil (Saut\u00e9 mode, 4 min).",
      "Add diced potatoes + 4 cups broth + salt + pepper.",
      "Pressure Cook 8 min, Quick Release.",
      "Mash some potatoes in pot for thickness."
    ],
    timer: { minutes: 8, label: "Pressure Cook" }
  },
  {
    id: "oatmeal-blueberries",
    name: "Steel Cut Oatmeal with Blueberries",
    methods: ["pressure"],
    mealType: "breakfast",
    servings: 2,
    ingredients: [
      { amount: 1, unit: "cup", item: "steel cut oats", cat: "Grains & Pasta" },
      { amount: 3, unit: "cups", item: "water", cat: null },
      { amount: 0.5, unit: "cup", item: "blueberries", cat: "Produce" },
      { amount: 0, unit: "", item: "pinch salt, brown sugar", cat: "Pantry" }
    ],
    steps: [
      "Same as Tuesday: 1 cup oats + 3 cups water + pinch salt.",
      "Pressure Cook 10 min, Natural Release 10 min.",
      "Top with blueberries + brown sugar."
    ],
    timer: { minutes: 10, label: "Pressure Cook" }
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
      "Saut\u00e9 1 lb ground beef + diced onion (Saut\u00e9 mode, 5 min, break up meat).",
      "Add 2 cans diced tomatoes + 1 can beans (drained) + tomato paste.",
      "Season with chili powder, cumin, garlic powder, salt.",
      "Pressure Cook 20 min, Natural Release 10 min."
    ],
    timer: { minutes: 20, label: "Pressure Cook" }
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
      "Place sausage in basket. Air Crisp 400\u00b0F, 10 min, turn halfway.",
      "Hash browns same as Wednesday."
    ],
    timer: { minutes: 10, label: "Air Crisp" }
  },
  {
    id: "chili-over-rice",
    name: "Leftover Chili over Rice",
    methods: ["pressure"],
    mealType: "dinner",
    servings: 2,
    ingredients: [
      { amount: 1, unit: "cup", item: "white rice", cat: "Grains & Pasta" },
      { amount: 1, unit: "cup", item: "water", cat: null },
      { amount: 0, unit: "", item: "leftover beef chili", cat: null }
    ],
    steps: [
      "Make rice (same as Monday: 1 cup rice + 1 cup water, Pressure Cook 4 min, NR 10 min).",
      "Reheat chili on Saut\u00e9 mode or use Keep Warm."
    ],
    timer: { minutes: 4, label: "Pressure Cook (Rice)" }
  },
  {
    id: "baked-apples",
    name: "Air Fryer Baked Apples",
    methods: ["air"],
    mealType: "dessert",
    servings: 3,
    ingredients: [
      { amount: 3, unit: "", item: "apples, cored", cat: "Produce" },
      { amount: 0.25, unit: "cup", item: "oats", cat: "Grains & Pasta" },
      { amount: 2, unit: "tbsp", item: "brown sugar", cat: "Pantry" },
      { amount: 0, unit: "", item: "cinnamon, coconut oil", cat: "Pantry" }
    ],
    steps: [
      "Core 3 apples.",
      "Stuff with mix of oats + brown sugar + cinnamon + coconut oil.",
      "Air Crisp 350\u00b0F, 15 min."
    ],
    timer: { minutes: 15, label: "Air Crisp" }
  },
  {
    id: "big-oatmeal-bowl",
    name: "Big Oatmeal Bowl",
    methods: ["pressure"],
    mealType: "breakfast",
    servings: 2,
    ingredients: [
      { amount: 1, unit: "cup", item: "steel cut oats", cat: "Grains & Pasta" },
      { amount: 3, unit: "cups", item: "water", cat: null },
      { amount: 1, unit: "", item: "banana, sliced", cat: "Produce" },
      { amount: 0.5, unit: "cup", item: "blueberries", cat: "Produce" },
      { amount: 0, unit: "", item: "cinnamon, oat milk", cat: "Pantry" }
    ],
    steps: [
      "Steel cut oats (same method: 1 cup oats + 3 cups water, Pressure Cook 10 min, NR 10 min).",
      "Top with sliced banana + blueberries + cinnamon + drizzle of oat milk."
    ],
    timer: { minutes: 10, label: "Pressure Cook" }
  },
  {
    id: "coconut-rice",
    name: "Coconut Rice",
    methods: ["pressure"],
    mealType: "dinner",
    servings: 2,
    ingredients: [
      { amount: 1, unit: "cup", item: "white rice", cat: "Grains & Pasta" },
      { amount: 1, unit: "can", item: "coconut milk (full fat)", cat: "Canned / Jarred" },
      { amount: 0, unit: "", item: "water (to top off to 1.5 cups liquid)", cat: null }
    ],
    steps: [
      "Add 1 cup rice + 1 can coconut milk (top off with water to 1.5 cups liquid total).",
      "Pressure Cook 4 min, Natural Release 10 min.",
      "Serve with any leftover chicken or protein."
    ],
    timer: { minutes: 4, label: "Pressure Cook" }
  },
  {
    id: "cinnamon-apples",
    name: "Air Fryer Cinnamon Apples",
    methods: ["air"],
    mealType: "dessert",
    servings: 2,
    ingredients: [
      { amount: 2, unit: "", item: "apples, sliced", cat: "Produce" },
      { amount: 1, unit: "tbsp", item: "brown sugar", cat: "Pantry" },
      { amount: 0, unit: "", item: "cinnamon, squeeze of lemon", cat: "Pantry" }
    ],
    steps: [
      "Slice apples, toss with cinnamon + brown sugar + squeeze of lemon.",
      "Air Crisp 350\u00b0F, 10 min."
    ],
    timer: { minutes: 10, label: "Air Crisp" }
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
