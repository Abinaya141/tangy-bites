import React from "react";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center text-stone-400">
      <span className="text-6xl mb-3">🍽️</span>
      <p className="font-semibold text-stone-500">No dishes found</p>
      <p className="text-sm">Try a different search or category 🔎</p>
    </div>
  );
}
