import React from "react";
import "./App.css";
import GuessedWords from "./GuessedWords";
import Congrats from "./Congrats";

const App = () => {
  return (
    <div className="App">
      <h1>Jotto</h1>
      <Congrats success={false} />
      <GuessedWords
        guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
      />
    </div>
  );
};

export default App;
