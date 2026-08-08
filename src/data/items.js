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
  { id: "popular", label: "Popular" },
  { id: "price-low", label: "Price: Low to High" },
  { id: "price-high", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

export const ITEMS = [
  {
    id: 1,
    name: "Masala Chai",
    image: masalaChai,
    cat: "beverages",
    price: 25,
    desc: "A comforting blend of strong tea and aromatic spices, served hot.",
    rating: 4.8,
    tag: "Bestseller",
  },
  {
    id: 2,
    name: "Cold Coffee",
    image: coldCoffee,
    cat: "beverages",
    price: 85,
    desc: "Smooth chilled coffee blended with creamy milk for a refreshing sip.",
    rating: 4.6,
  },
  {
    id: 3,
    name: "Fresh Lemon Soda",
    image: limeSoda,
    cat: "beverages",
    price: 45,
    desc: "A refreshing mix of zesty lemon, fizzy soda, and a touch of sweetness.",
    rating: 4.5,
    tag: "Tangy",
  },
  {
    id: 4,
    name: "Mango Lassi",
    image: mangoLassi,
    cat: "beverages",
    price: 75,
    desc: "Creamy yogurt blended with ripe mangoes for a rich and refreshing drink.",
    rating: 4.9,
    tag: "Popular",
  },
  {
    id: 5,
    name: "Samosa (2 pcs)",
    image: samosa,
    cat: "snacks",
    price: 35,
    desc: "Crispy golden pastry filled with a flavorful blend of spiced potatoes.",
    rating: 4.7,
    tag: "Spicy",
  },
  {
    id: 6,
    name: "French Fries",
    image: frenchFries,
    cat: "snacks",
    price: 90,
    desc: "Golden crispy potato fries seasoned lightly and served fresh and hot.",
    rating: 4.6,
  },
  {
    id: 7,
    name: "Chicken Nuggets",
    image: chickenNuggets,
    cat: "snacks",
    price: 140,
    desc: "Crispy golden chicken bites with a juicy, tender center in every piece.",
    rating: 4.7,
  },
  {
    id: 8,
    name: "Veg Spring Roll",
    image: vegRoll,
    cat: "snacks",
    price: 100,
    desc: "Crispy rolls packed with fresh vegetables and served with sweet chilli dip.",
    rating: 4.4,
  },
  {
    id: 9,
    name: "Veg Fried Rice",
    image: vegFriedRice,
    cat: "rice",
    price: 130,
    desc: "Fragrant rice wok-tossed with fresh vegetables and aromatic seasonings.",
    rating: 4.5,
  },
  {
    id: 10,
    name: "Chicken Biryani",
    image: chickenBiryani,
    cat: "rice",
    price: 210,
    desc: "Aromatic basmati rice slow-cooked with tender chicken and flavorful spices.",
    rating: 4.9,
    tag: "Bestseller",
  },
  {
    id: 11,
    name: "Egg Fried Rice",
    image: eggFriedRice,
    cat: "rice",
    price: 140,
    desc: "Classic wok-fried rice tossed with fluffy eggs and savory seasonings.",
    rating: 4.6,
  },
  {
    id: 12,
    name: "Paneer Butter Masala",
    image: paneerButterMasala,
    cat: "main",
    price: 180,
    desc: "Soft paneer cooked in a rich, creamy tomato gravy with mild spices.",
    rating: 4.8,
    tag: "Popular",
  },
  {
    id: 13,
    name: "Butter Naan",
    image: butterNaan,
    cat: "main",
    price: 35,
    desc: "Soft and fluffy tandoor-baked naan brushed generously with melted butter.",
    rating: 4.7,
  },
  {
    id: 14,
    name: "Grilled Chicken",
    image: grilledChicken,
    cat: "main",
    price: 230,
    desc: "Juicy chicken grilled with smoky spices for a delicious charred finish.",
    rating: 4.8,
    tag: "Spicy",
  },
  {
    id: 15,
    name: "Veg Thali",
    image: vegThalli,
    cat: "main",
    price: 170,
    desc: "A wholesome traditional meal featuring six flavorful vegetarian dishes.",
    rating: 4.6,
  },
  {
    id: 16,
    name: "Gulab Jamun",
    image: gulabJamun,
    cat: "desserts",
    price: 50,
    desc: "Soft golden dumplings soaked in warm, fragrant sugar syrup and served sweet.",
    rating: 4.9,
    tag: "Bestseller",
  },
  {
    id: 17,
    name: "Chocolate Brownie",
    image: chocolateBrownie,
    cat: "desserts",
    price: 85,
    desc: "Rich and fudgy chocolate brownie with a soft, indulgent center.",
    rating: 4.7,
  },
  {
    id: 18,
    name: "Ice Cream Sundae",
    image: iceCreamSundae,
    cat: "desserts",
    price: 100,
    desc: "Creamy vanilla ice cream topped with smooth chocolate sauce and sweetness.",
    rating: 4.6,
  },
  {
    id: 19,
    name: "Tangy Tamarind Cooler",
    image: tamrindCooler,
    cat: "beverages",
    price: 55,
    desc: "A zesty tamarind and mint cooler with a refreshing sweet and tangy taste.",
    rating: 4.7,
    tag: "Tangy",
  },
  {
    id: 20,
    name: "Tangy Chaat Bites",
    image: chaatBites,
    cat: "snacks",
    price: 75,
    desc: "Crunchy puffed rice tossed with tangy chutneys, spices, and fresh flavors.",
    rating: 4.8,
    tag: "Tangy",
  },
];
