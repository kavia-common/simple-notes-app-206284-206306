import React, { useEffect } from "react";

// PUBLIC_INTERFACE
/**
 * Modal dialog with backdrop.
 * @param {object} props - { isOpen, onClose, title, children }
 */
function Modal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    // Trap focus & close on escape
    if (!isOpen) return;
    function handleKey(e) {
      if (e.key === "Escape") onClose();
      // further trap focus skipped for simplicity
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  return (
    <div className="modal-ocean-overlay" role="dialog" aria-modal="true">
      <div className="modal-ocean-content">
        <button
          onClick={onClose}
          className="modal-close-btn"
          aria-label="Close modal"
          tabIndex={0}
        >
          ×
        </button>
        {title && <div className="modal-title">{title}</div>}
        {children}
      </div>
    </div>
  );
}
export default Modal;
