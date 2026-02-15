import type { ModelData } from "@/lib/models/types";
import { StickyTopBar } from "./StickyTopBar";
import { StickyBottomBarMobile } from "./StickyBottomBarMobile";
import { HeroFullScreen } from "./HeroFullScreen";
import { Section } from "./Section";
import { AudienceFit } from "./sections/AudienceFit";
import { RoscianoAnalysis } from "./sections/RoscianoAnalysis";
import { Availability } from "./sections/Availability";
import { PricingAndRM24 } from "./sections/PricingAndRM24";
import { ShippingCalculator } from "./sections/ShippingCalculator";
import { TechSpecs } from "./sections/TechSpecs";
import { Equipment } from "./sections/Equipment";
import { AccessoriesPrePurchase } from "./sections/AccessoriesPrePurchase";
import { Reviews } from "./sections/Reviews";
import { FAQ } from "./sections/FAQ";
import { LocationAndContacts } from "./sections/LocationAndContacts";
import { BuyFlowEntry } from "./sections/BuyFlowEntry";
import { MyGarageTeaser } from "./sections/MyGarageTeaser";

export function ModelPage({ model }: { model: ModelData }) {
  return (
    <>
      <StickyTopBar model={model} />
      <main>
        <HeroFullScreen model={model} />

        <Section id="a-chi-va-bene" title="A chi la consigliamo">
          <AudienceFit model={model} />
        </Section>

        <Section id="analisi-rosciano-moto" title="Analisi Rosciano Moto">
          <RoscianoAnalysis model={model} />
        </Section>

        <Section id="disponibilita" title="Disponibilità">
          <Availability model={model} />
        </Section>

        <Section id="prezzo-e-promo" title="Prezzo e promozioni">
          <PricingAndRM24 model={model} />
        </Section>

        {model.toggles.shippingCalculator && (
          <Section id="spedizione" title="Spedizione e consegna">
            <ShippingCalculator model={model} />
          </Section>
        )}

        <Section id="scheda-tecnica" title="Scheda tecnica">
          <TechSpecs model={model} />
        </Section>

        <Section id="dotazioni" title="Dotazione e optional">
          <Equipment model={model} />
        </Section>

        {model.toggles.prePurchaseAccessories && (
          <Section id="accessori" title="Accessori consigliati prima dell’acquisto">
            <AccessoriesPrePurchase model={model} />
          </Section>
        )}

        {model.toggles.reviewsEnabled && (
          <Section id="recensioni" title="Recensioni">
            <Reviews model={model} />
          </Section>
        )}

        {model.toggles.faqEnabled && (
          <Section id="faq" title="FAQ">
            <FAQ model={model} />
          </Section>
        )}

        <Section id="dove-siamo" title="Dove siamo e contatti">
          <LocationAndContacts model={model} />
        </Section>

        <Section id="acquista" title="Acquista questa moto">
          <BuyFlowEntry model={model} />
        </Section>

        {model.toggles.postPurchaseAccessoriesTeaser && (
          <Section id="mio-garage" title="Dopo l’acquisto: Il Mio Garage">
            <MyGarageTeaser />
          </Section>
        )}
      </main>

      <StickyBottomBarMobile model={model} />
    </>
  );
}
