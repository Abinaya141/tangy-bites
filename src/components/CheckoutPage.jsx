import React, { useState } from "react";
import {
  ChevronLeft,
  MapPin,
  Wallet,
  CreditCard,
  Smartphone,
} from "lucide-react";
import { currency } from "../utils/currency.js";

const PAYMENT_METHODS = [
  { id: "cod", label: "Cash on Delivery", icon: Wallet, emoji: "💵" },
  { id: "card", label: "Credit / Debit Card", icon: CreditCard, emoji: "💳" },
  { id: "upi", label: "UPI", icon: Smartphone, emoji: "📱" },
];

export default function CheckoutPage({
  subtotal,
  deliveryFee,
  total,
  onBack,
  onConfirm,
}) {
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [method, setMethod] = useState("cod");
  const [card, setCard] = useState({ number: "", expiry: "", cvv: "" });
  const [upiId, setUpiId] = useState("");

  const isValid =
    address.trim().length > 4 &&
    phone.trim().length >= 10 &&
    (method !== "card" ||
      (card.number.length >= 12 && card.expiry && card.cvv.length >= 3)) &&
    (method !== "upi" || upiId.includes("@"));

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-3 px-5 py-4 bg-white border-b border-orange-100 shrink-0">
        <button
          onClick={onBack}
          className="w-9 h-9 rounded-full bg-orange-50 flex items-center justify-center hover:bg-orange-100 active:scale-90 transition"
        >
          <ChevronLeft size={18} />
        </button>
        <h2 className="font-extrabold text-lg text-stone-800 font-display">
          Checkout 🧾
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-5">
        {/* Delivery address */}
        <section>
          <h3 className="flex items-center gap-1.5 font-bold text-sm text-stone-700 mb-2">
            <MapPin size={15} className="text-orange-500" /> Delivery Address
          </h3>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="House no, street, area, city, pincode…"
            rows={3}
            className="w-full bg-white border border-orange-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-orange-400 shadow-sm resize-none"
          />
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ""))}
            placeholder="Mobile number 📞"
            maxLength={10}
            className="mt-2 w-full bg-white border border-orange-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-orange-400 shadow-sm"
          />
        </section>

        {/* Payment method */}
        <section>
          <h3 className="font-bold text-sm text-stone-700 mb-2">
            Payment Method
          </h3>
          <div className="flex flex-col gap-2">
            {PAYMENT_METHODS.map((m) => (
              <button
                key={m.id}
                onClick={() => setMethod(m.id)}
                className={
                  "flex items-center gap-3 rounded-xl border px-3.5 py-3 text-sm font-semibold transition " +
                  (method === m.id
                    ? "border-orange-500 bg-orange-50 text-orange-700 shadow-sm"
                    : "border-orange-100 bg-white text-stone-600 hover:border-orange-300")
                }
              >
                <span className="text-lg">{m.emoji}</span>
                {m.label}
                <span
                  className={
                    "ml-auto w-4 h-4 rounded-full border-2 " +
                    (method === m.id
                      ? "border-orange-500 bg-orange-500"
                      : "border-stone-300")
                  }
                />
              </button>
            ))}
          </div>

          {method === "card" && (
            <div className="mt-3 flex flex-col gap-2 animate-fade-slide">
              <input
                value={card.number}
                onChange={(e) =>
                  setCard({
                    ...card,
                    number: e.target.value.replace(/[^0-9]/g, "").slice(0, 16),
                  })
                }
                placeholder="Card number (mock, no real payment) 💳"
                className="w-full bg-white border border-orange-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-orange-400 shadow-sm"
              />
              <div className="flex gap-2">
                <input
                  value={card.expiry}
                  onChange={(e) => setCard({ ...card, expiry: e.target.value })}
                  placeholder="MM/YY"
                  className="w-1/2 bg-white border border-orange-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-orange-400 shadow-sm"
                />
                <input
                  value={card.cvv}
                  onChange={(e) =>
                    setCard({
                      ...card,
                      cvv: e.target.value.replace(/[^0-9]/g, "").slice(0, 4),
                    })
                  }
                  placeholder="CVV"
                  className="w-1/2 bg-white border border-orange-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-orange-400 shadow-sm"
                />
              </div>
            </div>
          )}

          {method === "upi" && (
            <div className="mt-3 animate-fade-slide">
              <input
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                placeholder="yourname@upi 📱"
                className="w-full bg-white border border-orange-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-orange-400 shadow-sm"
              />
            </div>
          )}

          <p className="text-[11px] text-stone-400 mt-2">
            🔒 This is a demo checkout — no real payment is processed and
            nothing is sent to a server.
          </p>
        </section>
      </div>

      <div className="bg-white border-t border-orange-100 px-5 py-4 shrink-0">
        <div className="flex justify-between text-sm text-stone-500 mb-1">
          <span>Subtotal</span>
          <span>{currency(subtotal)}</span>
        </div>
        <div className="flex justify-between text-sm text-stone-500 mb-2">
          <span>Delivery fee</span>
          <span>{deliveryFee === 0 ? "Free 🎉" : currency(deliveryFee)}</span>
        </div>
        <div className="flex justify-between font-extrabold text-stone-800 text-base mb-4 pt-2 border-t border-dashed border-orange-200">
          <span>Total</span>
          <span className="text-orange-600">{currency(total)}</span>
        </div>
        <button
          onClick={() => isValid && onConfirm(method)}
          disabled={!isValid}
          className={
            "w-full font-bold py-3.5 rounded-xl shadow-md transition flex items-center justify-center gap-2 " +
            (isValid
              ? "bg-orange-500 hover:bg-orange-600 text-white active:scale-[0.98]"
              : "bg-stone-200 text-stone-400 cursor-not-allowed")
          }
        >
          Confirm & Pay · {currency(total)} 🍊
        </button>
      </div>
    </div>
  );
}
