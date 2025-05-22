import linkedinIco from "../../assets/linkedin-white-ico.png"
import gitHubIco from "../../assets/github-white-ico.png"
import emailIco from "../../assets/icons8-gmail.png"
import "./Style.css"

export function Footer(){
    return(
        <footer id="footer" className="main-footer">
            <div className="main-container">
                <div className="main-footer__upper">
                    <div className="main-footer__row main-footer__row-1">
                        <h2>
                            <span>Social</span>
                        </h2>
                        <div className="main-footer__social-cont">
                            <a href="https://github.com/LuisCesarArruda" target="_blank" rel="noreferrer">
                                <img src={gitHubIco} alt="Icone do linkedin" className="main-footer__icon" />
                            </a>
                            <a href="https://linkedin.com/in/lcarruda/" target="_blank" rel="noreferrer">
                                <img src={linkedinIco} alt="Icone do linkedin" className="main-footer__icon" />
                            </a>
                            <a href="mailto:lc.albuquerque@outlook.com" target="_blank" rel="noreferrer">
                                <img src={emailIco} alt="Icone do linkedin" className="main-footer__icon" />
                            </a>
                        </div>
                        
                    </div>
                    <div className="main-footer__row main-footer__row-2">
                        <h2>
                            Luís César Albuquerque Arruda
                        </h2>
                        <p>
                            Sou um desenvolvedor full-stack júnior procurando uma posição em desenvolvimento de software.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}