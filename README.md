# 🍊 TangyBites

**Order No. 01 — Food Ordering, Reimagined**

A fast, frontend-only food ordering app built with React, Vite, and Tailwind CSS. No backend. No database. No real payments. Just a fully working order flow, from craving to (simulated) doorstep.

> **This is a demo ticket, not a real receipt.** Everything — cart, checkout, payment, delivery status — runs entirely in the browser.

---

## Order Preview

![TangyBites Food Ordering App](/src/assets/images/main.png)

![TangyBites Menu](/src/assets/images/menu.png)

---

## What's on the Menu

TangyBites is a clean, modern take on the food-delivery interface — built to show what a complete ordering experience looks like using nothing but React state. No server required to take your order.

From the moment someone lands on the page to the moment their (fake) order is confirmed, the whole journey lives client-side:

- Browse the full menu
- Search for a craving by name
- Filter by category
- Sort by popularity, price, or rating
- Add, remove, and adjust quantities in the cart
- Save favorites for next time
- Watch live totals update as the cart changes
- Walk through checkout and pick a payment method
- Get an order confirmation, complete with delivery ETA

---

## What's Inside

### Discovery

The part where cravings get found.

- Live search across dish names
- Category tabs for quick filtering
- Sort by popularity, price, or rating
- Responsive card grid with ratings and promo tags

### Cart

The part where the order takes shape.

- Add to cart with a tap
- Increase or decrease quantity inline
- Auto-remove when quantity hits zero
- Live subtotal, delivery fee, and free-delivery threshold logic
- Floating mini cart bar + full slide-in drawer

### Favorites

The part that remembers what you liked.

- Toggle favorite state per dish
- Clear visual feedback via Lucide icons

### Checkout

The part that closes the ticket.

- Delivery address + validated mobile number
- Three payment paths: Cash on Delivery, Card (mock), UPI (mock)
- Dynamic, always-accurate order total
- Full client-side validation before confirming

### Order Confirmation

The part where the kitchen gets the memo.

- Animated "placing order" state
- Kitchen-received confirmation
- Estimated delivery window
- Cart automatically resets after confirmation

### Responsive by Default

Built to hold up cleanly on desktop, laptop, tablet, and mobile — no separate mobile build required.

---

## Built With

| Technology   | Role                            |
| ------------ | ------------------------------- |
| React        | UI and application state        |
| Vite         | Dev server and production build |
| Tailwind CSS | Styling and responsive layout   |
| Lucide React | Icon set                        |
| JavaScript   | App logic                       |
| HTML5        | Structure                       |
| CSS          | Custom animation and styling    |

---

## Project Layout

```text
tangybites/
│
├── public/
│   └── tangybites-preview.png
│
├── src/
│   ├── assets/
│   │   └── images/
│   │
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── CategoryTabs.jsx
│   │   ├── FoodCard.jsx
│   │   ├── EmptyState.jsx
│   │   ├── MiniCartBar.jsx
│   │   ├── CartDrawer.jsx
│   │   ├── CheckoutPage.jsx
│   │   └── DeliveryAnimation.jsx
│   │
│   ├── data/
│   │   └── items.js
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   ├── utils/
│   │   └── currency.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── .gitignore
└── README.md
```

---

## Running It Locally

```bash
# install dependencies
npm install

# start the dev server
npm run dev

# build for production
npm run build
```

---

## A Note on the Demo

Every part of the ordering flow - search, cart, checkout, payment, delivery status — is simulated entirely in the browser. No data is sent anywhere, no card details are stored, and no real order is ever placed. Consider it a working prototype of the full experience, ready to be wired up to a real backend when the time comes.

---

**TangyBites** — hot, fast, and always a little zesty. 🌶️
