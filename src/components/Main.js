import styled from 'styled-components';
import Version from './Version';
import Title from './Title';
import Input from './Input';
import Preview from './Preview';
import Chat from './Chat';
import { useState } from 'react';
import Default from './Default';
import { useDispatch, useSelector } from 'react-redux';
import { isClosedAction } from '../store/isClosed';
import { BiQuestionMark } from 'react-icons/bi';
import closed from '../assets/open.png';

const Stmaindiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #353540;
  padding-left: ${(props) => (props.isClosed ? '0px' : '260px')};
  z-index: ${(props) => (props.isClosed ? '2' : '1')};
  border: none;
  transition: all 0.2s;
`;

const BottomDiv = styled.div`
  width: ${(props) => (props.isClosed ? '100%' : 'calc(100% - 260px)')};
  height: 150px;
  position: absolute;
  bottom: 0px;
  right: 0px;
  background-image: linear-gradient(
    180deg,
    rgba(53, 55, 64, 0),
    #353740 58.85%
  );
  transition: all 0.2s;
`;

const QuestionDiv = styled.div`
  position: absolute;
  bottom: 15px;
  right: 15px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: rgb(74, 74, 83);
  border: 3px solid rgb(79, 80, 96);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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

const OpenDiv = styled.div`
  width: 40px;
  height: 45px;
  background-color: rgb(52, 53, 65);
  border-radius: 8px;
  position: absolute;
  top: 8px;
  left: 8px;
  display: ${(props) => (props.isClosed ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: rgb(64, 65, 79);
  }
`;

export default function Main() {
  const [list, setList] = useState([]);
  const addMsg = (text) => {
    setList((prevList) => [...prevList, text]);
  };

  const isClosed = useSelector((state) => state.isClosed);
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(isClosedAction.false());
  };

  return (
    <Stmaindiv isClosed={isClosed}>
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
              return <Chat chat={chat} idx={idx} />;
            })}
            <BottomChat />
          </ChatDiv>
        </>
      )}
      <BottomDiv isClosed={isClosed} />
      <Input addMsg={addMsg} />
      <Preview />
      <OpenDiv onClick={handleOpen} isClosed={isClosed}>
        <img src={closed} width={20} height={20} />
      </OpenDiv>
      <QuestionDiv>
        <BiQuestionMark style={{ fill: 'rgb(196, 197, 210)' }} />
      </QuestionDiv>
    </Stmaindiv>
  );
}
