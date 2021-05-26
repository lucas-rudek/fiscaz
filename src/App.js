import React from "react";
import "./styles.css";
import Container from "./components/container/Container.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import { AppWrapper } from "./components/styles.js";
import Scraper from "./components/Scraper.js";

/* Matthew 6:33 - "But seek first the kingdom of God and his righteousness, 
and all these things will be added to you." */

export default function App() {
  Scraper();
  return (
    <AppWrapper>
      <Header />
      <Container />
      <Footer />
    </AppWrapper>
  );
}
