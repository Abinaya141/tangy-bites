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
    <div className="sticky top-[72px] md:top-[72px] z-20 bg-orange-50/95 backdrop-blur border-b border-orange-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-2">
        <div className="flex gap-2 overflow-x-auto no-scrollbar flex-1">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setCategory(c.id)}
              className={
                "whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold border transition active:scale-95 flex items-center gap-1.5 " +
                (category === c.id
                  ? "bg-orange-500 text-white border-orange-500 shadow-sm"
                  : "bg-white text-stone-600 border-orange-200 hover:border-orange-400 hover:text-orange-600")
              }
            >
              <span>{c.emoji}</span>
              {c.label}
            </button>
          ))}
        </div>

        <div className="relative shrink-0 hidden sm:block">
          <div className="flex items-center gap-1.5 bg-white border border-orange-200 rounded-full px-3 py-2 shadow-sm">
            <SlidersHorizontal size={14} className="text-orange-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent outline-none text-xs font-semibold text-stone-600 cursor-pointer pr-1"
            >
              {SORT_OPTIONS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="sm:hidden px-4 pb-3 -mt-1">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full bg-white border border-orange-200 rounded-full px-4 py-2 text-xs font-semibold text-stone-600 outline-none shadow-sm"
        >
          {SORT_OPTIONS.map((s) => (
            <option key={s.id} value={s.id}>
              {s.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
