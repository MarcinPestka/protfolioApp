import List from "../List/List";
import "./header.css";

export default function Header() {
  return (
    <div>
      <h1 data-testid="header-name" className="name-header">
        Marcin Pestka
      </h1>
      <p>Front-End developer</p>
      <List></List>
    </div>
  );
}
