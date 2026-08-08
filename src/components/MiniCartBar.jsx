import React from "react";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { currency } from "../utils/currency.js";

export default function MiniCartBar({ count, total, onClick }) {
  if (count <= 0) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-1/2 z-30 w-[92%] max-w-md -translate-x-1/2">
      <button
        type="button"
        onClick={onClick}
        className="
          group
          flex
          w-full
          items-center
          justify-between
          gap-4
          rounded-2xl
          bg-orange-600
          px-5
          py-3.5
          text-white
          shadow-xl
          transition
          hover:bg-orange-700
          active:scale-[0.98]
          animate-slide-up
        "
      >
        <span className="flex min-w-0 items-center gap-2.5">
          <span
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-white/15
            "
          >
            <ShoppingCart size={17} />
          </span>

          <span className="min-w-0 text-left">
            <span className="block text-[10px] font-medium text-orange-100">
              {count === 1 ? "1 item" : `${count} items`} in your cart
            </span>

            <span className="block truncate text-sm font-extrabold">
              View Cart
            </span>
          </span>
        </span>

        <span className="flex shrink-0 items-center gap-2">
          <span className="text-sm font-extrabold sm:text-base">
            {currency(total)}
          </span>

          <span
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              bg-white/15
              transition-transform
              duration-200
              group-hover:translate-x-0.5
            "
          >
            <ArrowRight size={15} />
          </span>
        </span>
      </button>
    </div>
  );
}
