import styled from "styled-components";

const KeypadContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-template-areas:
    "model-no model-no model-no sqrt off"
    "MC MR Mminus Mplus divide"
    "percent seven eight nine multiply"
    "negate four five six minus"
    "clear one two three add"
    "allclear zero dot equals add";
`;

const CasioButton = styled.button`
  margin: 5px;
  padding: 5px;
  border: solid black;
  border-radius: 4px 4px 15px 15px;
  background: #373a41;
  color: white;
`;

const OnLabel = styled.p`
margin-top: -8px;
margin-bottom: -7px;
margin-left: 21.5px;
`

function Keypad({
  setDisplayTotal,
  displayTotal,
  setCurrentAmount,
  currentAmount,
  setCurrentTotal,
  currentTotal,
  setPreviousOperator,
  previousOperator,
  setMemory,
  memory,
  setPowerOn
}) {

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
        return 0
      }
      else {
        return currentAmount.slice(0) === "0" ? currentAmount.slice(1) + number : currentAmount + number;
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
      setCurrentTotal(currentTotal / 100 * currentAmount);
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
      setCurrentTotal(currentTotal / 100 * currentAmount);
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
      value = '-' + value;
    }
    setCurrentAmount(value);
  }

  // You currently have to press equals or another operator to make this work
  // I believe the original model does the immediate calculation once the button is pressed
  const squareRoot = () => {
    calculateExpression("square");
  };

  // This currently clears the last inputted digit
  // Need to research whether it should clear all digits from currentAmount in one go
  // Also whether it can clear the currentTotal if currentAmount is 0
  const clearLast = () => {
    if (currentAmount.length > 1) {
      setCurrentAmount(currentAmount.slice(0,-1))
    } else {
      setCurrentAmount(0);
    }
  }

  const clickAllClearFunction = () => {
    setPowerOn(true);
    setCurrentAmount(0);
    setCurrentTotal(0);
    setPreviousOperator("equals");
  };

  const memoryFunctions = (command) => {
    if (command === "add") {
      displayTotal ? setMemory(memory + Number(currentTotal)) : setMemory(memory + Number(currentAmount))
    }
    if (command === "minus") {
      displayTotal ? setMemory(memory - Number(currentTotal)) : setMemory(memory - Number(currentAmount))
    }
    if (command === "recall") {
      setCurrentAmount(memory)
      setDisplayTotal(false)
    }
    if (command === "clear") {
      setMemory(0)
    }
  }

  const powerButton = (power) => {
    power === true ? setPowerOn(true) : setPowerOn(false)
  }

  return (
    <KeypadContainer>
      <div style={{ gridArea: "model-no", marginLeft: "calc(100% / 6)" }}>
        <p>SL-300SV</p>
      </div>
      <CasioButton
        onClick={() => squareRoot("square")}
        style={{ gridArea: "sqrt" }}
      >
        √
      </CasioButton>
      <CasioButton onClick={() => powerButton(false)} style={{ gridArea: "off" }}>OFF</CasioButton>
      <CasioButton onClick={() => memoryFunctions("clear")} style={{ gridArea: "MC" }}>MC</CasioButton>
      <CasioButton onClick={() => memoryFunctions("recall")} style={{ gridArea: "MR" }}>MR</CasioButton>
      <CasioButton onClick={() => memoryFunctions("minus")} style={{ gridArea: "Mminus" }}>M-</CasioButton>
      <CasioButton onClick={() => memoryFunctions("add")}style={{ gridArea: "Mplus" }}>M+</CasioButton>
      <CasioButton
        onClick={() => calculateExpression("divide")}
        style={{ gridArea: "divide" }}
      >
        ÷
      </CasioButton>
      <CasioButton onClick={() => calculateExpression("percent")} style={{ gridArea: "percent" }}>%</CasioButton>
      <CasioButton onClick={clickNumber} style={{ gridArea: "seven" }}>
        7
      </CasioButton>
      <CasioButton onClick={clickNumber} style={{ gridArea: "eight" }}>
        8
      </CasioButton>
      <CasioButton onClick={clickNumber} style={{ gridArea: "nine" }}>
        9
      </CasioButton>
      <CasioButton
        onClick={() => calculateExpression("multiply")}
        style={{ gridArea: "multiply" }}
      >
        X
      </CasioButton>
      <CasioButton onClick={negate} style={{ gridArea: "negate" }}>+/-</CasioButton>
      <CasioButton onClick={clickNumber} style={{ gridArea: "four" }}>
        4
      </CasioButton>
      <CasioButton onClick={clickNumber} style={{ gridArea: "five" }}>
        5
      </CasioButton>
      <CasioButton onClick={clickNumber} style={{ gridArea: "six" }}>
        6
      </CasioButton>
      <CasioButton
        onClick={() => calculateExpression("minus")}
        style={{ gridArea: "minus" }}
      >
        -
      </CasioButton>
      <CasioButton onClick={clearLast} style={{ gridArea: "clear", background: "#9e3147" }}>
        C
      </CasioButton>
      <CasioButton onClick={clickNumber} style={{ gridArea: "one" }}>
        1
      </CasioButton>
      <CasioButton onClick={clickNumber} style={{ gridArea: "two" }}>
        2
      </CasioButton>
      <CasioButton onClick={clickNumber} style={{ gridArea: "three" }}>
        3
      </CasioButton>
      <CasioButton
        onClick={clickAllClearFunction}
        style={{ gridArea: "allclear", background: "#9e3147" }}
      >
        AC
      </CasioButton>
      <CasioButton onClick={clickNumber} style={{ gridArea: "zero" }}>
        0
      </CasioButton>
      <CasioButton onClick={clickNumber} style={{ gridArea: "dot" }}>.</CasioButton>
      <CasioButton onClick={clickEqualsFunction} style={{ gridArea: "equals" }}>
        =
      </CasioButton>
      <CasioButton
        onClick={() => calculateExpression("add")}
        style={{ gridArea: "add" }}
      >
        +
      </CasioButton>
      <OnLabel>on</OnLabel>
    </KeypadContainer>
  );
}

export default Keypad;
