import styled from 'styled-components';
import Version from './Version';
import Title from './Title';
import Input from './Input';
import Preview from './Preview';
import Chat from './Chat';
import { useState } from 'react';
import Default from './Default';

const Stmaindiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #353540;
  padding-left: 260px;
  border: none;
`;

const BottomDiv = styled.div`
  /* width: 100%; */
  height: 150px;
  position: absolute;
  bottom: 0px;
  background-image: linear-gradient(
    180deg,
    rgba(53, 55, 64, 0),
    #353740 58.85%
  );
`;

const BottomChat = styled.div`
  width: 100%;
  height: 190px;
  background-color: rgb(52, 53, 65);
`;

const ChatDiv = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #353540;

  // 스크롤바 커스텀
  &::-webkit-scrollbar {
    width: 8px;
    height: 18px;
  }

  &::-webkit-scrollbar-thumb {
    background: #bbbbc6;
    border-radius: 12px 12px 12px 12px;
  }
`;

export default function Main() {
  const [list, setList] = useState([]);
  const addMsg = (text) => {
    setList((prevList) => [...prevList, text]);
    console.log(list);
  };
  return (
    <Stmaindiv>
      {list.length == 0 ? (
        <>
          <Version />
          <Title />
        </>
      ) : (
        <>
          <ChatDiv>
            <Default />
            {list.map((chat, idx) => {
              console.log(chat, idx);
              return <Chat chat={chat} idx={idx} />;
            })}
            <BottomChat />
          </ChatDiv>
        </>
      )}
      {/* <BottomDiv /> */}
      <Input addMsg={addMsg} />
      <Preview />
    </Stmaindiv>
  );
}
