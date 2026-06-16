export const SITE_CONFIG = {
  name: "Fasya Brownies",
  description: "Brownies panggang premium dengan cita rasa cokelat yang kaya.",
  phone: "6281271828219", // Example number
  address: "Jl. Mars Barat II no 1",
  mapsLink: "https://www.google.com/maps/place/Fasya+Brownies+Panggang/@-6.9463286,107.6632653,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgICm7r_eMQ!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAPNQkAFY6aXIF3-D3HZdcVvO5s1n8meFnRmfWN7ouZa_QpPdHfo85rGleVMQCoUfT808mjOzlQvpH_yZdvJjmcnXlPruwUjdR1-_VjU9xjJpVCxgb0TQIYfZcGsQBaMhU0hU1InDsrk%3Dw107-h86-k-no!7i1280!8i1023!4m7!3m6!1s0x2e68e99109d76d7b:0x1a72dd5c657b8ebf!8m2!3d-6.946232!4d107.6632789!10e5!16s%2Fg%2F11gqq68tft?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D",
  workingHours: "Senin - Minggu: 08.00 - 20.00",
  instagram: "https://instagram.com/fasya.browniespanggang",
  marketplace: "https://shopee.co.id/fasyabrownies",
};

export function getWhatsAppLink(message?: string) {
  const defaultMessage = "Halo Fasya Brownies, saya ingin memesan brownies panggang.";
  const encodedMessage = encodeURIComponent(message || defaultMessage);
  return `https://wa.me/${SITE_CONFIG.phone}?text=${encodedMessage}`;
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
}
