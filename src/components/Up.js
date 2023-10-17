import styled from 'styled-components';
import { FiUser } from 'react-icons/fi';

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

export default function Up() {
  return (
    <>
      <StDiv>
        <FiUser style={{ width: '16', height: '16' }}></FiUser>
        <UpgradeDiv>Upgrade to Plus</UpgradeDiv>
      </StDiv>
    </>
  );
}
