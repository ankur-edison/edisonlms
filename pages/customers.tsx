import React from "react";
import {
  Container,
  Navbar,
  PreFooter,
  Footer,
  CustomersHero,
  CustomersList,
  CustomerFeatures,
} from "components";

function customers() {
  return (
    <>
      <Navbar />
      <Container>
        <CustomersHero />
        <CustomersList />
        <CustomerFeatures />
      </Container>
      <PreFooter />
      <Footer />
    </>
  );
}

export default customers;
