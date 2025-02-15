import "./list.css";
import { scrollTo } from "./listService";

export default function List() {
  return (
    <ol data-testid="list-component" start={1}>
      <li
        data-testid="about-me"
        role="presentation"
        onMouseDown={() => scrollTo("aboutMe-element")}
      >
        About me
      </li>
      <li
        data-testid="experience"
        role="presentation"
        onMouseDown={() => scrollTo("experience-element")}
      >
        Experience
      </li>
      <li
        data-testid="education"
        role="presentation"
        onMouseDown={() => scrollTo("education-element")}
      >
        Education
      </li>
      <li
        data-testid="projects"
        role="presentation"
        onMouseDown={() => scrollTo("projects-element")}
      >
        Projects
      </li>
    </ol>
  );
}
