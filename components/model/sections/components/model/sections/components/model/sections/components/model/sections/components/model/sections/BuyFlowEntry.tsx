import type { ModelData } from "@/lib/models/types";

export function BuyFlowEntry({ model }: { model: ModelData }) {
  return (
    <div style={{ border: "1px solid #eee", borderRadius: 16, padding: 16 }}>
      <p style={{ marginTop: 0, opacity: 0.9 }}>
        L’acquisto parte solo da qui. (Ora è placeholder: poi facciamo overlay/step reali con SMS e upload documenti.)
      </p>

      <ol style={{ opacity: 0.9 }}>
        <li>Scelta formula (RM24 / contanti / finanziamento / permuta)</li>
        <li>Totale: moto + messa su strada + accessori + spedizione</li>
        <li>Conferma via codice SMS</li>
        <li>Upload documenti</li>
        <li>Invio automatico a Rosciano Moto</li>
      </ol>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <a href={`https://wa.me/${model.contacts.whatsappPhoneE164.replace("+","")}`} style={btnPrimary}>
          Avvia acquisto su WhatsApp (temporaneo)
        </a>
        <a href={`tel:${model.contacts.callPhone}`} style={btnSecondary}>
          Preferisco chiamare
        </a>
      </div>
    </div>
  );
}

const btnPrimary: React.CSSProperties = { textDecoration: "none", padding: "12px 14px", borderRadius: 14, border: "1px solid #111", fontWeight: 900 };
const btnSecondary: React.CSSProperties = { textDecoration: "none", padding: "12px 14px", borderRadius: 14, border: "1px solid #ddd", fontWeight: 800 };
