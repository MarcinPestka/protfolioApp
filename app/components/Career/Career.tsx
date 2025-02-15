import TitleComponent from "../Title/LeftSectionTitle";
import CareerItem, { ExperienceItemProps } from "./CareerItem/CareerItem";
import "./career.css";
interface CareerProps {
  title: string;
  id: string;
  points: ExperienceItemProps[];
}

export default function Career(props: CareerProps) {
  return (
    <div>
      <TitleComponent title={props.title} id={props.id} />
      <div className="carrer-items-wrapper">
        {props.points.map((x, i) => (
          <CareerItem
            key={i}
            position={x.position}
            span={x.span}
            company={x.company}
            description={x.description}
          />
        ))}
      </div>
    </div>
  );
}
