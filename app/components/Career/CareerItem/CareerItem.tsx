import "./careeritem.css";

export interface ExperienceItemProps {
  position: string;
  span: string;
  company: string;
  description: string;
}

export default function CareerItem(props: ExperienceItemProps) {
  return (
    <div>
      <p className="position">{props.position}</p>
      <div className="company-span-wrapper">
        <p className="company">{props.company}</p>
        <p className="span">{props.span}</p>
      </div>
      <p className="description">{props.description}</p>
    </div>
  );
}
