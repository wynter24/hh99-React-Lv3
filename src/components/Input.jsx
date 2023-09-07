import { useState } from 'react';
import { StyledButton } from './Buttons/Buttons';
import { ThemeProvider, styled } from 'styled-components';

const palette = {
  mint: "#C3ECE9",
  deep_mint: "#346F62",
  purple: "#C3C6EC",
  deep_purple: "#19187A",
};

const Input = () => {
  // 가격 숫자 3자리마다 콤마 (,) 찍기
  // type을 number로 지정하고 함수 실행시 오류 발생
  // input 태그에 type은 number가 아닌 text로 변경, 숫자에 콤마를 찍은 값의 타입은 string
  const [price, setPrice] = useState("0");
  const [name, setName] = useState("");

  const changeEnteredNum = (e) => {
    const value = e.target.value;
    // 입력 값에서 콤마를 제거하고 숫자만 추출
    // number 타입으로 변경하는 이유는 toLocaleString은 Number의 prototype이기 때문
    // number로 타입을 변경하기 이전에 콤마를 제거해야 Number()로 타입을 변경할 수 있다
    const inputValue = Number(value.replaceAll(",", ""));
    //  toLocaleString : 숫자를 각 설정한 나라에 맞는 방식으로 출력
    const comma = inputValue.toLocaleString() // 문자열
    // isNaN: 전달된 값이 숫자인지 확인
    if (isNaN(inputValue)) {
      setPrice("0");
    } else {
      setPrice(comma);
    }
  };

  const inputName = (e) => {
    setName(e.target.value);
  };

  const nocomma = (name, price) => {
    const nocommaPrice = price.replaceAll(",", "");
    const list = {
      name: name,
      price: nocommaPrice,
    };
    if(list.name==="" && nocommaPrice==="0"){
      alert('이름과 가격 모두 입력해주세요.');
    } 
    else {
      alert(`{ name: ${list.name}, price: ${list.price} }`);
    }
  };

  return (
    <ThemeProvider theme={{ palette }}>
      <div className="inputLayout">
        <h1>Input</h1>
        <InputBox>
          <div className="name">
            <label>이름</label>
            <UserInput type="text" value={name} onChange={inputName} />
          </div>
          <div className="price">
            <label>가격</label>
            <UserInput type="text" value={price} onChange={changeEnteredNum} />
          </div>
          <StyledButton
            size="small"
            color="mint"
            fontcolor="deep_mint"
            onClick={() => {
              nocomma(name, price);
            }}
          >
            저장
          </StyledButton>
        </InputBox>
      </div>
    </ThemeProvider>
    
  )
}

export default Input;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`

const UserInput = styled.input`
  height: 30px;
  width: 200px;
  border: 1px solid #346F62;
  border-radius: 8px;
  margin-left: 5px;
  padding-left: 10px;
`