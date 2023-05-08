import React from "react";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

function Note({id, text, date, deleteNote }) {
  return (
    //add the date and let the date align to the left
    //delete button align to the right
    <div className="note">
      <div className="note__body">{text}</div> 
      <div className="note__footer">
        <div className="note__date">{date}</div>
        <div className="note__delete-wrapper">
          <DeleteForeverOutlinedIcon
            className="note__delete"
            onClick={() => deleteNote(id)}
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}

export default Note;