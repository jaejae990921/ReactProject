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
`;

export default function Chat(props) {
  const { chat, idx } = props;
  const [typedChat, setTypedChat] = useState(''); // 타이핑 중인 글자를 저장할 상태
  const [isTyping, setIsTyping] = useState(false);

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
            </Chatdiv>
          </ChWrap>
        </Gptdiv>
      )}
    </>
  );
}
