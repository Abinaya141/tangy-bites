import React from "react";
import { X, Plus, Minus } from "lucide-react";
import { currency } from "../utils/currency.js";
import DeliveryAnimation from "./DeliveryAnimation.jsx";
import CheckoutPage from "./CheckoutPage.jsx";

export default function CartDrawer({
  open,
  step, // "cart" | "checkout"
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
  return (
    <>
      <div
        onClick={orderStatus === "idle" ? onClose : undefined}
        className={
          "fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 " +
          (open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none")
        }
      />
      <div
        className={
          "fixed top-0 right-0 h-full w-full max-w-md bg-orange-50 z-50 shadow-2xl transform transition-transform duration-300 flex flex-col " +
          (open ? "translate-x-0" : "translate-x-full")
        }
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
            <div className="flex items-center justify-between px-5 py-4 bg-white border-b border-orange-100 shrink-0">
              <h2 className="font-extrabold text-lg text-stone-800 font-display">
                Your Cart 🛒
              </h2>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-orange-50 flex items-center justify-center hover:bg-orange-100 active:scale-90 transition"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center text-stone-400 gap-2">
                  <span className="text-6xl">🛒</span>
                  <p className="font-semibold text-stone-500">
                    Your cart is empty
                  </p>
                  <p className="text-sm">
                    Add some tasty items to get started 🍽️
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm border border-orange-100"
                    >
                      <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center text-3xl shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          onError={() => setImgError(true)}
                          loading="lazy"
                          className={
                            "absolute inset-0 w-full h-full object-cover transition-transform duration-200 " +
                            (popped ? "scale-110" : "group-hover:scale-105")
                          }
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm text-stone-800 truncate">
                          {item.name}
                        </p>
                        <p className="text-orange-600 font-bold text-sm">
                          {currency(item.price)}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 bg-orange-500 rounded-lg overflow-hidden shrink-0">
                        <button
                          onClick={() => updateQty(item.id, -1)}
                          className="text-white w-7 h-8 flex items-center justify-center hover:bg-orange-600 active:scale-90 transition"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="text-white font-bold text-xs w-5 text-center">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => updateQty(item.id, 1)}
                          className="text-white w-7 h-8 flex items-center justify-center hover:bg-orange-600 active:scale-90 transition"
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="bg-white border-t border-orange-100 px-5 py-4 shrink-0">
                <div className="flex justify-between text-sm text-stone-500 mb-1">
                  <span>Subtotal</span>
                  <span>{currency(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm text-stone-500 mb-2">
                  <span>Delivery fee</span>
                  <span>
                    {deliveryFee === 0 ? "Free 🎉" : currency(deliveryFee)}
                  </span>
                </div>
                <div className="flex justify-between font-extrabold text-stone-800 text-base mb-4 pt-2 border-t border-dashed border-orange-200">
                  <span>Total</span>
                  <span className="text-orange-600">{currency(total)}</span>
                </div>
                <button
                  onClick={onGoToCheckout}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl shadow-md active:scale-[0.98] transition flex items-center justify-center gap-2"
                >
                  Proceed to Checkout 🧾 · {currency(total)}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
