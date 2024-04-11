import "./App.css";
import Calculator from "../components/Calculator";
import styled from "styled-components";

const Background = styled.div`
background: radial-gradient(circle at bottom, navy 0, black 100%);
display: flex;
height: 100vh;
justify-content: center;
align-items: center;
`
const ContentWrapper = styled.div`
overflow: auto;
`;

function App() {
  return (
      <Background>
        <ContentWrapper>
      <Calculator/>
        </ContentWrapper>
      </Background>
  );
}

export default App;
