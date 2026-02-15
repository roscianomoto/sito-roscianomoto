import type { ModelData } from "@/lib/models/types";

export function Availability({ model }: { model: ModelData }) {
  const a = model.sections.availability;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
      <div style={card}>
        <h3 style={h3}>Stato</h3>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <span style={pillStrong}>{a.status}</span>
          <span style={{ opacity: 0.8 }}>{a.note}</span>
        </div>
      </div>

      {model.toggles.scarcityUrgency && (
        <div style={card}>
          <h3 style={h3}>Urgenza / scarsità</h3>
          <p style={{ margin: 0, opacity: 0.9 }}>{a.urgencyText}</p>
        </div>
      )}

      {model.toggles.gifts && (
        <div style={{ ...card, gridColumn: "1 / -1" }}>
          <h3 style={h3}>Omaggi / regali</h3>
          <p style={{ margin: 0, opacity: 0.9 }}>{a.giftsText}</p>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) { div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}

const card: React.CSSProperties = { border: "1px solid #eee", borderRadius: 16, padding: 16 };
const h3: React.CSSProperties = { marginTop: 0, marginBottom: 10, fontSize: 18 };
const pillStrong: React.CSSProperties = { border: "1px solid #111", padding: "6px 10px", borderRadius: 999, fontSize: 13, fontWeight: 800 };
const pill: React.CSSProperties = { border: "1px solid #e5e5e5", padding: "6px 10px", borderRadius: 999, fontSize: 13 };
