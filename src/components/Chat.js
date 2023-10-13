import styled from 'styled-components';
import userImg from '../assets/user.png';
import gptImg from '../assets/gpt.png';

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
  height: 84 px;
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

  return (
    <>
      {idx % 2 == 0 ? (
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
            <Chatdiv>{chat}</Chatdiv>
          </ChWrap>
        </Gptdiv>
      )}
    </>
  );
}
