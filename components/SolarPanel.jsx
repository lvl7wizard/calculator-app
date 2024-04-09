import styled from "styled-components"

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const SolarPanelScreen = styled.div`
height: 40px;
width: 100%;
background-color: #2e1b0d;
border: solid #666970 3px;
border-radius: 5px;
`
const SolarPanelText = styled.p`
font-size: 7.5px;
font-weight: bold;
`

function SolarPanel () {
    return (
    <Container>
    <SolarPanelScreen/>
    <SolarPanelText>TWO WAY POWER</SolarPanelText>
    </Container>
    )
}

export default SolarPanel;