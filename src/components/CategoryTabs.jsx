import React from "react";
import { SlidersHorizontal } from "lucide-react";
import { CATEGORIES, SORT_OPTIONS } from "../data/items.js";

export default function CategoryTabs({
  category,
  setCategory,
  sortBy,
  setSortBy,
}) {
  return (
    <section className="border-b border-orange-100 bg-orange-50/70">
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <div
            className="
              flex
              min-w-0
              flex-1
              gap-2
              overflow-x-auto
              pb-1
              scrollbar-none
            "
          >
            {CATEGORIES.map((item) => {
              const active = category === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setCategory(item.id)}
                  aria-pressed={active}
                  className={`
                    group
                    inline-flex
                    shrink-0
                    items-center
                    gap-1.5
                    whitespace-nowrap
                    rounded-full
                    border
                    px-4
                    py-2.5
                    text-sm
                    font-semibold
                    transition-all
                    duration-200
                    active:scale-95
                    ${
                      active
                        ? "border-orange-500 bg-orange-500 text-white shadow-md shadow-orange-500/20"
                        : "border-orange-200 bg-white text-stone-600 hover:border-orange-400 hover:text-orange-600 hover:shadow-sm"
                    }
                  `}
                >
                  <span
                    className={`
                      text-base
                      transition-transform
                      duration-200
                      ${active ? "scale-110" : "group-hover:scale-110"}
                    `}
                  >
                    {item.emoji}
                  </span>

                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
          <div className="hidden shrink-0 sm:block">
            <div className="flex items-center gap-2 rounded-full border border-orange-200 bg-white px-3.5 py-2.5 shadow-sm">
              <SlidersHorizontal
                size={15}
                className="shrink-0 text-orange-500"
              />

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                aria-label="Sort food items"
                className="
                  cursor-pointer
                  bg-transparent
                  pr-1
                  text-xs
                  font-semibold
                  text-stone-600
                  outline-none
                "
              >
                {SORT_OPTIONS.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="mt-3 sm:hidden">
          <div className="flex items-center gap-2 rounded-xl border border-orange-200 bg-white px-3 shadow-sm">
            <SlidersHorizontal size={15} className="shrink-0 text-orange-500" />

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              aria-label="Sort food items"
              className="
                w-full
                bg-transparent
                py-2.5
                text-xs
                font-semibold
                text-stone-600
                outline-none
              "
            >
              {SORT_OPTIONS.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}
