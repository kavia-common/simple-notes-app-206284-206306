import React from "react";
import NoteItem from "./NoteItem";

// PUBLIC_INTERFACE
/**
 * Displays the grid/list of notes.
 * @param {object} props - { notes: [...], onEdit: fn(note), onDelete: fn(noteId) }
 */
function NoteList({ notes, onEdit, onDelete }) {
  if (!notes || notes.length === 0) {
    return (
      <div style={{ marginTop: "2.7rem", color: "#b7babf", textAlign: "center", fontSize: "1.16rem" }}>
        No notes yet. Click <span style={{ color: "#2563EB", fontWeight: 500 }}>+ New Note</span> to get started!
      </div>
    );
  }
  return (
    <div className="notes-grid" data-testid="notes-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onEdit={() => onEdit(note)}
          onDelete={() => onDelete(note.id)}
        />
      ))}
    </div>
  );
}
export default NoteList;
