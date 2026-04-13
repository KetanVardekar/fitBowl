export interface Ingredient {
  id: string;
  name: string;
  calories: number;
  protein: number;
  price: number;
  emoji: string;
  color: string;
}

export const ingredients: Ingredient[] = [
  {
    id: "chana",
    name: "Chana",
    calories: 164,
    protein: 9,
    price: 40,
    emoji: "🫘",
    color: "bg-yellow-100 border-yellow-300 text-yellow-800",
  },
  {
    id: "mung",
    name: "Mung",
    calories: 105,
    protein: 7,
    price: 35,
    emoji: "🌱",
    color: "bg-green-100 border-green-300 text-green-800",
  },
  {
    id: "tomato",
    name: "Tomato",
    calories: 18,
    protein: 0.9,
    price: 25,
    emoji: "🍅",
    color: "bg-red-100 border-red-300 text-red-800",
  },
  {
    id: "cucumber",
    name: "Cucumber",
    calories: 8,
    protein: 0.3,
    price: 20,
    emoji: "🥒",
    color: "bg-emerald-100 border-emerald-300 text-emerald-800",
  },
  {
    id: "corn",
    name: "Corn",
    calories: 86,
    protein: 3,
    price: 30,
    emoji: "🌽",
    color: "bg-yellow-100 border-yellow-300 text-yellow-800",
  },
  {
    id: "paneer",
    name: "Paneer",
    calories: 120,
    protein: 7,
    price: 60,
    emoji: "🧀",
    color: "bg-amber-100 border-amber-300 text-amber-800",
  },
  {
    id: "dahi",
    name: "Dahi",
    calories: 61,
    protein: 3.5,
    price: 25,
    emoji: "🥛",
    color: "bg-blue-100 border-blue-300 text-blue-800",
  },
  {
    id: "sweet-potato",
    name: "Sweet Potato",
    calories: 86,
    protein: 1.6,
    price: 35,
    emoji: "🍠",
    color: "bg-orange-100 border-orange-300 text-orange-800",
  },
  {
    id: "chicken",
    name: "Chicken",
    calories: 165,
    protein: 31,
    price: 100,
    emoji: "🍗",
    color: "bg-rose-100 border-rose-300 text-rose-800",
  },
];
