import { createContext, useContext, useState } from "react";
import { projects } from "../utils/data";

interface ContextPropsType {
  children: React.ReactNode;
}

interface ContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  projectsStatus: string;
  setProjectsStatus: React.Dispatch<React.SetStateAction<string>>;
  showModal:boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  currentProject:any,
  setCurrentProject: React.Dispatch<React.SetStateAction<any>>;
  mode:boolean;
  setMode:React.Dispatch<React.SetStateAction<boolean>>;
  handleToggle: () => void;
  filterProjects: () => any;
}

const Context = createContext<ContextType>({} as ContextType);

export const useContextData = () => useContext(Context);

export const ContextProvider = (props: ContextPropsType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [projectsStatus, setProjectsStatus] = useState<string>("all");
  const [showModal,setShowModal]=useState<boolean>(false);
  const [currentProject,setCurrentProject]=useState<any>("");
  const [mode,setMode]=useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const filterProjects = () => {
    return projects.filter((item: any) => {
      if (projectsStatus === "all") {
        return item;
      } else {
        return item.project === projectsStatus;
      }
    });
  };
  const values: ContextType = {
    isOpen,
    setIsOpen,
    projectsStatus,
    setProjectsStatus,
    showModal,
    setShowModal,
    currentProject,
    setCurrentProject,
    mode,
    setMode,
    handleToggle,
    filterProjects,
  };
  return <Context.Provider value={values}>{props.children}</Context.Provider>;
};
