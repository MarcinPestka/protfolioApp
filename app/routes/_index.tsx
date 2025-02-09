import type { LinksFunction, MetaFunction } from "@remix-run/node";
import styles from "./styles.css?url";
import Header from "~/components/Header/Header";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="body-wrapper">
      <div className="body-item left">
        <Header></Header>
      </div>
      <div className="body-item">
        {Array.from(Array(50).keys()).map((x) => {
          return (
            <p id={x.toString()} key={x}>
              {x}
            </p>
          );
        })}
        <p className="test">right</p>
      </div>
    </div>
  );
}
