import React from "react";
import Note from "./Notes";
import { connect } from "react-redux";
function NoteList(props) {
  return (
    <div className="note-list">
      {props.notes.map(note => (
        <Note key={note.id} text={note.text} title={note.title} id={note.id} />
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    notes: state
  };
}

export default connect(mapStateToProps)(NoteList);
