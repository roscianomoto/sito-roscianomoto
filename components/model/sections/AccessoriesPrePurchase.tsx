import type { ModelData } from "@/lib/models/types";

export function AccessoriesPrePurchase({ model }: { model: ModelData }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
      {model.sections.accessoriesPrePurchase.map((a) => (
        <div key={a.title} style={card}>
          <h3 style={h3}>{a.title}</h3>
          {a.note ? <p style={{ margin: 0, opacity: 0.85 }}>{a.note}</p> : null}
        </div>
      ))}

      <style>{`
        @media (max-width: 900px) { div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}

const card: React.CSSProperties = { border: "1px solid #eee", borderRadius: 16, padding: 16 };
const h3: React.CSSProperties = { marginTop: 0, marginBottom: 8, fontSize: 18 };
