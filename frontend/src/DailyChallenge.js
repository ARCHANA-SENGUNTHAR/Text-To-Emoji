import React, { useState, useEffect } from "react";
import axios from "axios";
import { getSessionId } from "./session";

function DailyChallenge() {
  const [theme, setTheme] = useState("");
  const [story, setStory] = useState("");
  const [submissions, setSubmissions] = useState([]);
  const sessionId = getSessionId();

  useEffect(() => {
    fetchChallenge();
  }, []);

  const fetchChallenge = async () => {
    const res = await axios.get("http://localhost:5000/daily-challenge");
    setTheme(res.data.theme);
    setSubmissions(res.data.submissions);
  };

  const submitStory = async () => {
    if (!story.trim()) return;
    const res = await axios.post("http://localhost:5000/daily-challenge", {
      sessionId,
      story,
    });
    setSubmissions(res.data.submissions);
    setStory("");
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <h2>📅 Daily Emoji Challenge - Theme: {theme}</h2>
      <textarea
        value={story}
        onChange={(e) => setStory(e.target.value)}
        placeholder="Write your emoji story..."
        rows="3"
        style={{ width: "80%", padding: "10px" }}
      />
      <br />
      <button onClick={submitStory} style={{ marginTop: "10px", padding: "10px 20px" }}>
        Submit Story
      </button>
      <h3 style={{ marginTop: "20px" }}>Submissions</h3>
      <ul>
        {submissions.map((s, i) => (
          <li key={i}>{s.story}</li>
        ))}
      </ul>
    </div>
  );
}

export default DailyChallenge;
