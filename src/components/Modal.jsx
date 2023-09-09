import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { StyledButton } from './Buttons/Buttons';
import { palette } from '../GlobalStyles';

function Modal() {
  // 모달창 상태관리
  const [modalOpen1, setModalOpen1] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);

  // 모달창 열기
  const showModal1 = () => {
    setModalOpen1(true);
  };
  const showModal2 = () => {
    setModalOpen2(true);
  };

  // 모달창 닫기
  const closeModal1 = () => {
    setModalOpen1(false);
  };
  const closeModal2 = () => {
    setModalOpen2(false);
  };

  return (
    <ThemeProvider theme={{ palette }}>
      <h1>Modal</h1>
      <ModalLayout>
        <StyledButton onClick={showModal1} size="small" color="mint">open modal</StyledButton>
        {/* && : 논리곱 연산자 = 둘 다 트루일때만 트루 반환
        트루 = ModalBox1에 프롭스 내리고 출력하기 */}
        {modalOpen1 && (
          <ModalWrap>
            <ModalBoxDiv1>
              <p style={{margin:"0"}}>
                닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지
                않아요.
              </p>
              <ModalBoxBtn1>
                <StyledButton onClick={closeModal1} size="small" color="purple">닫기</StyledButton>
                <StyledButton size="small" color="mint">확인</StyledButton>
              </ModalBoxBtn1>
            </ModalBoxDiv1>
          </ModalWrap>
        )}

        <StyledButton onClick={showModal2} size="large" color="purple">open modal</StyledButton>
        {modalOpen2 && (
          <ModalWrap onClick={closeModal2}>
            {/* stopPropagation() : 캡처 Event 및 버블링 단계에서 현재 이벤트가 추가로 전파되는 것을 방지 */}
            <ModalBoxDiv2 onClick={(event) => event.stopPropagation()}>
              <ModalCloseBtn2 onClick={closeModal2}>x</ModalCloseBtn2>
              <p>
                닫기 버튼 1개가 있고,
                <br />
                외부 영역을 누르면 모달이 닫혀요.
              </p>
            </ModalBoxDiv2>
          </ModalWrap>
        )}
      </ModalLayout>
    </ThemeProvider>
  );
}

export default Modal;

const ModalLayout = styled.div`
  display: flex;
  gap: 10px;
`

const ModalWrap = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  // 화면에 가득차게
  width: 100%;
  height: 100%;
  // 최상단 위치
  z-index: 999;
  // 중앙배치
  position: absolute;
  top: 0;
  left: 0;
  // 내용물 중앙으로
  display: flex; // 수직 중앙 정렬을 위해 flex 사용
  justify-content: center; // 수평 중앙 정렬
  align-items: center; // 수직 중앙 정렬
`;


const ModalBoxDiv1 = styled.div`
  background-color: white;
  width: 400px;
  height: 200px;
  border-radius: 15px;
  padding: 50px;
  position: relative;
`;

const ModalBoxBtn1 = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  right: 50px;
  bottom: 50px;
`

const ModalBoxDiv2 = styled.div`
  background-color: #C3C6EC;
  width: 300px;
  height: 200px;
  border-radius: 15px;
  padding: 30px;
  // 겹치기 - 부모요소 위치 설정
  position: relative;
`;

const ModalCloseBtn2 = styled.button`
  width: 30px;
  height: 30px;
  border: 0;
  border-radius: 100%;
  background-color: white;
  position: absolute;
  top: 20px;
  right: 30px;
  cursor: pointer;

  &:hover {
    border: 2px solid #19187A;
    color: #19187A;
  }
`
