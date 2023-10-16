import styled from 'styled-components';
import NewBtn from './NewBtn';

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 260px;
  height: 100%;
  background-color: #202123;
  position: absolute;
  padding: 10px;
  box-sizing: border-box;
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

export default function Menu() {
  return (
    <>
      <MenuWrapper>
        <BtnWrapper>
          <NewBtn />
        </BtnWrapper>
      </MenuWrapper>
    </>
  );
}
