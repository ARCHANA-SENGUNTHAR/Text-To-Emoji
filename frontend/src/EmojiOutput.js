import React from "react";

function EmojiOutput({ emoji }) {
  return (
    <div style={{ marginTop: "30px", fontSize: "40px" }}>
      {emoji ? emoji : "👉 Your emojis will appear here"}
    </div>
  );
}

export default EmojiOutput;
