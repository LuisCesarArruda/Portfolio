import { ProjectCard } from "../../components/ProjectCard/ProjectCard"
import Projeto1 from "../../assets/Projetos/Projeto1.png"
import Projeto2 from "../../assets/Projetos/Projeto2.png"
import Projeto3 from "../../assets/Projetos/Projeto3.png"
import Projeto4 from "../../assets/Projetos/Projeto4.png"

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
                        imageUrl={Projeto4}
                        title="Projeto de Lembretes/Notas utilizando IA de transcrição"
                        description="Projeto feito no NLW da Rocketseat feito com Typescript, React,taillwind Css e Vite"
                        GitLink="https://github.com/LuisCesarArruda/Server-node"
                    />
                    <ProjectCard
                        imageUrl={Projeto2}
                        title="Clone do Spotify"
                        description="Projeto em Vite com react para clonar o front-end do spotify"
                        GitLink="https://github.com/LuisCesarArruda/SpotifyClone"
                    />
                    <ProjectCard
                        imageUrl={Projeto1}
                        title="Front-end do projeto Fala Torcedor "
                        description="Front-end do projeto voltado para cadastro e time e torcedores para ter uma ideia de quantas pessoas torcem para cada time, sendo eles de serie A,B e C tendo filtros das serie feito em Vite com React"
                        GitLink="https://github.com/LuisCesarArruda/fala-torcedor-frontEnd"
                    />
                    <ProjectCard
                        imageUrl={Projeto3}
                        title="Back-end de cadastro de evento"
                        description="Projeto feito no NLW da Rocketseat feito com Typescript, Node.js, Fastify, PrismaORM"
                        GitLink="https://github.com/LuisCesarArruda/Server-node"
                    />
                    <ProjectCard
                        imageUrl={Projeto1}
                        title="Back-end do projeto Fala Torcedor Projeto"
                        description="Back-end do projeto voltado para cadastro e time e torcedores para ter uma ideia de quantas pessoas torcem para cada time, sendo eles de serie A,B e C tendo filtros das serie feito com node.j, fastify, postgreSQL"
                        GitLink="https://github.com/LuisCesarArruda/fala-torcedor-frontEnd"
                    />

                    

                    

                    
                    
                </div>
            </div>
        </section>
    )
}