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

function Keypad({
  setDisplayTotal,
  setCurrentAmount,
  currentAmount,
  setCurrentTotal,
  currentTotal,
  setCurrentOperator,
  currentOperator,
}) {
  const clickNumber = (event) => {
    if (currentOperator === "=") {
      setCurrentTotal(0);
      setCurrentOperator("");
    }
    setDisplayTotal(false);
    const number = event.target.innerText;
    setCurrentAmount((currentAmount) => {
      if (currentAmount === 0) {
        return Number(number);
      } else {
        return currentAmount + number;
      }
    });
  };

  const clickOperatorFunction = (event) => {
    setDisplayTotal(true);
    let operator = event.target.innerText;
    console.log(operator);
    if (currentOperator === "") {
      setCurrentTotal(Number(currentAmount));
    }
    if (currentOperator === "+") {
      setCurrentTotal((currentTotal) => {
        return Number(currentTotal) + Number(currentAmount);
      });
    }
    if (currentOperator === "-") {
      if (currentTotal === 0) {
        setCurrentTotal(currentAmount);
      } else {
        setCurrentTotal((currentTotal) => {
          return Number(currentTotal) - Number(currentAmount);
        });
      }
    }
    if (currentOperator === "X") {
      setCurrentTotal(currentTotal * Number(currentAmount));
    }
    if (currentOperator === "÷") {
      setCurrentTotal(currentTotal / Number(currentAmount));
    }
    setCurrentAmount(0);
    setCurrentOperator(operator);
  };

  const clickEqualsFunction = () => {
    setDisplayTotal(true);
    if (currentOperator === "" && currentAmount !== 0) {
      setCurrentTotal(Number(currentAmount));
    }
    if (currentOperator === "+") {
      setCurrentTotal(currentTotal + Number(currentAmount));
    }
    if (currentOperator === "-") {
      setCurrentTotal(currentTotal - Number(currentAmount));
    }
    if (currentOperator === "X") {
      setCurrentTotal(currentTotal * Number(currentAmount));
    }
    if (currentOperator === "÷") {
      setCurrentTotal(currentTotal / Number(currentAmount));
    }
    if (currentOperator === "√") {
      setCurrentTotal(Math.sqrt(currentTotal));
    }
    setCurrentAmount(0);
    setCurrentOperator("=");
  };

  const calculateExpression = (operator = "") => {
    setDisplayTotal(true);
    if (operator === "" && currentAmount !== 0) {
      console.log("here")
      setCurrentTotal(Number(currentAmount));
    }
    if (operator === "add") {
      setCurrentTotal(currentTotal + Number(currentAmount));
    }
    if (operator === "-") {
      setCurrentTotal(currentTotal - Number(currentAmount));
    }
    if (operator === "X") {
      setCurrentTotal(currentTotal * Number(currentAmount));
    }
    if (operator === "÷") {
      setCurrentTotal(currentTotal / Number(currentAmount));
    }
    if (operator === "√") {
      setCurrentTotal(Math.sqrt(currentTotal));
    }
    setCurrentAmount(0);
    setCurrentOperator("=");
  }

  const clickAllClearFunction = () => {
    setCurrentAmount(0);
    setCurrentTotal(0);
    setCurrentOperator("");
  };

  return (
    <KeypadContainer>
      <div style={{ gridArea: "model-no", marginLeft: "calc(100% / 6)" }}>
        <p>SL-300SV</p>
      </div>
      <CasioButton onClick={clickOperatorFunction} style={{ gridArea: "sqrt" }}>
        √
      </CasioButton>
      <CasioButton style={{ gridArea: "off" }}>OFF</CasioButton>
      <CasioButton style={{ gridArea: "MC" }}>MC</CasioButton>
      <CasioButton style={{ gridArea: "MR" }}>MR</CasioButton>
      <CasioButton style={{ gridArea: "Mminus" }}>M-</CasioButton>
      <CasioButton style={{ gridArea: "Mplus" }}>M+</CasioButton>
      <CasioButton
        onClick={clickOperatorFunction}
        style={{ gridArea: "divide" }}
      >
        ÷
      </CasioButton>
      <CasioButton style={{ gridArea: "percent" }}>%</CasioButton>
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
        onClick={clickOperatorFunction}
        style={{ gridArea: "multiply" }}
      >
        X
      </CasioButton>
      <CasioButton style={{ gridArea: "negate" }}>+/-</CasioButton>
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
        onClick={clickOperatorFunction}
        style={{ gridArea: "minus" }}
      >
        -
      </CasioButton>
      <CasioButton style={{ gridArea: "clear", background: "#9e3147" }}>
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
      <CasioButton style={{ gridArea: "dot" }}>.</CasioButton>
      <CasioButton onClick={clickEqualsFunction} style={{ gridArea: "equals" }}>
        =
      </CasioButton>
      <CasioButton onClick={calculateExpression("add")} style={{ gridArea: "add" }}>
        +
      </CasioButton>
    </KeypadContainer>
  );
}

export default Keypad;
