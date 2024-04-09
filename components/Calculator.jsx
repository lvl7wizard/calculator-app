import { useState } from "react";
import Screen from "./Screen";
import Keypad from "./Keypad";
import Logo from "./Logo";
import SolarPanel from "./SolarPanel";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: #d3d2d8;
  border-top: 5px solid #b6b6b7;
  border-bottom: 10px solid #b6b6b7;
  border-left: 8px solid #b6b6b7;
  border-right: 8px solid #b6b6b7;
  border-radius: 4px 4px 15px 15px;
  box-shadow: 3px 4px 10px rgba(0, 0, 0, 0.3);
  padding: 15px;
  display: grid;
  width: 300px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    "logo solar-panel"
    "screen screen"
    "keypad keypad";
`;

function Calculator() {
  const [displayTotal, setDisplayTotal] = useState(false);
  const [currentTotal, setCurrentTotal] = useState(0);
  const [currentAmount, setCurrentAmount] = useState(0);
  const [previousOperator, setPreviousOperator] = useState(null);
  return (
    <>
      <StyledDiv>
        <div style={{ gridArea: "logo" }}>
          <Logo />
        </div>
        <div style={{ gridArea: "solar-panel" }}>
          <SolarPanel />
        </div>
        <div style={{ gridArea: "screen" }}>
          <Screen
            displayTotal={displayTotal}
            currentAmount={currentAmount}
            currentTotal={currentTotal}
          />
        </div>
        <div style={{ gridArea: "keypad" }}>
          <Keypad
            setDisplayTotal={setDisplayTotal}
            setCurrentAmount={setCurrentAmount}
            currentAmount={currentAmount}
            setCurrentTotal={setCurrentTotal}
            currentTotal={currentTotal}
            setPreviousOperator={setPreviousOperator}
            previousOperator={previousOperator}
          />
        </div>
      </StyledDiv>
      <div>
      <h3>Troubleshooting: </h3>
      <p>currentTotal: {currentTotal}</p>
      <p>currentAmount: {currentAmount}</p>
      <p>previousOperator: {previousOperator}</p>
      <p>displayTotal: {displayTotal ? "true" : "false"}</p>
      </div>
    </>
  );
}

export default Calculator;
