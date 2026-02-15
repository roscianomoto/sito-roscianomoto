import type { ModelData } from "./types";

export const gsx8s: ModelData = {
  modelId: "suzuki-gsx-8s",
  slug: "suzuki-gsx-8s",
  brand: { name: "Suzuki", slug: "suzuki" },
  name: "GSX-8S",

  seo: {
    title: "Suzuki GSX-8S | Rosciano Moto",
    description:
      "Pagina modello completa: foto, video, descrizione, prezzo, promo RM24, scheda tecnica, accessori, recensioni e FAQ. Tutto in un’unica pagina.",
  },

  toggles: {
    whatsappButton: true,
    callButton: true,
    bookCallButton: true,
    whereWeAreButton: true,
    buyButton: true,
    aiAssistant: true,
    shippingCalculator: true,
    rm24Calculator: true,
    scarcityUrgency: true,
    gifts: true,
    doublePrice: true,
    prePurchaseAccessories: true,
    postPurchaseAccessoriesTeaser: true,
    sparePartsLink: true,
    socialAutopublish: false,
    reviewsEnabled: true,
    faqEnabled: true,
    trackingEnabled: true,
  },

  contacts: {
    // METTI QUI I NUMERI REALI
    whatsappPhoneE164: "+393000000000",
    callPhone: "+390000000000",
    mapsUrl: "https://maps.google.com/?q=Rosciano%20Moto",
  },

  hero: {
    tagline: "Naked moderna, equilibrata e piena di coppia: la moto giusta se vuoi divertirti davvero ogni giorno.",
    badges: ["Pagina completa (mini-sito)", "Promo RM24 (se attiva)", "Consegna anche fuori zona"],
    media: {
      images: [
        { src: "/images/gsx8s/01.jpg", alt: "Suzuki GSX-8S - vista laterale" },
        { src: "/images/gsx8s/02.jpg", alt: "Suzuki GSX-8S - dettaglio frontale" },
        { src: "/images/gsx8s/03.jpg", alt: "Suzuki GSX-8S - dettaglio serbatoio" },
      ],
      // se non hai video, lascia pure commentato
      video: { youtubeId: "dQw4w9WgXcQ", title: "Suzuki GSX-8S - video" },
    },
    price: {
      list: { currency: "EUR", amount: 0 },
      promo: { currency: "EUR", amount: 0 },
      onRoadFee: { currency: "EUR", amount: 350 },
    },
    fullDescription: [
      "La Suzuki GSX-8S è una naked di media cilindrata pensata per essere facile, divertente e sfruttabile. Non è una moto “da numeri”, è una moto che funziona davvero: in città, nel misto, nelle uscite del weekend.",
      "Qui su Rosciano Moto trovi tutto in una sola pagina: foto, video, descrizione completa, prezzo su strada, promozioni RM24, scheda tecnica, accessori consigliati e recensioni. Scorri e fai tutto senza uscire mai da qui.",
    ],
  },

  sections: {
    audienceFit: {
      idealIf: [
        "Vuoi una naked facile ma non banale",
        "Cerchi coppia e guidabilità più che cavalli “di vetrina”",
        "La usi tutti i giorni + gite nel weekend",
        "Vuoi una moto moderna e centrata come primo salto di qualità",
      ],
      notIdealIf: [
        "Vuoi una supersportiva pura",
        "Vuoi una maxi-tourer con protezione aerodinamica importante",
      ],
      typicalUse: ["Città", "Extraurbano", "Weekend", "Divertimento quotidiano"],
    },

    // OBBLIGATORIO: Analisi Rosciano Moto (come da tua regola)
    roscianoAnalysis: {
      whyWeLikeIt: [
        "È una moto equilibrata: non stanca, non spaventa, ma quando apri è presente.",
        "Posizione naturale e guida intuitiva: ci sali e capisci subito.",
        "Ottimo senso di controllo: ti fa venire voglia di usarla spesso.",
      ],
      whatToCheck: [
        "Se fai tanta tangenziale/autostrada, valuta cupolino o soluzioni comfort.",
        "Se sei alto/basso, controlliamo insieme postura e appoggio a terra.",
      ],
      pros: ["Motore sfruttabile", "Facile da guidare", "Ottimo rapporto valore/prezzo"],
      cons: ["Protezione aria limitata (naked vera)", "Per turismo lungo serve set-up accessori"],
    },

    availability: {
      status: "Disponibile",
      note: "Disponibilità variabile: scrivici su WhatsApp e te la confermiamo in tempo reale.",
      urgencyText: "Ultimi pezzi / promo a tempo (se attiva): meglio bloccarla prima che vada via.",
      giftsText: "Omaggi temporanei attivi (se presenti): chiedici cosa include questa settimana.",
    },

    rm24: {
      title: "Promo RM24",
      disclaimer:
        "Simulazione indicativa: condizioni e importi possono variare in base a disponibilità, versione e profilo cliente.",
    },

    shipping: {
      disclaimer:
        "Stima indicativa: costi e tempi reali dipendono da zona, periodo e tipo di consegna.",
    },

    techSpecs: {
      blocks: [
        { title: "Motore e prestazioni", items: ["(dati in arrivo)", "Inseriremo qui la scheda tecnica completa e verificata."] },
        { title: "Ciclistica e freni", items: ["(dati in arrivo)"] },
        { title: "Dimensioni e pesi", items: ["(dati in arrivo)"] },
        { title: "Dotazione e tecnologia", items: ["(dati in arrivo)"] },
      ],
    },

    equipment: {
      standard: ["(da completare)"],
      optional: ["(da completare)"],
    },

    accessoriesPrePurchase: [
      { title: "Protezioni (tamponi / paramotore)", note: "Consigliato se la userai in città e nel misto." },
      { title: "Cupolino / deflettori", note: "Se fai tratti veloci, migliora comfort." },
      { title: "Supporto smartphone / USB", note: "Comodo per navigazione e uso quotidiano." },
    ],

    faqs: [
      { q: "Posso comprarla con RM24 senza anticipo?", a: "Sì, quando la promo è attiva. Facciamo la simulazione e ti diciamo subito rata e condizioni." },
      { q: "Spedite fuori regione?", a: "Sì: inserisci il CAP e ottieni una stima. Poi confermiamo costo e tempi reali." },
      { q: "Serve registrarsi sul sito?", a: "No: l’acquisto parte da “Acquista” e confermi con codice SMS." },
    ],
  },
};
