import styled from 'styled-components';
import { PiChatBold } from 'react-icons/pi';

const ChatDiv = styled.div`
  width: 100%;
  height: 45px;
  background-color: transparent;
  border-radius: 5px;
  color: white;
  font-size: 14px;
  overflow: hidden;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: rgb(43, 43, 50);
  }
`;

const IconContainer = styled.div`
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
`;

const ChatTitle = styled.div`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left: 10px;
`;

export default function ChatHistory(props) {
  const { id, date, title } = props.data;
  return (
    <>
      <ChatDiv>
        <IconContainer>
          <PiChatBold size="16" />
        </IconContainer>
        <ChatTitle>{title}</ChatTitle>
      </ChatDiv>
    </>
  );
}
