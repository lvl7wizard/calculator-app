import styled from "styled-components";
import { useState } from "react";

const KeypadContainer = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  color: #3d4047;
  display: grid;
  font-size: 0.7rem;
  font-weight: bold;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 45px) auto;
  grid-template-areas:
    "model-no model-no spacer sqrt off"
    "MC MR Mminus Mplus divide"
    "percent seven eight nine multiply"
    "negate four five six minus"
    "clear one two three add"
    "allclear zero dot equals add";
    "on";
`;

const CasioButton = styled.button`
  type: button;
  margin: 3px;
  background: #373a41;
  color: #faf9f6;
  border-radius: 7px 7px 17px 17px;
  border: solid black 0.5px;
  box-shadow: inset 1px 1px 2px rgba(255, 255, 255, 0.3),
    1px 1px 2px rgba(0, 0, 0, 0.3);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 17px;

  -webkit-tap-highlight-color: transparent;
  user-select: none;

  &:hover {
    cursor: pointer;
  }
  &:active {
    box-shadow: inset 0px 0px 2px 1px rgba(0, 0, 0, 0.2);
    font-size: 16.5px;
  }
`;

const SmallCasioButton = styled(CasioButton)`
  type: button;
  margin: 7px;
  font-size: 13px;
  &:active {
    font-size: 12.5px;
  }
`;

const OnLabel = styled.label`
  text-align: center;
  margin-bottom: -5px;
  font-family: casio-logo;
`;

const ModelNoTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: casio-logo;
  font-size: 12.5px;
`;

