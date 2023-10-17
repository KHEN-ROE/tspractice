let username: string = 'kim';
let username2: string | number = 'kim';

let usernames: string[] = ['kim', 'park'];

let age: {age: number, username: string} = { age: 21, username: 'kim' };

type nameType = string | number;
let username3: nameType = 'kim';

// 사용자 지정 타입(literal type)
type nameType2 = 'kim' | 'park';
let username4: nameType2 = 'kim';

function practice(x: number): number {
  return x * 2;
}

// 에러(지금 변수의 타입이 확실치 않아서)
// function practice2(x: number | string) {
//   return x * 2
// }

// 정상
function practice3(x: number | string) {
  if (typeof x === 'number') {
    return x * 2;
  }
}

// array 자료 안에 순서를 포함해서 어떤 자료가 들어올지 정확히 지정하고 싶은 경우
// tuple 사용. 대괄호 안에 들어올 자료의 타입 차례로 작성
type Member = [number, boolean];
let john: Member = [10, true];

// object 타입도 type 키워드로 변수에 담아 사용 가능
// type 대신 interface 키워드 사용해도 무방함.
// 이때 특정 속성이 선택사항이면 물음표 기입가능
type MyObject = {
  name?: string,
  age: number
}
let username5: MyObject = {
  name: 'kim', age: 21
}

// object 안에 어떤 속성이 들어갈지 아직 모르는 경우
type MyObject2 = {
  [key: string]: number,
}
let username6: MyObject2 = {
  age: 50,
  weight: 100,
}

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

// 모든 변수에 타입 지정할 필요 없다.
// 변수 생성 시 타입스크립트가 타입을 자동으로 부여해줌.


