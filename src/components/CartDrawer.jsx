// import React from "react";
// import { X, Plus, Minus, Trash2 } from "lucide-react";
// import { currency } from "../utils/currency.js";
// import DeliveryAnimation from "./DeliveryAnimation.jsx";
// import CheckoutPage from "./CheckoutPage.jsx";

// export default function CartDrawer({
//   open,
//   step, // "cart" | "checkout"
//   onClose,
//   items,
//   updateQty,
//   subtotal,
//   deliveryFee,
//   total,
//   orderStatus,
//   onGoToCheckout,
//   onBackToCart,
//   onConfirmOrder,
// }) {
//   return (
//     <>
//       <div
//         onClick={orderStatus === "idle" ? onClose : undefined}
//         className={
//           "fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 " +
//           (open
//             ? "opacity-100 pointer-events-auto"
//             : "opacity-0 pointer-events-none")
//         }
//       />
//       <div
//         className={
//           "fixed top-0 right-0 h-full w-full max-w-md bg-orange-50 z-50 shadow-2xl transform transition-transform duration-300 flex flex-col " +
//           (open ? "translate-x-0" : "translate-x-full")
//         }
//       >
//         {orderStatus !== "idle" ? (
//           <DeliveryAnimation status={orderStatus} />
//         ) : step === "checkout" ? (
//           <CheckoutPage
//             subtotal={subtotal}
//             deliveryFee={deliveryFee}
//             total={total}
//             onBack={onBackToCart}
//             onConfirm={onConfirmOrder}
//           />
//         ) : (
//           <>
//             <div className="flex items-center justify-between px-5 py-4 bg-white border-b border-orange-100 shrink-0">
//               <h2 className="font-extrabold text-lg text-stone-800 font-display">
//                 Your Cart 🛒
//               </h2>
//               <button
//                 onClick={onClose}
//                 className="w-9 h-9 rounded-full bg-orange-50 flex items-center justify-center hover:bg-orange-100 active:scale-90 transition"
//               >
//                 <X size={18} />
//               </button>
//             </div>

//             <div className="flex-1 overflow-y-auto px-5 py-4">
//               {items.length === 0 ? (
//                 <div className="flex flex-col items-center justify-center h-full text-center text-stone-400 gap-2">
//                   <span className="text-6xl">🛒</span>
//                   <p className="font-semibold text-stone-500">
//                     Your cart is empty
//                   </p>
//                   <p className="text-sm">
//                     Add some tasty items to get started 🍽️
//                   </p>
//                 </div>
//               ) : (
//                 <div className="flex flex-col gap-3">
//                   {items.map((item) => (
//                     <div
//                       key={item.id}
//                       className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm border border-orange-100"
//                     >
//                       {/* <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center text-3xl shrink-0">
//                         <img
//                           src={item.image}
//                           alt={item.name}
//                           onError={() => setImgError(true)}
//                           loading="lazy"
//                           className="absolute inset-0 w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
//                         />
//                       </div> */}
//                       <div className="w-16 h-16 rounded-lg overflow-hidden bg-orange-100 flex items-center justify-center shrink-0">
//                         <img
//                           src={item.image}
//                           alt={item.name}
//                           onError={() => setImgError(true)}
//                           loading="lazy"
//                           className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
//                         />
//                       </div>
//                       <div className="flex-1 min-w-0">
//                         <p className="font-semibold text-sm text-stone-800 truncate">
//                           {item.name}
//                         </p>

//                         <p className="text-xs text-stone-500">
//                           {currency(item.price)} × {item.qty}
//                         </p>

