
import audioIcon from "../assets/headPhones.png";
import mobileIcon from "../assets/phone.png";
import globalIcon from "../assets/globe.png";
import InterviewsIcon from "../assets/zap-fast.png";
import resourcesIcon from "../assets/book-open.png";



const WhyChoose = () => {
    return (
        <section className="why-section">
            <div className="why-container">
                <h2>Why Choose TechWave</h2>

                <div className="features-grid">
                    <div className="feature-card premium-card">
                        <img src={audioIcon} alt="" className="feature-icon" />
                        <h3>Premium Audio Quality</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit ea est velit cumque, magnam deleniti modi aspernatur eius dolor tempore?
                        </p>
                    </div>
                    <div className="feature-card mobile-card">
                        <img src={mobileIcon} alt="" className="feature-icon" />
                        <div>
                            <h3>Mobile Friendly</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, inventore.
                            </p>
                        </div>
                    </div>
                    <div className="feature-card global-card">
                        <img src={globalIcon} alt="" className="feature-icon" />
                        <div>
                            <h3>Global Community</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, optio!
                            </p>
                        </div>
                    </div>
                    <div className="feature-card interview-card">
                        <img src={InterviewsIcon} alt="" className="feature-icon" />
                        <div>
                            <h3>Exclusive Interviews</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor magni obcaecati libero, sunt rerum velit voluptatem incidunt. Et, cum libero.
                            </p>

                        </div>
                    </div>
                    <div className="feature-card resources-card">
                        <img src={resourcesIcon} alt="" className="feature-icon" />
                        <div>
                            <h3>Rich Resources</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, provident.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChoose
