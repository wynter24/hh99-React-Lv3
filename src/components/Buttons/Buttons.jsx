import React from "react";
import { css, styled, ThemeProvider } from "styled-components";

function Button({ children, color, size, fontcolor }) {
  return (
    <StyledButton color={color} size={size} fontcolor={fontcolor}>
      {children}
    </StyledButton>
  );
}

const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 10px;
`;

export const StyledButton = styled.button`
  border-radius: 8px;
  padding: 1px 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  /*크기*/
  ${(props) =>
    props.size === "large" &&
    css`
      width: 200px;
      height: 50px;
    `}
  ${(props) =>
    props.size === "medium" &&
    css`
      width: 130px;
      height: 45px;
    `}
    ${(props) =>
    props.size === "small" &&
    css`
      width: 100px;
      height: 40px;
    `}
    /* 색상 */
    ${(props) => {
    const color = props.theme.palette[props.color];
    if (props.size === "large") {
      return css`
        border: 3px solid ${color};
        background-color: transparent;
      `;
    } else {
      return css`
        background: ${color};
        border: 0;
      `;
    }
  }}
    // font color
    color: ${(props) => {
    const fontcolor = props.theme.palette[props.fontcolor];
    return fontcolor;
  }}
`;

const palette = {
  mint: "#C3ECE9",
  deep_mint: "#346F62",
  purple: "#C3C6EC",
  deep_purple: "#19187A",
};

function Buttons() {
  return (
    <ThemeProvider theme={{ palette }}>
      <h1>Button</h1>
      <BtnBox>
        <Button
          size="large"
          color="mint"
          onClick={() => alert("버튼을 만들어보세요")}
        >
          <div>Large Primary Button</div>
          <div>
            <span className="material-symbols-outlined">add_circle</span>
          </div>
        </Button>
        <Button size="medium" color="mint" fontcolor="deep_mint">
          Medium
        </Button>
        <Button size="small" color="mint" fontcolor="deep_mint">
          Small
        </Button>
      </BtnBox>
      <BtnBox>
        <Button size="large" color="purple" onClick={() => prompt("어렵나요?")}>
          <div>Large Negative Button</div>
          <div>
            <span className="material-symbols-outlined">cancel</span>
          </div>
        </Button>
        <Button size="medium" color="purple" fontcolor="deep_purple">
          Medium
        </Button>
        <Button size="small" color="purple" fontcolor="deep_purple">
          Small
        </Button>
      </BtnBox>
    </ThemeProvider>
  );
}

export default Buttons;


  

