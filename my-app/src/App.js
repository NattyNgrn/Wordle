
import './App.css';
import {useState} from "react"
import WordGuess from "./components/WordGuess.js";

function App() {
  const [count, setCount] = useState(1);
  function changeCount(correctLetters){
    setCount(count + 1);
    console.log(count);
    const newWord = [...word];
    newWord[count - 1] = correctLetters;
    setWord(newWord);
  }
  const [word, setWord] = useState([["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""]]);
  return(
    <div>
      <h1 className="wordle">Wordle!</h1>
      <WordGuess callBackFunction={changeCount} active={count==1} correctWord={word[0]}/>
      <WordGuess callBackFunction={changeCount} active={count==2} correctWord={word[1]}/>
      <WordGuess callBackFunction={changeCount} active={count==3} correctWord={word[2]}/>
      <WordGuess callBackFunction={changeCount} active={count==4} correctWord={word[3]}/>
      <WordGuess callBackFunction={changeCount} active={count==5} correctWord={word[4]}/>
    </div>
  )
}

export default App;
