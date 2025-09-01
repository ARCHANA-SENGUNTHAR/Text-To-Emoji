// src/session.js
export function getSessionId() {
  let id = localStorage.getItem("sessionId");
  if (!id) {
    id = Math.random().toString(36).substring(2, 12);
    localStorage.setItem("sessionId", id);
  }
  return id;
}
