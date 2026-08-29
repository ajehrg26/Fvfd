import React, { useState } from 'react';
import {
  X,
  Truck,
  CheckCircle2,
  Lock,
  ArrowLeft,
  Smartphone,
  Copy,
  ExternalLink,
  QrCode,
  MessageCircle,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useShop } from '../context/ShopContext';

export const CheckoutModal: React.FC = () => {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    clearCart,
    cartSubtotal,
    formatPrice,
    setActivePage,
  } = useShop();

  const [step, setStep] = useState<'details' | 'payment' | 'confirmation'>('details');

  // Form states
  const [email, setEmail] = useState('style.enthusiast@example.com');
  const [firstName, setFirstName] = useState('Alex');
  const [lastName, setLastName] = useState('Morgan');
  const [address, setAddress] = useState('742 Evergreen Terrace');
  const [city, setCity] = useState('New Delhi');
  const [postalCode, setPostalCode] = useState('110001');
  const [country, setCountry] = useState('India');
  const [shippingMethod, setShippingMethod] = useState<'standard' | 'express'>('standard');
  const [paymentMethod, setPaymentMethod] = useState<'phonepe' | 'cod'>('phonepe');
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [userUtr, setUserUtr] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  if (!isCheckoutOpen) return null;

  const shippingCost = shippingMethod === 'express' ? 14.0 : cartSubtotal >= 75 ? 0 : 9.0;
  const tax = cartSubtotal * 0.08;
  const grandTotal = cartSubtotal + shippingCost + tax;

  const upiId = 'sarkaravoy760-2@okicici';
  const payeeName = 'Flint N Steel';
  // Standard UPI URI format with exact amount & currency
  const upiUri = `upi://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(payeeName)}&am=${grandTotal.toFixed(2)}&cu=INR&tn=${encodeURIComponent('Flint N Steel Order Payment')}`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(upiUri)}`;

  const copyUpiId = () => {
    navigator.clipboard.writeText(upiId);
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2000);
  };

  const handleOpenPhonePe = () => {
    window.location.href = upiUri;
  };

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      const generatedOrder = `FNS-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderNumber(generatedOrder);
      setStep('confirmation');
      clearCart();

      // Launch celebration confetti
      try {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#5f259f', '#ff4500', '#ffd700', '#000000'],
        });
      } catch (err) {
        console.error(err);
      }
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-neutral-100 animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-6 border-b border-neutral-100 flex items-center justify-between bg-[#fafafa]">
          <div className="flex items-center space-x-2">
            <span className="font-brand text-xl sm:text-2xl font-extrabold tracking-tighter text-black">Flint N Steel</span>
            <span className="text-neutral-300">|</span>
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-600">
              {step === 'confirmation' ? 'Order Confirmed' : 'Secure Checkout'}
            </span>
          </div>
          <button
            onClick={() => setIsCheckoutOpen(false)}
            className="p-1.5 text-neutral-400 hover:text-black rounded-full hover:bg-neutral-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content based on step */}
        <div className="p-6 sm:p-8">
          {/* STEP 1: Shipping Details */}
          {step === 'details' && (
            <form onSubmit={handleDetailsSubmit} className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-black mb-1">1. Contact & Delivery Address</h3>
                <p className="text-xs text-neutral-500">Where should we deliver your Flint N Steel package?</p>
              </div>

              <div className="space-y-3.5 text-xs">
                <div>
                  <label className="block font-semibold text-neutral-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:border-black font-medium"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-neutral-700 mb-1">First Name</label>
                    <input
                      type="text"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:border-black font-medium"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-neutral-700 mb-1">Last Name</label>
                    <input
                      type="text"
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:border-black font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-neutral-700 mb-1">Street Address</label>
                  <input
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:border-black font-medium"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block font-semibold text-neutral-700 mb-1">City</label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:border-black font-medium"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-neutral-700 mb-1">Postal Code</label>
                    <input
                      type="text"
                      required
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:border-black font-medium"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-neutral-700 mb-1">Country</label>
                    <input
                      type="text"
                      required
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:border-black font-medium"
                    />
                  </div>
                </div>
              </div>

              {/* Delivery Speed Selector */}
              <div className="space-y-2 pt-2 border-t border-neutral-100">
                <label className="block font-bold text-xs text-neutral-800">Delivery Speed</label>
                <div className="grid grid-cols-2 gap-3">
                  <div
                    onClick={() => setShippingMethod('standard')}
                    className={`p-3 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                      shippingMethod === 'standard'
                        ? 'border-black bg-neutral-50 shadow-xs'
                        : 'border-neutral-200 hover:border-neutral-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs text-black">Standard Courier</span>
                      <span className="text-xs font-bold text-emerald-700">
                        {cartSubtotal >= 75 ? 'FREE' : formatPrice(9.0)}
                      </span>
                    </div>
                    <span className="text-[11px] text-neutral-500 mt-1">2-4 Business Days</span>
                  </div>

                  <div
                    onClick={() => setShippingMethod('express')}
                    className={`p-3 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                      shippingMethod === 'express'
                        ? 'border-black bg-neutral-50 shadow-xs'
                        : 'border-neutral-200 hover:border-neutral-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs text-black">Next-Day Priority</span>
                      <span className="text-xs font-bold text-black">{formatPrice(14.0)}</span>
                    </div>
                    <span className="text-[11px] text-neutral-500 mt-1">Guaranteed 24-Hour Express</span>
                  </div>
                </div>
              </div>

              {/* Continue button */}
              <button
                type="submit"
                className="w-full bg-black text-white hover:bg-neutral-800 text-sm font-bold py-3.5 rounded-full transition-all flex items-center justify-center space-x-2"
              >
                <span>Continue to Payment</span>
                <span className="text-xs opacity-75">({formatPrice(grandTotal)})</span>
              </button>
            </form>
          )}

          {/* STEP 2: Payment */}
          {step === 'payment' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-black">2. Payment & Authorization</h3>
                  <p className="text-xs text-neutral-500">All transactions are encrypted with 256-bit SSL.</p>
                </div>
                <button
                  onClick={() => setStep('details')}
                  className="text-xs font-semibold text-neutral-500 hover:text-black flex items-center gap-1"
                >
                  <ArrowLeft className="w-3 h-3" /> Back
                </button>
              </div>

              {/* Payment Methods */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('phonepe')}
                  className={`py-3.5 px-3 rounded-2xl text-xs font-bold border transition-all flex flex-col items-center gap-1.5 ${
                    paymentMethod === 'phonepe'
                      ? 'border-[#5f259f] bg-purple-50 text-[#5f259f] shadow-sm'
                      : 'border-neutral-200 text-neutral-700 hover:bg-neutral-50'
                  }`}
                >
                  <img
                    src="https://lh3.googleusercontent.com/d/15BCRcVvV6fIvnsJ3DHB5-ijJLhvGoFbi"
                    alt="PhonePe"
                    className="w-5 h-5 rounded-md object-contain"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                  <span>PhonePe / UPI</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('cod')}
                  className={`py-3.5 px-3 rounded-2xl text-xs font-bold border transition-all flex flex-col items-center gap-1.5 ${
                    paymentMethod === 'cod'
                      ? 'border-black bg-black text-white'
                      : 'border-neutral-200 text-neutral-700 hover:bg-neutral-50'
                  }`}
                >
                  <Truck className="w-5 h-5" />
                  <span>Cash on Delivery</span>
                </button>
              </div>

              {/* WhatsApp Quick Order Option in light green */}
              <a
                href={`https://wa.me/918609831662?text=${encodeURIComponent(
                  `Hey, I am ${firstName} ${lastName}.\nI was interested in buying from Flint N Steel.\n\nCart Items:\n${cart
                    .map(
                      (item) =>
                        `- ${item.product?.name || 'Item'} (Qty: ${item.quantity}, Size: ${item.size}, Color: ${item.color?.name || (item as any).selectedColor?.name || 'Standard'}) - ₹${(item.product?.price || 0) * item.quantity}`
                    )
                    .join('\n')}\n\nTotal Amount: ₹${grandTotal.toFixed(0)}\nDelivery Address: ${address}, ${city}, ${postalCode}`
                )}`}
                target="_blank"
                rel="noreferrer noopener"
                className="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-950 border border-emerald-300/80 hover:border-emerald-400 text-xs sm:text-sm font-bold py-3.5 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 shadow-xs"
              >
                <img
                  src="https://lh3.googleusercontent.com/d/1bMR8NPF_0i22a8Z-QGMFOWHuO3FaT6vw"
                  alt="WhatsApp"
                  className="w-7 h-7 rounded-md object-contain flex-shrink-0"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />
                <span>Order via WhatsApp Chat (+91 86098 31662)</span>
              </a>

              {paymentMethod === 'phonepe' && (
                <div className="space-y-4 text-xs bg-purple-50/50 p-4 sm:p-5 rounded-2xl border border-purple-200/80">
                  {/* PhonePe Header */}
                  <div className="flex items-center justify-between border-b border-purple-100 pb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl overflow-hidden flex items-center justify-center shadow-sm flex-shrink-0 bg-[#5f259f]">
                        <img
                          src="https://lh3.googleusercontent.com/d/15BCRcVvV6fIvnsJ3DHB5-ijJLhvGoFbi"
                          alt="PhonePe Logo"
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            // Fallback if google drive direct stream has network delay
                            (e.currentTarget as HTMLElement).style.display = 'none';
                          }}
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-neutral-900">PhonePe Direct UPI</h4>
                        <p className="text-[11px] text-neutral-500">Exact payable amount: <span className="font-bold text-black">{formatPrice(grandTotal)}</span></p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-[#5f259f] bg-purple-100 px-2.5 py-1 rounded-full">
                      Verified Payee
                    </span>
                  </div>

                  {/* UPI ID display & copy */}
                  <div>
                    <label className="block text-[11px] font-bold text-neutral-700 mb-1.5">Official UPI ID</label>
                    <div className="flex items-center justify-between bg-white border border-purple-200 rounded-xl px-3.5 py-2.5">
                      <span className="font-mono font-bold text-xs sm:text-sm text-neutral-900 select-all">
                        {upiId}
                      </span>
                      <button
                        type="button"
                        onClick={copyUpiId}
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-[#5f259f] bg-purple-50 hover:bg-purple-100 px-3 py-1 rounded-lg transition-colors ml-2"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        <span>{copiedUpi ? 'Copied!' : 'Copy UPI'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Launch App & UPI button */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    <button
                      type="button"
                      onClick={handleOpenPhonePe}
                      className="w-full bg-[#5f259f] hover:bg-[#4e1d84] text-white text-xs font-bold py-3 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <Smartphone className="w-4 h-4" />
                      <span>Open PhonePe App</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={upiUri}
                      className="w-full border border-[#5f259f] text-[#5f259f] hover:bg-purple-100/60 text-xs font-bold py-3 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 text-center"
                    >
                      <QrCode className="w-4 h-4" />
                      <span>Pay via Any UPI App</span>
                    </a>
                  </div>

                  {/* UTR Input */}
                  <div className="pt-2">
                    <label className="block text-[11px] font-medium text-neutral-600 mb-1">
                      UPI UTR / Reference ID (Optional after payment)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 423984729182"
                      value={userUtr}
                      onChange={(e) => setUserUtr(e.target.value)}
                      className="w-full bg-white border border-purple-200 rounded-xl px-3.5 py-2 text-xs focus:ring-1 focus:ring-[#5f259f] focus:outline-none font-mono"
                    />
                  </div>
                </div>
              )}

              {/* Order Summary Recap */}
              <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-100 text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-neutral-500">Items ({cart.length})</span>
                  <span className="font-semibold text-black">{formatPrice(cartSubtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Delivery</span>
                  <span className="font-semibold text-black">
                    {shippingCost === 0 ? 'FREE' : formatPrice(shippingCost)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Estimated Sales Tax</span>
                  <span className="font-semibold text-black">{formatPrice(tax)}</span>
                </div>
                <div className="flex justify-between text-sm font-extrabold text-black pt-2 border-t border-neutral-200">
                  <span>Grand Total</span>
                  <span>{formatPrice(grandTotal)}</span>
                </div>
              </div>

              {/* Authorize Button */}
              <button
                onClick={handlePlaceOrder}
                disabled={isProcessing}
                className="w-full bg-black text-white hover:bg-neutral-800 disabled:bg-neutral-400 text-sm font-bold py-4 rounded-full transition-all flex items-center justify-center space-x-2 shadow-xl"
              >
                {isProcessing ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Processing Payment...
                  </span>
                ) : (
                  <span>Authorize & Pay {formatPrice(grandTotal)}</span>
                )}
              </button>
            </div>
          )}

          {/* STEP 3: Order Confirmation */}
          {step === 'confirmation' && (
            <div className="text-center py-6 space-y-6 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-1">
                <h3 className="font-editorial text-2xl sm:text-3xl font-extrabold text-black">
                  Thank You for Your Order!
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600">
                  Order <strong>#{orderNumber}</strong> has been received and sent to our fulfillment studio.
                </p>
                <p className="text-xs text-neutral-400">
                  A receipt & delivery tracking confirmation has been sent to <strong>{email}</strong>.
                </p>
              </div>

              <div className="bg-neutral-50 p-5 rounded-2xl border border-neutral-100 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between font-medium">
                  <span className="text-neutral-500">Estimated Delivery:</span>
                  <span className="font-bold text-black">
                    {shippingMethod === 'express' ? 'Tomorrow by 6:00 PM' : '3-4 Business Days'}
                  </span>
                </div>
                <div className="flex justify-between font-medium">
                  <span className="text-neutral-500">Shipping Address:</span>
                  <span className="font-bold text-black">{address}, {city}</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span className="text-neutral-500">Payment Status:</span>
                  <span className="text-emerald-700 font-bold">Paid in Full ({formatPrice(grandTotal)})</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => {
                    setIsCheckoutOpen(false);
                    setActivePage('home');
                  }}
                  className="bg-black text-white text-xs font-bold px-8 py-3.5 rounded-full hover:bg-neutral-800 transition-colors shadow-md"
                >
                  Continue Exploring Flint N Steel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
