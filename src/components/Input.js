import { useState } from 'react';
import styled from 'styled-components';

const Stdiv = styled.div`
  background-color: #353540;
  border-radius: 15px;
  display: flex;
  width: 45%;
  height: 60px;
  padding: 0 10px;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 5%;
  left: 30%;
`;

const Stinput = styled.input`
  width: 100%;
  border-radius: 15px;
  background-color: transparent;
  color: white;
  border: none;
  outline: none;
  font-size: 15px;
`;

let isInput = false;

const Stbutton = styled.button`
  border: none;
  border-radius: 10px;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: ${isInput ? 'rgb(25, 195, 125)' : 'transparent'}; */
  background-color: rgb(25, 195, 125);
`;

export default function Input() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const API_KEY = '123';
  // const API_KEY = process.env.REACT_APP_API_KEY;

  const sendMessage = async (e) => {
    e.preventDefault();

    console.log('버튼 눌림!!');

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
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: input }],
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const chatResponse = data.choices[0].message.content;
        setResponse(chatResponse);
      } else {
        console.error('Failed to fetch response from ChatGPT API');
      }
    } catch (error) {
      console.error('Error while fetching response:', error);
    }

    setInput('');
  };

  // input 값 변경 및 isInput 값 변경
  const inputChange = (e) => {
    setInput(e.target.value);
    if (e.target.value.length == 0) {
      isInput = false;
    } else {
      isInput = true;
    }
    isInputChange();
  };

  const isInputChange = () => {
    // 색 변경
    console.log(isInput);
  };

  return (
    <>
      <Stdiv>
        <Stinput
          type="text"
          value={input}
          onChange={inputChange}
          placeholder="Send a message"
        />
        <Stbutton onClick={sendMessage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            className="bi bi-send"
            viewBox="-1.5 0 20 15"
          >
            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
          </svg>
        </Stbutton>
      </Stdiv>
      <div>{response}</div>
    </>
  );
}
