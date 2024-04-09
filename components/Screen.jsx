import styled from "styled-components";

const Background = styled.div`
display: flex;
background-color: #d6e2e2;
justify-content: end;
padding: 10px;
color: black;
border: solid #666970 10px;
border-radius: 15px;
margin-left: -2.5px;
margin-right: -2.5px;
`

const CalculatorText = styled.p`
font-family: Courier New;
font-size: 50px;
margin: 0px;
`

function Screen ({currentAmount, displayTotal, currentTotal}) {
    return <Background>
        <CalculatorText>{displayTotal ? currentTotal : currentAmount}</CalculatorText>
    </Background>
}

export default Screen;