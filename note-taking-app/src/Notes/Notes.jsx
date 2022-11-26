import "./note.css";
import React from "react";
import { connect } from "react-redux";
import { removeNote } from "../Redux/action";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  return (
    <div className="note">
      <div className="note-div">
      <h3>{props.title}</h3>
      <p>{props.text}</p>

      <button className="delete" onClick={() => props.remove(props.id)}>
        {<DeleteIcon />}
      </button>
      </div>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    remove: (id) => dispatch(removeNote(id)),
  };
}

export default connect(null, mapDispatchToProps)(Note);
