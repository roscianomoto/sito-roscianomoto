"use client";

import type { ModelData } from "@/lib/models/types";
import { useMemo, useState } from "react";
import { getOnRoadTotalLabel } from "../utils";

export function PricingAndRM24({ model }: { model: ModelData }) {
  const price = model.hero.price;

  // RM24 simple demo calculator (poi lo rendiamo “vero”)
  const [advance, setAdvance] = useState(0);
  const [months, setMonths] = useState(24);

  const base = useMemo(() => {
    const promo = price.promo?.amount ?? 0;
    const list = price.list?.amount ?? 0;
    return promo > 0 ? promo : list;
  }, [price]);

  const onRoadFee = price.onRoadFee?.amount ?? 0;

  const monthly = useMemo(() => {
    if (!model.toggles.rm24Calculator) return 0;
    const total = Math.max(0, base + onRoadFee - advance);
    if (!months) return 0;
    return Math.round((total / months) * 100) / 100;
  }, [advance, months, base, onRoadFee, model.toggles.rm24Calculator]);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
      <div style={card}>
        <h3 style={h3}>Prezzo su strada</h3>
        <p style={{ margin: 0, opacity: 0.9 }}>
          Totale indicativo (promo/listino + messa su strada): <strong>{getOnRoadTotalLabel(price)}</strong>
        </p>
        <p style={{ marginTop: 10, fontSize: 12, opacity: 0.7 }}>
          *Demo: inseriamo i valori reali quando mi dai listino/promo.
        </p>
      </div>

      {model.toggles.rm24Calculator ? (
        <div style={card}>
          <h3 style={h3}>{model.sections.rm24?.title ?? "RM24"}</h3>

          <label style={label}>Anticipo (€)</label>
          <input
            type="number"
            value={advance}
            min={0}
            onChange={(e) => setAdvance(Number(e.target.value || 0))}
            style={input}
          />

          <label style={label}>Durata (mesi)</label>
          <select value={months} onChange={(e) => setMonths(Number(e.target.value))} style={input}>
            {[12, 24, 36, 48].map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>

          <div style={{ marginTop: 12, paddingTop: 12, borderTop: "1px dashed #ddd" }}>
            <div style={{ fontSize: 14, opacity: 0.85 }}>Rata stimata</div>
            <div style={{ fontSize: 28, fontWeight: 900 }}>
              {monthly > 0 ? `${monthly.toLocaleString("it-IT")} € / mese` : "—"}
            </div>
            <p style={{ marginTop: 8, fontSize: 12, opacity: 0.7 }}>{model.sections.rm24?.disclaimer}</p>
          </div>

          <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
            <a href={`https://wa.me/${model.contacts.whatsappPhoneE164.replace("+","")}`} style={cta}>
              Mandami il preventivo su WhatsApp
            </a>
          </div>
        </div>
      ) : null}

      <style>{`
        @media (max-width: 900px) { div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}

const card: React.CSSProperties = { border: "1px solid #eee", borderRadius: 16, padding: 16 };
const h3: React.CSSProperties = { marginTop: 0, marginBottom: 10, fontSize: 18 };
const label: React.CSSProperties = { display: "block", marginTop: 10, fontSize: 13, opacity: 0.8 };
const input: React.CSSProperties = { width: "100%", marginTop: 6, padding: "10px 12px", borderRadius: 12, border: "1px solid #ddd" };
const cta: React.CSSProperties = { display: "inline-block", textDecoration: "none", padding: "10px 12px", borderRadius: 12, border: "1px solid #111", fontWeight: 800 };
