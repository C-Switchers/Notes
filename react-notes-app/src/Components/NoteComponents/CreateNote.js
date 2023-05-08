import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
function CreateNote({ textHandler, saveHandler, inputText }) {
  //character limit is 140
  const charLimit = 140;
  const charLeft = charLimit - inputText.length;
  //Progress bar percentage
  const props = ( charLimit - inputText.length) / charLimit * 100;
  return (
    <div className="note" style={{ background: "none"}}>
      <textarea
        cols="10"
        rows="5"
        value={inputText}
        placeholder="What's happening?"
        onChange={textHandler}
        maxLength="140"
      ></textarea>
      <div className="note__footer">
        <span className="label"> You have {charLeft} left</span>
        <button className="note__save" onClick={saveHandler}>
          Save
        </button>
      </div>
      
      <LinearProgress
      className="char__progress"
      variant="determinate"
      value={props}
      />
      <div className="note__date"></div>
    </div>
    
  );
}

export default CreateNote;