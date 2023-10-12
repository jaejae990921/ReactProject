import styled from 'styled-components';
import Version from './Version';
import Title from './Title';
import Input from './Input';
import Preview from './Preview';
import { useState } from 'react';

const Stmaindiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #353540;
  padding-left: 260px;
`;

export default function Main() {
  const [list, setList] = useState([]);
  const addMsg = (text) => {
    setList([...list, text]);
  };
  return (
    <>
      <Stmaindiv>
        {list.length == 0 ? (
          <>
            <Version />
            <Title />
          </>
        ) : (
          <>{/* 채팅 띄우는곳 */}</>
        )}
        <Input addMsg={addMsg} />
        <Preview />
      </Stmaindiv>
    </>
  );
}
