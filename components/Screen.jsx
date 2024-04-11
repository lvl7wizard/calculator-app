import styled from "styled-components";

const Background = styled.div`
  height: 55.5px;
  display: flex;
  background-color: #d6e2e2;
  justify-content: end;
  padding: 10px;
  color: black;
  border: solid #666970 15px;
  border-bottom: 1.5rem solid #666970;
  border-radius: 10px 10px 25px 25px;
  border-left: solid 15px #666970;
  border-right: solid 15px #666970;
  margin-left: -13px;
  margin-right: -13px;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.8),
    inset 0px 0px 4px 2px rgba(0, 0, 0, 0.8);
`;

const CalculatorText = styled.p`
  font-family: digital-clock-font;
  font-size: 4.4rem;
  color: rgba(26, 26, 26, 0.85);
  margin: -0px;
  margin-right: -5px
`;

function Screen({ currentAmount, displayTotal, currentTotal, powerOn }) {
  return (
    <Background>
      {powerOn ? (
        <CalculatorText>
          {displayTotal
            ? String(currentTotal).slice(0, 8)
            : String(currentAmount).slice(0, 8)}
        </CalculatorText>
      ) : null}
    </Background>
  );
}

export default Screen;
