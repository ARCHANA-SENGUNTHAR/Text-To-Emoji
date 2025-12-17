import React, { useState, useEffect } from "react";
import axios from "axios";
import { getSessionId } from "./session";

function Quiz() {
  const [quiz, setQuiz] = useState({});
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");
  const sessionId = getSessionId();

  useEffect(() => {
    fetchQuiz();
  }, []);

  const fetchQuiz = async () => {
    //const res = await axios.get("http://localhost:5000/emoji-quiz");
    const res = await axios.get(
  "https://text-to-emoji-rd94.onrender.com/emoji-quiz"
);

    setQuiz(res.data);
    setResult("");
    setAnswer("");
  };

  const submitAnswer = async () => {
    const res = await axios.post("http://localhost:5000/submit-quiz", {
      sessionId,
      emojis: quiz.emojis,
      answer,
    });
    setResult(res.data.correct ? `✅ Correct! Score: ${res.data.score}` : `❌ Wrong! Score: ${res.data.score}`);
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <h2>🎮 Emoji Quiz</h2>
      <div style={{ fontSize: "50px" }}>{quiz.emojis}</div>
      <input
        type="text"
        placeholder="Type your guess"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        style={{ padding: "10px", fontSize: "16px", width: "60%" }}
      />
      <button onClick={submitAnswer} style={{ marginLeft: "10px", padding: "10px" }}>
        Submit
      </button>
      <button onClick={fetchQuiz} style={{ marginLeft: "10px", padding: "10px" }}>
        Next
      </button>
      <div style={{ marginTop: "20px", fontSize: "18px" }}>{result}</div>
    </div>
  );
}

export default Quiz;
