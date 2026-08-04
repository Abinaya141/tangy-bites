import React from "react";

export default function DeliveryAnimation({ status }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-8 text-center gap-6">
      {status === "loading" && (
        <>
          <div className="relative w-full max-w-[220px] h-16">
            <div className="absolute inset-x-0 top-1/2 border-t-2 border-dashed border-orange-300" />
            <div className="absolute top-1/2 -translate-y-1/2 text-4xl scooter-ride select-none">
              🛵
            </div>
          </div>
          <div>
            <p className="font-extrabold text-lg text-stone-800 font-display">Placing your order…</p>
            <p className="text-sm text-stone-500 mt-1">Sending it to the kitchen 👨‍🍳</p>
          </div>
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-400 animate-dot" style={{ animationDelay: "0ms" }} />
            <span className="w-2.5 h-2.5 rounded-full bg-orange-400 animate-dot" style={{ animationDelay: "150ms" }} />
            <span className="w-2.5 h-2.5 rounded-full bg-orange-400 animate-dot" style={{ animationDelay: "300ms" }} />
          </div>
        </>
      )}

      {status === "done" && (
        <>
          <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center tick-pop">
            <svg viewBox="0 0 52 52" className="w-14 h-14">
              <circle cx="26" cy="26" r="24" fill="none" stroke="#22c55e" strokeWidth="3" className="tick-circle" />
              <path
                d="M15 27l7 7 15-15"
                fill="none"
                stroke="#22c55e"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tick-check"
              />
            </svg>
          </div>
          <div>
            <p className="font-extrabold text-lg text-stone-800 font-display">Order Confirmed! 🎉</p>
            <p className="text-sm text-stone-500 mt-1">
              Your food is being prepared 🍳
              <br />
              Arriving in 25–30 mins 🛵
            </p>
          </div>
        </>
      )}
    </div>
  );
}
