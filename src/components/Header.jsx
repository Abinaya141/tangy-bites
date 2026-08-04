import React from "react";
import { ShoppingCart, Search } from "lucide-react";

export default function Header({ query, setQuery, cartCount, onCartClick }) {
  return (
    <header className="sticky top-0 z-30 bg-gradient-to-r from-orange-500 to-orange-400 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-3xl leading-none select-none">🍊</span>
          <div className="leading-tight">
            <h1 className="text-white font-extrabold text-xl sm:text-2xl tracking-tight font-display">
              #TangyBites
            </h1>
            <p className="text-orange-100 text-xs hidden sm:block">
              Fresh food, delivered fast 🛵💨
            </p>
          </div>
        </div>

        <div className="flex-1 max-w-md hidden md:flex items-center bg-white/95 rounded-full px-4 py-2 shadow-inner">
          <Search size={18} className="text-orange-400 shrink-0" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search dishes, drinks, snacks… 🔍"
            className="w-full bg-transparent outline-none px-2 text-sm placeholder:text-stone-400"
          />
        </div>

        <button
          onClick={onCartClick}
          className="relative flex items-center gap-2 bg-white text-orange-600 font-bold px-4 py-2.5 rounded-full shadow hover:bg-orange-50 active:scale-95 transition"
        >
          <ShoppingCart size={19} />
          <span className="hidden sm:inline text-sm">Cart</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce-short">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      <div className="md:hidden px-4 pb-3">
        <div className="flex items-center bg-white/95 rounded-full px-4 py-2 shadow-inner">
          <Search size={17} className="text-orange-400 shrink-0" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search dishes… 🔍"
            className="w-full bg-transparent outline-none px-2 text-sm placeholder:text-stone-400"
          />
        </div>
      </div>
    </header>
  );
}
