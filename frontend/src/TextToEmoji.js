import React, { useState } from "react";
import axios from "axios";
import EmojiOutput from "./EmojiOutput";

function TextToEmoji() {
  const [text, setText] = useState("");
  const [emoji, setEmoji] = useState("");

  const handleTranslate = async () => {
    if (!text.trim()) return;
    try {
      const res = await axios.post("http://localhost:5000/translate", { text });
      setEmoji(res.data.emoji);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ marginBottom: "40px" }}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your feelings..."
        rows="4"
        style={{ width: "80%", padding: "10px", fontSize: "16px" }}
      />
      <br />
      <button
        onClick={handleTranslate}
        style={{ marginTop: "20px", padding: "10px 20px", fontSize: "18px" }}
      >
        Translate 🚀
      </button>
      <EmojiOutput emoji={emoji} />
    </div>
  );
}

export default TextToEmoji;
