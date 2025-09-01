import React, { useEffect, useState } from "react";
import "./FallingEmojis.css";

const emojis = ["✨","💖","🎉","💫","🔥","😄","🍕","🌈","🚀"];

function FallingEmojis() {
  const [drops, setDrops] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const emoji = emojis[Math.floor(Math.random() * emojis.length)];
      const left = Math.random() * 100; // % from left
      const size = 20 + Math.random() * 30; // px
      setDrops((prev) => [...prev, { emoji, left, size, id: Date.now() }]);

      // Remove after animation
      setTimeout(() => {
        setDrops((prev) => prev.slice(1));
      }, 5000);
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="falling-emojis">
      {drops.map((drop) => (
        <span
          key={drop.id}
          className="emoji-drop"
          style={{
            left: `${drop.left}%`,
            fontSize: `${drop.size}px`,
          }}
        >
          {drop.emoji}
        </span>
      ))}
    </div>
  );
}

export default FallingEmojis;
