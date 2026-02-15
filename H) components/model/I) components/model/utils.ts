import type { Money, ModelPrice } from "@/lib/models/types";

export function formatMoney(m?: Money) {
  if (!m || !m.amount) return "—";
  const v = new Intl.NumberFormat("it-IT", { style: "currency", currency: m.currency }).format(m.amount);
  return v;
}

export function getOnRoadTotalLabel(price: ModelPrice) {
  const base = (price.promo?.amount && price.promo.amount > 0) ? price.promo.amount : (price.list?.amount ?? 0);
  const fee = price.onRoadFee?.amount ?? 0;
  if (!base) return "—";
  return new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(base + fee);
}
