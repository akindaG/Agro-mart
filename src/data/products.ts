import { Product } from "@/types/product";
import oliveOilImg from "@/assets/olive-oil.jpg";
import honeyImg from "@/assets/honey.jpg";
import grainsImg from "@/assets/grains.jpg";
import nutsImg from "@/assets/nuts.jpg";
import vegetablesImg from "@/assets/vegetables.jpg";

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Sesame Oil",
    description:
      "100% pure, cold-pressed sesame oil. Rich in antioxidants and perfect for cooking or finishing dishes. Available in 250ml and 500ml bottles.",
    price: 24.99,
    image: oliveOilImg,
    category: "Oils",
    unit: "750ml",
    inStock: true,
  },
  {
    id: 2,
    name: "Organic Raw Honey",
    description: "Pure, unfiltered honey harvested from wildflower meadows. Contains natural enzymes and nutrients.",
    price: 18.99,
    image: honeyImg,
    category: "Sweeteners",
    unit: "500g",
    inStock: true,
  },
  {
    id: 3,
    name: "Organic Quinoa",
    description: "Premium quality quinoa, rich in protein and essential amino acids. Perfect for salads and side dishes.",
    price: 12.99,
    image: grainsImg,
    category: "Grains",
    unit: "1kg",
    inStock: true,
  },
  {
    id: 4,
    name: "Mixed Nuts & Dried Fruits",
    description: "A premium blend of almonds, walnuts, dates, and figs. Perfect for healthy snacking.",
    price: 16.99,
    image: nutsImg,
    category: "Snacks",
    unit: "500g",
    inStock: true,
  },
  {
    id: 5,
    name: "Fresh Organic Vegetables Box",
    description: "Farm-fresh seasonal vegetables delivered straight from our fields. Mix of tomatoes, peppers, and leafy greens.",
    price: 29.99,
    image: vegetablesImg,
    category: "Fresh Produce",
    unit: "5kg",
    inStock: true,
  },
  {
    id: 6,
    name: "Organic Brown Rice",
    description: "Whole grain brown rice, high in fiber and nutrients. Versatile for any meal.",
    price: 9.99,
    image: grainsImg,
    category: "Grains",
    unit: "2kg",
    inStock: true,
  },
  {
    id: 7,
    name: "Premium Coconut Oil",
    description: "Cold-pressed virgin coconut oil, perfect for cooking and baking. Rich in healthy fats.",
    price: 19.99,
    image: oliveOilImg,
    category: "Oils",
    unit: "500ml",
    inStock: true,
  },
  {
    id: 8,
    name: "Organic Almonds",
    description: "Raw organic almonds, packed with protein and healthy fats. Great for snacking or baking.",
    price: 14.99,
    image: nutsImg,
    category: "Snacks",
    unit: "400g",
    inStock: true,
  },
  {
    id: 9,
    name: "Alphonso Mango Box",
    description:
      "Handpicked ripe Alphonso mangoes straight from our partner orchards. Naturally sweet and fiber-rich.",
    price: 34.99,
    image: vegetablesImg,
    category: "Fruits",
    unit: "3kg",
    inStock: true,
  },
  {
    id: 10,
    name: "Seasonal Fruit Basket",
    description:
      "A curated basket of seasonal fruits including mangoes, bananas, oranges, and more for the whole family.",
    price: 39.99,
    image: vegetablesImg,
    category: "Fruits",
    unit: "5kg",
    inStock: true,
  },
  {
    id: 11,
    name: "Sweet Corn",
    description:
      "Crisp and sweet corn, grown using sustainable methods. Perfect for grilling, boiling, or salads.",
    price: 7.99,
    image: vegetablesImg,
    category: "Fresh Produce",
    unit: "1kg",
    inStock: true,
  },
  {
    id: 12,
    name: "Organic Fertilizer",
    description:
      "Nutrient-rich compost and fertilizer, created from our own farm byproducts. Ideal for home gardens.",
    price: 14.5,
    image: grainsImg,
    category: "Farm Essentials",
    unit: "10kg",
    inStock: true,
  },
  {
    id: 13,
    name: "Greenhouse Produce Box",
    description:
      "A weekly box of fresh, pesticide-free vegetables from our modern greenhouses. Includes tomatoes, cucumbers, peppers, and leafy greens.",
    price: 32.99,
    image: vegetablesImg,
    category: "Fresh Produce",
    unit: "4kg",
    inStock: true,
  },
];

export const categories = [
  "All",
  "Oils",
  "Grains",
  "Snacks",
  "Fresh Produce",
  "Sweeteners",
  "Fruits",
  "Farm Essentials",
];
