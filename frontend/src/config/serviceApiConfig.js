export const API_BASE_URL =
  import.meta.env.VITE_DEV_REMOTE === 'remote'
    ? 'http://localhost:8888/api/'  // Use localhost when in remote development
    : 'https://accufirm-backend.onrender.com/api/';  // Use deployed backend in production


