import TitleComponent from "../Title/LeftSectionTitle";
import ProjectCard from "./ProjectCard/ProjectCard";
import "./projects.css";
export default function Projects() {
  const projects = [
    {
      title: "Portfolio app",
      desciption: "You are now visiting my portfolio app",
    },
  ];

  return (
    <div>
      <div className="projects-title-section">
        <TitleComponent title="Projects" id="projects-element" />
        <a
          href="https://github.com/MarcinPestka"
          target="_blank"
          rel="noreferrer"
          data-testid="github-link"
        >
          Visit my github
        </a>
      </div>
      {projects.map((x, i) => (
        <ProjectCard key={i} title={x.title} description={x.desciption} />
      ))}
    </div>
  );
}
