import styled from 'styled-components';
import Reco from './Reco';
import { recoData } from '../store/recoData';

const RecoWrapper = styled.div`
  width: 780px;
  height: 150px;
  background-color: transparent;
  position: absolute;
  bottom: 90px;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1050px) {
    width: 630px;
  }

  @media (max-width: 890px) {
    width: 530px;
  }
`;

const RecoDiv = styled.div`
  width: 49%;
  height: 100%;
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
            id={recoData[0].id}
          ></Reco>
          <Reco
            addMsg={addMsg}
            title={recoData[1].title}
            content={recoData[1].content}
            id={recoData[1].id}
          ></Reco>
        </RecoDiv>
        <RecoDiv>
          <Reco
            addMsg={addMsg}
            title={recoData[2].title}
            content={recoData[2].content}
            id={recoData[2].id}
          ></Reco>
          <Reco
            addMsg={addMsg}
            title={recoData[3].title}
            content={recoData[3].content}
            id={recoData[3].id}
          ></Reco>
        </RecoDiv>
      </RecoWrapper>
    </>
  );
}
