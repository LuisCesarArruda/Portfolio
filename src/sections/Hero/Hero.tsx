import { SocialLinks } from "../../components/SocialLinks/SocialLinks"
import "./Style.css"

export function Hero(){
    return(
        <section className="home-hero">
            <div className="home-hero_content">
                <h1 className="heading-primary">Olá, bem vindo ao portfolio de Luís César</h1>
                <div className="home-hero_info">
                    <p className="text-primary">
                        Desenvolvedor full-stack
                    </p>
                    {/* botao */}
                </div>
            </div>
            <SocialLinks/>
        </section>
    )
}