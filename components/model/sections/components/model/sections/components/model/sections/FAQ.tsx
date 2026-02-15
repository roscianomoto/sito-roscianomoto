import type { ModelData } from "@/lib/models/types";

export function FAQ({ model }: { model: ModelData }) {
  return (
    <div style={{ display: "grid", gap: 10 }}>
      {model.sections.faqs.map((f) => (
        <details key={f.q} style={box}>
          <summary style={{ fontWeight: 800, cursor: "pointer" }}>{f.q}</summary>
          <p style={{ marginTop: 8, marginBottom: 0, opacity: 0.9 }}>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

const box: React.CSSProperties = { border: "1px solid #eee", borderRadius: 14, padding: 12 };
