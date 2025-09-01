import React from "react";
import EmojiOutput from "./EmojiOutput";
import Quiz from "./Quiz";
import DailyChallenge from "./DailyChallenge";
import TextToEmoji from "./TextToEmoji";
import "./App.css"; // make sure this is imported

function App() {
  return (
    <div className="App"> {/* Use App class here */}
      <header className="App-header">
        <h1>✨ Emoji FunZone  ✨</h1>
        <h2> A Text to Emoji & Interactive Games Platform</h2>
        <TextToEmoji />
        <Quiz />
        <DailyChallenge />
      </header>
    </div>
  );
}

export default App;
