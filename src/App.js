import styled, { createGlobalStyle } from 'styled-components';
import Menu from './components/Menu';
import Main from './components/Main';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    color: white;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Menu />
        <Main />
      </Wrapper>
    </>
  );
}

export default App;
