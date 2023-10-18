import styled from 'styled-components';
import Reco from './Reco';
import { recoData } from '../store/recoData';

const RecoWrapper = styled.div`
  width: 780px;
  height: 150px;
  /* background-color: red; */
  background-color: transparent;
  position: absolute;
  bottom: 90px;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const RecoDiv = styled.div`
  width: 49%;
  height: 100%;
  /* background-color: blue; */
  background-color: transparent;
  box-sizing: border-box;
  padding: 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default function Recommend({ addMsg }) {
  return (
    <>
      <RecoWrapper>
        <RecoDiv>
          <Reco
            addMsg={addMsg}
            title={recoData[0].title}
            content={recoData[0].content}
          ></Reco>
          <Reco
            addMsg={addMsg}
            title={recoData[1].title}
            content={recoData[1].content}
          ></Reco>
        </RecoDiv>
        <RecoDiv>
          <Reco
            addMsg={addMsg}
            title={recoData[2].title}
            content={recoData[2].content}
          ></Reco>
          <Reco
            addMsg={addMsg}
            title={recoData[3].title}
            content={recoData[3].content}
          ></Reco>
        </RecoDiv>
      </RecoWrapper>
    </>
  );
}
