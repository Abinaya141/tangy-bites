import React from "react";
import { currency } from "../utils/currency.js";

export default function MiniCartBar({ count, total, onClick }) {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-30 w-[92%] max-w-md">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between bg-orange-600 hover:bg-orange-700 text-white rounded-2xl px-5 py-3.5 shadow-xl active:scale-[0.98] transition animate-slide-up"
      >
        <span className="flex items-center gap-2 font-semibold text-sm">
          <span className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
            {count}
          </span>
          View Cart 🛒
        </span>
        <span className="font-bold">{currency(total)}</span>
      </button>
    </div>
  );
}