//                         <p className="text-orange-600 font-bold text-sm">
//                           {currency(item.price * item.qty)}
//                         </p>
//                       </div>
//                       {/* <div className="flex items-center gap-1 bg-orange-500 rounded-lg overflow-hidden shrink-0">
//                         <button
//                           onClick={() => updateQty(item.id, -1)}
//                           className="text-white w-7 h-8 flex items-center justify-center hover:bg-orange-600 active:scale-90 transition"
//                         >
//                           <Minus size={13} />
//                         </button>
//                         <span className="text-white font-bold text-xs w-5 text-center">
//                           {item.qty}
//                         </span>
//                         <button
//                           onClick={() => updateQty(item.id, 1)}
//                           className="text-white w-7 h-8 flex items-center justify-center hover:bg-orange-600 active:scale-90 transition"
//                         >
//                           <Plus size={13} />
//                         </button>
//                       </div> */}
//                       <div className="flex items-center gap-2 shrink-0">
//                         <div className="flex items-center gap-1 bg-orange-500 rounded-lg overflow-hidden">
//                           <button
//                             onClick={() => updateQty(item.id, -1)}
//                             className="text-white w-7 h-8 flex items-center justify-center hover:bg-orange-600 transition"
//                           >
//                             <Minus size={13} />
//                           </button>

//                           <span className="text-white font-bold text-xs w-5 text-center">
//                             {item.qty}
//                           </span>

//                           <button
//                             onClick={() => updateQty(item.id, 1)}
//                             className="text-white w-7 h-8 flex items-center justify-center hover:bg-orange-600 transition"
//                           >
//                             <Plus size={13} />
//                           </button>
//                         </div>

//                         <button
//                           onClick={() => updateQty(item.id, -item.qty)}
//                           className="w-8 h-8 rounded-lg bg-red-100 hover:bg-red-500 hover:text-white text-red-600 flex items-center justify-center transition"
//                           title="Remove Item"
//                         >
//                           <Trash2 size={15} />
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {items.length > 0 && (
//               <div className="bg-white border-t border-orange-100 px-5 py-4 shrink-0">
//                 <div className="flex justify-between text-sm text-stone-500 mb-1">
//                   <span>Subtotal</span>
//                   <span>{currency(subtotal)}</span>
//                 </div>
//                 <div className="flex justify-between text-sm text-stone-500 mb-2">
//                   <span>Delivery fee</span>
//                   <span>
//                     {deliveryFee === 0 ? "Free 🎉" : currency(deliveryFee)}
//                   </span>
//                 </div>
//                 <div className="flex justify-between font-extrabold text-stone-800 text-base mb-4 pt-2 border-t border-dashed border-orange-200">
//                   <span>Total</span>
//                   <span className="text-orange-600">{currency(total)}</span>
//                 </div>
//                 <button
//                   onClick={onGoToCheckout}
//                   className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl shadow-md active:scale-[0.98] transition flex items-center justify-center gap-2"
//                 >
//                   Proceed to Checkout 🧾 · {currency(total)}
//                 </button>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </>
//   );
// }

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
    <div className="sticky top-[80px] z-30 bg-orange-50/95 backdrop-blur-md border-b border-orange-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-4">
        {/* Categories */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar flex-1">
          {CATEGORIES.map((c) => {
            const active = category === c.id;

            return (
              <button
                key={c.id}
                onClick={() => setCategory(c.id)}
                className={`group whitespace-nowrap flex items-center gap-2 rounded-full px-5 py-2.5 font-semibold text-sm transition-all duration-300 border ${
                  active
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white border-orange-500 shadow-lg scale-105"
                    : "bg-white text-stone-700 border-orange-200 hover:border-orange-400 hover:text-orange-600 hover:shadow-md hover:-translate-y-0.5"
                }`}
              >
                <span
                  className={`text-lg transition-transform duration-300 ${
                    active ? "scale-110" : "group-hover:scale-110"
                  }`}
                >
                  {c.emoji}
                </span>

                <span>{c.label}</span>
              </button>
            );
          })}
        </div>

        {/* Desktop Sort */}
        <div className="hidden sm:flex items-center gap-2 bg-white rounded-full border border-orange-200 px-4 py-2 shadow-sm hover:shadow-md transition">
          <SlidersHorizontal size={16} className="text-orange-500" />

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-transparent outline-none text-sm font-medium text-stone-700 cursor-pointer"
          >
            {SORT_OPTIONS.map((s) => (
              <option key={s.id} value={s.id}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Mobile Sort */}
      <div className="sm:hidden px-4 pb-4">
        <div className="bg-white rounded-full border border-orange-200 shadow-sm px-4">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full bg-transparent py-3 outline-none text-sm font-medium text-stone-700"
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
  );
}
