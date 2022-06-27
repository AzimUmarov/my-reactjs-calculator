import './App.css';
import {useState} from "react";
import ButtonGroup from "./components/ButtonGroup";

function App() {
  const [displayValue, setDisplayValue] = useState("");
  const [calculated, setCalculated] = useState(false);

  function calculate(n) {
    return new Function('return ' + n)(); //returns function with execute n string like js code
  }

  function getCal(n){
      if(n === "C"){
          setCalculated(false);
          setDisplayValue("");
      }
      else
      if(n === "="){
          setCalculated(true);
          setDisplayValue(calculate(displayValue));
      }
      else{
          if(calculated && n >= 0 && n < 10) // if user tap number after calculating remove old value from display
              setDisplayValue(n);
          else
          setDisplayValue(`${displayValue}${n}`);
          setCalculated(false);
      }
  }

  return (
    <div className="board">
        <input className="display" value={displayValue} onChange={(e) => setDisplayValue(e.target.value)}/>
        <ButtonGroup items={[1,2,3,"+"]} getCal={getCal}></ButtonGroup>
        <ButtonGroup items={[4,5,6,"-"]} getCal={getCal}></ButtonGroup>
        <ButtonGroup items={[7,8,9,"*"]} getCal={getCal}></ButtonGroup>
        <ButtonGroup items={["C",0,"=","/"]} getCal={getCal}></ButtonGroup>
    </div>
  );
}

export default App;
