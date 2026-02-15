"use client";

import type { ModelData } from "@/lib/models/types";
import { useMemo, useState } from "react";

export function ShippingCalculator({ model }: { model: ModelData }) {
  const [cap, setCap] = useState("");

  const estimate = useMemo(() => {
    const clean = cap.trim();
    if (clean.length !== 5) return null;
    // Demo rules (poi lo rendiamo reale): sud/centro/nord per fasce
    const n = Number(clean);
    if (Number.isNaN(n)) return null;

    let cost = 180;
    if (n >= 10000 && n <= 39999) cost = 260; // centro-nord demo
    if (n >= 40000) cost = 320; // nord demo

    return { cost, days: cost <= 200 ? "2–4" : "3–6" };
  }, [cap]);

  return (
    <div style={{ border: "1px solid #eee", borderRadius: 16, padding: 16 }}>
      <h3 style={{ marginTop: 0, fontSize: 18 }}>Calcola spedizione con CAP</h3>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
        <input
          value={cap}
          onChange={(e) => setCap(e.target.value)}
          placeholder="Inserisci CAP (5 cifre)"
          inputMode="numeric"
          style={{ padding: "10px 12px", borderRadius: 12, border: "1px solid #ddd", minWidth: 220 }}
        />
        <a href={`https://wa.me/${model.contacts.whatsappPhoneE164.replace("+","")}`} style={cta}>
          Chiedi conferma su WhatsApp
        </a>
      </div>

      <div style={{ marginTop: 12 }}>
        {estimate ? (
          <div>
            <strong>Stima:</strong> {estimate.cost} € • <strong>Tempi:</strong> {estimate.days} giorni
          </div>
        ) : (
          <div style={{ opacity: 0.8 }}>Inserisci un CAP valido per vedere una stima.</div>
        )}
      </div>

      <p style={{ marginTop: 10, fontSize: 12, opacity: 0.7 }}>
        {model.sections.shipping?.disclaimer}
      </p>
    </div>
  );
}

const cta: React.CSSProperties = { textDecoration: "none", padding: "10px 12px", borderRadius: 12, border: "1px solid #111", fontWeight: 800 };
