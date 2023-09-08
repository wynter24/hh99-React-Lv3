## 구현한 기능

### Button
sytled component를 사용구현, props를 이용하여 버튼을 재사용할 수 있도록 함

### Input
- 일반형식의 input
- 숫자를 넣었을 때, 3자리 수마다 `콤마 ,`가 찍히는 input  
  - 저장 버튼을 눌렀을 때 {name: '아무 텍스트', price: "콤마가 없는 금액"} 을 alert에 표시
- 예외처리 
  - 문자 입력 시 입력되지 않으며 0으로만 표시
  - 2개의 input에 값이 입력되지 않으면 alert 경고

### Modal
- Modal  
`취소`, `확인`이 있고, overlay를 클릭했을 때 모달이 닫히지 않는 형태
- Overlay Modal  
`닫기` 버튼만 있고, overlay를 클릭했을 때 모달이 닫히는 형태
- Button 재사용

### Select
- 자식 컴포넌트가 부모 컴포넌트를 넘어갔을 때 가려지게 되는 dropdown
  - `overflow: hidden` 적용
- 넘어가도 가려지지 않는 dropdown
  - `React portal`을 사용하여 부모 컴포넌트에 hidden이 있어도 해당 dropdown에 적용되지 않게 함
- select를 클릭했을 때, option 들이 나오고 해당 option을 클릭하면 select의 값이 변경
  

## 배포 사이트