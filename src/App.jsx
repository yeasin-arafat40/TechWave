import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import "./App.css";
import About from "./components/About";
import WhyChoose from "./components/WhyChoose";
import FeatureEpisode from "./components/FeatureEpisode";
import Host from "./components/Host";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">

      <Navbar />

      <main>
        <Hero />
        <About />
        <WhyChoose/>
        <FeatureEpisode />
        <Host />
      </main>
      <Footer />


    </div>
  );
}

export default App;