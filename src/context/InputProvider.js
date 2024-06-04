import InputsContext from "./InputContext"
import { useState } from "react";

// Provider component to wrap your app and provide the inputs state

export const InputProvider = ({ children }) => {
    const [inputs, setInputs] = useState({});

    const [drawerState, setDrawerState] = useState({
      right: false,
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
      setDrawerState({ ...drawerState, [anchor]: open });
    };
   
  
    return (
      <InputsContext.Provider value={{ inputs, setInputs, drawerState, toggleDrawer }}>
        {children}
      </InputsContext.Provider>
    );
  };