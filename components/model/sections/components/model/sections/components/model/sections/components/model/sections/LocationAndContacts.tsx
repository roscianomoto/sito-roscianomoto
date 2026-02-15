import type { ModelData } from "@/lib/models/types";

export function LocationAndContacts({ model }: { model: ModelData }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
      <div style={card}>
        <h3 style={h3}>Contatti rapidi</h3>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {model.toggles.whatsappButton && (
            <a style={btn} href={`https://wa.me/${model.contacts.whatsappPhoneE164.replace("+","")}`}>WhatsApp</a>
          )}
          {model.toggles.callButton && (
            <a style={btnSecondary} href={`tel:${model.contacts.callPhone}`}>Chiama</a>
          )}
          {model.toggles.whereWeAreButton && (
            <a style={btnSecondary} href={model.contacts.mapsUrl} target="_blank" rel="noreferrer">Dove siamo</a>
          )}
        </div>
      </div>

      <div style={card}>
        <h3 style={h3}>Rosciano Moto</h3>
        <p style={{ margin: 0, opacity: 0.9 }}>
          Vieni a vederla dal vivo: una foto non rende mai come dal vivo. Se vuoi, te la facciamo vedere in videochiamata.
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) { div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}

const card: React.CSSProperties = { border: "1px solid #eee", borderRadius: 16, padding: 16 };
const h3: React.CSSProperties = { marginTop: 0, marginBottom: 10, fontSize: 18 };
const btn: React.CSSProperties = { textDecoration: "none", padding: "10px 12px", borderRadius: 12, border: "1px solid #111", fontWeight: 800 };
const btnSecondary: React.CSSProperties = { textDecoration: "none", padding: "10px 12px", borderRadius: 12, border: "1px solid #ddd", fontWeight: 700 };
