import styled from 'styled-components';
import NewBtn from './NewBtn';
import { useSelector } from 'react-redux';
import UpDiv from './Up';
import UserDiv from './User';

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: #202123;
  position: absolute;
  width: ${(props) => (props.isClosed ? '0px' : '260px')};
  box-sizing: border-box;
  padding: ${(props) => (props.isClosed ? '0px' : '10px')};
  visibility: ${(props) => (props.isClosed ? 'hidden' : 'visible')};
  opacity: ${(props) => (props.isClosed ? '0' : '1')};
  z-index: ${(props) => (props.isClosed ? '1' : '2')};
  transition: all 0.2s;
`;
const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 42px;
  background-color: transparent;
  justify-content: space-between;
`;

const ProfileDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 95%;
  height: 100px;
  background-color: transparent;
  position: absolute;
  bottom: 15px;
  border-top: 1px solid rgb(69, 69, 71);
  box-sizing: border-box;
  padding-top: 5px;
`;

export default function Menu() {
  const isClosed = useSelector((state) => state.isClosed);

  return (
    <>
      <MenuWrapper isClosed={isClosed}>
        <BtnWrapper>
          <NewBtn />
        </BtnWrapper>
        <ProfileDiv>
          <UpDiv />
          <UserDiv />
        </ProfileDiv>
      </MenuWrapper>
    </>
  );
}
