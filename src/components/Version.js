import styled from 'styled-components';
import GptTab from './GptTab';

const StBigDiv = styled.div`
  height: 120px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-bottom: 20px;
`;

const StSmallDiv = styled.div`
  height: 50px;
  width: 305px;
  background-color: #202123;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  box-sizing: border-box;
  padding: 3px;
`;

const StGpt = styled.div`
  height: 40px;
  width: 145px;
  background-color: rgb(64, 65, 79);
  border-radius: 10px;
  border: 1px solid rgb(79, 79, 94);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Version() {
  const gptVersions = [{ version: 3.5 }, { version: 4 }];

  return (
    <>
      <StBigDiv>
        <StSmallDiv>
          {gptVersions.map((v) => (
            <GptTab version={v.version} />
          ))}
        </StSmallDiv>
      </StBigDiv>
    </>
  );
}
