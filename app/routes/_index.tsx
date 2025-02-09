import type { LinksFunction, MetaFunction } from "@remix-run/node";
import styles from "./styles.css?url";
import Header from "~/components/Header/Header";
import Text from "~/components/Text/Text";
import content from "~/resources/content.json";

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
      <div className="body-item right">
        <Text
          title={content.aboutMe.title}
          text={content.aboutMe.text}
          id={content.aboutMe.id}
        ></Text>
        <Text
          title={content.experience.title}
          text={content.experience.text}
          id={content.experience.id}
        ></Text>
        <Text
          title={content.education.title}
          text={content.education.text}
          id={content.education.id}
        ></Text>
        <Text
          title={content.projects.title}
          text={content.projects.text}
          id={content.projects.id}
        ></Text>
      </div>
    </div>
  );
}
