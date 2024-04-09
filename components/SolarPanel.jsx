import styled from "styled-components"

const SolarPanelScreen = styled.div`
height: 50px;
width: 100%;
background-color: #2e1b0d;
`
const SolarPanelText = styled.p`
text-align: center;
font-size: 10px;
`

function SolarPanel () {
    return (
    <div>
    <SolarPanelScreen/>
    <SolarPanelText>TWO WAY POWER</SolarPanelText>
    </div>
    )
}

export default SolarPanel;