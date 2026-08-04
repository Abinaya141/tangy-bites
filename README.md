# 🍊 #TangyBites — Food Ordering App

A cute, fully client-side food ordering UI built with **React + Vite + Tailwind CSS**.
No backend required — search, filter, sort, add to cart, and check out through a
mock payment flow, all running in the browser.

## ✨ Features

- 🔍 **Live search** across dish names
- 🗂️ **Category filters** (Beverages, Snacks, Rice, Main Course, Desserts)
- ↕️ **Sort** by popularity, price, or rating
- ❤️ Favorite/wishlist toggle per dish
- 🛒 Slide-in cart drawer with live totals & free-delivery threshold
- 🧾 **Checkout page** — address, phone, and a mock payment step (Cash / Card / UPI)
- 🛵 Animated "placing order" + confirmation screen (frontend-only simulation)
- 📱 Fully responsive, mobile-first layout

> ⚠️ This app has **no backend and processes no real payments** — the checkout
> and "place order" flow are simulated entirely on the client for demo purposes.

## 📁 Project Structure

```
tangybites/
├── public/                      # Static assets (favicon, etc.)
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Top bar — brand, search, cart button
│   │   ├── CategoryTabs.jsx     # Category filter chips + sort dropdown
│   │   ├── FoodCard.jsx         # Individual dish card (add/qty/favorite)
│   │   ├── EmptyState.jsx       # "No dishes found" state
│   │   ├── MiniCartBar.jsx      # Floating bottom cart summary bar
│   │   ├── CartDrawer.jsx       # Slide-in cart panel (routes to checkout)
│   │   ├── CheckoutPage.jsx     # Address + mock payment + confirm
│   │   └── DeliveryAnimation.jsx# Loading + success animation
│   ├── data/
│   │   └── items.js             # Menu items, categories, sort options
│   ├── styles/
│   │   └── global.css           # Fonts, Tailwind directives, keyframes
│   ├── utils/
│   │   └── currency.js          # ₹ currency formatter
│   ├── App.jsx                  # App state, filtering/sorting, layout
│   └── main.jsx                 # React entry point
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## 🏗️ Build for production

```bash
npm run build
npm run preview
```

## 🛠️ Tech Stack

- React 18
- Vite 5
- Tailwind CSS 3
- lucide-react (icons)

## 🧾 Checkout Flow (no backend)

1. Add dishes to cart from the menu grid.
2. Open the cart drawer → **Proceed to Checkout**.
3. Fill in a delivery address + phone, pick a payment method
   (Cash on Delivery / Card / UPI — all mock inputs).
4. **Confirm & Pay** triggers a simulated "placing order" animation,
   then an order-confirmed screen, then the cart resets.

All state lives in React (`useState`/`useMemo`) — nothing is persisted
or sent to a server.
