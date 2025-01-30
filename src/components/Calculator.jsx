import { useState } from "react";
import "./Calculator.css";
import { Container, Box } from "@mui/material";

export default function Calculator() {
  const [num, setNum] = useState(0);
  const [operator, setOperator] = useState();
  const [oldNum, setOldNum] = useState(0);

  function result(e) {
    var input = e.target.value;
    if (num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
  }
  function clear() {
    setNum(0);
  }
  function porcetage() {
    setNum(num / 100);
  }
  function changeSign() {
    if (num < 0) {
      setNum(Math.abs(num));
    } else if (num > 0) {
      setNum(-num);
    }
  }
  function operators(e) {
    var operator = e.target.value;
    setOperator(operator);
    console.log(operator);
    setOldNum(num);
    setNum(0);
  }
  function calculate() {
    console.log(oldNum);
    console.log(operator);
    console.log(num);
    if (operator === "+") {
      setNum(parseFloat(oldNum) + parseFloat(num));
    } else if (operator === "-") {
      setNum(parseFloat(oldNum) - parseFloat(num));
    } else if (operator === "*") {
      setNum(parseFloat(oldNum) * parseFloat(num));
    } else if (operator === "/") {
      setNum(parseFloat(oldNum) / parseFloat(num));
    }
  }

  return (
    <div>
      <Container maxWidth="xs">
        <Box m={5} />
        <div className="wrapper">
          <h1 className="res">{num}</h1>
          <button className="cyan" onClick={clear}>
            AC
          </button>
          <button className="cyan" onClick={changeSign} value={"+"}>
            +/-
          </button>
          <button className="cyan" onClick={porcetage}>
            %
          </button>
          <button className="purple" onClick={operators} value={"/"}>
            /
          </button>
          <button className="pink" onClick={result} value={7}>
            7
          </button>
          <button className="pink" onClick={result} value={8}>
            8
          </button>
          <button className="pink" onClick={result} value={9}>
            9
          </button>
          <button className="purple" onClick={operators} value={"*"}>
            X
          </button>
          <button className="pink" onClick={result} value={4}>
            4
          </button>
          <button className="pink" onClick={result} value={5}>
            5
          </button>
          <button className="pink" onClick={result} value={6}>
            6
          </button>
          <button className="purple" onClick={operators} value={"-"}>
            -
          </button>
          <button className="pink" onClick={result} value={1}>
            1
          </button>
          <button className="pink" onClick={result} value={2}>
            2
          </button>
          <button className="pink" onClick={result} value={3}>
            3
          </button>
          <button className="purple" onClick={operators} value={"+"}>
            +
          </button>
          <button className="pink" id="zero" onClick={result} value={0}>
            0
          </button>
          <button className="cyan" onClick={result} value={"."}>
            .
          </button>
          <button className="cyan" onClick={calculate}>
            =
          </button>
        </div>
      </Container>
    </div>
  );
}
