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

function Keypad() {
  return (
    <KeypadContainer>
      <div style={{ gridArea: "model-no", marginLeft: "calc(100% / 6)" }}>
        <p>SL-300SV</p>
      </div>
      <CasioButton style={{ gridArea: "sqrt" }}>√</CasioButton>
      <CasioButton style={{ gridArea: "off" }}>OFF</CasioButton>
      <CasioButton style={{ gridArea: "MC" }}>MC</CasioButton>
      <CasioButton style={{ gridArea: "MR" }}>MR</CasioButton>
      <CasioButton style={{ gridArea: "Mminus" }}>M-</CasioButton>
      <CasioButton style={{ gridArea: "Mplus" }}>M+</CasioButton>
      <CasioButton style={{ gridArea: "divide" }}>÷</CasioButton>
      <CasioButton style={{ gridArea: "percent" }}>%</CasioButton>
      <CasioButton style={{ gridArea: "seven" }}>7</CasioButton>
      <CasioButton style={{ gridArea: "eight" }}>8</CasioButton>
      <CasioButton style={{ gridArea: "nine" }}>9</CasioButton>
      <CasioButton style={{ gridArea: "multiply" }}>X</CasioButton>
      <CasioButton style={{ gridArea: "negate" }}>+/-</CasioButton>
      <CasioButton style={{ gridArea: "four" }}>4</CasioButton>
      <CasioButton style={{ gridArea: "five" }}>5</CasioButton>
      <CasioButton style={{ gridArea: "six" }}>6</CasioButton>
      <CasioButton style={{ gridArea: "minus" }}>-</CasioButton>
      <CasioButton style={{ gridArea: "clear", background: "#9e3147" }}>
        C
      </CasioButton>
      <CasioButton style={{ gridArea: "one" }}>1</CasioButton>
      <CasioButton style={{ gridArea: "two" }}>2</CasioButton>
      <CasioButton style={{ gridArea: "three" }}>3</CasioButton>
      <CasioButton style={{ gridArea: "allclear", background: "#9e3147" }}>
        AC
      </CasioButton>
      <CasioButton style={{ gridArea: "zero" }}>0</CasioButton>
      <CasioButton style={{ gridArea: "dot" }}>.</CasioButton>
      <CasioButton style={{ gridArea: "equals" }}>=</CasioButton>
      <CasioButton style={{ gridArea: "add" }}>+</CasioButton>
    </KeypadContainer>
  );
}

export default Keypad;
