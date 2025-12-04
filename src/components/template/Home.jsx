import { itemsMenu } from "../../utils/Items-menu";
import { WhatsappBtn } from "../moleculas/WhatsappBtn";
import { About } from "../organismos/About";
import Contact from "../organismos/Contact";
import { Footer } from "../organismos/Footer";
import { Hero } from "../organismos/Hero";
import { LocationLocal } from "../organismos/LocationLocal";
import { NavBar } from "../organismos/NavBar";
import { Services } from "../organismos/Services";

export const Home = () => {
  return (
    <>
      <NavBar itemsMenu={itemsMenu} />
      <Hero />
      <About />
      <Services />
      <LocationLocal />
      <Contact />
      <Footer />
      <WhatsappBtn/>
     
    </>
  );
};
