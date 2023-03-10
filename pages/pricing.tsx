import React from "react";
import {
  Container,
  PricingTabs,
  Navbar,
  Footer,
  PreFooter,
  PricingDropdown,
  Enterprise,
} from "components";
import useMediaMatch from "@/hooks/useMediaMatch";

function pricing() {
  const match = useMediaMatch("576px");
  return (
    <div>
      <Navbar />
      <Container>{match ? <PricingDropdown /> : <PricingTabs />}</Container>
      <div className="bg-lighterBlue">
        <Container>
          <Enterprise />
        </Container>
      </div>
      <PreFooter />
      <Footer />
    </div>
  );
}

export default pricing;
