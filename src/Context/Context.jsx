import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, setState] = useState();
  const [num, setNum] = useState();
  const [open, setOpen] = useState(true);

  return (
    <AppContext.Provider value={{ open, setOpen }}>
      {children}
    </AppContext.Provider>
  );
};

function GlobalContext() {
  return useContext(AppContext);
}

export { AppContext, AppProvider, GlobalContext };
