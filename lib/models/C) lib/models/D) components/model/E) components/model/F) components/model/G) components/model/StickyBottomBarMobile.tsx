import type { ModelData } from "@/lib/models/types";

export function StickyBottomBarMobile({ model }: { model: ModelData }) {
  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 60,
        borderTop: "1px solid #eee",
        background: "rgba(255,255,255,0.95)",
        padding: 10,
        display: "flex",
        gap: 10,
        justifyContent: "center",
      }}
    >
      <div style={{ width: "min(1100px, 100%)", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
        {model.toggles.buyButton ? (
          <a href="#acquista" style={ctaPrimary}>Acquista</a>
        ) : (
          <span />
        )}
        {model.toggles.whatsappButton ? (
          <a href={`https://wa.me/${model.contacts.whatsappPhoneE164.replace("+","")}`} style={cta}>WhatsApp</a>
        ) : (
          <span />
        )}
        {model.toggles.callButton ? (
          <a href={`tel:${model.contacts.callPhone}`} style={cta}>Chiama</a>
        ) : (
          <span />
        )}
      </div>

      <style>{`
        @media (min-width: 1024px) {
          div[style*="position: fixed"] { display: none !important; }
        }
      `}</style>
    </div>
  );
}

const cta: React.CSSProperties = {
  textAlign: "center",
  padding: "12px 10px",
  borderRadius: 12,
  border: "1px solid #ddd",
  textDecoration: "none",
  fontWeight: 600,
};

const ctaPrimary: React.CSSProperties = {
  ...cta,
  border: "1px solid #111",
  fontWeight: 800,
};
