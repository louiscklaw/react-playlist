import React from "react";

export const GlobalContext = React.createContext();

export function GlobalContextProvider({ children }) {
  const helloworld = "helloworld";

  const helloFunc = () => {
    console.log("helloFunc");
  };
  return (
    <>
      <GlobalContext.Provider value={{ helloworld, helloFunc }}>{children}</GlobalContext.Provider>
    </>
  );
}
