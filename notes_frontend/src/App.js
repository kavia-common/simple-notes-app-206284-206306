import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import NoteList from "./components/NoteList";
import NoteEditor from "./components/NoteEditor";
import Modal from "./components/Modal";
import storage from "./utils/storage";

// PUBLIC_INTERFACE
function App() {
  // Theme settings
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Notes state
  const [notes, setNotes] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingNote, setEditingNote] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState({ open: false, noteId: null });

  // Load notes on mount and update on change
  useEffect(() => {
    storage.getNotes().then(setNotes);
  }, []);

  // Save notes when they change - only for localStorage strategy, API handles own persistency
  const saveNotes = useCallback((updatedNotes) => {
    setNotes(updatedNotes);
    storage.saveNotes(updatedNotes);
  }, []);

  // Create note
  const handleCreate = () => {
    setEditingNote({ id: null, title: "", content: "" });
    setModalOpen(true);
  };

  // Edit note
  const handleEdit = (note) => {
    setEditingNote(note);
    setModalOpen(true);
  };

  // Submit (create or update)
  const handleModalSubmit = (note) => {
    let updatedNotes;
    if (note.id == null) {
      // Create
      const newNote = {
        ...note,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      updatedNotes = [newNote, ...notes];
    } else {
      // Edit
      updatedNotes = notes.map((n) =>
        n.id === note.id ? { ...n, ...note, updatedAt: new Date().toISOString() } : n
      );
    }
    saveNotes(updatedNotes);
    setModalOpen(false);
    setEditingNote(null);
  };

  // Delete with confirmation
  const handleDelete = (noteId) => {
    setConfirmDelete({ open: true, noteId });
  };
  const confirmDeleteNote = () => {
    const noteId = confirmDelete.noteId;
    const updatedNotes = notes.filter((n) => n.id !== noteId);
    saveNotes(updatedNotes);
    setConfirmDelete({ open: false, noteId: null });
    // If editing this note, close modal
    if (editingNote && editingNote.id === noteId) {
      setModalOpen(false);
      setEditingNote(null);
    }
  };

  // Cancel/close handlers
  const handleModalClose = () => {
    setModalOpen(false);
    setEditingNote(null);
  };
  const handleDeleteCancel = () => {
    setConfirmDelete({ open: false, noteId: null });
  };

  return (
    <div className="notes-app-bg">
      <header className="notes-header">
        <div className="header-content">
          <span className="notes-title">📝 Notes</span>
          <button
            className="ocean-btn accent"
            onClick={handleCreate}
            aria-label="Create note"
            data-testid="create-note"
          >
            + New Note
          </button>
        </div>
        <button
          className={`theme-toggle ocean-btn`}
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </header>
      <main className="notes-main">
        <NoteList
          notes={notes}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </main>
      <Modal isOpen={modalOpen} onClose={handleModalClose} title={editingNote?.id ? "Edit Note" : "New Note"}>
        {modalOpen && (
          <NoteEditor
            note={editingNote}
            onSubmit={handleModalSubmit}
            onCancel={handleModalClose}
          />
        )}
      </Modal>
      <Modal isOpen={confirmDelete.open} onClose={handleDeleteCancel} title="Delete Note">
        <div className="confirm-dialog">
          <p>Are you sure you want to delete this note? This action cannot be undone.</p>
          <div className="confirm-actions">
            <button className="ocean-btn error" onClick={confirmDeleteNote}>Delete</button>
            <button className="ocean-btn" onClick={handleDeleteCancel}>Cancel</button>
          </div>
        </div>
      </Modal>
      <footer className="footer-ocean">
        <span>Ocean Professional Notes App &bull; Powered by React</span>
      </footer>
    </div>
  );
}

export default App;
