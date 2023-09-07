import { useState } from "react";
import { styled, ThemeProvider } from "styled-components";
import { StyledButton } from "../Buttons/Buttons";

const palette = {
  mint: "#C3ECE9",
  deep_mint: "#346F62",
  purple: "#C3C6EC",
  deep_purple: "#19187A",
};

// 모달을 노출하는 페이지
function Modal() {
  // 모달창 노출 여부 state
  const [modalOpen, setModalOpen] = useState(false);
  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };
  return (
    <ThemeProvider theme={{ palette }}>
      <div>
        <StyledButton
          size="small"
          color="mint"
          fontcolor="deep_mint"
          onClick={showModal}
        >
          open modal
        </StyledButton>
        {modalOpen && <ModalBasic setModalOpen={setModalOpen} />}
      </div>
    </ThemeProvider>
  );
}
function ModalBasic({ setModalOpen }) {
  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <BasicContainer>
      <p>
        닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.
      </p>
      <button onClick={closeModal}>닫기</button>
      <button>확인</button>
    </BasicContainer>
  );
}

export default Modal;

const BasicContainer = styled.div`
  /* 모달창 크기 */
  width: 500px;
  height: 300px;

  /* 최상단 위치 */
  z-index: 999;

  /* 중앙 배치 */
  /* top, bottom, left, right 는 브라우저 기준으로 작동한다. */
  /* translate는 본인의 크기 기준으로 작동한다. */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* ModalOverlay 모달창 디자인 */
  background-color: white;
  border: 3px solid #346F62;
  border-radius: 12px;
  box-sizing: border-box;
  padding: 24px;
`;
