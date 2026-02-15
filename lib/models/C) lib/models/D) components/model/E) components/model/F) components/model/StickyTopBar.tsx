import type { ModelData } from "@/lib/models/types";
import { formatMoney, getOnRoadTotalLabel } from "./utils";

export function StickyTopBar({ model }: { model: ModelData }) {
  const { price } = model.hero;
  const showDouble = model.toggles.doublePrice;

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(10px)",
        background: "rgba(255,255,255,0.9)",
        borderBottom: "1px solid #eee",
        padding: "10px 16px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: 12, alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: 10, alignItems: "baseline" }}>
          <strong>{model.brand.name} {model.name}</strong>
          {showDouble && (price.promo?.amount ?? 0) > 0 ? (
            <span style={{ fontSize: 13, opacity: 0.75 }}>
              {getOnRoadTotalLabel(price)}
            </span>
          ) : null}
        </div>

        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          {model.toggles.whatsappButton && (
            <a href={`https://wa.me/${model.contacts.whatsappPhoneE164.replace("+","")}`} style={btnStyle}>
              WhatsApp
            </a>
          )}
          {model.toggles.callButton && (
            <a href={`tel:${model.contacts.callPhone}`} style={btnStyleSecondary}>
              Chiama
            </a>
          )}
          {model.toggles.buyButton && (
            <a href="#acquista" style={btnStylePrimary}>
              Acquista
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

const btnStyle: React.CSSProperties = {
  padding: "8px 10px",
  borderRadius: 10,
  border: "1px solid #ddd",
  textDecoration: "none",
  fontSize: 14,
};

const btnStyleSecondary: React.CSSProperties = {
  ...btnStyle,
};

const btnStylePrimary: React.CSSProperties = {
  ...btnStyle,
  border: "1px solid #111",
  fontWeight: 700,
};
