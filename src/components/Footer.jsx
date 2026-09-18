import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSpotify,faYoutube,faTwitter,} from "@fortawesome/free-brands-svg-icons";

import footerWave from "../assets/Image.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-wave">
                <img src={footerWave} alt="" className="footer-wave-svg"/>
            </div>

            <div className="footer-content">
                <h2>
                    Tech<span>Wave</span>
                </h2>

                <div className="footer-platforms">
                    <a href="#">
                        <FontAwesomeIcon icon={faSpotify} />
                        <span>Spotify</span>
                    </a>

                    <a href="#">
                        <span className="apple-icon"></span>
                        <span>Apple Podcasts</span>
                    </a>

                    <a href="#">
                        <FontAwesomeIcon icon={faYoutube} />
                        <span>YouTube</span>
                    </a>

                    <a href="#">
                        <FontAwesomeIcon icon={faTwitter} />
                        <span>Twitter</span>
                    </a>
                </div>

                <p className="footer-copyright">
                    © 2026 TechWave Podcast. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
