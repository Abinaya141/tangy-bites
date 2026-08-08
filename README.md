# TangyBites — Food Ordering App

A modern, responsive food ordering web application built with React, Vite, and Tailwind CSS.

TangyBites provides a smooth food-ordering experience with live search, category filtering, sorting, favorites, cart management, and a complete client-side checkout flow.

> **Demo project:** This application is frontend-only. No backend, database, or real payment processing is connected.

---

## Project Preview

![TangyBites Food Ordering App](./public/tangybites-preview.png)

---

## Overview

TangyBites is designed as a clean and user-friendly food ordering interface inspired by modern food delivery platforms.

The application demonstrates how a complete ordering experience can be built using React state management without requiring a backend.

Users can:

- Browse available food items
- Search for dishes
- Filter items by category
- Sort items by popularity, price, or rating
- Add and remove items from the cart
- Adjust item quantities
- Mark dishes as favorites
- View live cart totals
- Proceed through a checkout flow
- Select a mock payment method
- Complete a simulated order

---

## Features

### Food Discovery

- Live search across food item names
- Category-based filtering
- Popularity sorting
- Price sorting
- Rating-based sorting
- Responsive food card layout
- Food ratings and promotional labels

### Cart Management

- Add items to cart
- Increase or decrease quantities
- Remove items automatically when quantity reaches zero
- Live item count
- Dynamic subtotal calculation
- Delivery fee calculation
- Free delivery threshold
- Floating cart summary bar
- Slide-in cart drawer

### Favorites

- Add or remove dishes from favorites
- Visual favorite state using Lucide icons

### Checkout

- Delivery address input
- Mobile number validation
- Cash on Delivery option
- Card payment mock interface
- UPI payment mock interface
- Dynamic order total
- Client-side checkout validation

### Order Confirmation

- Animated order placement state
- Kitchen preparation status
- Order confirmation screen
- Estimated delivery time
- Automatic cart reset after confirmation

### Responsive Design

The application is optimized for:

- Desktop
- Laptop
- Tablet
- Mobile devices

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React | User interface and application state |
| Vite | Development and production build tool |
| Tailwind CSS | Styling and responsive design |
| Lucide React | UI icons |
| JavaScript | Application logic |
| HTML5 | Application structure |
| CSS | Custom animations and styling |

---

## Project Structure

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
