import {useState} from "react";

function WordGuess({callBackFunction, active, correctWord}) {
  const target = "meows";

  const [word, setWord] = useState(["", "", "", "", ""]); // object for each letter in my word starts out as "" until input.
  const [result, setResult] = useState("");
  
  function submit(e) {
    e.preventDefault(); //stops the page from reloading entirely when submit is pressed
    console.log(word);
    let correctLetters = word.map((letter, index) => {
      if (letter !== target[index]) {
        return "";
      } 
      return letter;
    });
    
    if(correctLetters.every((letter) => {return letter != ""})) { //compares string to target word
      setResult("YAY"); //usestate for result message
    } else{
      setResult("Nope");
    } 
    callBackFunction(correctLetters);
    
  }

  function setLetter(event) {
    let letter = event.target.value; //getting the letter the user types in from input
    let name = event.target.name; // name of input 
    let nameNum = Number(name);
    let newWordLst = [...word]; //copy of the useState object using ...
    newWordLst[nameNum] = letter; // value of the letter1, letter2, etc set equal to value from the user input
    setWord(newWordLst); // useState object set to new copied object
  }
//onChange is an event listener/handler calls the function
//onClick is also an event listener/handler calls the function
  function correctClassName(index){
    if (correctWord[index] !== "") {
      return "correctGuess"
    }
  }
  return (
    <div className="WordGuess">
      <h1>{result}</h1> 
      <form>
        <span>
          <input className={correctClassName(0)} name="0" onChange={setLetter} ></input> 
          <input className={correctClassName(1)} name="1" onChange={setLetter}></input>
          <input className={correctClassName(2)} name="2" onChange={setLetter}></input>
          <input className={correctClassName(3)} name="3" onChange={setLetter}></input>
          <input className={correctClassName(4)} name="4" onChange={setLetter}></input>
        </span>
        {active ?
          <div><button onClick={submit}>Submit!</button></div> :
          <div></div>
        }
      </form>
    </div>
  );
}

export default WordGuess;
