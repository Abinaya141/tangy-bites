import React, { useState, useMemo } from "react";
import { ITEMS } from "./data/items.js";
import Header from "./components/Header.jsx";
import CategoryTabs from "./components/CategoryTabs.jsx";
import FoodCard from "./components/FoodCard.jsx";
import EmptyState from "./components/EmptyState.jsx";
import MiniCartBar from "./components/MiniCartBar.jsx";
import CartDrawer from "./components/CartDrawer.jsx";

export default function App() {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const [cart, setCart] = useState({}); // { id: qty }
  const [favorites, setFavorites] = useState({}); // { id: true }
  const [cartOpen, setCartOpen] = useState(false);
  const [step, setStep] = useState("cart"); // "cart" | "checkout"
  const [orderStatus, setOrderStatus] = useState("idle"); // idle | loading | done
  const [poppedId, setPoppedId] = useState(null);

  const filteredItems = useMemo(() => {
    let list = ITEMS.filter((item) => {
      const matchesCat = category === "all" || item.cat === category;
      const matchesQuery = item.name.toLowerCase().includes(query.toLowerCase());
      return matchesCat && matchesQuery;
    });

    switch (sortBy) {
      case "price-low":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list = [...list].sort((a, b) => b.rating - a.rating);
        break;
      default:
        list = [...list].sort((a, b) => (b.tag ? 1 : 0) - (a.tag ? 1 : 0));
    }
    return list;
  }, [category, query, sortBy]);

  const cartItems = useMemo(() => {
    return Object.entries(cart)
      .filter(([, qty]) => qty > 0)
      .map(([id, qty]) => ({ ...ITEMS.find((i) => i.id === Number(id)), qty }));
  }, [cart]);

  const cartCount = cartItems.reduce((sum, i) => sum + i.qty, 0);
  const subtotal = cartItems.reduce((sum, i) => sum + i.qty * i.price, 0);
  const deliveryFee = subtotal > 0 ? (subtotal > 300 ? 0 : 29) : 0;
  const total = subtotal + deliveryFee;

  const updateQty = (id, delta) => {
    setCart((prev) => {
      const next = { ...prev };
      const current = next[id] || 0;
      const updated = Math.max(0, current + delta);
      if (updated === 0) {
        delete next[id];
      } else {
        next[id] = updated;
      }
      return next;
    });
    if (delta > 0) {
      setPoppedId(id);
      setTimeout(() => setPoppedId(null), 260);
    }
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const openCart = () => {
    setStep("cart");
    setCartOpen(true);
  };

  const goToCheckout = () => setStep("checkout");
  const backToCart = () => setStep("cart");

  // No backend — this simulates placing an order purely on the client.
  const confirmOrder = (_paymentMethod) => {
    if (cartItems.length === 0) return;
    setOrderStatus("loading");
    setTimeout(() => {
      setOrderStatus("done");
      setTimeout(() => {
        setOrderStatus("idle");
        setCart({});
        setCartOpen(false);
        setStep("cart");
      }, 2200);
    }, 2400);
  };

  return (
    <div className="min-h-screen bg-orange-50 text-stone-800 font-sans pb-24">
      <Header query={query} setQuery={setQuery} cartCount={cartCount} onCartClick={openCart} />

      <CategoryTabs category={category} setCategory={setCategory} sortBy={sortBy} setSortBy={setSortBy} />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 mt-6">
        {filteredItems.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredItems.map((item) => (
              <FoodCard
                key={item.id}
                item={item}
                qty={cart[item.id] || 0}
                isFavorite={!!favorites[item.id]}
                popped={poppedId === item.id}
                onIncrement={() => updateQty(item.id, 1)}
                onDecrement={() => updateQty(item.id, -1)}
                onToggleFavorite={() => toggleFavorite(item.id)}
              />
            ))}
          </div>
        )}
      </main>

      {cartCount > 0 && !cartOpen && (
        <MiniCartBar count={cartCount} total={total} onClick={openCart} />
      )}

      <CartDrawer
        open={cartOpen}
        step={step}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        updateQty={updateQty}
        subtotal={subtotal}
        deliveryFee={deliveryFee}
        total={total}
        orderStatus={orderStatus}
        onGoToCheckout={goToCheckout}
        onBackToCart={backToCart}
        onConfirmOrder={confirmOrder}
      />
    </div>
  );
}
