import React from "react";
import { SearchX, UtensilsCrossed } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-24 text-center">
      <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-orange-100 bg-orange-50">
        <UtensilsCrossed
          size={38}
          strokeWidth={1.7}
          className="text-orange-400"
        />
      </div>

      <p className="text-lg font-bold text-stone-700">No dishes found</p>

      <div className="mt-2 flex items-center justify-center gap-1.5 text-sm text-stone-400">
        <SearchX size={16} />
        <span>Try a different search or category</span>
      </div>
    </div>
  );
}
