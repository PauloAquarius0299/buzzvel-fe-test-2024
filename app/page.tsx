import Comments from "./components/Comments";
import Desktop from "./components/Desktop";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ModalSection from "./components/Modal";
import Services from "./components/Services";


export default function Home() {
  return (
    <main className=" bg-white">
      <Header />
      <Hero />
      <ModalSection />
      <Services />
      <Features />
      <Comments />
      <Desktop />
      <Footer />
    </main>
  );
}
