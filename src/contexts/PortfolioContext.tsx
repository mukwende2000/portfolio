import React, { ReactNode, createContext, useState } from "react";
import projects, { Project } from "../data/projects";

type PortfolioType = {
  asideIsOpen: boolean;
  project: Project;
  setProject?: React.Dispatch<React.SetStateAction<Project>>;
  setAsideIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

const initialState: PortfolioType = {
  asideIsOpen: false,
  project: projects[0],
};

const PortfolioContext = createContext(initialState);

export function PorfolioContextProvider({ children }: { children: ReactNode }) {
  const [asideIsOpen, setAsideIsOpen] = useState<boolean>(false);
  const [project, setProject] = useState<Project>(projects[0]);
  return (
    <PortfolioContext.Provider
      value={{ project, setProject, asideIsOpen, setAsideIsOpen }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export default PortfolioContext;
