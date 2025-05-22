import { ProjectCard } from "../../components/ProjectCard/ProjectCard"
import "./Style.css"

export function Projects() {
    return (
        <section id="projects" className="projects">

            <div className="main-container">
                <h2 className="heading-sec__mb-bg">
                    <span className="heading-sec__main">
                        projetos
                    </span>
                    <span className="heading-sec__sub">
                        Meus melhores projetos
                    </span>
                </h2>

                <div className="projects__content">
                    <ProjectCard
                        imageUrl="https://pm1.aminoapps.com/6609/2611d86cede59895f32ffbd9f8d9fa205af140c0_hq.jpg"
                        title="waddles"
                        description="é o Waddles porra"
                        GitLink="https://github.com/LuisCesarArruda"
                    />
                    
                </div>
            </div>
        </section>
    )
}