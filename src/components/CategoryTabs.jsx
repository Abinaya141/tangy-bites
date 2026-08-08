// import React from "react";
// import { SlidersHorizontal, ChevronDown } from "lucide-react";
// import { CATEGORIES, SORT_OPTIONS } from "../data/items.js";

// export default function CategoryTabs({
//   category,
//   setCategory,
//   sortBy,
//   setSortBy,
// }) {
//   return (
//     <section className="bg-[#fffaf2]">
//       <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between gap-4">
//           {/* Categories */}
//           <div className="flex min-w-0 flex-1 items-center gap-2 overflow-x-auto scrollbar-none">
//             {CATEGORIES.map((item) => {
//               const active = category === item.id;

//               return (
//                 <button
//                   key={item.id}
//                   type="button"
//                   onClick={() => setCategory(item.id)}
//                   aria-pressed={active}
//                   className={`
//         inline-flex
//         shrink-0
//         items-center
//         gap-1.5
//         rounded-full
//         border
//         px-4
//         py-2
//         text-sm
//         font-medium
//         transition-all
//         duration-200
//         active:scale-95
//         ${
//           active
//             ? "border-orange-500 bg-orange-500 text-white shadow-sm"
//             : "border-stone-200 bg-white text-stone-600 hover:border-orange-300 hover:text-orange-500"
//         }
//       `}
//                 >
//                   <span className="text-base">{item.emoji}</span>

//                   <span>{item.label}</span>
//                 </button>
//               );
//             })}
//           </div>

//           {/* Sort */}
//           <div className="hidden shrink-0 sm:block">
//             <div
//               className="
//                 flex
//                 items-center
//                 gap-2
//                 rounded-full
//                 border
//                 border-stone-200
//                 bg-white
//                 px-3
//                 py-2
//                 shadow-sm
//               "
//             >
//               <SlidersHorizontal size={15} className="text-orange-500" />

//               <select
//                 value={sortBy}
//                 onChange={(e) => setSortBy(e.target.value)}
//                 aria-label="Sort food items"
//                 className="
//                   cursor-pointer
//                   appearance-none
//                   bg-transparent
//                   pr-1
//                   text-sm
//                   font-medium
//                   text-stone-700
//                   outline-none
//                 "
//               >
//                 {SORT_OPTIONS.map((option) => (
//                   <option key={option.id} value={option.id}>
//                     {option.label}
//                   </option>
//                 ))}
//               </select>

//               <ChevronDown size={14} className="text-stone-400" />
//             </div>
//           </div>
//         </div>

//         {/* Mobile Sort */}
//         <div className="mt-3 sm:hidden">
//           <div
//             className="
//               flex
//               items-center
//               gap-2
//               rounded-xl
//               border
//               border-stone-200
//               bg-white
//               px-3
//               py-2
//             "
//           >
//             <SlidersHorizontal size={15} className="text-orange-500" />

//             <select
//               value={sortBy}
//               onChange={(e) => setSortBy(e.target.value)}
//               aria-label="Sort food items"
//               className="
//                 w-full
//                 appearance-none
//                 bg-transparent
//                 py-1
//                 text-sm
//                 font-medium
//                 text-stone-700
//                 outline-none
//               "
//             >
//               {SORT_OPTIONS.map((option) => (
//                 <option key={option.id} value={option.id}>
//                   {option.label}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { SlidersHorizontal, ChevronDown } from "lucide-react";
import { CATEGORIES, SORT_OPTIONS } from "../data/items.js";

export default function CategoryTabs({
  category,
  setCategory,
  sortBy,
  setSortBy,
}) {
  return (
    <section className="bg-[#fffaf2]">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Categories */}
          <div className="flex min-w-0 flex-1 items-center gap-2 overflow-x-auto scrollbar-none">
            {CATEGORIES.map((item) => {
              const active = category === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setCategory(item.id)}
                  aria-pressed={active}
                  className={`
                    inline-flex shrink-0 items-center gap-1.5 rounded-full border
                    px-4 py-2 text-sm font-medium transition-all duration-200 active:scale-95
                    ${
                      active
                        ? "border-orange-600 bg-orange-600 text-orange-50 shadow-sm"
                        : "border-orange-200 bg-orange-50 text-orange-700 hover:border-orange-400 hover:text-orange-600"
                    }
                  `}
                >
                  <span className="text-base">{item.emoji}</span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Sort */}
          <div className="hidden shrink-0 sm:block">
            <div
              className="
                flex items-center gap-2 rounded-full border
                border-orange-200 bg-orange-50 px-3 py-2 shadow-sm
              "
            >
              <SlidersHorizontal size={15} className="text-orange-600" />

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                aria-label="Sort food items"
                className="
                  cursor-pointer appearance-none bg-transparent pr-1
                  text-sm font-medium text-orange-800 outline-none
                "
              >
                {SORT_OPTIONS.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>

              <ChevronDown size={14} className="text-orange-400" />
            </div>
          </div>
        </div>

        {/* Mobile Sort */}
        <div className="mt-3 sm:hidden">
          <div
            className="
              flex items-center gap-2 rounded-xl border
              border-orange-200 bg-orange-50 px-3 py-2
            "
          >
            <SlidersHorizontal size={15} className="text-orange-600" />

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              aria-label="Sort food items"
              className="
                w-full appearance-none bg-transparent py-1
                text-sm font-medium text-orange-800 outline-none
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
