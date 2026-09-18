import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock,} from "@fortawesome/free-solid-svg-icons";


const FeatureEpisode = () => {
    return (
        <section className="episodes-section" id="episodes">
            <div className="episodes-container">
                <h2>Feature Episodes</h2>

                <div className="episodes-grid">

                    <div className="episode-card">
                        <div className="episode-video">
                            <iframe
                                className="full-vedio"
                                src="https://www.youtube.com/embed/gBUFh1HIbgk"
                                title="Episode 01"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="episode-content">
                            <h3>The Feature of Ai in Everyday Life</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat!</p>
                            <div className="episode-meta">
                                <span>
                                    <FontAwesomeIcon icon={faClock} className="clock-icon" />
                                    49min
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="episode-card">
                        <div className="episode-video">
                            <iframe
                                className="full-vedio"
                                src="https://www.youtube.com/embed/xpHmIfpaqlA"
                                title="Episode 02"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="episode-content">
                            <h3>Building Better habits for Remote Work</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat!</p>
                            <div className="episode-meta">
                                <span>
                                    <FontAwesomeIcon icon={faClock} className="clock-icon" />
                                    13min
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="episode-card">
                        <div className="episode-video">
                            <iframe
                                className="full-vedio"
                                src="https://www.youtube.com/embed/_9u3iHMl9UM"
                                title="Episode 03"
                                allowFullScreen >
                            </iframe>
                        </div>
                        <div className="episode-content">
                            <h3>Career Growth in tech :A roadmap </h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat!</p>
                            <div className="episode-meta">
                                <span>
                                    <FontAwesomeIcon icon={faClock} className="clock-icon" />
                                    14min
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeatureEpisode
