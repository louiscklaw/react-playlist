import React from "react";
import ReactDOM from "react-dom";
import Highlighter from "react-highlight-words";

function Highlight(){
  return(
    <Highlighter
      highlightClassName="YourHighlightClass"
      searchWords={["and", "or", "the"]}
      autoEscape={true}
      textToHighlight="The dog is chasing the cat. Or perhaps they're just playing?"
    />
  )
}


export default Highlight