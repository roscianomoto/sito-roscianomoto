import type { ModelData } from "@/lib/models/types";

export function RoscianoAnalysis({ model }: { model: ModelData }) {
  const a = model.sections.roscianoAnalysis;
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
      <div style={card}>
        <h3 style={h3}>Perché ci piace</h3>
        <ul>{a.whyWeLikeIt.map((x) => <li key={x}>{x}</li>)}</ul>
      </div>
      <div style={card}>
        <h3 style={h3}>Cosa controllare prima di sceglierla</h3>
        <ul>{a.whatToCheck.map((x) => <li key={x}>{x}</li>)}</ul>
      </div>
      <div style={{ ...card, gridColumn: "1 / -1" }}>
        <h3 style={h3}>Pro e Contro</h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div>
            <strong>Pro</strong>
            <ul>{a.pros.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
          <div>
            <strong>Contro</strong>
            <ul>{a.cons.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}

const card: React.CSSProperties = { border: "1px solid #eee", borderRadius: 16, padding: 16 };
const h3: React.CSSProperties = { marginTop: 0, marginBottom: 10, fontSize: 18 };
