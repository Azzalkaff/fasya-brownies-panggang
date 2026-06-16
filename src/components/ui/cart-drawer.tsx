"use client"
import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Minus, Plus, ShoppingBag, CalendarClock, MapPin, Truck, Store, User, MessageSquare, Navigation } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice, getWhatsAppLink } from "@/constants/site"
import { PrimaryButton } from "./primary-button"

export function CartDrawer() {
  const { isDrawerOpen, setDrawerOpen, items, updateQuantity, removeFromCart, cartTotal } = useCart()
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];
  const [deliveryDate, setDeliveryDate] = React.useState(tomorrow)
  const [deliveryTime, setDeliveryTime] = React.useState("10:00")
  const [paymentMethod, setPaymentMethod] = React.useState("Transfer Bank")
  const [customerName, setCustomerName] = React.useState("")
  const [orderNotes, setOrderNotes] = React.useState("")
  
  // Delivery State
  const [deliveryMethod, setDeliveryMethod] = React.useState<"pickup" | "delivery">("pickup")
  const [detailedAddress, setDetailedAddress] = React.useState("")
  const [mapsLink, setMapsLink] = React.useState("")
  const [coordinates, setCoordinates] = React.useState<{lat: number, lng: number} | null>(null)
  const [isLocating, setIsLocating] = React.useState(false)

  const finalTotal = cartTotal;

  const handleGetLocation = () => {
    if ("geolocation" in navigator) {
      setIsLocating(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoordinates({ lat: position.coords.latitude, lng: position.coords.longitude });
          setIsLocating(false);
        },
        (error) => {
          alert("Gagal mendapatkan lokasi. Pastikan GPS aktif dan Anda telah memberikan izin lokasi pada browser.");
          setIsLocating(false);
        },
        { enableHighAccuracy: true, timeout: 10000 }
      );
    } else {
      alert("Browser Anda tidak mendukung fitur lokasi GPS.");
    }
  };

  const handleCheckout = () => {
    if (items.length === 0) return;
    
    let message = `Halo Fasya Brownies, saya *${customerName || 'Customer'}* ingin ikut Pre-Order:\n\n`;
    message += "*Detail Pesanan:*\n";
    items.forEach(item => {
      message += `- ${item.quantity}x ${item.product.name} [${item.variant.name}] - ${formatPrice(item.variant.price * item.quantity)}\n`;
    });
    
    if (orderNotes) {
      message += `\n*Catatan Tambahan:*\n${orderNotes}\n`;
    }
    
    // Delivery Details
    message += `\n*Metode Pengambilan:*\n${deliveryMethod === 'pickup' ? 'Ambil di Tempat (Pickup)' : 'Diantar via Gojek/Grab'}\n`;
    if (deliveryMethod === 'delivery') {
      message += `*Alamat Lengkap:* ${detailedAddress || '-'}\n`;
      if (mapsLink) {
        message += `*Titik Maps:* ${mapsLink}\n`;
      } else if (coordinates) {
        message += `*Titik Maps:* https://maps.google.com/?q=${coordinates.lat},${coordinates.lng}\n`;
      }
    }

    if (deliveryDate) {
      const dateObj = new Date(deliveryDate);
      const formattedDate = dateObj.toLocaleDateString("id-ID", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
      message += `\n*Rencana Waktu:*\n${formattedDate} | Pukul: ${deliveryTime}\n`;
    } else {
      message += `\n*Rencana Waktu:*\n(Belum ditentukan)\n`;
    }

    message += `\n*Metode Pembayaran:*\n${paymentMethod}\n`;

    // Totals
    message += `\n*Rincian Biaya:*\n`;
    message += `Subtotal: ${formatPrice(cartTotal)}\n`;
    if (deliveryMethod === 'delivery') {
      message += `Ongkos Kirim: _(Ongkir Gojek/Grab ditanggung pembeli saat pengiriman)_\n`;
    }
    message += `*Total Belanja: ${formatPrice(finalTotal)}*\n\n`;
    message += `Mohon info ketersediaan slot. Terima kasih!`;
    
    window.open(getWhatsAppLink(message), "_blank");
  };

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setDrawerOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90]"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-brand-surface shadow-2xl z-[100] flex flex-col border-l border-brand-border/30"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-brand-border/40">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-brand-primary" />
                <h2 className="font-heading font-bold text-xl text-brand-secondary">Form Pre-Order</h2>
              </div>
              <button 
                onClick={() => setDrawerOpen(false)}
                className="p-2 text-brand-text-muted hover:text-brand-secondary transition-colors rounded-full hover:bg-brand-border/20"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content (Items + Settings) */}
            <div className="flex-1 overflow-y-auto bg-brand-surface pb-6">
              {/* Items */}
              <div className="p-6 flex flex-col gap-4">
                {items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-10 text-center opacity-50">
                    <ShoppingBag className="w-16 h-16 mb-4 text-brand-text-muted" />
                    <p className="text-brand-text-secondary">Belum ada pesanan</p>
                  </div>
                ) : (
                  items.map(item => (
                    <div key={item.id} className="flex gap-4 items-center bg-white p-4 rounded-xl shadow-sm border border-brand-border/20">
                      <div className="w-16 h-16 bg-brand-background rounded-lg flex-shrink-0 relative overflow-hidden">
                        <img src={item.variant.image || item.product.baseImage} alt={item.product.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-brand-secondary truncate text-sm">{item.product.name}</h4>
                        <p className="text-xs text-brand-text-muted mb-2">{item.variant.name}</p>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-brand-primary text-sm">{formatPrice(item.variant.price * item.quantity)}</span>
                          <div className="flex items-center gap-3 bg-brand-background rounded-full px-2 py-1">
                            <button onClick={() => item.quantity === 1 ? removeFromCart(item.id) : updateQuantity(item.id, item.quantity - 1)} className="text-brand-text-secondary hover:text-brand-primary transition-colors">
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-brand-text-secondary hover:text-brand-primary transition-colors">
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Settings Section (Only if items exist) */}
              {items.length > 0 && (
                <div className="px-6 flex flex-col gap-6">
                  
                  {/* Customer Info */}
                  <div>
                    <label className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-brand-secondary mb-3">
                      <User className="w-4 h-4 text-brand-primary" />
                      Nama Pemesan
                    </label>
                    <input 
                      type="text" 
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Masukkan nama Anda..."
                      className="w-full bg-brand-background border border-brand-border/50 rounded-lg px-4 py-3 text-sm text-brand-secondary focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
                    />
                  </div>

                  {/* Order Notes */}
                  <div>
                    <label className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-brand-secondary mb-3">
                      <MessageSquare className="w-4 h-4 text-brand-primary" />
                      Catatan Tambahan <span className="text-[10px] text-brand-text-muted lowercase font-normal">(Opsional)</span>
                    </label>
                    <textarea 
                      value={orderNotes}
                      onChange={(e) => setOrderNotes(e.target.value)}
                      placeholder="Contoh: Tolong tulis ucapan Happy Birthday..."
                      className="w-full bg-brand-background border border-brand-border/50 rounded-lg px-4 py-3 text-sm text-brand-secondary focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all min-h-[80px] resize-none"
                    />
                  </div>

                  {/* Delivery Method */}
                  <div>
                    <label className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-brand-secondary mb-3">
                      <MapPin className="w-4 h-4 text-brand-primary" />
                      Metode Pengambilan
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button 
                        onClick={() => setDeliveryMethod('pickup')}
                        className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all ${deliveryMethod === 'pickup' ? 'border-brand-primary bg-brand-primary/5 text-brand-secondary' : 'border-brand-border/30 text-brand-text-muted hover:border-brand-primary/30'}`}
                      >
                        <Store className="w-5 h-5 mb-2" />
                        <span className="text-xs font-bold">Ambil di Tempat</span>
                      </button>
                      <button 
                        onClick={() => setDeliveryMethod('delivery')}
                        className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all ${deliveryMethod === 'delivery' ? 'border-brand-primary bg-brand-primary/5 text-brand-secondary' : 'border-brand-border/30 text-brand-text-muted hover:border-brand-primary/30'}`}
                      >
                        <Truck className="w-5 h-5 mb-2" />
                        <span className="text-xs font-bold text-center">Diantar<br/><span className="font-normal opacity-80">(Gojek/Grab)</span></span>
                      </button>
                    </div>
                  </div>

                  {/* Delivery Details */}
                  {deliveryMethod === 'delivery' && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="flex flex-col gap-4 bg-white p-4 rounded-xl border border-brand-border/20 shadow-sm overflow-hidden">
                      <div>
                        <label className="text-xs font-bold text-brand-secondary mb-2 block">Alamat Lengkap</label>
                        <textarea 
                          value={detailedAddress}
                          onChange={(e) => setDetailedAddress(e.target.value)}
                          placeholder="Nama Jalan, RT/RW, Patokan Rumah..."
                          className="w-full bg-brand-background border border-brand-border/50 rounded-lg px-3 py-2 text-sm text-brand-secondary focus:outline-none focus:border-brand-primary min-h-[80px] resize-none"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-brand-secondary mb-2 block">Link Titik Google Maps <span className="text-[10px] text-brand-text-muted font-normal">(Disarankan)</span></label>
                        <input 
                          type="url"
                          value={mapsLink}
                          onChange={(e) => {
                            setMapsLink(e.target.value);
                            if (e.target.value) setCoordinates(null);
                          }}
                          placeholder="https://maps.app.goo.gl/..."
                          className="w-full bg-brand-background border border-brand-border/50 rounded-lg px-3 py-2 text-sm text-brand-secondary focus:outline-none focus:border-brand-primary transition-all mb-4"
                        />
                        
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-px flex-1 bg-brand-border/30"></div>
                            <span className="text-[10px] uppercase font-bold text-brand-text-muted tracking-widest">Atau</span>
                            <div className="h-px flex-1 bg-brand-border/30"></div>
                        </div>

                        {coordinates ? (
                          <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex flex-col gap-2">
                            <div className="flex items-center gap-2 text-green-700">
                              <MapPin className="w-4 h-4" />
                              <span className="text-sm font-medium">Titik lokasi otomatis aktif</span>
                            </div>
                            <button 
                              onClick={() => setCoordinates(null)}
                              className="text-xs text-red-500 hover:text-red-700 self-start font-medium transition-colors"
                            >
                              Hapus
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => {
                              handleGetLocation();
                              setMapsLink("");
                            }}
                            disabled={isLocating}
                            className="w-full flex items-center justify-center gap-2 bg-brand-primary/10 hover:bg-brand-primary/20 text-brand-primary border border-brand-primary/20 rounded-lg px-4 py-3 text-sm font-bold transition-colors disabled:opacity-50"
                          >
                            {isLocating ? (
                                <span className="animate-pulse">Mencari lokasi GPS...</span>
                            ) : (
                                <>
                                  <Navigation className="w-4 h-4" />
                                  Gunakan Titik GPS Saat Ini
                                </>
                            )}
                          </button>
                        )}
                        <p className="text-[10px] text-brand-text-muted mt-2 leading-relaxed">
                          * Untuk ongkir kurir akurat, masukkan link maps pengiriman yang dituju atau gunakan fitur GPS.
                        </p>
                      </div>
                      <div className="bg-brand-primary/10 rounded-lg p-3">
                        <p className="text-[11px] text-brand-primary font-medium leading-relaxed">
                          💡 Ongkos kirim Gojek/Grab akan dikalkulasikan di aplikasi dan dibayarkan langsung ke *driver* saat pesanan tiba.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* Date & Payment */}
                  <div className="flex flex-col gap-4 bg-white p-4 rounded-xl border border-brand-border/20 shadow-sm">
                    <div>
                      <label className="flex items-center gap-2 text-xs font-bold text-brand-secondary mb-2">
                        <CalendarClock className="w-4 h-4 text-brand-primary" />
                        Rencana {deliveryMethod === 'pickup' ? 'Ambil' : 'Kirim'}
                      </label>
                      <div className="flex gap-2">
                        <input 
                          type="date" 
                          value={deliveryDate}
                          onChange={(e) => setDeliveryDate(e.target.value)}
                          className="w-full bg-brand-background border border-brand-border/50 rounded-lg px-3 py-2 text-sm text-brand-secondary focus:outline-none focus:border-brand-primary"
                          min={tomorrow}
                        />
                        <input 
                          type="time" 
                          value={deliveryTime}
                          onChange={(e) => setDeliveryTime(e.target.value)}
                          className="w-32 bg-brand-background border border-brand-border/50 rounded-lg px-3 py-2 text-sm text-brand-secondary focus:outline-none focus:border-brand-primary"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-xs font-bold text-brand-secondary mb-2">
                        <ShoppingBag className="w-4 h-4 text-brand-primary" />
                        Metode Pembayaran
                      </label>
                      <select 
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-full bg-brand-background border border-brand-border/50 rounded-lg px-3 py-2 text-sm text-brand-secondary focus:outline-none focus:border-brand-primary"
                      >
                        <option value="Transfer Bank">Transfer Bank</option>
                        <option value="QRIS">QRIS (GoPay, OVO, Dana, ShopeePay)</option>
                        <option value="Cash (Saat Ambil/COD)">Cash (Saat Ambil/COD)</option>
                      </select>
                    </div>
                    <p className="text-[10px] text-brand-text-muted italic mt-1 leading-relaxed">
                      * Pemesanan wajib dilakukan minimal H-1 sebelum waktu pengiriman/pengambilan.
                    </p>
                  </div>

                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="bg-white border-t border-brand-border/40 shadow-[0_-10px_30px_rgba(0,0,0,0.05)] p-6 z-10">
                <div className="flex flex-col gap-2 mb-4">
                  <div className="flex items-center justify-between text-sm text-brand-text-secondary">
                    <span>Subtotal</span>
                    <span className="font-bold">{formatPrice(cartTotal)}</span>
                  </div>
                  {deliveryMethod === 'delivery' && (
                    <div className="flex items-center justify-between text-sm text-brand-text-secondary">
                      <span>Ongkos Kirim</span>
                      <span className="text-xs italic">Menyusul (Gojek/Grab)</span>
                    </div>
                  )}
                  <div className="h-[1px] w-full bg-brand-border/20 my-1"></div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-brand-text-secondary">Total Belanja</span>
                    <span className="font-heading font-black text-2xl text-brand-secondary">{formatPrice(finalTotal)}</span>
                  </div>
                </div>
                <PrimaryButton className="w-full py-4 text-sm" onClick={handleCheckout}>
                  Kirim Form Pre-Order
                </PrimaryButton>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
