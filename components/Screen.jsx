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
margin-left: -2.5px;
margin-right: -2.5px;
box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.8);
`

const CalculatorText = styled.p`
font-family: Courier New;
font-size: 52px;
margin: 0px;
`

function Screen ({currentAmount, displayTotal, currentTotal, powerOn}) {
    return <Background>
        {powerOn ? 
        <CalculatorText>{displayTotal ? currentTotal : currentAmount}</CalculatorText>
        :
        null
    }
    </Background>
}

export default Screen;