import { Button } from "../../components/Buttom/Button";
import { DowloadBtn } from "../../utils/btnActions";
import { languages, skills } from "../../utils/skills"


import "./Style.css"

export function About() {


    return (
        <section id="about" className="about sec-pad">
            <div className="main-container">

                <h2 className="heading-sec__mb-med">
                    <span className="heading-sec__main">Sobre</span>
                </h2>

                <div className="about__content">
                    <div className="about__content-main">
                        <h3 className="about__content-title">
                            Me conheça
                        </h3>
                        <div className="about__content-details">

                            <p className="about__content-details-para ">
                                Sou desenvolvedor Full-stack, com 2 anos de experiência em desenvolvimento Front-end e 1 ano de experiencia back-end. Possuo sólido conhecimento em JavaScript, TypeScript, HTML5, Tailwind CSS e Python. Além disso, tive experiência prévia com Kotlin, Java com SpringBoot, MySQL, PostgresSQL e Node.js.
                                Atualmente, estou aprimorando minhas habilidades em Node.js com TypeScript. Estou sempre em busca de novos desafios e oportunidades para expandir meu conhecimento e aprimorar minhas habilidades técnicas.
                            </p>

                            <p className="about__content-details-para">
                                Estou aberto a oportunidades de emprego nas quais eu possa contribuir, aprender e crescer. Se você tiver uma boa oportunidade que corresponda às minhas habilidades e experiência, não hesite em entrar em contato.
                            </p>
                        </div>
                        <Button text="Download CV" onClick={DowloadBtn} />
                    </div>
                    <div className="about__content-skills">
                        <div className="about__content-skills">
                            <h3 className="about__content-title">Skills</h3>
                            <div className="skills">
                                {skills.map((skill) => (
                                    <div key={skill} className="skills__skill">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <h3 className="about__content-title">Idiomas</h3>
                        <div className="skills">
                            {languages.map((lang) => (
                                <div key={lang} className="skills__skill">{lang}</div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}