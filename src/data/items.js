import masalaChai from "../assets/images/masala-chai.png";
import limeSoda from "../assets/images/fresh-lime-soda.png";
import mangoLassi from "../assets/images/mango-lassi.png";
import samosa from "../assets/images/samosa.png";
import chickenBiryani from "../assets/images/chicken-biryani.png";
import tamrindCooler from "../assets/images/tangy-tamrind-cooler.png";
import coldCoffee from "../assets/images/cold-coffee.png";
import chaatBites from "../assets/images/chaat-bites.png";
import frenchFries from "../assets/images/french-fries.png";
import chickenNuggets from "../assets/images/chicken-nuggets.png";
import vegRoll from "../assets/images/veg-roll.png";
import vegFriedRice from "../assets/images/veg-fried-rice.png";
import eggFriedRice from "../assets/images/egg-fried-rice.png";
import paneerButterMasala from "../assets/images/paneer-butter-masala.png";
import grilledChicken from "../assets/images/grilled-chicken.png";
import butterNaan from "../assets/images/butter-naan.png";
import vegThalli from "../assets/images/veg-thali.png";
import gulabJamun from "../assets/images/gulab-jamun.png";
import chocolateBrownie from "../assets/images/chocolate-brownie.png";
import iceCreamSundae from "../assets/images/icecream-sundae.png";

export const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "beverages", label: "Beverages" },
  { id: "snacks", label: "Snacks" },
  { id: "rice", label: "Rice" },
  { id: "main", label: "Main Course" },
  { id: "desserts", label: "Desserts" },
];

export const SORT_OPTIONS = [
  { id: "popular", label: "🔥 Popular" },
  { id: "price-low", label: "💸 Price: Low to High" },
  { id: "price-high", label: "💰 Price: High to Low" },
  { id: "rating", label: "⭐ Top Rated" },
];

export const ITEMS = [
  {
    id: 1,
    name: "Masala Chai",
    image: masalaChai,
    cat: "beverages",
    price: 30,
    desc: "Spiced Indian tea, brewed hot",
    rating: 4.8,
    tag: "Bestseller",
  },
  {
    id: 2,
    name: "Cold Coffee",
    image: coldCoffee,
    cat: "beverages",
    price: 90,
    desc: "Chilled coffee with cream",
    rating: 4.6,
  },
  {
    id: 3,
    name: "Fresh Lemon Soda",
    image: limeSoda,
    cat: "beverages",
    price: 60,
    desc: "Sweet & tangy, extra chilled",
    rating: 4.5,
    tag: "Tangy",
  },
  {
    id: 4,
    name: "Mango Lassi",
    image: mangoLassi,
    cat: "beverages",
    price: 80,
    desc: "Creamy yogurt mango blend",
    rating: 4.9,
    tag: "Popular",
  },
  {
    id: 5,
    name: "Samosa (2 pcs)",
    image: samosa,
    cat: "snacks",
    price: 40,
    desc: "Crispy fried pastry, spicy filling",
    rating: 4.7,
    tag: "Spicy",
  },
  {
    id: 6,
    name: "French Fries",
    image: frenchFries,
    cat: "snacks",
    price: 99,
    desc: "Golden crispy, salted",
    rating: 4.6,
  },
  {
    id: 7,
    name: "Chicken Nuggets",
    image: chickenNuggets,
    cat: "snacks",
    price: 150,
    desc: "Crunchy bites, 6 pieces",
    rating: 4.7,
  },
  {
    id: 8,
    name: "Veg Spring Roll",
    image: vegRoll,
    cat: "snacks",
    price: 110,
    desc: "Crispy rolls, sweet chilli dip",
    rating: 4.4,
  },
  {
    id: 9,
    name: "Veg Fried Rice",
    image: vegFriedRice,
    cat: "rice",
    price: 140,
    desc: "Wok tossed rice & vegetables",
    rating: 4.5,
  },
  {
    id: 10,
    name: "Chicken Biryani",
    image: chickenBiryani,
    cat: "rice",
    price: 220,
    desc: "Slow cooked, aromatic spices",
    rating: 4.9,
    tag: "Bestseller",
  },
  {
    id: 11,
    name: "Egg Fried Rice",
    image: eggFriedRice,
    cat: "rice",
    price: 150,
    desc: "Classic wok fried rice",
    rating: 4.6,
  },
  {
    id: 12,
    name: "Paneer Butter Masala",
    image: paneerButterMasala,
    cat: "main",
    price: 190,
    desc: "Rich creamy tomato gravy",
    rating: 4.8,
    tag: "Popular",
  },
  {
    id: 13,
    name: "Butter Naan",
    image: butterNaan,
    cat: "main",
    price: 45,
    desc: "Soft tandoor baked bread",
    rating: 4.7,
  },
  {
    id: 14,
    name: "Grilled Chicken",
    image: grilledChicken,
    cat: "main",
    price: 240,
    desc: "Char grilled, smoky spices",
    rating: 4.8,
    tag: "Spicy",
  },
  {
    id: 15,
    name: "Veg Thali",
    image: vegThalli,
    cat: "main",
    price: 180,
    desc: "Complete meal, 6 items",
    rating: 4.6,
  },
  {
    id: 16,
    name: "Gulab Jamun",
    image: gulabJamun,
    cat: "desserts",
    price: 60,
    desc: "Warm syrup soaked dumplings",
    rating: 4.9,
    tag: "Bestseller",
  },
  {
    id: 17,
    name: "Chocolate Brownie",
    image: chocolateBrownie,
    cat: "desserts",
    price: 90,
    desc: "Fudgy, served warm",
    rating: 4.7,
  },
  {
    id: 18,
    name: "Ice Cream Sundae",
    image: iceCreamSundae,
    cat: "desserts",
    price: 110,
    desc: "Vanilla scoop, chocolate sauce",
    rating: 4.6,
  },
  {
    id: 19,
    name: "Tangy Tamarind Cooler",
    image: tamrindCooler,
    cat: "beverages",
    price: 70,
    desc: "Zesty tamarind & mint refresher",
    rating: 4.7,
    tag: "Tangy",
  },
  {
    id: 20,
    name: "Tangy Chaat Bites",
    image: chaatBites,
    cat: "snacks",
    price: 85,
    desc: "Crunchy puffed rice, tangy chutneys",
    rating: 4.8,
    tag: "Tangy",
  },
];
