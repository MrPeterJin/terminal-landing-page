import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects and research you shouldn't miss
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Peter Gam's Blog",
    desc: "My personal blog where I can write down my thoughts and experiences.",
    url: "https://www.petergam.top/",
  },
  {
    id: 2,
    title: "ResearchGPT",
    desc: "A GPT-3.5/4 powered tool for reading research papers.",
    url: "https://github.com/MrPeterJin/researchgpt/",
  },
  {
    id: 3,
    title: "Road to fullstack",
    desc: "A log to record my journey in the exploration of fullstack development.",
    url: "https://mrpeterjin.github.io/Road-to-Fullstack/",
  },
  {
    id: 4,
    title: "LPPN",
    desc: "A research of using laplacian decomposition to improve image fusion in remote sensing.",
    url: "https://github.com/ChengJin-git/LPPN/",
  },
];

export default Projects;
