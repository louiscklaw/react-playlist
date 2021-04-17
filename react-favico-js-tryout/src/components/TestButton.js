import React from "react";
import { FavicoContext } from "../contexts/favico";

export default function TestButton() {
  const { incCounter, descCounter, setZero, favicon } = React.useContext(
    FavicoContext
  );
  return (
    <>
      <button onClick={incCounter}>incCounter</button>
      <button onClick={descCounter}>descCounter</button>
      <button onClick={setZero}>setZero</button>
    </>
  );
}
