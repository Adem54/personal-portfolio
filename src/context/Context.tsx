import {createContext,useContext,useState} from "react";


interface ContextPropsType {
children:React.ReactNode;
}

interface ContextType {
isOpen:boolean;
setIsOpen:React.Dispatch<React.SetStateAction<boolean>>;
handleToggle:()=>void;
}


const Context=createContext<ContextType>({} as ContextType);

export const useContextData=()=>useContext(Context);


export const ContextProvider=(props:ContextPropsType)=>{
    const [isOpen,setIsOpen]=useState<boolean>(false);

    const handleToggle=()=>{
        setIsOpen(isOpen=>!isOpen);
    }

       const values:ContextType={
        isOpen,
        setIsOpen,
        handleToggle,
       }                     
    return <Context.Provider  value={values}>{props.children}</Context.Provider>
}