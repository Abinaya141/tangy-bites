import React, { useState } from "react";
import { Heart, Plus, Minus, Flame, Star, UtensilsCrossed } from "lucide-react";
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

  const hasImage = Boolean(item.image) && !imgError;

  return (
    <article
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-orange-100
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-orange-200
        hover:shadow-xl
      "
    >
      <div className="relative h-52 w-full shrink-0 overflow-hidden bg-orange-50 sm:h-56">
        {hasImage ? (
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            onError={() => setImgError(true)}
            className={`
              absolute
              inset-0
              h-full
              w-full
              object-cover
              transition-transform
              duration-500
              ease-out
              ${popped ? "scale-110" : "group-hover:scale-105"}
            `}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <UtensilsCrossed
              size={58}
              strokeWidth={1.5}
              className={`
                text-orange-300
                transition-transform
                duration-300
                ${popped ? "scale-125" : "group-hover:scale-110"}
              `}
            />
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <button
          type="button"
          onClick={onToggleFavorite}
          aria-label={
            isFavorite
              ? `Remove ${item.name} from favorites`
              : `Add ${item.name} to favorites`
          }
          className="
            absolute
            right-3
            top-3
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-xl
            bg-white/95
            shadow-md
            backdrop-blur-sm
            transition-all
            duration-200
            hover:scale-105
            hover:bg-white
            active:scale-90
          "
        >
          <Heart
            size={17}
            className={
              isFavorite ? "fill-red-500 text-red-500" : "text-stone-400"
            }
          />
        </button>

        {item.tag && (
          <span
            className="
              absolute
              left-3
              top-3
              inline-flex
              items-center
              gap-1
              rounded-xl
              bg-orange-500
              px-2.5
              py-1
              text-[10px]
              font-bold
              text-white
              shadow-sm
            "
          >
            {item.tag === "Spicy" ? (
              <Flame size={10} className="fill-white" />
            ) : (
              <Star size={10} className="fill-white" />
            )}

            {item.tag}
          </span>
        )}

        <div
          className="
            absolute
            bottom-3
            left-3
            inline-flex
            items-center
            gap-1
            rounded-xl
            bg-white/95
            px-2
            py-1
            text-[10px]
            font-bold
            text-stone-700
            shadow-sm
            backdrop-blur-sm
          "
        >
          <Star size={11} className="fill-amber-400 text-amber-400" />

          {item.rating}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <h3
            className="
              min-w-0
              flex-1
              font-display
              text-base
              font-extrabold
              leading-snug
              text-stone-800
            "
          >
            {item.name}
          </h3>

          <div
            className="
              flex
              shrink-0
              items-center
              gap-1
              rounded-xl
              bg-amber-50
              px-2
              py-1
              text-[11px]
              font-bold
              text-amber-600
            "
          >
            <Star size={11} className="fill-amber-400 text-amber-400" />

            {item.rating}
          </div>
        </div>

        <p
          className="
            min-h-[38px]
            flex-1
            text-xs
            leading-relaxed
            text-stone-500
          "
        >
          {item.desc}
        </p>

        <div className="flex items-center justify-between gap-3 pt-1">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-wide text-stone-400">
              Price
            </p>

            <span className="text-lg font-extrabold text-orange-600">
              {currency(item.price)}
            </span>
          </div>

          {qty === 0 ? (
            <button
              type="button"
              onClick={onIncrement}
              className="
                flex
                items-center
                gap-1.5
                rounded-xl
                bg-orange-500
                px-4
                py-2.5
                text-sm
                font-bold
                text-white
                shadow-sm
                transition-all
                duration-200
                hover:bg-orange-600
                hover:shadow-md
                active:scale-95
              "
            >
              <Plus size={15} />
              Add
            </button>
          ) : (
            <div
              className="
                flex
                items-center
                overflow-hidden
                rounded-xl
                bg-orange-500
                shadow-sm
              "
            >
              <button
                type="button"
                onClick={onDecrement}
                aria-label={`Decrease ${item.name}`}
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  text-white
                  transition
                  hover:bg-orange-600
                  active:scale-90
                "
              >
                <Minus size={15} />
              </button>

              <span
                className="
                  flex
                  h-9
                  w-7
                  select-none
                  items-center
                  justify-center
                  text-sm
                  font-extrabold
                  text-white
                "
              >
                {qty}
              </span>

              <button
                type="button"
                onClick={onIncrement}
                aria-label={`Increase ${item.name}`}
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  text-white
                  transition
                  hover:bg-orange-600
                  active:scale-90
                "
              >
                <Plus size={15} />
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
