"use client";

import type { ModelData } from "@/lib/models/types";
import { useMemo, useState } from "react";
import { formatMoney, getOnRoadTotalLabel } from "./utils";

export function HeroFullScreen({ model }: { model: ModelData }) {
  const media = model.hero.media;
  const [activeIndex, setActiveIndex] = useState(0);

  const activeImage = useMemo(() => media.images[activeIndex] ?? media.images[0], [media.images, activeIndex]);

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateRows: "1fr auto",
        borderBottom: "1px solid #eee",
      }}
    >
      {/* TOP AREA: media left / panel right */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "3fr 2fr",
          gap: 18,
          padding: 16,
          maxWidth: 1100,
          margin: "0 auto",
          width: "100%",
          alignItems: "stretch",
        }}
      >
        {/* LEFT: Media */}
        <div style={{ borderRadius: 18, overflow: "hidden", border: "1px solid #eee", background: "#fafafa" }}>
          <div style={{ position: "relative", width: "100%", aspectRatio: "16/10" }}>
            {/* Primary media: image */}
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />

            {/* Optional video badge */}
            {media.video ? (
              <a
                href={`https://www.youtube.com/watch?v=${media.video.youtubeId}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  position: "absolute",
                  left: 12,
                  bottom: 12,
                  padding: "10px 12px",
                  borderRadius: 14,
                  background: "rgba(0,0,0,0.65)",
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: 14,
                }}
              >
                ▶ Guarda il video
              </a>
            ) : null}
          </div>

          {/* Thumbs */}
          <div style={{ display: "flex", gap: 10, padding: 12, overflowX: "auto" }}>
            {media.images.map((img, idx) => (
              <button
                key={img.src}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Immagine ${idx + 1}`}
                style={{
                  border: idx === activeIndex ? "2px solid #111" : "1px solid #ddd",
                  borderRadius: 12,
                  padding: 0,
                  background: "#fff",
                  cursor: "pointer",
                  flex: "0 0 auto",
                }}
              >
                <img src={img.src} alt={img.alt} style={{ width: 88, height: 56, objectFit: "cover", borderRadius: 10, display: "block" }} />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: Price + CTAs */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div>
            <h1 style={{ fontSize: 34, margin: 0 }}>{model.brand.name} {model.name}</h1>
            <p style={{ marginTop: 8, opacity: 0.85 }}>{model.hero.tagline}</p>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {model.hero.badges.map((b) => (
              <span key={b} style={{ fontSize: 12, border: "1px solid #e5e5e5", padding: "6px 10px", borderRadius: 999 }}>
                {b}
              </span>
            ))}
          </div>

          {/* Pricing */}
          <div style={{ border: "1px solid #eee", borderRadius: 16, padding: 14 }}>
            {model.toggles.doublePrice ? (
              <>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <span style={{ opacity: 0.75 }}>Listino</span>
                  <strong>{formatMoney(model.hero.price.list)}</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10, marginTop: 8 }}>
                  <span style={{ opacity: 0.75 }}>Promo</span>
                  <strong>{formatMoney(model.hero.price.promo)}</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10, marginTop: 10, paddingTop: 10, borderTop: "1px dashed #ddd" }}>
                  <span style={{ opacity: 0.75 }}>Totale (con messa su strada)</span>
                  <strong>{getOnRoadTotalLabel(model.hero.price)}</strong>
                </div>
              </>
            ) : (
              <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                <span style={{ opacity: 0.75 }}>Prezzo</span>
                <strong>{getOnRoadTotalLabel(model.hero.price)}</strong>
              </div>
            )}

            <p style={{ marginTop: 10, fontSize: 12, opacity: 0.75 }}>
              *Importi demo: inseriamo i valori reali quando mi dai listino/promo ufficiali.
            </p>
          </div>

          {/* CTAs */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {model.toggles.whatsappButton && (
              <a href={`https://wa.me/${model.contacts.whatsappPhoneE164.replace("+","")}`} style={cta}>
                WhatsApp
              </a>
            )}
            {model.toggles.callButton && (
              <a href={`tel:${model.contacts.callPhone}`} style={cta}>
                Chiama
              </a>
            )}
            {model.toggles.bookCallButton && (
              <a href="#dove-siamo" style={ctaSecondary}>
                Prenota telefonata
              </a>
            )}
            {model.toggles.buyButton && (
              <a href="#acquista" style={ctaPrimary}>
                Acquista questa moto
              </a>
            )}
          </div>

          {model.toggles.aiAssistant ? (
            <div style={{ border: "1px solid #eee", borderRadius: 16, padding: 14 }}>
              <strong>Assistente Rosciano Moto</strong>
              <p style={{ marginTop: 6, marginBottom: 0, opacity: 0.85 }}>
                “Dimmi cosa cerchi e ti dico se la GSX-8S è quella giusta.” (placeholder visivo: attiviamo dopo)
              </p>
            </div>
          ) : null}
        </div>
      </div>

      {/* BOTTOM AREA: full description inside hero */}
      <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%", padding: "0 16px 20px" }}>
        <div style={{ border: "1px solid #eee", borderRadius: 18, padding: 16 }}>
          <h2 style={{ fontSize: 20, marginTop: 0 }}>Descrizione completa</h2>
          {model.hero.fullDescription.map((p, i) => (
            <p key={i} style={{ marginTop: 10, marginBottom: 0, opacity: 0.9 }}>
              {p}
            </p>
          ))}
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 1023px) {
          section > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

const cta: React.CSSProperties = {
  textAlign: "center",
  padding: "12px 10px",
  borderRadius: 14,
  border: "1px solid #ddd",
  textDecoration: "none",
  fontWeight: 700,
};

const ctaSecondary: React.CSSProperties = {
  ...cta,
  border: "1px solid #ddd",
};

const ctaPrimary: React.CSSProperties = {
  ...cta,
  border: "1px solid #111",
};
