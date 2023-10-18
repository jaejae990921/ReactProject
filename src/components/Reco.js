import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { RiSendPlane2Fill } from 'react-icons/ri';

const RecoDiv = styled.div`
  width: 100%;
  height: 45%;
  background-color: transparent;
  border-radius: 13px;
  border: 1.5px solid rgb(79, 80, 96);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 10px;
  position: relative;
  cursor: pointer;
  opacity: 0; /* 초기에는 보이지 않음 */
  transform: translateY(100%); /* 초기 위치를 아래로 이동 */

  &.slide-in {
    // props.id에 따라 다른 animation-delay를 줘서 순차적으로 나타나게 함
    animation: slideIn 0.2s ease forwards ${(props) => props.id * 0.1}s;
  }

  @keyframes slideIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:hover {
    background-color: rgb(64, 65, 79);
  }
`;

const TitleDiv = styled.div`
  color: rgb(196, 197, 210);
  font-size: 14px;
  font-weight: bold;
`;

const ContentDiv = styled.div`
  color: rgb(119, 120, 133);
  font-size: 13px;
  font-weight: bold;
`;

export default function Reco(props) {
  const { title, content, addMsg, id } = props;
  const [response, setResponse] = useState('');
  const [ishover, setIshover] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    setHasEntered(true);
  }, []);

  const handleMouseEnter = () => {
    setIshover(true);
  };

  const handleMouseLeave = () => {
    setIshover(false);
  };

  const API_KEY = process.env.REACT_APP_API_KEY;

  const sendMessage = async () => {
    addMsg(title + ' ' + content);

    const apiUrl = 'https://api.openai.com/v1/chat/completions';
    const apiKey = API_KEY;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-4',
          messages: [
            {
              role: 'user',
              content: title + ' ' + content + ' ' + 'Please explain briefly',
            },
          ],
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const chatResponse = data.choices[0].message.content;
        addMsg(chatResponse);
        setResponse(chatResponse);
      } else {
        console.error('Failed to fetch response from ChatGPT API');
      }
    } catch (error) {
      console.error('Error while fetching response:', error);
    }
  };

  return (
    <RecoDiv
      onClick={sendMessage}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={hasEntered ? 'slide-in' : ''}
      id={id}
    >
      <RiSendPlane2Fill />
      <TitleDiv>{title}</TitleDiv>
      <ContentDiv>{content}</ContentDiv>
      <RiSendPlane2Fill
        style={{
          position: 'absolute',
          top: '17px',
          right: '10px',
          fill: 'rgb(217, 217, 227)',
          opacity: ishover ? '1' : '0',
        }}
      />
    </RecoDiv>
  );
}
