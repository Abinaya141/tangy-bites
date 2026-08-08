import React, { useState } from "react";
import {
  MapPin,
  Search,
  ChevronDown,
  Zap,
  Star,
  Clock3,
  Truck,
  ArrowRight,
  Sparkles,
  BadgePercent,
} from "lucide-react";

import heroImage from "../assets/images/hero-image.png";
import rightHeroImage from "../assets/images/hero-right.png";

const LOCATIONS = [
  "Home - Adyar, Chennai",
  "Work - Guindy, Chennai",
  "T. Nagar, Chennai",
  "Velachery, Chennai",
];

const QUICK_TAGS = [
  {
    icon: BadgePercent,
    text: "Up to 60% OFF",
  },
  {
    icon: Star,
    text: "4.8 Rated",
  },
  {
    icon: Truck,
    text: "Free Delivery",
  },
];

export default function Hero({ query, setQuery }) {
  const [location, setLocation] = useState(LOCATIONS[0]);
  const [locOpen, setLocOpen] = useState(false);

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#ea580c] via-[#f97316] to-[#c2410c]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[400px] w-[400px] rounded-full bg-yellow-300/15 blur-3xl" />

        <div className="absolute -right-40 -top-20 h-[450px] w-[450px] rounded-full bg-yellow-200/15 blur-3xl" />

        <div className="absolute bottom-[-250px] left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-red-950/15 blur-3xl" />

        <div className="absolute left-[8%] top-[28%] h-2.5 w-2.5 rounded-full bg-yellow-200/70" />

        <div className="absolute bottom-[24%] left-[22%] h-2 w-2 rounded-full bg-white/40" />

        <div className="absolute right-[12%] top-[24%] h-3 w-3 rounded-full bg-yellow-200/70" />

        <div className="absolute bottom-[28%] right-[7%] h-2.5 w-2.5 rounded-full bg-white/30" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Hero Container */}
      <div className="relative z-10 mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-10 xl:px-12">
        <div
          className="
            grid
            min-h-[650px]
            grid-cols-1
            items-center
            py-10
            lg:grid-cols-[0.82fr_1.5fr_0.82fr]
            lg:gap-4
            lg:py-12
            xl:min-h-[690px]
            xl:grid-cols-[0.85fr_1.5fr_0.85fr]
            xl:gap-8
          "
        >
          {/* Left Food Image */}
          <div className="relative hidden h-full min-h-[560px] items-center justify-center lg:flex">
            <div className="absolute left-1/2 top-1/2 h-[360px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-300/10 blur-3xl" />

            <div className="relative z-10 flex h-[520px] w-full items-center justify-center xl:h-[560px]">
              <img
                src={heroImage}
                alt="Traditional South Indian food served on a banana leaf"
                draggable={false}
                className="
                  hero-leaf
                  h-full
                  w-auto
                  max-w-full
                  select-none
                  object-contain
                  drop-shadow-[0_25px_40px_rgba(0,0,0,0.4)]
                "
              />
            </div>

            {/* Rating Card */}
            <div
              className="
                absolute
                left-0
                top-[18%]
                z-20
                hidden
                items-center
                gap-2.5
                rounded-2xl
                border
                border-white/30
                bg-white/95
                px-3
                py-2.5
                shadow-xl
                backdrop-blur-md
                xl:flex
              "
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-100">
                <Star size={17} className="fill-yellow-400 text-yellow-400" />
              </div>

              <div>
                <p className="text-[10px] font-medium text-stone-400">
                  Loved by foodies
                </p>

                <p className="text-xs font-extrabold text-stone-800">
                  4.8 Rating
                </p>
              </div>
            </div>

            {/* Delivery Card */}
            <div
              className="
                absolute
                bottom-[17%]
                right-0
                z-20
                hidden
                items-center
                gap-2.5
                rounded-2xl
                border
                border-white/30
                bg-white/95
                px-3
                py-2.5
                shadow-xl
                backdrop-blur-md
                xl:flex
              "
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100">
                <Truck size={17} className="text-green-600" />
              </div>

              <div>
                <p className="text-[10px] font-medium text-stone-400">
                  Fast delivery
                </p>

                <p className="text-xs font-extrabold text-stone-800">
                  At your doorstep
                </p>
              </div>
            </div>
          </div>

          {/* Center Content */}
          <div className="relative z-30 flex min-w-0 items-center justify-center">
            <div className="mx-auto w-full max-w-[650px] text-center">
              {/* Delivery Badge */}
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3.5 py-1.5 text-[11px] font-bold text-white shadow-lg backdrop-blur-md sm:text-xs">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-300 text-orange-700">
                  <Zap size={13} className="fill-current" />
                </span>

                <span>Delivering fresh food in ~20 minutes</span>

                <span className="h-1.5 w-1.5 rounded-full bg-green-300" />
              </div>

              {/* Heading */}
              <h1
                className="
                  mx-auto
                  text-[2.65rem]
                  font-black
                  leading-[0.96]
                  tracking-tight
                  text-white
                  sm:text-5xl
                  md:text-[3.5rem]
                  xl:text-[4rem]
                "
              >
                Cravings
                <br />
                <span className="relative inline-block">
                  hit.
                  <span
                    className="
                      absolute
                      -bottom-1
                      left-1/2
                      h-1
                      w-16
                      -translate-x-1/2
                      rounded-full
                      bg-yellow-300
                      sm:h-1.5
                      sm:w-20
                    "
                  />
                </span>
                <br />
                <span className="bg-gradient-to-r from-yellow-200 via-yellow-100 to-white bg-clip-text text-transparent">
                  TangyBites
                </span>
                <span className="text-yellow-200"> delivers.</span>
              </h1>

              {/* Description */}
              <p
                className="
                  mx-auto
                  mt-5
                  max-w-[540px]
                  text-sm
                  leading-6
                  text-orange-50
                  sm:text-base
                "
              >
                Fresh meals, crispy snacks and refreshing drinks from your
                favourite local spots — hot, fast and always a little zesty.
              </p>

              {/* Search */}
              <div className="relative mx-auto mt-6 w-full max-w-[620px]">
                <div className="absolute -inset-1 rounded-[20px] bg-yellow-300/20 blur-lg" />

                <div
                  className="
                    relative
                    rounded-[18px]
                    border
                    border-white/60
                    bg-white
                    p-1.5
                    shadow-[0_20px_50px_rgba(120,40,0,0.25)]
                  "
                >
                  <div className="flex flex-col gap-1.5 sm:flex-row">
                    {/* Location */}
                    <div className="relative min-w-0 flex-[0.9]">
                      <button
                        type="button"
                        onClick={() => setLocOpen((value) => !value)}
                        className="
                          flex
                          w-full
                          items-center
                          gap-2.5
                          rounded-xl
                          px-3
                          py-2.5
                          text-left
                          transition
                          hover:bg-orange-50
                        "
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100">
                          <MapPin size={15} className="text-orange-500" />
                        </span>

                        <div className="min-w-0 flex-1">
                          <p className="text-[8px] font-bold uppercase tracking-wider text-stone-400">
                            Deliver to
                          </p>

                          <p className="truncate text-xs font-bold text-stone-700">
                            {location}
                          </p>
                        </div>

                        <ChevronDown
                          size={14}
                          className={`shrink-0 text-stone-400 transition-transform ${
                            locOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Location Dropdown */}
                      {locOpen && (
                        <div
                          className="
                            absolute
                            left-0
                            right-0
                            top-full
                            z-50
                            mt-2
                            overflow-hidden
                            rounded-xl
                            border
                            border-orange-100
                            bg-white
                            p-1.5
                            text-left
                            shadow-2xl
                          "
                        >
                          {LOCATIONS.map((loc) => (
                            <button
                              key={loc}
                              type="button"
                              onClick={() => {
                                setLocation(loc);
                                setLocOpen(false);
                              }}
                              className="
                                flex
                                w-full
                                items-center
                                gap-2
                                rounded-lg
                                px-3
                                py-2.5
                                text-left
                                text-xs
                                font-medium
                                text-stone-600
                                transition
                                hover:bg-orange-50
                                hover:text-orange-600
                              "
                            >
                              <MapPin
                                size={13}
                                className="shrink-0 text-orange-400"
                              />

                              <span className="truncate">{loc}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Divider */}
                    <div className="hidden w-px bg-orange-100 sm:block" />

                    {/* Search Input */}
                    <div className="flex min-w-0 flex-1 items-center gap-2 px-3 py-2">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100">
                        <Search size={15} className="text-orange-500" />
                      </span>

                      <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search dishes, cuisines..."
                        className="
                          min-w-0
                          w-full
                          bg-transparent
                          text-xs
                          font-medium
                          text-stone-700
                          outline-none
                          placeholder:text-stone-400
                        "
                      />
                    </div>

                    {/* Find Food */}
                    <button
                      type="button"
                      onClick={() => {
                        setLocOpen(false);
                      }}
                      className="
                        group
                        flex
                        shrink-0
                        items-center
                        justify-center
                        gap-1.5
                        rounded-xl
                        bg-orange-500
                        px-5
                        py-2.5
                        text-xs
                        font-extrabold
                        text-white
                        shadow-md
                        shadow-orange-500/20
                        transition-all
                        hover:bg-orange-600
                        hover:shadow-lg
                        active:scale-[0.98]
                      "
                    >
                      Find Food
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick Tags */}
              <div className="mt-5 flex flex-wrap justify-center gap-1.5">
                {QUICK_TAGS.map((tag) => {
                  const Icon = tag.icon;

                  return (
                    <span
                      key={tag.text}
                      className="
                        inline-flex
                        items-center
                        gap-1.5
                        rounded-full
                        border
                        border-white/20
                        bg-white/10
                        px-3
                        py-1.5
                        text-[10px]
                        font-bold
                        text-white
                        backdrop-blur-md
                        sm:text-[11px]
                      "
                    >
                      <Icon size={13} className="text-yellow-200" />

                      {tag.text}
                    </span>
                  );
                })}
              </div>

              {/* Trust Row */}
              <div
                className="
                  mx-auto
                  mt-5
                  flex
                  max-w-[500px]
                  items-center
                  justify-center
                  gap-4
                  text-[10px]
                  text-orange-100
                  sm:gap-6
                  sm:text-xs
                "
              >
                <div className="flex items-center gap-1.5">
                  <Star size={13} className="fill-yellow-300 text-yellow-300" />

                  <span>
                    <strong className="text-white">4.8/5</strong> rated
                  </span>
                </div>

                <span className="h-4 w-px bg-white/20" />

                <div className="flex items-center gap-1.5">
                  <Clock3 size={13} className="text-yellow-200" />

                  <span>
                    <strong className="text-white">20 min</strong> delivery
                  </span>
                </div>

                <span className="hidden h-4 w-px bg-white/20 sm:block" />

                <div className="hidden items-center gap-1.5 sm:flex">
                  <Truck size={13} className="text-yellow-200" />

                  <span>
                    <strong className="text-white">₹0</strong> over ₹300
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Food Image */}
          <div className="relative hidden h-full min-h-[560px] items-center justify-center lg:flex">
            <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300/15 blur-3xl" />

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[410px]
                w-[410px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-white/10
              "
            />

            {/* Static Food Image */}
            <div className="relative z-10 flex h-[500px] w-full items-center justify-center xl:h-[550px]">
              <img
                src={rightHeroImage}
                alt="Delicious Indian food"
                draggable={false}
                className="
                  h-full
                  w-full
                  select-none
                  object-contain
                  drop-shadow-[0_30px_45px_rgba(0,0,0,0.4)]
                "
              />
            </div>

            {/* Decorative Sparkle */}
            <div className="absolute right-[12%] top-[18%] flex h-8 w-8 items-center justify-center rounded-full bg-white/15 backdrop-blur-md">
              <Sparkles size={14} className="text-yellow-200" />
            </div>
          </div>

          {/* Mobile Food Visual */}
          <div className="order-first flex items-center justify-center lg:hidden">
            <div className="relative flex h-[240px] w-full max-w-[480px] items-center justify-center sm:h-[290px]">
              <img
                src={heroImage}
                alt="Traditional South Indian food"
                draggable={false}
                className="
                  absolute
                  left-0
                  h-[250px]
                  w-auto
                  max-w-[55%]
                  object-contain
                  drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)]
                  sm:h-[290px]
                "
              />

              <img
                src={rightHeroImage}
                alt="Delicious Indian food"
                draggable={false}
                className="
                  absolute
                  right-0
                  h-[215px]
                  w-[60%]
                  object-contain
                  drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)]
                  sm:h-[260px]
                "
              />
            </div>
          </div>
        </div>
      </div>

      {/* Leaf Animation */}
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .hero-leaf {
            animation: leafFloat 7s ease-in-out infinite;
          }
        }

        @keyframes leafFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-6px);
          }
        }
      `}</style>
    </section>
  );
}
