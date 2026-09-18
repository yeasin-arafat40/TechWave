import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons"

import soundWave from "../assets/Image.png";
import gradientCircle from "../assets/Vector.png";
import microphone from "../assets/microphone.png";

const Hero = () => {
  return (
    <section className="hero">
      <img src={soundWave} alt="" className="sound-wave" />
      <div className="hero-content">
        <div className="microphone-wrapper">
          <img src={gradientCircle} alt="" className="gradient-circle" />
          <img src={microphone} alt="" className="microphone-icon" />

          <span className="new-badge">NEW</span>
        </div>
        <h1>TechWave</h1>
        <p className="hero-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, and Quas, ratione?
        </p>
        <div className="hero-buttons">
          <button className="spotify-btn">
            <FontAwesomeIcon icon={faSpotify} />
            <span>listen On Spotify</span>
          </button>

          <button className="hero-subscribe-btn">
            <span></span>
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;