import Head from "next/head";
import {
  Container,
  Navbar,
  Hero,
  Build,
  Engage,
  Testimonials,
  Getourapp,
  Manage,
  PreFooter,
  Footer,
} from "components";

export default function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <Hero />
        <Build />
        <Engage />
      </Container>
      <div className="bg-fadedBlack">
        <Container>
          <Manage />
        </Container>
      </div>
      <Container>
        <Testimonials />
        <Getourapp />
      </Container>
      <PreFooter />
      <Footer />
    </>
  );
}
