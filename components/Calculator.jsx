import { useState } from "react";
import Screen from "./Screen";
import Keypad from "./Keypad";
import SolarPanel from "./SolarPanel";
import styled from "styled-components";

const CalculatorCasing = styled.div`
  display: block;
  min-width: 275px;
  max-width: 275px;
  padding: 10px;
  background-color: #d3d2d8;

  border-top: 7px solid #cccccc;
  border-left: 10px solid #b4b3b5;
  border-bottom: 10px solid #a2a1a4;
  border-right: 10px solid #a0a0a0;
  border-radius: 5px 5px 20px 20px;

  box-shadow: inset 1px 1px 10px rgba(255, 255, 255, 0.3),
    inset -4px -4px 10px rgba(0, 0, 0, 0.4);
`;

const LogoAndSolarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr auto;
  grid-template-areas:
    "logo solarPanel"
    ". label";
`;

const LogoText = styled.p`
  grid-area: logo;
  font-family: casio-logo;
  font-size: 1.3rem;
  font-weight: bold;
  color: #3d4047;
  margin: 0px;
  margin-left: 8.5%;
  align-self: center;
`;

const SolarLabelText = styled.p`
  grid-area: label;
  font-size: 0.6rem;
  font-weight: bold;
  font-family: casio-logo;
  color: #3d4047;
  margin: 5px;
  justify-self: center;
`;

function Calculator() {
  const [displayTotal, setDisplayTotal] = useState(false);
  const [currentTotal, setCurrentTotal] = useState(0);
  const [currentAmount, setCurrentAmount] = useState(0);
  const [previousOperator, setPreviousOperator] = useState(null);
  const [powerOn, setPowerOn] = useState(true);
  return (
    <>
      <CalculatorCasing>
        <LogoAndSolarContainer>
          <LogoText>CASIO</LogoText>
          <SolarPanel />
          <SolarLabelText>TWO WAY POWER</SolarLabelText>
        </LogoAndSolarContainer>

        <div style={{ gridArea: "screen" }}>
          <Screen
            displayTotal={displayTotal}
            currentAmount={currentAmount}
            currentTotal={currentTotal}
            powerOn={powerOn}
          />
        </div>
        <div style={{ gridArea: "keypad" }}>
          <Keypad
            setDisplayTotal={setDisplayTotal}
            displayTotal={displayTotal}
            setCurrentAmount={setCurrentAmount}
            currentAmount={currentAmount}
            setCurrentTotal={setCurrentTotal}
            currentTotal={currentTotal}
            setPreviousOperator={setPreviousOperator}
            previousOperator={previousOperator}
            setPowerOn={setPowerOn}
          />
        </div>
      </CalculatorCasing>
    </>
  );
}

export default Calculator;