function Keypad({
  setDisplayTotal,
  displayTotal,
  setCurrentAmount,
  currentAmount,
  setCurrentTotal,
  currentTotal,
  setPreviousOperator,
  previousOperator,
  setPowerOn,
}) {
  const [memory, setMemory] = useState(0);
  const clickNumber = (event) => {
    if (previousOperator === "equals") {
      setCurrentTotal(0);
    }
    setDisplayTotal(false);
    const number = event.target.innerText;
    setCurrentAmount((currentAmount) => {
      if (currentAmount === 0 && number !== ".") {
        return number;
      } else if (Number(currentAmount) === 0 && Number(number) === 0) {
        return 0;
      } else if (Number(currentAmount) === 0 && number === ".") {
        return "0.";
      } else {
        return currentAmount.slice(0) === "0"
          ? currentAmount.slice(1) + number
          : currentAmount + number;
      }
    });
  };

  const clickEqualsFunction = () => {
    setDisplayTotal(true);
    if (previousOperator === "equals" && currentAmount !== 0) {
      setCurrentTotal(Number(currentAmount));
    }
    if (previousOperator === "add") {
      setCurrentTotal(currentTotal + Number(currentAmount));
    }
    if (previousOperator === "minus") {
      setCurrentTotal(currentTotal - Number(currentAmount));
    }
    if (previousOperator === "multiply") {
      setCurrentTotal(currentTotal * Number(currentAmount));
    }
    if (previousOperator === "divide") {
      setCurrentTotal(currentTotal / Number(currentAmount));
    }
    if (previousOperator === "square") {
      setCurrentTotal(Math.sqrt(currentTotal));
    }
    if (previousOperator === "percent") {
      setCurrentTotal((currentTotal / 100) * currentAmount);
    }
    setCurrentAmount(0);
    setPreviousOperator("equals");
  };

  const calculateExpression = (operator) => {
    setDisplayTotal(true);
    if (previousOperator === null) {
      setCurrentTotal(Number(currentAmount));
    }
    if (previousOperator === "equals") {
      if (currentTotal === 0) {
        setCurrentTotal(Number(currentAmount));
      }
    }
    if (previousOperator === "add") {
      setCurrentTotal(currentTotal + Number(currentAmount));
    } else if (previousOperator === "minus") {
      setCurrentTotal(currentTotal - Number(currentAmount));
    } else if (previousOperator === "multiply") {
      setCurrentTotal(currentTotal * Number(currentAmount));
    } else if (previousOperator === "divide") {
      setCurrentTotal(currentTotal / Number(currentAmount));
    } else if (previousOperator === "percent") {
      setCurrentTotal((currentTotal / 100) * currentAmount);
    }

    if (previousOperator === "square") {
      setCurrentTotal(Math.sqrt(currentTotal));
    }
    setCurrentAmount(0);
    setPreviousOperator(operator);
    return currentTotal;
  };

  const negate = () => {
    let value = currentAmount;
    if (value.charAt(0) === "-") {
      value = value.slice(1);
    } else {
      value = "-" + value;
    }
    setCurrentAmount(value);
  };

  const squareRoot = () => {
    calculateExpression("square");
  };

  const clearLast = () => {
    if (!displayTotal) {
      if (currentAmount.length > 1) {
        setCurrentAmount(currentAmount.slice(0, -1));
      } else {
        setCurrentAmount(0);
      }
    } else {
      setCurrentTotal(0);
    }
  };

  const clickAllClearFunction = () => {
    setPowerOn(true);
    setCurrentAmount(0);
    setCurrentTotal(0);
    setPreviousOperator("equals");
  };

  const memoryFunctions = (command) => {
    if (command === "add") {
      displayTotal
        ? setMemory(memory + Number(currentTotal))
        : setMemory(memory + Number(currentAmount));
    }
    if (command === "minus") {
      displayTotal
        ? setMemory(memory - Number(currentTotal))
        : setMemory(memory - Number(currentAmount));
    }
    if (command === "recall") {
      setCurrentAmount(memory);
      setDisplayTotal(false);
    }
    if (command === "clear") {
      setMemory(0);
    }
  };

  const powerButton = (power) => {
    power === true ? setPowerOn(true) : setPowerOn(false);
  };

  return (
    <KeypadContainer>
      {/* first row */}
      <ModelNoTextContainer style={{ gridArea: "model-no" }}>
        <p>SL-300SV</p>
      </ModelNoTextContainer>
      <div /> {/* spacer in grid layout */}
      <SmallCasioButton onClick={() => squareRoot("square")}>
        √
      </SmallCasioButton>
      <SmallCasioButton onClick={() => powerButton(false)}>
        OFF
      </SmallCasioButton>
      {/* second row */}
      <CasioButton onClick={() => memoryFunctions("clear")}> MC </CasioButton>
      <CasioButton onClick={() => memoryFunctions("recall")}>MR</CasioButton>
      <CasioButton onClick={() => memoryFunctions("minus")}>M-</CasioButton>
      <CasioButton onClick={() => memoryFunctions("add")}> M+</CasioButton>
      <CasioButton onClick={() => calculateExpression("divide")}>÷</CasioButton>
      {/* third row */}
      <CasioButton onClick={() => calculateExpression("percent")}>
        %
      </CasioButton>
      <CasioButton onClick={clickNumber}>7</CasioButton>
      <CasioButton onClick={clickNumber}>8</CasioButton>
      <CasioButton onClick={clickNumber}>9</CasioButton>
      <CasioButton onClick={() => calculateExpression("multiply")}>
        X
      </CasioButton>
      {/* fourth row */}
      <CasioButton onClick={negate}>+/-</CasioButton>
      <CasioButton onClick={clickNumber}>4</CasioButton>
      <CasioButton onClick={clickNumber}>5</CasioButton>
      <CasioButton onClick={clickNumber}>6</CasioButton>
      <CasioButton onClick={() => calculateExpression("minus")}>-</CasioButton>
      {/* fifth row */}
      <CasioButton onClick={clearLast} style={{ background: "#9e3147" }}>
        C
      </CasioButton>
      <CasioButton onClick={clickNumber}>1</CasioButton>
      <CasioButton onClick={clickNumber}>2</CasioButton>
      <CasioButton onClick={clickNumber}>3</CasioButton>
      <CasioButton
        onClick={() => calculateExpression("add")}
        style={{ gridArea: "add" }}
      >
        +
      </CasioButton>
      {/* sixth row */}
      <CasioButton
        onClick={clickAllClearFunction}
        style={{ background: "#9e3147" }}
      >
        AC
      </CasioButton>
      <CasioButton onClick={clickNumber}>0</CasioButton>
      <CasioButton onClick={clickNumber}>.</CasioButton>
      <CasioButton onClick={clickEqualsFunction}>=</CasioButton>
      {/* seventh row */}
      <OnLabel>ON</OnLabel>
    </KeypadContainer>
  );
}

export default Keypad;
