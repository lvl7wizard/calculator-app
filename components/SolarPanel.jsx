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
box-shadow: 0px 0px 1px 0.5px rgba(0, 0, 0, 0.8);
`
const SolarPanelText = styled.p`
font-size: 0.6rem;
font-weight: bold;
font-family: casio-logo;
color: #3d4047;
margin: 5px;
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