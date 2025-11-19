import React, { useState, useEffect, useRef } from "react";

// PUBLIC_INTERFACE
/**
 * Modal form for creating/editing a note.
 * @param {object} props - { note, onSubmit, onCancel }
 */
function NoteEditor({ note, onSubmit, onCancel }) {
  const [title, setTitle] = useState(note?.title || "");
  const [content, setContent] = useState(note?.content || "");
  const [error, setError] = useState("");
  const titleRef = useRef();

  useEffect(() => {
    setTitle(note?.title || "");
    setContent(note?.content || "");
    setTimeout(() => titleRef?.current?.focus(), 240);
  }, [note]);

  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim() === "") {
      setError("A title is required");
      return;
    }
    if (content.trim() === "") {
      setError("Content is required");
      return;
    }
    setError("");
    onSubmit({ ...note, title: title.trim(), content: content.trim() });
  }
  function handleKey(e) {
    if (e.key === "Escape") onCancel();
  }

  return (
    <form className="note-editor-form" autoComplete="off" onKeyDown={handleKey} onSubmit={handleSubmit}>
      <div>
        <label className="input-label" htmlFor="note-title">Title</label>
        <input
          id="note-title"
          className="input-base"
          placeholder="Note title"
          value={title}
          ref={titleRef}
          maxLength={80}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label className="input-label" htmlFor="note-content">Content</label>
        <textarea
          id="note-content"
          className="input-base"
          placeholder="Type your notes here..."
          value={content}
          rows={6}
          onChange={(e) => setContent(e.target.value)}
          required
          maxLength={4000}
        />
      </div>
      {error && <div style={{ color: "#EF4444", fontSize: "1rem", marginBottom: "-10px" }}>{error}</div>}
      <div style={{ display: "flex", gap: "18px", marginTop: "0.7rem" }}>
        <button type="submit" className="ocean-btn accent">
          {note?.id ? "Save" : "Create"}
        </button>
        <button type="button" className="ocean-btn" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
}
export default NoteEditor;
