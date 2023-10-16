import styled, { createGlobalStyle } from 'styled-components';
import Menu from './components/Menu';
import Main from './components/Main';
import { useDispatch, useSelector } from 'react-redux';
import { isClosedAction } from './store/isClosed';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    color: white;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

function App() {
  const isClosed = useSelector((state) => state.isClosed);
  console.log('isClosed : ', isClosed);
  const dispatch = useDispatch();

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
