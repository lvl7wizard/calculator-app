import "./App.css";
import Calculator from "../components/Calculator";
import styled from "styled-components";

const Background = styled.div`
background: radial-gradient(circle at bottom, navy 0, black 100%);
display: flex;
height: 100vh;
min-width: 320px;
justify-content: center;
align-items: center;
`

function App() {
  return (
      <Background>
      <Calculator/>
      </Background>
  );
}

export default App;
