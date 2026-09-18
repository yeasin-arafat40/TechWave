
import profile from "../assets/delivery boy.png";
import linkedinIcon from "../assets/linkedin.png";
import twitterIcon from "../assets/twitter.png";
import instagramIcon from "../assets/instagram.png";
import youtubeicon from "../assets/youtube.png";

const Host = () => {
    return (
        <section className="host-section" id="host">
            <div className="host-container">
                <h2>Meet The Host</h2>
                <div className="host-content">
                    <div className="host-image">
                        <img src={profile} alt="" />
                    </div>
                    <div className="host-info">
                        <h3>Yeasin Arafat</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet sit porro numquam nobis et qui vitae, aperiam odit, architecto reprehenderit.</p>
                        <div className="social-icon">
                            <a href="#">
                                <img src={linkedinIcon} alt="Linkedin" />
                            </a>
                            <a href="#">
                                <img src={twitterIcon} alt="Twiter" />
                            </a>
                            <a href="#">
                                <img src={instagramIcon} alt="Instagram" />
                            </a>
                            <a href="#">
                                <img src={youtubeicon} alt="Youtube" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Host
