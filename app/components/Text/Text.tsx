export interface TextProps {
  title: string;
  text: string;
  id: string;
}

export default function TextComponent(props: TextProps) {
  return (
    <div data-testid="text-component">
      <h1 id={props.id}>{props.title}</h1>
      <p>{props.text}</p>
    </div>
  );
}
