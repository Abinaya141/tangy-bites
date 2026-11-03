import { useState } from "react";
import {
  MapPin,
  Search,
  ChevronDown,
  Zap,
  Star,
  Clock3,
  Truck,
  ArrowRight,
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
  { icon: BadgePercent, text: "Up to 60% off" },
  { icon: Star, text: "4.8 rated" },
  { icon: Truck, text: "Free delivery" },
];

export default function Hero({ query, setQuery }) {
  const [location, setLocation] = useState(LOCATIONS[0]);
  const [locOpen, setLocOpen] = useState(false);

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-orange-500 to-orange-600">
      {/* Hero Container */}
      <div className="relative z-10 mx-auto max-w-[1600px] px-5 pt-10 sm:px-8 lg:px-10 xl:px-12">
        <div
          className="
            grid min-h-[650px] grid-cols-1 items-center py-10
            lg:grid-cols-[0.82fr_1.5fr_0.82fr] lg:gap-4 lg:py-12
            xl:min-h-[690px] xl:grid-cols-[0.85fr_1.5fr_0.85fr] xl:gap-8
          "
        >
          {/* Left Food Image */}
          <div className="relative hidden h-full min-h-[560px] items-center justify-center lg:flex">
            <div className="relative z-10 flex h-[520px] w-full items-center justify-center xl:h-[560px]">
              <img
                src={heroImage}
                alt="Traditional South Indian food served on a banana leaf"
                draggable={false}
                className="hero-leaf h-full w-auto max-w-full select-none object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.35)]"
              />
            </div>

            {/* Rating stub — matches FoodCard's stamp badge */}
            <div
              className="
                absolute left-[-6px] top-[16%] z-20 hidden -rotate-3 items-center gap-2.5
                border-2 border-dashed border-orange-500 bg-orange-50 px-3 py-2.5 shadow-lg
                xl:flex
              "
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-dashed border-orange-500">
                <Star size={16} className="fill-orange-600 text-orange-600" />
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wide text-orange-400">
                  Loved by foodies
                </p>
                <p className="text-xs font-extrabold text-orange-900">
                  4.8 rating
                </p>
              </div>
            </div>

            {/* Delivery stub */}
            <div
              className="
                absolute bottom-[15%] right-[-6px] z-20 hidden rotate-2 items-center gap-2.5
                border-2 border-dashed border-orange-500 bg-orange-50 px-3 py-2.5 shadow-lg
                xl:flex
              "
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-dashed border-orange-500">
                <Truck size={16} className="text-orange-600" />
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wide text-orange-400">
                  Fast delivery
                </p>
                <p className="text-xs font-extrabold text-orange-900">
                  At your doorstep
                </p>
              </div>
            </div>
          </div>

          {/* Center Content */}
          <div className="relative z-30 flex min-w-0 items-center justify-center">
            <div className="mx-auto w-full max-w-[650px] text-center">
              {/* Ticket badge */}
              <div className="mb-5 inline-flex items-center">
                <span
                  className="relative flex items-center gap-2 bg-orange-50 pl-5 pr-3.5 py-1.5 text-[11px] font-bold text-orange-900 shadow-md sm:text-xs"
                  style={{
                    clipPath:
                      "polygon(0 50%, 14px 0, 100% 0, 100% 100%, 14px 100%)",
                  }}
                >
                  <span className="absolute left-[7px] top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-orange-500/25" />
                  <Zap size={13} className="fill-orange-500 text-orange-500" />
                  Delivering fresh food in ~20 minutes
                </span>
              </div>

              {/* Heading */}
              <h1 className="mx-auto text-[2.65rem] font-black leading-[0.96] tracking-tight text-orange-50 sm:text-5xl md:text-[3.5rem] xl:text-[4rem]">
                Cravings
                <br />
                <span className="relative inline-block">
                  hit.
                  <span className="absolute -bottom-1 left-1/2 h-1.5 w-16 -translate-x-1/2 rounded-full bg-orange-200 sm:w-20" />
                </span>
                <br />
                <span className="text-orange-100">TangyBites</span>
                <span className="text-orange-50"> delivers.</span>
              </h1>

              {/* Description */}
              <p className="mx-auto mt-5 max-w-[540px] text-sm leading-6 text-orange-50/90 sm:text-base">
                Fresh meals, crispy snacks and refreshing drinks from your
                favourite local spots — hot, fast and always a little zesty.
              </p>

              {/* Order-window search card */}
              <div className="relative mx-auto mt-6 w-full max-w-[620px]">
                <div className="relative border-2 border-orange-900/10 bg-orange-50 p-1.5 shadow-[0_16px_40px_rgba(194,65,12,0.30)]">
                  <span className="absolute -left-2.5 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-orange-600" />
                  <span className="absolute -right-2.5 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-orange-600" />

                  <div className="flex flex-col gap-1.5 sm:flex-row">
                    {/* Location */}
                    <div className="relative min-w-0 flex-[0.9]">
                      <button
                        type="button"
                        onClick={() => setLocOpen((value) => !value)}
                        className="flex w-full items-center gap-2.5 rounded px-3 py-2.5 text-left transition hover:bg-orange-100"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100">
                          <MapPin size={15} className="text-orange-600" />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-[8px] font-bold uppercase tracking-wider text-orange-400">
                            Deliver to
                          </p>
                          <p className="truncate text-xs font-bold text-orange-900">
                            {location}
                          </p>
                        </div>
                        <ChevronDown
                          size={14}
                          className={`shrink-0 text-orange-400 transition-transform ${locOpen ? "rotate-180" : ""}`}
                        />
                      </button>

                      {locOpen && (
                        <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded border border-orange-200 bg-orange-50 p-1.5 text-left shadow-2xl">
                          {LOCATIONS.map((loc) => (
                            <button
                              key={loc}
                              type="button"
                              onClick={() => {
                                setLocation(loc);
                                setLocOpen(false);
                              }}
                              className="flex w-full items-center gap-2 rounded px-3 py-2.5 text-left text-xs font-medium text-orange-700 transition hover:bg-orange-100 hover:text-orange-600"
                            >
                              <MapPin
                                size={13}
                                className="shrink-0 text-orange-500"
                              />
                              <span className="truncate">{loc}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="hidden w-px bg-orange-200 sm:block" />

                    {/* Search Input */}
                    <div className="flex min-w-0 flex-1 items-center gap-2 px-3 py-2">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100">
                        <Search size={15} className="text-orange-600" />
                      </span>
                      <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search dishes, cuisines..."
                        className="w-full min-w-0 bg-transparent text-xs font-medium text-orange-900 outline-none placeholder:text-orange-300"
                      />
                    </div>

                    {/* Find Food */}
                    <button
                      type="button"
                      onClick={() => setLocOpen(false)}
                      className="group flex shrink-0 items-center justify-center gap-1.5 rounded bg-orange-600 px-5 py-2.5 text-xs font-extrabold uppercase tracking-wide text-orange-50 shadow-md transition-colors hover:bg-orange-700 active:scale-[0.98]"
                    >
                      Find food
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick Tags */}
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {QUICK_TAGS.map((tag) => {
                  const Icon = tag.icon;
                  return (
                    <span
                      key={tag.text}
                      className="inline-flex items-center gap-1.5 border border-dashed border-orange-100/50 bg-orange-700/40 px-3 py-1.5 text-[10px] font-bold text-orange-50 sm:text-[11px]"
                    >
                      <Icon size={13} className="text-orange-100" />
                      {tag.text}
                    </span>
                  );
                })}
              </div>

              {/* Trust Row */}
              <div className="mx-auto mt-5 flex max-w-[500px] items-center justify-center gap-4 text-[10px] text-orange-50/90 sm:gap-6 sm:text-xs">
                <div className="flex items-center gap-1.5">
                  <Star size={13} className="fill-orange-200 text-orange-200" />
                  <span>
                    <strong className="text-orange-50">4.8/5</strong> rated
                  </span>
                </div>
                <span className="h-4 w-px bg-orange-50/25" />
                <div className="flex items-center gap-1.5">
                  <Clock3 size={13} className="text-orange-100" />
                  <span>
                    <strong className="text-orange-50">20 min</strong> delivery
                  </span>
                </div>
                <span className="hidden h-4 w-px bg-orange-50/25 sm:block" />
                <div className="hidden items-center gap-1.5 sm:flex">
                  <Truck size={13} className="text-orange-100" />
                  <span>
                    <strong className="text-orange-50">₹0</strong> over ₹300
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Food Image */}
          <div className="relative hidden h-full min-h-[560px] items-center justify-center lg:flex">
            <div className="relative z-10 flex h-[500px] w-full items-center justify-center xl:h-[550px]">
              <img
                src={rightHeroImage}
                alt="Delicious Indian food"
                draggable={false}
                className="h-full w-full select-none object-contain drop-shadow-[0_30px_45px_rgba(0,0,0,0.35)]"
              />
            </div>
          </div>

          {/* Mobile Food Visual */}
          <div className="order-first flex items-center justify-center lg:hidden">
            <div className="relative flex h-[240px] w-full max-w-[480px] items-center justify-center sm:h-[290px]">
              <img
                src={heroImage}
                alt="Traditional South Indian food"
                draggable={false}
                className="absolute left-0 h-[250px] w-auto max-w-[55%] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)] sm:h-[290px]"
              />
              <img
                src={rightHeroImage}
                alt="Delicious Indian food"
                draggable={false}
                className="absolute right-0 h-[215px] w-[60%] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)] sm:h-[260px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Clean wave divider into the next section — replaces the old stripe/scallop */}
      <svg
        className="relative z-10 block h-10 w-full sm:h-14"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,32 C240,60 480,4 720,20 C960,36 1200,10 1440,28 L1440,60 L0,60 Z"
          fill="#fffaf2"
        />
      </svg>

      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .hero-leaf {
            animation: leafFloat 7s ease-in-out infinite;
          }
        }
        @keyframes leafFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </section>
  );
}
