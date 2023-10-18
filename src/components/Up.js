import styled from 'styled-components';
import { FiUser } from 'react-icons/fi';
import { useSelector } from 'react-redux';

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
  transition: all 0.2s visibility 0s;
  visibility: ${(props) => (props.isClosed ? 'hidden' : 'visible')};
  cursor: pointer;

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
  const isClosed = useSelector((state) => state.isClosed);

  return (
    <>
      <StDiv isClosed={isClosed}>
        <FiUser style={{ width: '16', height: '16' }}></FiUser>
        <UpgradeDiv>Upgrade to Plus</UpgradeDiv>
      </StDiv>
    </>
  );
}
