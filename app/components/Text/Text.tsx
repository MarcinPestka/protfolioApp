import TitleComponent from "../Title/LeftSectionTitle";

export interface TextProps {
  title: string;
  text: string;
  id: string;
}

export default function TextComponent(props: TextProps) {
  return (
    <div data-testid="text-component">
      <TitleComponent title={props.title} id={props.id} />
      <p>{props.text}</p>
    </div>
  );
}
