import Header from "./components/Header";
import Hero from "./components/Hero";
import ModalSection from "./components/Modal";


export default function Home() {
  return (
    <main className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 bg-white">
      <Header />
      <Hero />
      <ModalSection />
    </main>
  );
}
