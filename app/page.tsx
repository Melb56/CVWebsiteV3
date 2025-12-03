
import './styles/globals.css';
import './styles/button.css';
import './styles/linkedin.css';
import Header from './components/Header';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './components/Footer';
import Arrow from './components/Arrow';


export default function Home() {
  return (
  
    <main className="bg-custom">
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      <Arrow/>
      <Footer/>
    </main>
  );
}
