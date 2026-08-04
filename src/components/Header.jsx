// import React from "react";
// import { ShoppingCart, Search } from "lucide-react";

// export default function Header({ query, setQuery, cartCount, onCartClick }) {
//   return (
//     <header className="sticky top-0 z-30 bg-gradient-to-r from-orange-500 to-orange-400 shadow-md">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
//         <div className="flex items-center gap-2 shrink-0">
//           <span className="text-3xl leading-none select-none">🍊</span>
//           <div className="leading-tight">
//             <h1 className="text-white font-extrabold text-xl sm:text-2xl tracking-tight font-display">
//               #TangyBites
//             </h1>
//             <p className="text-orange-100 text-xs hidden sm:block">
//               Fresh food, delivered fast 🛵💨
//             </p>
//           </div>
//         </div>

//         <div className="flex-1 max-w-md hidden md:flex items-center bg-white/95 rounded-xl px-4 py-2 shadow-inner">
//           <Search size={18} className="text-orange-400 shrink-0" />
//           <input
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             placeholder="Search dishes, drinks, snacks… 🔍"
//             className="w-full bg-transparent outline-none px-2 text-sm placeholder:text-stone-400"
//           />
//         </div>

//         <button
//           onClick={onCartClick}
//           className="relative flex items-center gap-2 bg-white text-orange-600 font-bold px-4 py-2.5 rounded-xl shadow hover:bg-orange-50 active:scale-95 transition"
//         >
//           <ShoppingCart size={19} />
//           <span className="hidden sm:inline text-sm">Cart</span>
//           {cartCount > 0 && (
//             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[11px] font-bold w-5 h-5 rounded-xl flex items-center justify-center animate-bounce-short">
//               {cartCount}
//             </span>
//           )}
//         </button>
//       </div>

//       <div className="md:hidden px-4 pb-3">
//         <div className="flex items-center bg-white/95 rounded-xl px-4 py-2 shadow-inner">
//           <Search size={17} className="text-orange-400 shrink-0" />
//           <input
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             placeholder="Search dishes… 🔍"
//             className="w-full bg-transparent outline-none px-2 text-sm placeholder:text-stone-400"
//           />
//         </div>
//       </div>
//     </header>
//   );
// }

import React, { useState } from "react";
import { MapPin, Search, ChevronDown, Zap } from "lucide-react";
import heroImage from "../assets/images/hero-image.png";
// import rightHeroImage from "../assets/drink.png";

const LOCATIONS = [
  "Home — Adyar, Chennai",
  "Work — Guindy, Chennai",
  "T. Nagar, Chennai",
  "Velachery, Chennai",
];

export default function Hero({ query, setQuery }) {
  const [location, setLocation] = useState(LOCATIONS[0]);
  const [locOpen, setLocOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-orange-500 to-amber-400">
      <style>{`
    @keyframes tb-float {
      0%,100%{transform:translateY(0);}
      50%{transform:translateY(-10px);}
    }

    .tb-float{
      animation:tb-float 5s ease-in-out infinite;
    }
  `}</style>

      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-500/20 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-10 pb-24 md:pt-16 md:pb-28">
        {/* Left Hero Image */}
        <div className="hidden lg:block absolute left-0 bottom-0 w-[32%] pointer-events-none">
          <img
            src={heroImage}
            alt="TangyBites Food"
            draggable={false}
            className="
        w-[260px]
        xl:w-[330px]
        2xl:w-[400px]
        object-contain
        drop-shadow-[0_35px_60px_rgba(0,0,0,0.35)]
        select-none
      "
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex justify-center">
          <div className="w-full max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 bg-white/90 text-orange-600 text-xs font-bold px-4 py-2 rounded-full shadow">
              <Zap size={14} className="fill-orange-500 text-orange-500" />
              Delivering in ~20 minutes
            </span>

            <h1 className="mt-6 text-white font-extrabold leading-tight text-4xl sm:text-5xl xl:text-6xl">
              Cravings hit.
              <br />
              <span className="text-yellow-200">TangyBites</span> delivers.
            </h1>

            <p className="mt-5 text-orange-50 text-base sm:text-lg max-w-xl mx-auto">
              Fresh meals and groceries from your favourite local spots — hot,
              fast and always a little zesty.
            </p>

            {/* ---------- SEARCH BAR ---------- */}

            <div className="mt-8 max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-2 flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <button
                  onClick={() => setLocOpen((v) => !v)}
                  className="w-full flex items-center gap-2 px-4 py-3 rounded-xl text-left hover:bg-orange-50 transition"
                >
                  <MapPin size={18} className="text-orange-500" />

                  <span className="truncate text-sm">{location}</span>

                  <ChevronDown size={16} className="ml-auto text-gray-400" />
                </button>

                {locOpen && (
                  <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-xl shadow-xl border border-orange-100 overflow-hidden z-20">
                    {LOCATIONS.map((loc) => (
                      <button
                        key={loc}
                        onClick={() => {
                          setLocation(loc);
                          setLocOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 hover:bg-orange-50"
                      >
                        {loc}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="hidden sm:block w-px bg-orange-100 my-2" />

              <div className="flex-[1.3] flex items-center gap-2 px-4 py-3">
                <Search size={18} className="text-orange-500" />

                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for dishes, cuisines, snacks..."
                  className="w-full outline-none text-sm placeholder:text-gray-400"
                />
              </div>

              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl transition">
                Find Food
              </button>
            </div>

            {/* ---------- TAGS ---------- */}

            <div className="mt-7 flex flex-wrap gap-3 justify-center">
              {[
                "🔥 Up to 60% OFF",
                "⭐ 4.8 Rated Restaurants",
                "🚀 Free Delivery over ₹300",
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-white/15 backdrop-blur-md text-white px-4 py-2 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Image (Optional) */}
        {/* 
  <div className="hidden lg:block absolute right-0 bottom-0 w-[28%] pointer-events-none">
    <img
      src={rightHeroImage}
      alt="Drink"
      className="ml-auto w-[240px] xl:w-[320px] 2xl:w-[380px] object-contain drop-shadow-[0_35px_60px_rgba(0,0,0,0.35)]"
    />
  </div>
  */}
      </div>

      {/* Bottom Divider */}

      {/* <svg
        className="absolute bottom-0 left-0 w-full h-10"
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
      >
        <path
          fill="#FFF7ED"
          d="M0,40 L0,10 L40,30 L80,10 L120,30 L160,10 L200,30 L240,10 L280,30 L320,10 L360,30 L400,10 L440,30 L480,10 L520,30 L560,10 L600,30 L640,10 L680,30 L720,10 L760,30 L800,10 L840,30 L880,10 L920,30 L960,10 L1000,30 L1040,10 L1080,30 L1120,10 L1160,30 L1200,10 L1200,40 Z"
        />
      </svg> */}
    </section>
  );
}
