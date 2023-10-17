import styled from 'styled-components';
import userImg from '../assets/user.png';
import { BsThreeDots } from 'react-icons/bs';

const StDiv = styled.div`
  width: 95%;
  background-color: transparent;
  height: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 5px;
  transition: all 0.2s;
  position: relative;

  &:hover {
    background-color: rgb(52, 53, 65);
  }
`;

const UpgradeDiv = styled.div`
  font-size: 13px;
  font-weight: bold;
  color: white;
  box-sizing: border-box;
  padding-left: 10px;
`;

const Stimg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 3px;
`;

export default function Up() {
  return (
    <>
      <StDiv>
        <Stimg src={userImg} />
        <UpgradeDiv>User</UpgradeDiv>
        <BsThreeDots
          fill="rgb(143, 142, 158)"
          style={{ position: 'absolute', right: '5px' }}
        />
      </StDiv>
    </>
  );
}
