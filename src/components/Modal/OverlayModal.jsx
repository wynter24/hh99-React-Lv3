import { useEffect, useRef, useState } from "react";
import { styled, ThemeProvider } from "styled-components";
import { StyledButton } from "../Buttons/Buttons";

const palette = {
  mint: "#C3ECE9",
  deep_mint: "#346F62",
  purple: "#C3C6EC",
  deep_purple: "#19187A",
};

// 외부영역 클릭해도 닫힘
function OverlayModal() {
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
          size="large"
          color="purple"
          fontcolor="deep_purple"
          onClick={showModal}
        >
          open modal
        </StyledButton>
        {modalOpen && <ModalOverlay setModalOpen={setModalOpen} />}
      </div>
    </ThemeProvider>
  );
}
function ModalOverlay({ setModalOpen, id, title, content, writer }) {
  // 모달 끄기 (X버튼 onClick 이벤트 핸들러)
  const closeModal = () => {
    setModalOpen(false);
  };
  // 모달 외부 클릭시 끄기 처리
  // Modal 창을 useRef로 취득
  const modalRef = useRef(null);
  useEffect(() => {
    // 이벤트 핸들러 함수
    const handler = (event) => {
      // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalOpen(false);
      }
    };
    // 이벤트 핸들러 등록
    document.addEventListener("mousedown", handler);
    // document.addEventListener('touchstart', handler); // 모바일 대응
    return () => {
      // 이벤트 핸들러 해제
      document.removeEventListener("mousedown", handler);
      // document.removeEventListener('touchstart', handler); // 모바일 대응
    };
  });
  return (
    // 모달창을 useRef로 잡아준다.
    <OverlayContainer ref={modalRef}>
      <Close onClick={closeModal}>X</Close>
      <p>
        닫기 버튼 1개가 있고, <br />
        외부 영역을 누르면 모달이 닫혀요.
      </p>
    </OverlayContainer>
  );
}

export default OverlayModal;

/* 모달창을 화면 중앙. 최상단에 노출 */
const OverlayContainer = styled.div`
  /* 모달창 크기 */
  width: 300px;
  height: 200px;

  z-index: 999;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* ModalOverlay 모달창 디자인 */
  background-color: #c3c6ec;
  border-radius: 12px;
  box-sizing: border-box;
  padding: 24px;
`;

/* ModalOverlay 모달창 내부 X버튼 */
const Close = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  border-radius: 100%;
  border: 0 solid #31329a;
  width: 30px;
  height: 30px;
  background-color: #626ac7;
  color: #231f85;
`;
