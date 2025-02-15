import "./leftSectionTitle.css";

export interface TitleProps {
  title: string;
  id: string;
}

export default function TitleComponent(props: TitleProps) {
  return (
    <div data-testid="left-title-component">
      <h1 id={props.id}>{props.title}</h1>
    </div>
  );
}
