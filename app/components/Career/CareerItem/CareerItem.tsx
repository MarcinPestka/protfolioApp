import "./careeritem.css";

export interface ExperienceItemProps {
  position: string;
  span: string;
  company: string;
  description: string[];
}

export default function CareerItem(props: ExperienceItemProps) {
  return (
    <div data-testid="career-item-test-id">
      <p className="position" data-testid="position-test-id">
        {props.position}
      </p>
      <div className="company-span-wrapper">
        <p className="company" data-testid="company-test-id">
          {props.company} |
        </p>
        <p className="span" data-testid="span-test-id">
          {props.span}
        </p>
      </div>
      <ul>
        {props.description.map((x, i) => (
          <li key={i} data-testid="description-point-test-id">
            {x}
          </li>
        ))}
      </ul>
    </div>
  );
}
