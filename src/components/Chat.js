import styled from 'styled-components';
import userImg from '../assets/user.png';
import gptImg from '../assets/gpt.png';
import { useState, useEffect } from 'react';

const Mydiv = styled.div`
  width: 100%;
  height: 84px;
  background-color: rgb(52, 53, 65);
  display: flex;
  border-bottom: 1px solid rgb(46, 47, 56);
  justify-content: center;
  font-size: 15px;
`;

const Gptdiv = styled.div`
  width: 100%;
  height: 84px;
  background-color: rgb(68, 70, 84);
  display: flex;
  border-bottom: 1px solid rgb(46, 47, 56);
  justify-content: center;
  font-size: 15px;
`;

const ChWrap = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Stimg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 3px;
`;

const Chatdiv = styled.div`
  width: 100%;
  padding-left: 20px;
  position: relative;
`;

const Svg1 = styled.svg`
  position: absolute;
  right: 0px;
  cursor: pointer;
`;

export default function Chat(props) {
  const { chat, idx } = props;
  const [typedChat, setTypedChat] = useState(''); // 타이핑 중인 글자를 저장할 상태
  const [isTyping, setIsTyping] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    // 타이핑 효과를 시뮬레이션하기 위한 함수
    const typeChat = async () => {
      setIsTyping(true);
      for (let i = 0; i < chat.length; i++) {
        setTypedChat(chat.substring(0, i + 1)); // i 번째 글자까지만 추가
        await new Promise((resolve) => setTimeout(resolve, 50));
      }
      setIsTyping(false);
    };

    if (idx % 2 !== 0) {
      setTypedChat(''); // 새로운 메시지를 받을 때 typedChat 상태 초기화
      typeChat(); // 홀수 인덱스일 때 타이핑 효과 실행
    }
  }, [chat, idx]);

  // 클립보드에 텍스트 복사 함수
  const copyToClipboard = (text) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  };

  const handleCopyButtonClick = () => {
    copyToClipboard(chat); // 클릭 시 텍스트를 클립보드에 복사
    setIsCopied(true);
  };

  return (
    <>
      {idx % 2 === 0 ? (
        <Mydiv>
          <ChWrap>
            <Stimg src={userImg} />
            <Chatdiv>{chat}</Chatdiv>
          </ChWrap>
        </Mydiv>
      ) : (
        <Gptdiv>
          <ChWrap>
            <Stimg src={gptImg} />
            <Chatdiv>
              {isTyping ? typedChat : chat}{' '}
              {/* 타이핑 중일 때는 타이핑 중인 글자를 보여주고, 완료되면 전체 텍스트를 표시 */}
              <Svg1
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 448 512"
                fill="rgb(165, 164, 182)"
                onClick={handleCopyButtonClick}
              >
                <path
                  d={
                    isCopied
                      ? 'M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z'
                      : 'M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z'
                  }
                />
              </Svg1>
            </Chatdiv>
          </ChWrap>
        </Gptdiv>
      )}
    </>
  );
}
