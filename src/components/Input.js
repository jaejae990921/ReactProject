import { useState } from 'react';

export default function Input() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  let isInput = false;

  const BtnSt = {
    backgroundColor: isInput ? 'rgb(25, 195, 125)' : 'transparent',
  };

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

  return (
    <>
      <div
        style={{
          backgroundColor: '#353540',
          borderRadius: '15px',
          display: 'flex',
          width: '60%',
          height: '60px',
          padding: '0 10px',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'absolute',
          bottom: '5%',
          left: '25%',
        }}
      >
        <input
          style={{
            width: '100%',
            borderRadius: '15px',
            backgroundColor: 'transparent',
            color: 'white',
            border: 'none',
            outline: 'none',
            fontSize: '15px',
          }}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Send a message"
        />
        <button
          onClick={sendMessage}
          style={{
            border: 'none',
            borderRadius: '10px',
            width: '35px',
            height: '35px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgb(25, 195, 125)',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-send"
            viewBox="-1.5 0 20 15"
            color="white"
          >
            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
          </svg>
        </button>
      </div>
      <div>{response}</div>
    </>
  );
}
