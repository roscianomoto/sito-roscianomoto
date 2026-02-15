import type { ModelData } from "@/lib/models/types";

export function TechSpecs({ model }: { model: ModelData }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
      {model.sections.techSpecs.blocks.map((b) => (
        <div key={b.title} style={card}>
          <h3 style={h3}>{b.title}</h3>
          <ul>{b.items.map((x) => <li key={x}>{x}</li>)}</ul>
        </div>
      ))}

      <style>{`
        @media (max-width: 900px) { div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}

const card: React.CSSProperties = { border: "1px solid #eee", borderRadius: 16, padding: 16 };
const h3: React.CSSProperties = { marginTop: 0, marginBottom: 10, fontSize: 18 };
