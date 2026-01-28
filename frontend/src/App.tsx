import { Navbar, Footer, Background } from './components/layout';
import { Hero, Stats, Services, About, Products, Gallery, Contact, Map } from './components/sections';
import { FloatingContact } from './components/ui';

function App() {
  return (
    <>
      <Background />
      <Navbar />
      
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <Products />
        <Gallery />
        <Contact />
        <Map />
      </main>
      
      <FloatingContact />
      <Footer />
    </>
  );
}

export default App;
