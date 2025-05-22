import { Button } from "../Buttom/Button";
import "./Style.css";

type ProjectCardProps = {
    imageUrl: string;
    title: string;
    description: string;
    GitLink?: string;
};

export function ProjectCard({ imageUrl, title, description, GitLink }: ProjectCardProps) {
    return (
        <div className="projects__row">
            <div className="projects__row-img-cont">
                <img src={imageUrl} alt={title} className=" projects__row-img" />
            </div>

            <div className="projects__row-content">
                <h3 className="projects__row-content-title">{title}</h3>
                <p className="projects__row-content-desc">{description}</p>

                {GitLink && (
                    <Button text="GitHub do projeto" onClick={() => { window.open(GitLink, "_blank") }} />
                )}
            </div>
        </div>
    );
}
