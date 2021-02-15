import React from "react";

let ShareContext = React.createContext();

export default function ShareContextProvider({
  saveJson,
  reloadJson,
  children,
}) {
  let handleHelloworld = () => {
    alert("helloworld");
  };

  const handleRefreshJson = () => {
    saveJson();
    reloadJson();
  };

  const handleColumnEditClick = () => {
    alert("handleColumnEditClick");
    handleRefreshJson();
  };
  const handleColumnDeleteClick = () => {
    alert("handleColumnDeleteClick");
    handleRefreshJson();
  };
  const handleItemEditClick = (e, item_id) => {
    alert("handleItemEditClick");
    handleRefreshJson();
  };
  const handleItemDeleteClick = (e, item_id) => {
    alert("handleItemDeleteClick");
    handleRefreshJson();
  };

  return (
    <ShareContext.Provider
      value={{
        handleHelloworld,
        handleColumnEditClick,
        handleColumnDeleteClick,
        handleItemEditClick,
        handleItemDeleteClick,
      }}
    >
      {children}
    </ShareContext.Provider>
  );
}

export { ShareContext };
