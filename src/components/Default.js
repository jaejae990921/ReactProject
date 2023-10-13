import styled from 'styled-components';

const StDiv = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 2px solid rgb(46, 47, 56);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StSpan = styled.span`
  font-size: 13px;
  color: white;
`;

export default function Default() {
  return (
    <StDiv>
      <StSpan>Default (GPT-3.5)</StSpan>
    </StDiv>
  );
}
