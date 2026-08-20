import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Capabilities from '@/components/Capabilities';
import Work from '@/components/Work';
import Gallery from '@/components/Gallery';
import Clients from '@/components/Clients';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Capabilities />
        <Work />
        <Gallery />
        <Clients />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
