import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Solutions from './components/Solutions';
import Services from './components/Services';
import Resources from './components/Resources';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <Solutions />
        <Services />
        <Resources />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
