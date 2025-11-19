/**
 * Ocean Professional Notes App - Storage Abstraction Layer
 * Uses localStorage by default. Easily swapped to REST API if env detected.
 */
const LS_KEY = "notesapp_notes";

/**
 * Get env variable for API base.
 */
function getApiBase() {
  return (
    process.env.REACT_APP_API_BASE ||
    process.env.REACT_APP_BACKEND_URL ||
    null
  );
}

const localStorageStrategy = {
  // PUBLIC_INTERFACE
  /**
   * Returns list of notes from localStorage (Promise for API compatibility)
   */
  getNotes: async () => {
    try {
      const json = window.localStorage.getItem(LS_KEY);
      return json ? JSON.parse(json) : [];
    } catch (e) {
      return [];
    }
  },
  // PUBLIC_INTERFACE
  /**
   * Persists notes to localStorage
   */
  saveNotes: async (notes) => {
    window.localStorage.setItem(LS_KEY, JSON.stringify(notes));
  },
};

const apiStrategy = {
  // PUBLIC_INTERFACE
  /**
   * (STUB) Fetch notes from REST API
   */
  getNotes: async () => {
    // Replace with actual fetch call
    // e.g. return fetch(`${getApiBase()}/notes`).then(res => res.json());
    return [];
  },
  // PUBLIC_INTERFACE
  /**
   * (STUB) Save notes via REST API
   */
  saveNotes: async (notes) => {
    // Implement if backend exists
    // await fetch(`${getApiBase()}/notes`, {method: "POST", ...})
  },
};

const storage = getApiBase() ? apiStrategy : localStorageStrategy;
export default storage;
