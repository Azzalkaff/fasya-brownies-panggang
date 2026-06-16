export interface ShippingZone {
  id: string;
  name: string;
  price: number;
}

export const shippingZones: ShippingZone[] = [
  { id: "zone-1", name: "Kecamatan Pusat (Dekat Outlet)", price: 10000 },
  { id: "zone-2", name: "Kecamatan Utara", price: 15000 },
  { id: "zone-3", name: "Kecamatan Selatan", price: 15000 },
  { id: "zone-4", name: "Kecamatan Barat", price: 18000 },
  { id: "zone-5", name: "Kecamatan Timur", price: 18000 },
  { id: "zone-6", name: "Luar Kota / Ekspedisi Reguler", price: 25000 },
];
