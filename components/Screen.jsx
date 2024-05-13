import styled from "styled-components";

const Background = styled.div`
  height: 90px;
  display: flex;
  background-color: #d6e2e2;
  justify-content: end;
  align-items: center;
  border-color: #666970;
  border-style: solid;
  border-width: 15px 15px 25px 15px;
  border-radius: 10px 10px 25px 25px;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.8),
    inset 0px 0px 4px 2px rgba(0, 0, 0, 0.8);
`;

const CalculatorText = styled.p`
  font-family: digital-clock-font;
  font-size: 62.5px;
  color: rgba(26, 26, 26, 0.85);
  padding-top: 6.5px; // padding-top added for vertical centering as the font has blank pixels under each chararcter
  margin-right: 8px; // margin-right added so text looks even when 8 digits inputted
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
