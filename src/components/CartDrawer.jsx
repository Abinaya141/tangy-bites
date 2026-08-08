import React, { useEffect, useState } from "react";
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  UtensilsCrossed,
  PartyPopper,
} from "lucide-react";

import { currency } from "../utils/currency.js";
import DeliveryAnimation from "./DeliveryAnimation.jsx";
import CheckoutPage from "./CheckoutPage.jsx";

export default function CartDrawer({
  open,
  step,
  onClose,
  items,
  updateQty,
  subtotal,
  deliveryFee,
  total,
  orderStatus,
  onGoToCheckout,
  onBackToCart,
  onConfirmOrder,
}) {
  const [imageErrors, setImageErrors] = useState({});
  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);
  const handleImageError = (id) => {
    setImageErrors((prev) => ({
      ...prev,
      [id]: true,
    }));
  };
  useEffect(() => {
    if (!open || orderStatus !== "idle") return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, orderStatus, onClose]);

  return (
    <>
      <div
        aria-hidden={!open}
        onClick={orderStatus === "idle" ? onClose : undefined}
        className={`
          fixed
          inset-0
          z-40
          bg-black/40
          backdrop-blur-[2px]
          transition-opacity
          duration-300
          ${
            open
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />
      <aside
        aria-label="Shopping cart"
        className={`
          fixed
          right-0
          top-0
          z-50
          flex
          h-[100dvh]
          w-full
          max-w-md
          flex-col
          overflow-hidden
          bg-orange-50
          shadow-2xl
          transition-transform
          duration-300
          ease-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {orderStatus !== "idle" ? (
          <DeliveryAnimation status={orderStatus} />
        ) : step === "checkout" ? (
          <CheckoutPage
            subtotal={subtotal}
            deliveryFee={deliveryFee}
            total={total}
            onBack={onBackToCart}
            onConfirm={onConfirmOrder}
          />
        ) : (
          <>
            <header className="flex shrink-0 items-center justify-between border-b border-orange-100 bg-white px-5 py-4">
              <div className="flex min-w-0 items-center gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-orange-100
                    text-orange-500
                  "
                >
                  <ShoppingBag size={19} />
                </div>

                <div className="min-w-0">
                  <h2 className="text-lg font-extrabold text-stone-800">
                    Your Cart
                  </h2>

                  {items.length > 0 && (
                    <p className="mt-0.5 text-xs text-stone-400">
                      {items.length} {items.length === 1 ? "item" : "items"}{" "}
                      selected
                    </p>
                  )}
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close cart"
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-orange-50
                  text-stone-600
                  transition
                  hover:bg-orange-100
                  hover:text-orange-600
                  active:scale-90
                "
              >
                <X size={18} />
              </button>
            </header>
            <div className="flex-1 overflow-y-auto px-4 py-4 sm:px-5">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center px-5 text-center">
                  <div
                    className="
                      flex
                      h-20
                      w-20
                      items-center
                      justify-center
                      rounded-full
                      bg-orange-100
                      text-orange-500
                    "
                  >
                    <ShoppingBag size={36} strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-4 font-bold text-stone-700">
                    Your cart is empty
                  </h3>

                  <p className="mt-1 max-w-xs text-sm leading-relaxed text-stone-400">
                    Add some tasty items to get started.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="
                        rounded-2xl
                        border
                        border-orange-100
                        bg-white
                        p-3
                        shadow-sm
                      "
                    >
                      <div className="flex items-center gap-3">
                        {/* Image */}

                        <div
                          className="
                            h-16
                            w-16
                            shrink-0
                            overflow-hidden
                            rounded-xl
                            bg-orange-100
                          "
                        >
                          {item.image && !imageErrors[item.id] ? (
                            <img
                              src={item.image}
                              alt={item.name}
                              loading="lazy"
                              onError={() => handleImageError(item.id)}
                              className="
                                h-full
                                w-full
                                object-cover
                                transition-transform
                                duration-300
                                hover:scale-105
                              "
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center text-orange-500">
                              <UtensilsCrossed size={27} strokeWidth={1.8} />
                            </div>
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-extrabold text-stone-800">
                            {item.name}
                          </p>

                          <p className="mt-0.5 text-xs text-stone-400">
                            {currency(item.price)} each
                          </p>

                          <p className="mt-1 text-sm font-extrabold text-orange-600">
                            {currency(item.price * item.qty)}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => updateQty(item.id, -item.qty)}
                          aria-label={`Remove ${item.name}`}
                          title="Remove item"
                          className="
                            flex
                            h-8
                            w-8
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg
                            bg-red-50
                            text-red-500
                            transition
                            hover:bg-red-500
                            hover:text-white
                            active:scale-90
                          "
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>

                      <div className="mt-3 flex items-center justify-between border-t border-orange-50 pt-3">
                        <span className="text-xs font-medium text-stone-400">
                          Quantity
                        </span>

                        <div
                          className="
                            flex
                            items-center
                            overflow-hidden
                            rounded-xl
                            bg-orange-500
                          "
                        >
                          <button
                            type="button"
                            onClick={() => updateQty(item.id, -1)}
                            aria-label={`Decrease ${item.name}`}
                            className="
                              flex
                              h-9
                              w-9
                              items-center
                              justify-center
                              text-white
                              transition
                              hover:bg-orange-600
                              active:scale-90
                            "
                          >
                            <Minus size={14} />
                          </button>

                          <span className="flex h-9 w-8 items-center justify-center text-sm font-extrabold text-white">
                            {item.qty}
                          </span>

                          <button
                            type="button"
                            onClick={() => updateQty(item.id, 1)}
                            aria-label={`Increase ${item.name}`}
                            className="
                              flex
                              h-9
                              w-9
                              items-center
                              justify-center
                              text-white
                              transition
                              hover:bg-orange-600
                              active:scale-90
                            "
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {items.length > 0 && (
              <div
                className="
                  shrink-0
                  border-t
                  border-orange-100
                  bg-white
                  px-5
                  py-4
                "
              >
                <div className="mb-1 flex justify-between text-sm text-stone-500">
                  <span>Subtotal</span>
                  <span>{currency(subtotal)}</span>
                </div>

                <div className="mb-2 flex justify-between text-sm text-stone-500">
                  <span>Delivery fee</span>

                  <span className="flex items-center gap-1">
                    {deliveryFee === 0 ? (
                      <>
                        <PartyPopper size={14} className="text-green-500" />
                        <span className="text-green-600 font-semibold">
                          Free
                        </span>
                      </>
                    ) : (
                      currency(deliveryFee)
                    )}
                  </span>
                </div>

                <div
                  className="
                    mb-4
                    flex
                    items-center
                    justify-between
                    border-t
                    border-dashed
                    border-orange-200
                    pt-2
                    text-base
                    font-extrabold
                    text-stone-800
                  "
                >
                  <span>Total</span>

                  <span className="text-orange-600">{currency(total)}</span>
                </div>
                <button
                  type="button"
                  onClick={onGoToCheckout}
                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded
                    bg-orange-600
                    py-3.5
                    font-bold
                    text-white
                    shadow-md
                    shadow-orange-500/20
                    transition-all
                    hover:bg-orange-700
                    hover:shadow-lg
                    active:scale-[0.98]
                  "
                >
                  Proceed to Checkout
                  <ArrowRight
                    size={16}
                    className="
                      transition-transform
                      duration-200
                      group-hover:translate-x-0.5
                    "
                  />
                  <span>·</span>
                  {currency(total)}
                </button>
              </div>
            )}
          </>
        )}
      </aside>
    </>
  );
}
