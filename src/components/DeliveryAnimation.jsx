import React from "react";
import {
  Bike,
  CheckCircle2,
  ChefHat,
  LucideChefHat,
  MapPin,
} from "lucide-react";

export default function DeliveryAnimation({ status }) {
  if (status === "loading") {
    return (
      <div className="flex h-full flex-col items-center justify-center bg-orange-50 px-6 text-center">
        <div className="relative mb-7">
          <div className="absolute inset-0 scale-150 rounded-full bg-orange-200/40 blur-2xl" />

          <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-xl">
            <div className="delivery-bike">
              <Bike size={52} strokeWidth={1.8} className="text-orange-500" />
            </div>
          </div>
          <div className="absolute -right-3 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
            <MapPin size={15} className="text-green-600" />
          </div>
        </div>

        <h2 className="font-display text-xl font-extrabold text-stone-800">
          Placing your order…
        </h2>

        <p className="mt-2 max-w-xs text-sm leading-relaxed text-stone-500">
          Sending your order to the kitchen.
          <br />
          Your delicious food is on its way! <LucideChefHat />
        </p>

        {/* Loading dots */}
        <div className="mt-6 flex items-center gap-2">
          <span
            className="h-2.5 w-2.5 rounded-full bg-orange-400 animate-dot"
            style={{ animationDelay: "0ms" }}
          />

          <span
            className="h-2.5 w-2.5 rounded-full bg-orange-400 animate-dot"
            style={{ animationDelay: "150ms" }}
          />

          <span
            className="h-2.5 w-2.5 rounded-full bg-orange-400 animate-dot"
            style={{ animationDelay: "300ms" }}
          />
        </div>
      </div>
    );
  }

  if (status === "done") {
    return (
      <div className="flex h-full flex-col items-center justify-center bg-orange-50 px-6 text-center">
        <div className="relative mb-7">
          <div className="absolute inset-0 scale-150 rounded-full bg-green-200/40 blur-2xl" />

          <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-green-100 shadow-lg tick-pop">
            <CheckCircle2
              size={64}
              strokeWidth={1.8}
              className="text-green-500"
            />
          </div>
        </div>
        <h2 className="font-display text-2xl font-extrabold text-stone-800">
          Order Confirmed!
        </h2>

        <p className="mt-2 text-md leading-relaxed text-stone-500">
          Your food is being prepared
          <br />
          Arriving in 25 - 30 mins
        </p>
        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-green-100 bg-white px-4 py-3 shadow-sm">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100">
            <ChefHat size={18} className="text-orange-500" />
          </div>

          <div className="text-left">
            <p className="text-xs font-bold text-stone-700">
              Kitchen received your order
            </p>

            <p className="mt-0.5 text-[11px] text-stone-400">
              Freshly preparing your meal
            </p>
          </div>
        </div>
        <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-green-600">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          Order successfully placed
        </div>
      </div>
    );
  }

  return null;
}

const animationStyles = `
  @keyframes deliveryBike {
    0% {
      transform: translateX(-4px);
    }

    50% {
      transform: translateX(4px);
    }

    100% {
      transform: translateX(-4px);
    }
  }

  @keyframes loadingDot {
    0%,
    80%,
    100% {
      transform: translateY(0);
      opacity: 0.45;
    }

    40% {
      transform: translateY(-5px);
      opacity: 1;
    }
  }

  @keyframes tickPop {
    0% {
      transform: scale(0.7);
      opacity: 0;
    }

    70% {
      transform: scale(1.08);
      opacity: 1;
    }

    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  .delivery-bike {
    animation: deliveryBike 1.4s ease-in-out infinite;
  }

  .animate-dot {
    animation: loadingDot 1.2s ease-in-out infinite;
  }

  .tick-pop {
    animation: tickPop 0.5s ease-out both;
  }

  @media (prefers-reduced-motion: reduce) {
    .delivery-bike,
    .animate-dot,
    .tick-pop {
      animation: none;
    }
  }
`;

if (typeof document !== "undefined") {
  const styleId = "tangybites-delivery-animation";

  if (!document.getElementById(styleId)) {
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = animationStyles;
    document.head.appendChild(style);
  }
}
