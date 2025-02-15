import TitleComponent from "../Title/LeftSectionTitle";
import "./text.css";
export interface TextProps {
  title: string;
  text: string;
  id: string;
}

export default function TextComponent(props: TextProps) {
  return (
    <div data-testid="text-component" className="text-component-wrapper">
      <TitleComponent title={props.title} id={props.id} />
      <div className="text-wrapper">
        <p className="text-component-text" data-testid="paragraph">
          {props.text}
        </p>
        <p className="text-component-text" data-testid="second-paragraph">
          Currantly working at{" "}
          <a href="https://www.navblue.aero/" target="_blank" rel="noreferrer">
            Navbue
          </a>
        </p>
      </div>
    </div>
  );
}
