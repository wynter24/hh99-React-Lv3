import { useState } from "react";
import { styled } from "styled-components";
import ReactDOM from "react-dom";

const Select = () => {
  const selectList = ["리액트", "자바", "스프링", "리액트네이티브"];
  const [selected, setSelected] = useState("리액트");
  const [hiddenSelected, setHiddenSelect] = useState("리액트");

  // drop down 동작
  const [open, setOpen] = useState({
    select: false,
    hiddenSelect: false,
  });
  const dropdownDisplay = (item) => {
    const changeSelect = {
      select: !open.select,
      hiddenSelect: false,
    };
    const changeHidden = {
      select: false,
      hiddenSelect: !open.hiddenSelect,
    };

    if (item === "select") {
      setOpen(changeSelect);
    } else {
      setOpen(changeHidden);
    }
  };
  // console.log("select",open);

  // 포탈 만들기
  // overflow: hidden이 적용되지 않는 한다
  // 현재 컴포넌트 계층 구조 밖의 다른 DOM 요소로 렌더링할 수 있게 해준다.
  const Portal = ({ children }) => {
    const portalTarget = document.getElementById("portal-target");

    if (!portalTarget) {
      return null;
    }
    return ReactDOM.createPortal(
      <div style={{ position: "absolute", top: "634px", left: "10px" }}>
        {children}
      </div>,
      portalTarget
    );
  };

  return (
    <SelectZone>
      <h1>Select</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        <div>
          {" "}
          {/* portal의 부보요소 */}
          <SelectBtn
            id="portal-target"
            onClick={() => {
              dropdownDisplay("select");
            }}
            // onBlur -> select 외부 클릭 시 닫힘
            onBlur={() => setOpen(false)}
            value={selected}
            key={selected}
          >
            <div>{selected}</div>
            <div>▼</div>
          </SelectBtn>
          <Portal>
            <Ul open={open.select}>
              {/* open 상태를 props로 전달 - styled component에게 */}
              {selectList.map((item) => {
                return (
                  <Option
                    onClick={() => {
                      setSelected(item);
                      dropdownDisplay("select");
                    }}
                  >
                    {item}
                  </Option>
                );
              })}
            </Ul>
          </Portal>
          <div id="portal-target" />
        </div>
        <div>
          {/* 리스트가 틀에 가려져 안보임 */}
          <SelectBtn
            onClick={() => {
              dropdownDisplay("hiddenSelect");
            }}
            onBlur={() => setOpen(false)}
            value={hiddenSelected}
            key={hiddenSelected}
          >
            <div>{hiddenSelected}</div>
            <div>▼</div>
          </SelectBtn>
          <Ul open={open.hiddenSelect} top="50px">
            {selectList.map((item) => {
              return (
                <Option
                  onClick={() => {
                    setHiddenSelect(item);
                    dropdownDisplay("hiddenSelect");
                  }}
                >
                  {item}
                </Option>
              );
            })}
          </Ul>
        </div>
      </div>
    </SelectZone>
  );
};

const SelectZone = styled.div`
  height: 200px;
  border: 3px solid gray;
  overflow: hidden;
  margin-top: 50px;
`;
const SelectBtn = styled.button`
  height: 40px;
  width: 300px;
  border: 1px solid gray;
  border-radius: 12px;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 28px;
  position: ${(props) => props.postion};
`;
const Ul = styled.ul`
  width: 290px;
  background-color: white;
  list-style-type: none;
  padding-left: 10px;
  border: 1px solid gray;
  border-radius: 12px;
  padding-top: 10px;
  margin: 0;
  display: ${(props) =>
    props.open ? "block" : "none"}; /* block - 보임 , none - 안보임 */
  top: ${(props) => props.top};
  position: ${(props) => props.postion};
`;

const Option = styled.li`
  height: 30px;
  width: 300px;
  font-size: 12px;
  white-space: nowrap;
  text-align: start;
`;

export default Select;
