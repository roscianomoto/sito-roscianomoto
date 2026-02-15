import type { ModelData } from "@/lib/models/types";

export function Reviews({ model }: { model: ModelData }) {
  // Placeholder: qui poi colleghiamo DB + moderazione.
  // Regola: nessuna data visibile.
  return (
    <div style={{ border: "1px solid #eee", borderRadius: 16, padding: 16 }}>
      <p style={{ marginTop: 0 }}>
        Qui inseriremo le recensioni del modello (<strong>legate al ModelID stabile: {model.modelId}</strong>), con stelle obbligatorie,
        <strong> senza date visibili</strong> e pubblicazione solo dopo moderazione Rosciano Moto.
      </p>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <button style={btn}>Scrivi una recensione</button>
        <button style={btnSecondary}>Vedi tutte le recensioni (Hub)</button>
      </div>
    </div>
  );
}

const btn: React.CSSProperties = { padding: "10px 12px", borderRadius: 12, border: "1px solid #111", background: "#fff", fontWeight: 800, cursor: "pointer" };
const btnSecondary: React.CSSProperties = { padding: "10px 12px", borderRadius: 12, border: "1px solid #ddd", background: "#fff", fontWeight: 700, cursor: "pointer" };
