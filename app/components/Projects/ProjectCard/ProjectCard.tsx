import test from "~/resources/Zrzut ekranu 2025-02-09 170238.png";
import "./projectCard.css";

interface ProjectCardProps {
  title: string;
  description: string;
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <div className="project-card" data-testid="project-card">
      <img src={test} alt="" className="image" data-testid="project-image-container"/>
      <div className="project-card-text">
        <p className="project-title" data-testid="project-title">{props.title}</p>
        <p data-testid="project-description">{props.description}</p>
      </div>
    </div>
  );
}
