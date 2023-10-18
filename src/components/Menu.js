import styled from 'styled-components';
import NewBtn from './NewBtn';
import { useSelector } from 'react-redux';
import UpDiv from './Up';
import UserDiv from './User';
import { dummyData } from '../store/dummyData';
import ChatHistory from './ChatHistory';

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

const ChatHistoryWrapper = styled.div`
  width: 100%;
  height: calc(100% - 155px);
  margin-top: 5px;
  background-color: transparent;
  overflow: auto;

  /* 기본 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    width: 8px;
    height: 18px;
    display: none; /* 기본적으로 숨김 */
  }

  /* 호버 했을 때 스크롤바를 보이게 합니다 */
  &:hover {
    &::-webkit-scrollbar {
      display: block; /* 호버 했을 때 보임 */
    }

    &::-webkit-scrollbar-thumb {
      background: rgb(179, 181, 189);
      border-radius: 12px 12px 12px 12px;

      &:hover {
        /* 스크롤바에 마우스를 올렸을 때 */
        background-color: rgb(236, 236, 240);
      }
    }
  }
`;

const DayDiv = styled.div`
  width: 100%;
  height: 30px;
  line-height: 10px;
  background-color: transparent;
  box-sizing: border-box;
  padding: 10px;
  font-size: 12px;
  font-weight: bold;
  color: rgb(143, 142, 158);
`;

export default function Menu() {
  const isClosed = useSelector((state) => state.isClosed);
  let todayF = false;
  let yesterdayF = false;
  let sevenF = false;
  let monthF = false;

  return (
    <>
      <MenuWrapper isClosed={isClosed}>
        <BtnWrapper>
          <NewBtn />
        </BtnWrapper>
        <ChatHistoryWrapper>
          {dummyData.map((data) => {
            const today = new Date();
            const date = new Date(data.date);
            const day = today.getDate() - date.getDate();

            if (day === 0) {
              // 오늘일경우
              if (todayF === false) {
                // Today가 false면
                todayF = true; // true로 바꾸고 Today div 생성
                return (
                  <>
                    <DayDiv>Today</DayDiv>
                    <ChatHistory data={data} />
                  </>
                );
              } else {
                // Today div가 이미 생성되었으면 그냥 ChatHistory만 생성
                return <ChatHistory data={data} />;
              }
            } else if (day === 1) {
              // 어제일 경우
              if (yesterdayF === false) {
                // yesterday가 false면
                yesterdayF = true; // true로 바꾸고 Yesterday div 생성
                return (
                  <>
                    <DayDiv>Yesterday</DayDiv>
                    <ChatHistory data={data} />
                  </>
                );
              } else {
                // Yesterday div가 이미 생성되었으면 그냥 ChatHistory만 생성
                return <ChatHistory data={data} />;
              }
            } else if (day <= 7) {
              // 이번주일 경우
              if (sevenF === false) {
                // sevenF가 false면
                sevenF = true; // true로 바꾸고 This week div 생성
                return (
                  <>
                    <DayDiv>Previous 7 Days</DayDiv>
                    <ChatHistory data={data} />
                  </>
                );
              } else {
                // Previous 7 Days가 이미 생성되었으면 그냥 ChatHistory만 생성
                return <ChatHistory data={data} />;
              }
            } else if (day <= 30) {
              // 이번달일 경우
              if (monthF === false) {
                // monthF가 false면
                monthF = true; // true로 바꾸고 This month div 생성
                return (
                  <>
                    <DayDiv>Previous 30 Days</DayDiv>
                    <ChatHistory data={data} />
                  </>
                );
              } else {
                // Previous 30 Days가 이미 생성되었으면 그냥 ChatHistory만 생성
                return <ChatHistory data={data} />;
              }
            } else {
              return <ChatHistory data={data} />;
            }
          })}
        </ChatHistoryWrapper>

        <ProfileDiv isClosed={isClosed}>
          <UpDiv />
          <UserDiv />
        </ProfileDiv>
      </MenuWrapper>
    </>
  );
}
