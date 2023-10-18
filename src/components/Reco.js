import styled from 'styled-components';
import { useState } from 'react';
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
  const { title, content, addMsg } = props;
  const [response, setResponse] = useState('');
  const [ishover, setIshover] = useState(false);

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
