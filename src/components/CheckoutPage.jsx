import React, { useState } from "react";
import {
  ChevronLeft,
  MapPin,
  Wallet,
  CreditCard,
  Smartphone,
  ReceiptText,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { currency } from "../utils/currency.js";

const PAYMENT_METHODS = [
  {
    id: "cod",
    label: "Cash on Delivery",
    icon: Wallet,
  },
  {
    id: "card",
    label: "Credit / Debit Card",
    icon: CreditCard,
  },
  {
    id: "upi",
    label: "UPI",
    icon: Smartphone,
  },
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

  const [card, setCard] = useState({
    number: "",
    expiry: "",
    cvv: "",
  });

  const [upiId, setUpiId] = useState("");

  const isAddressValid = address.trim().length > 4;
  const isPhoneValid = phone.length === 10;

  const isCardValid =
    card.number.length >= 12 &&
    card.expiry.trim().length >= 4 &&
    card.cvv.length >= 3;

  const isUpiValid =
    upiId.trim().length > 3 && upiId.includes("@");

  const isPaymentValid =
    method === "cod"
      ? true
      : method === "card"
        ? isCardValid
        : isUpiValid;

  const isValid =
    isAddressValid &&
    isPhoneValid &&
    isPaymentValid;

  const handleConfirm = () => {
    if (!isValid) return;

    onConfirm(method);
  };

  return (
    <div className="flex h-full min-h-0 flex-col bg-orange-50">
      {/* Header */}
      <div className="flex shrink-0 items-center gap-3 border-b border-orange-100 bg-white px-5 py-4">
        <button
          type="button"
          onClick={onBack}
          aria-label="Back to cart"
          className="
            flex h-9 w-9 shrink-0 items-center justify-center
            rounded-full bg-orange-50 text-stone-600
            transition hover:bg-orange-100 hover:text-orange-600
            active:scale-90
          "
        >
          <ChevronLeft size={19} />
        </button>

        <div>
          <h2 className="flex items-center gap-2 font-display text-lg font-extrabold text-stone-800">
            <ReceiptText size={19} className="text-orange-500" />
            Checkout
          </h2>

          <p className="mt-0.5 text-xs text-stone-400">
            Complete your order details
          </p>
        </div>
      </div>

      {/* Scrollable Form */}
      <div
        className="
          min-h-0
          flex-1
          overflow-y-auto
          overscroll-contain
          px-5
          py-4
        "
      >
        <div className="flex flex-col gap-5">
          {/* Delivery Address */}
          <section>
            <h3 className="mb-2 flex items-center gap-1.5 text-sm font-bold text-stone-700">
              <MapPin size={15} className="text-orange-500" />
              Delivery Address
            </h3>

            <textarea
              id="delivery-address"
              name="delivery-address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              placeholder="House no, street, area, city, pincode..."
              rows={3}
              autoComplete="street-address"
              spellCheck="true"
              className="
                block
                w-full
                resize-none
                rounded-xl
                border
                border-orange-200
                bg-white
                px-3
                py-2.5
                text-sm
                text-stone-700
                outline-none
                shadow-sm
                transition
                placeholder:text-stone-400
                focus:border-orange-400
                focus:ring-2
                focus:ring-orange-100
              "
            />

            <div className="relative mt-2">
              <Phone
                size={15}
                className="
                  pointer-events-none
                  absolute
                  left-3
                  top-1/2
                  -translate-y-1/2
                  text-orange-400
                "
              />

              <input
                id="mobile-number"
                name="mobile-number"
                type="tel"
                value={phone}
                onChange={(event) => {
                  const numbersOnly = event.target.value
                    .replace(/\D/g, "")
                    .slice(0, 10);

                  setPhone(numbersOnly);
                }}
                placeholder="Mobile number"
                inputMode="numeric"
                autoComplete="tel"
                maxLength={10}
                className="
                  block
                  w-full
                  rounded-xl
                  border
                  border-orange-200
                  bg-white
                  py-2.5
                  pl-9
                  pr-3
                  text-sm
                  text-stone-700
                  outline-none
                  shadow-sm
                  transition
                  placeholder:text-stone-400
                  focus:border-orange-400
                  focus:ring-2
                  focus:ring-orange-100
                "
              />
            </div>

            {phone.length > 0 && phone.length < 10 && (
              <p className="mt-1.5 text-[11px] text-red-500">
                Please enter a valid 10-digit mobile number.
              </p>
            )}
          </section>

          {/* Payment Method */}
          <section>
            <h3 className="mb-2 text-sm font-bold text-stone-700">
              Payment Method
            </h3>

            <div className="flex flex-col gap-2">
              {PAYMENT_METHODS.map((payment) => {
                const Icon = payment.icon;
                const active = method === payment.id;

                return (
                  <button
                    key={payment.id}
                    type="button"
                    onClick={() => setMethod(payment.id)}
                    className={`
                      flex items-center gap-3 rounded-xl border
                      px-3.5 py-3 text-left text-sm font-semibold
                      transition active:scale-[0.99]
                      ${
                        active
                          ? "border-orange-500 bg-orange-50 text-orange-700 shadow-sm"
                          : "border-orange-100 bg-white text-stone-600 hover:border-orange-300"
                      }
                    `}
                  >
                    <span
                      className={`
                        flex h-9 w-9 shrink-0 items-center justify-center
                        rounded-lg
                        ${
                          active
                            ? "bg-orange-500 text-white"
                            : "bg-orange-100 text-orange-500"
                        }
                      `}
                    >
                      <Icon size={18} />
                    </span>

                    <span className="flex-1">
                      {payment.label}
                    </span>

                    <span
                      className={`
                        flex h-4 w-4 items-center justify-center
                        rounded-full border-2
                        ${
                          active
                            ? "border-orange-500"
                            : "border-stone-300"
                        }
                      `}
                    >
                      {active && (
                        <span className="h-2 w-2 rounded-full bg-orange-500" />
                      )}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Card */}
            {method === "card" && (
              <div className="mt-3 flex flex-col gap-2">
                <div className="relative">
                  <CreditCard
                    size={16}
                    className="
                      pointer-events-none
                      absolute
                      left-3
                      top-1/2
                      -translate-y-1/2
                      text-orange-400
                    "
                  />

                  <input
                    type="text"
                    inputMode="numeric"
                    value={card.number}
                    onChange={(event) => {
                      const value = event.target.value
                        .replace(/\D/g, "")
                        .slice(0, 16);

                      setCard((previous) => ({
                        ...previous,
                        number: value,
                      }));
                    }}
                    placeholder="Card number"
                    maxLength={16}
                    className="
                      block
                      w-full
                      rounded-xl
                      border
                      border-orange-200
                      bg-white
                      py-2.5
                      pl-9
                      pr-3
                      text-sm
                      outline-none
                      shadow-sm
                      focus:border-orange-400
                      focus:ring-2
                      focus:ring-orange-100
                    "
                  />
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    value={card.expiry}
                    onChange={(event) => {
                      const value = event.target.value
                        .replace(/[^0-9/]/g, "")
                        .slice(0, 5);

                      setCard((previous) => ({
                        ...previous,
                        expiry: value,
                      }));
                    }}
                    placeholder="MM/YY"
                    maxLength={5}
                    className="
                      block
                      w-1/2
                      rounded-xl
                      border
                      border-orange-200
                      bg-white
                      px-3
                      py-2.5
                      text-sm
                      outline-none
                      shadow-sm
                      focus:border-orange-400
                      focus:ring-2
                      focus:ring-orange-100
                    "
                  />

                  <input
                    type="password"
                    inputMode="numeric"
                    value={card.cvv}
                    onChange={(event) => {
                      const value = event.target.value
                        .replace(/\D/g, "")
                        .slice(0, 4);

                      setCard((previous) => ({
                        ...previous,
                        cvv: value,
                      }));
                    }}
                    placeholder="CVV"
                    maxLength={4}
                    className="
                      block
                      w-1/2
                      rounded-xl
                      border
                      border-orange-200
                      bg-white
                      px-3
                      py-2.5
                      text-sm
                      outline-none
                      shadow-sm
                      focus:border-orange-400
                      focus:ring-2
                      focus:ring-orange-100
                    "
                  />
                </div>

                <p className="text-[11px] text-stone-400">
                  Demo card fields only. No real payment is processed.
                </p>
              </div>
            )}

            {/* UPI */}
            {method === "upi" && (
              <div className="mt-3">
                <div className="relative">
                  <Smartphone
                    size={16}
                    className="
                      pointer-events-none
                      absolute
                      left-3
                      top-1/2
                      -translate-y-1/2
                      text-orange-400
                    "
                  />

                  <input
                    type="text"
                    value={upiId}
                    onChange={(event) => setUpiId(event.target.value)}
                    placeholder="yourname@upi"
                    autoComplete="off"
                    className="
                      block
                      w-full
                      rounded-xl
                      border
                      border-orange-200
                      bg-white
                      py-2.5
                      pl-9
                      pr-3
                      text-sm
                      outline-none
                      shadow-sm
                      focus:border-orange-400
                      focus:ring-2
                      focus:ring-orange-100
                    "
                  />
                </div>

                <p className="mt-1.5 text-[11px] text-stone-400">
                  Demo UPI field. No real payment is processed.
                </p>
              </div>
            )}

            {/* Security Note */}
            <div className="mt-3 flex items-start gap-2 rounded-xl bg-white px-3 py-2.5">
              <ShieldCheck
                size={15}
                className="mt-0.5 shrink-0 text-green-500"
              />

              <p className="text-[11px] leading-relaxed text-stone-400">
                Demo checkout — no real payment is processed and no
                information is sent to a server.
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Order Summary */}
      <div className="shrink-0 border-t border-orange-100 bg-white px-5 py-4">
        <div className="mb-1 flex justify-between text-sm text-stone-500">
          <span>Subtotal</span>
          <span>{currency(subtotal)}</span>
        </div>

        <div className="mb-2 flex justify-between text-sm text-stone-500">
          <span>Delivery fee</span>
          <span>
            {deliveryFee === 0 ? "Free" : currency(deliveryFee)}
          </span>
        </div>

        <div className="mb-4 flex items-center justify-between border-t border-dashed border-orange-200 pt-2 text-base font-extrabold text-stone-800">
          <span>Total</span>
          <span className="text-orange-600">
            {currency(total)}
          </span>
        </div>

        <button
          type="button"
          onClick={handleConfirm}
          disabled={!isValid}
          className={`
            flex w-full items-center justify-center gap-2
            rounded-xl py-3.5 font-bold shadow-md transition
            ${
              isValid
                ? "bg-orange-500 text-white hover:bg-orange-600 active:scale-[0.98]"
                : "cursor-not-allowed bg-stone-200 text-stone-400"
            }
          `}
        >
          {method === "cod"
            ? `Place Order · ${currency(total)}`
            : `Confirm & Pay · ${currency(total)}`}
        </button>
      </div>
    </div>
  );
}
