import styled, { createGlobalStyle } from 'styled-components';
import Menu from './components/Menu';
import Input from './components/Input';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;

const Wrapper = styled.div`
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
        <Input />
      </Wrapper>
    </>
  );
}

export default App;
