export { }; // 이러면 글로벌 모듈이 아닌 로컬 모듈이됨.
declare global { // 특정 타입만 전역 변수로 만들고 싶으면 이렇게. 일종의 namespace 문법. 여기다 적은건 global 이라는 이름의 namespace에 추가됨
  type myAge11 = number;
}
let age: myAge11 = 20;