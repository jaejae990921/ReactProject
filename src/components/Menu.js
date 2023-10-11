import styled from 'styled-components';

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 100%;
  background-color: #202123;
`;

export default function Menu() {
  return (
    <>
      <MenuWrapper></MenuWrapper>
    </>
  );
}
