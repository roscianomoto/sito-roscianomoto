export type ToggleKey =
  | "whatsappButton"
  | "callButton"
  | "bookCallButton"
  | "whereWeAreButton"
  | "buyButton"
  | "aiAssistant"
  | "shippingCalculator"
  | "rm24Calculator"
  | "scarcityUrgency"
  | "gifts"
  | "doublePrice"
  | "prePurchaseAccessories"
  | "postPurchaseAccessoriesTeaser"
  | "sparePartsLink"
  | "socialAutopublish"
  | "reviewsEnabled"
  | "faqEnabled"
  | "trackingEnabled";

export type ModelToggles = Record<ToggleKey, boolean>;

export type Money = {
  currency: "EUR";
  amount: number;
};

export type ModelMedia = {
  images: { src: string; alt: string }[];
  video?: { youtubeId: string; title: string };
};

export type ModelPrice = {
  list?: Money;
  promo?: Money;
  onRoadFee?: Money; // "messa su strada" automatica per ora come valore fisso (poi lo rendiamo regola)
};

export type ModelAccessory = {
  title: string;
  note?: string;
};

export type ModelFAQ = {
  q: string;
  a: string;
};

export type ModelData = {
  modelId: string; // stabile
  slug: string; // "suzuki-gsx-8s"
  brand: { name: string; slug: string };
  name: string;

  seo: { title: string; description: string };

  toggles: ModelToggles;

  contacts: {
    whatsappPhoneE164: string; // es "+393xxxxxxxxx"
    callPhone: string; // es "0975xxxxxx" o "+39..."
    mapsUrl: string;
  };

  hero: {
    tagline: string;
    badges: string[];
    media: ModelMedia;
    price: ModelPrice;
    fullDescription: string[]; // paragrafi
  };

  sections: {
    audienceFit: {
      idealIf: string[];
      notIdealIf: string[];
      typicalUse: string[];
    };
    roscianoAnalysis: {
      whyWeLikeIt: string[];
      whatToCheck: string[];
      pros: string[];
      cons: string[];
    };
    availability: {
      status: "Disponibile" | "Ultimi pezzi" | "In arrivo";
      note?: string;
      urgencyText?: string;
      giftsText?: string;
    };
    rm24?: {
      title: string;
      disclaimer: string;
    };
    shipping?: {
      disclaimer: string;
    };
    techSpecs: {
      blocks: { title: string; items: string[] }[];
    };
    equipment: {
      standard: string[];
      optional: string[];
    };
    accessoriesPrePurchase: ModelAccessory[];
    faqs: ModelFAQ[];
  };
};
