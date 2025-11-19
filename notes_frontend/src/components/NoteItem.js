import React from "react";

// PUBLIC_INTERFACE
/**
 * Renders a single note item card with edit/delete.
 * @param {object} props - { note, onEdit, onDelete }
 */
function NoteItem({ note, onEdit, onDelete }) {
  function formatTime(iso) {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" }) +
      " " + d.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });
  }
  return (
    <div className="note-card" tabIndex={0} aria-label={`Note: ${note.title || "No Title"}`}>
      <div className="note-title" title={note.title}>{note.title || <em>(No title)</em>}</div>
      <div className="note-content">{note.content || <span style={{ color: "#94a3b8" }}>(No content)</span>}</div>
      <div className="note-date">
        {note.updatedAt ? `Updated: ${formatTime(note.updatedAt)}` : note.createdAt ? `Created: ${formatTime(note.createdAt)}` : ""}
      </div>
      <div className="note-actions">
        <button className="ocean-btn accent" aria-label="Edit note" onClick={onEdit}>Edit</button>
        <button className="ocean-btn error" aria-label="Delete note" onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}
export default NoteItem;
