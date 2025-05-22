import "./Style.css";

export function Experience() {
    const experiences = [
        {
            role: "Estagiário em Desenvolvimento Front-end",
            company: "Universidade de Fortaleza (Unifor)",
            period: "Abr 2022 - Abr 2024",
            description:
                "Atuando como parte do time de desenvolvimento front-end, colaborando estreitamente com a equipe de designers para criar as interfaces em HTML, Javascript e bootstrap das disciplinas no Ambiente Virtual de Aprendizagem (AVA). Além disso, prestei suporte aos tutores, esclarecendo dúvidas relacionadas ao Moodle.",
        },
        {
            role: "Técnico de Laboratório de midias digitais",
            company: "Universidade de Fortaleza (Unifor)",
            period: "junho 2025 - Atual",
            description:
                "experiência em suporte técnico e operacional em ambiente de laboratório voltado à área de tecnologia e produção de conteúdo. Atuando com organização de equipamentos, apoio em projetos audiovisuais e controle de materiais. Domínio de ferramentas como Power BI e Excel para análise e organização de dados, além de Photoshop e Adobe Premiere para edição de imagens e vídeos. Familiaridade com rotinas de manutenção de equipamentos, suporte a alunos/professores e documentação de atividades.",
        },
        
    ];

    return (
        <section id="experience" className="experience sec-pad">
            <div className="main-container">
                <h2 className="heading-sec__mb-med">
                    <span className="heading-sec__main">Experiência</span>
                </h2>

                <div className="experience__content">
                    {experiences.map((exp) => (
                        <div key={exp.company + exp.period} className="experience__item">
                            <h3 className="experience__role">{exp.role}</h3>
                            <p className="experience__company">
                                {exp.company} <span className="experience__period">• {exp.period}</span>
                            </p>
                            <p className="experience__description">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
