// komponenty
import { ReactNode } from "react";
import Aside from "./Aside";

// štýly
import "./Project.scss";

type Props = {
  children: ReactNode;
  title: string;
  link: string;
  lessons: string;
};

const Project = (props: Props) => {
  return (
    <div className="app">
      <Aside />
      <div className="project">
        <header>
          <h1>{props.title}</h1>
        </header>
        <main>{props.children}</main>
        <footer>
          Vytvorené podľa kurzu od Davida Šeteka na{" "}
          <a href={props.link} target="_blank" rel="noreferrer">
            youtube
          </a>{" "}
          lekcie {props.lessons} - prerobené do TypeScript
        </footer>
      </div>
    </div>
  );
};

export default Project;
