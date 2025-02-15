import type { LinksFunction, MetaFunction } from "@remix-run/node";
import Career from "~/components/Career/Career";
import { ExperienceItemProps } from "~/components/Career/CareerItem/CareerItem";
import Header from "~/components/Header/Header";
import Projects from "~/components/Projects/Projects";
import Text, { TextProps } from "~/components/Text/Text";
import styles from "./styles.css?url";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const introduction: TextProps = {
  id: "aboutMe-element",
  title: "About me",
  text: "I’m a Software Engineer with a “can-do” vibe, a natural problem-solver, and a love for writing clean, efficient code. I’ve worked on a bunch of different projects, which has given me a solid sense of how to create real business impact. Always pushing myself to learn more and improve, I’m all about making an impact wherever I can.",
  textSecondParagraph: "Currantly working at navbue",
};

const experience: ExperienceItemProps[] = [
  {
    company: "NavBlue, an airbus company",
    span: "2024 styczeń - obecnie",
    position: "Software Developer",
    description: [
      "Building and Maintain Vue.js Apps",
      "Optimizing and Refactoring for Performance and Scalabilit",
      "Implementing Unit and E2E test",
      "Converting Figma Designs to Interactive UI",
    ],
  },
  {
    company: "Sii",
    span: "2023 siepień - 2024 styczeń",
    position: "Junior Software Developer",
    description: [
      "Building and Maintaining React and .Net Apps",
      "Working in a microservice architecture",
    ],
  },
];

const education: ExperienceItemProps[] = [
  {
    company: "University of Gdańsk",
    span: "2021 styczeń - 2023 kwiecień",
    position: "Informatics and econometrics",
    description: ["Basic programming", "Basics of databases"],
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
          title={introduction.title}
          text={introduction.text}
          id={introduction.id}
          textSecondParagraph={introduction.textSecondParagraph}
        ></Text>
        <Career
          title="Experience"
          points={experience}
          id="experience-element"
        />
        <Career title="Education" points={education} id="education-element" />
        <Projects></Projects>
      </div>
    </div>
  );
}
