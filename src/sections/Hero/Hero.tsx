import { Button } from "../../components/Buttom/Button"
import { SocialLinks } from "../../components/SocialLinks/SocialLinks"
import "./Style.css"

import { scrollToProjects } from "../../utils/btnActions"


export function Hero() {
    return (
        <section id="hero" className="home-hero">
            <div className="home-hero_content">
                <h1 className="heading-primary">
                    Olá, bem vindo ao portfolio de Luís César
                </h1>
                <div className="home-hero_info">
                    <p className="text-primary">
                        Desenvolvedor full-stack
                    </p>
                </div>
                <div className="home-hero__cta">

                    <Button text="Projetos" onClick={() => scrollToProjects('projects')} />
                </div>
            </div>
            <SocialLinks />
        </section>
    )
}