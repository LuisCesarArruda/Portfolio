import imgLinkedin from "../../assets/linkedin-dark.svg"
import imgGithub from "../../assets/github-dark.svg"

import "./Style.css"

export function SocialLinks() {

    return (
        
        <div className="home-hero__socials">
            <div className="home-hero__social">
                <a href="https://linkedin.com/in/lcarruda/" className="home-hero__social-icon-link" rel="noreferrer" target="_blank">
                    <img src={imgLinkedin} alt="Luís César Linkedin Profile" className="home-hero__social-icon"/>
                </a>
            </div>
            <div className="home-hero__social">
                <a href="https://github.com/LuisCesarArruda" className="home-hero__social-icon-link" rel="noreferrer" target="_blank">
                    <img src={imgGithub} alt="Luís César GitHub Profile" className="home-hero__social-icon"/>
                </a>
            </div>
            
        </div>
    )

}