import type { LinksFunction, MetaFunction } from "@remix-run/node";
import Career from "~/components/Career/Career";
import { ExperienceItemProps } from "~/components/Career/CareerItem/CareerItem";
import Header from "~/components/Header/Header";
import Text from "~/components/Text/Text";
import content from "~/resources/content.json";
import styles from "./styles.css?url";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const experience: ExperienceItemProps[] = [
  {
    company: "NavBlue, an airbus company",
    span: "2024 styczeń - obecnie",
    position: "Software Developer",
    description:
      "🔵 Building and Maintain Vue.js Apps \n🔵 Optimizing and Refactoring for Performance and Scalabilit \n🔵 Implementing Unit and E2E test \n🔵 Converting Figma Designs to Interactive UI",
  },
  {
    company: "Sii",
    span: "2023 siepień - 2024 styczeń",
    position: "Software Developer",
    description:
      "🔵 Building and Maintaining React and .Net Apps \n🔵 Working in a microservice architecture",
  },
];

const education: ExperienceItemProps[] = [
  {
    company: "University of Gdańsk",
    span: "2021 styczeń - 2023 kwiecień",
    position: "Informatics and econometrics",
    description: "",
  },
];

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
        <Career
          title="Experience"
          points={experience}
          id="experience-element"
        />
        <Career title="Education" points={education} id="education-element" />
        <Text
          title={content.projects.title}
          text={content.projects.text}
          id={content.projects.id}
        ></Text>
      </div>
    </div>
  );
}
