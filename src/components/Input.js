import { useState } from 'react';
import styled from 'styled-components';
import { RiSendPlane2Fill } from 'react-icons/ri';

const Stdiv = styled.div`
  background-color: #40414f;
  border-radius: 15px;
  display: flex;
  width: 750px;
  height: ${(props) => (props.isBig ? '200px' : '60px')};
  padding: 0 10px;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 30px;
`;

const Sttextarea = styled.textarea`
  max-width: 98%;
  width: auto;
  border-radius: 15px;
  height: ${(props) => (props.isBig ? '188px' : null)};
  max-height: 200px;
  overflow-y: auto;
  background-color: transparent;
  color: white;
  border: none;
  outline: none;
  font-size: 16px;
  resize: none;
  font-family: 'Noto Sans KR', sans-serif;
  position: absolute;
  bottom: ${(props) => (props.isBig ? '8px' : '18px')};

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

const Stbutton = styled.button`
  border: none;
  border-radius: 10px;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.isInput ? 'rgb(25, 195, 125)' : 'transparent'};
  transition: background-color 0.3s;
  position: absolute;
  right: 10px;
  bottom: 12px;
  cursor: ${(props) => (props.isInput ? 'pointer' : 'default')};
`;

export default function Input({ addMsg }) {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [isInput, setIsInput] = useState(false);
  const [rows, setRows] = useState(1);
  const [isBig, setIsBig] = useState(false);

  const API_KEY = process.env.REACT_APP_API_KEY;

  const sendMessage = async (e) => {
    e.preventDefault();
    addMsg(input);
    setInput('');

    setRows(1);
    setIsInput(false);
    setIsBig(false);

    // 호출할 ChatGPT API 엔드포인트와 API 키 설정
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
          messages: [{ role: 'user', content: input }],
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

  // input 값 변경 및 isInput 값 변경
  const inputChange = (e) => {
    setInput(e.target.value);
    if (e.target.value.length == 0) {
      setIsInput(false);
    } else {
      setIsInput(true);
    }

    // 글자수 45 넘어가거나 \n 포함하고 있으면
    if (e.target.value.length > 43 || e.target.value.includes('\n')) {
      setIsBig(true);
      setRows(7);
    } else {
      setIsBig(false);
      setRows(1);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      sendMessage(e);
    } else if (e.key === 'Enter' && e.shiftKey) {
      setInput(input + '\n');
      e.preventDefault();
    }
  };

  return (
    <>
      <Stdiv isBig={isBig}>
        <Sttextarea
          type="text"
          value={input}
          rows={rows}
          cols={100}
          isBig={isBig}
          onChange={inputChange}
          onKeyDown={handleKeyPress}
          placeholder="Send a message"
        />
        <Stbutton isInput={isInput} onClick={sendMessage} disabled={!isInput}>
          <RiSendPlane2Fill
            style={{
              width: '20px',
              height: '20px',
              fill: isInput ? 'white' : 'rgb(107,108,123)',
              transition: 'fill 0.3s',
            }}
          />
        </Stbutton>
      </Stdiv>
    </>
  );
}
