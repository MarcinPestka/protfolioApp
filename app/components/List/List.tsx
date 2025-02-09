import "./list.css";
import { scrollTo } from "./listService";
export default function List() {
  return (
    <div data-testid="list-component">
      <ol>
        <li data-testid="about-me" onClick={() => scrollTo("aboutMe-element")}>
          About me
        </li>
        <li
          data-testid="experience"
          onClick={() => scrollTo("experience-element")}
        >
          Experience
        </li>
        <li
          data-testid="education"
          id="education-element"
          onClick={() => scrollTo("education-element")}
        >
          Education
        </li>
        <li data-testid="projects" onClick={() => scrollTo("projects-element")}>
          Projects
        </li>
      </ol>
    </div>
  );
}
