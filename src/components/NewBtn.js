import styled from 'styled-components';
import closed from '../assets/closed.JPG';

const NewChatDiv = styled.div`
  width: 180px;
  height: 100%;
  font-size: 14px;
  display: flex;
  align-items: center;
  background-color: rgb(32, 33, 35);
  border: 1.5px solid rgb(71, 71, 73);
  padding-left: 5px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`;

const ClosedDiv = styled.div`
  width: 40px;
  height: 100%;
  background-color: green;
  background-color: rgb(32, 33, 35);
  border: 1.5px solid rgb(71, 71, 73);
  border-radius: 5px;
  cursor: pointer;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function NewBtn() {
  const handleClick = () => {
    window.location.href = '/';
  };

  return (
    <>
      <NewChatDiv onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          fill="white"
          width={10}
          style={{ margin: '0 10 0 10' }}
        >
          <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
        </svg>{' '}
        New Chat
      </NewChatDiv>
      <ClosedDiv>
        <img src={closed} width={22} height={22} />
      </ClosedDiv>
    </>
  );
}
