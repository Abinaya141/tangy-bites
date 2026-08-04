import React, { useState } from "react";
import { Heart, Plus, Minus, Flame, Star } from "lucide-react";
import { currency } from "../utils/currency.js";

export default function FoodCard({
  item,
  qty,
  isFavorite,
  popped,
  onIncrement,
  onDecrement,
  onToggleFavorite,
}) {
  const [imgError, setImgError] = useState(false);
  const hasImage = item.image && !imgError;

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-lg border border-orange-100 transition-all duration-200 overflow-hidden flex flex-col">
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-gradient-to-br from-orange-100 to-amber-50 flex items-center justify-center">
        {hasImage ? (
          <img
            src={item.image}
            alt={item.name}
            onError={() => setImgError(true)}
            loading="lazy"
            className={
              "absolute inset-0 w-full h-full object-cover transition-transform duration-200 " +
              (popped ? "scale-110" : "group-hover:scale-105")
            }
          />
        ) : (
          <span
            className={
              "text-6xl select-none transition-transform duration-200 " +
              (popped ? "scale-125" : "group-hover:scale-110")
            }
          >
            {item.emoji}
          </span>
        )}

        <button
          onClick={onToggleFavorite}
          aria-label="Toggle favorite"
          className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 shadow flex items-center justify-center active:scale-90 transition"
        >
          <Heart
            size={17}
            className={
              isFavorite ? "fill-red-500 text-red-500" : "text-stone-400"
            }
          />
        </button>

        {item.tag && (
          <span className="absolute top-2.5 left-2.5 bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
            {item.tag === "Spicy" ? (
              <Flame size={10} />
            ) : (
              <Star size={10} className="fill-white" />
            )}
            {item.tag}
          </span>
        )}
      </div>

      <div className="p-4 flex flex-col gap-2 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold text-stone-800 leading-snug font-display">
            {item.name}
          </h3>
          <div className="flex items-center gap-1 text-amber-500 text-xs font-semibold shrink-0 mt-0.5">
            <Star size={12} className="fill-amber-400 text-amber-400" />
            {item.rating}
          </div>
        </div>
        <p className="text-xs text-stone-500 leading-relaxed flex-1">
          {item.desc}
        </p>

        <div className="flex items-center justify-between mt-1">
          <span className="text-lg font-extrabold text-orange-600">
            {currency(item.price)}
          </span>

          {qty === 0 ? (
            <button
              onClick={onIncrement}
              className="flex items-center gap-1 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold px-4 py-2 rounded-xl shadow-sm active:scale-95 transition"
            >
              <Plus size={15} /> Add
            </button>
          ) : (
            <div className="flex items-center gap-1 bg-orange-500 rounded-xl overflow-hidden shadow-sm">
              <button
                onClick={onDecrement}
                className="text-white w-8 h-9 flex items-center justify-center hover:bg-orange-600 active:scale-90 transition"
                aria-label="Decrease quantity"
              >
                <Minus size={15} />
              </button>
              <span className="text-white font-bold text-sm w-6 text-center select-none">
                {qty}
              </span>
              <button
                onClick={onIncrement}
                className="text-white w-8 h-9 flex items-center justify-center hover:bg-orange-600 active:scale-90 transition"
                aria-label="Increase quantity"
              >
                <Plus size={15} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
