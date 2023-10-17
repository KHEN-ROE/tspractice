let username: string = 'kim';
let username2: string | number = 'kim';

let usernames: string[] = ['kim', 'park'];

let age: { age: number, username: string } = { age: 21, username: 'kim' };

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
// 간단한 변수들을 타입 생략해도 됨.

// 예제
let myname: string = 'noh';
let myage: number = 28;
let region: string = 'Masan';

let music: { group: string, title: string } = { group: 'NewJeans', title: 'Attention' };

type myType = {
  member: string[],
  days: number,
  started: boolean,
}

let project: myType = {
  member: ['kim', 'noh'],
  days: 30,
  started: true,
}

let arr: (number | string)[] = [1, '2', 3];
let obj: { data: (number | string) } = { data: '123' };

// any, unknown 타입 - 아무 타입 가능. 비상 시 쓰는 변수 타입 체크 해제기능
// 혹은 어떤 타입이 들어올 지 모르는 경우, 다양한 타입을 넣어야할 경우 사용.
// 자료를 집어넣어도 타입은 그대로 unknown이다.
let username7: any | unknown = 'kim';
username7 = 20;
username7 = '김';
username7 = [];
username7 = undefined;

//예제
let user: string = 'kim';
let age2: undefined | number = undefined;
let married: boolean = false;
let info: (string | number | undefined | boolean)[] = [user, age2, married];

type mytype2 = {
  score: (number | boolean)[],
  teacher: string,
  friend: string | string[],
}

let school: mytype2 = {
  score: [100, 97, 84],
  teacher: 'phil',
  friend: 'john',
}
school.score[4] = false;
school.friend = ['Lee', school.teacher]

// 파라미터에서 ?는 옵션이라는 의미.
// 구체적으로는 x: number | undefined 라는 의미임. 따라서 아래의 코드는 에러발생(x 의 타입이 명확하지 않기 때문).
function fpr(x?: number): number {
  return x * 2;
}
fpr(2)

// 함수 예제
function hello(username?: string): void {
  if (username != '') {
    console.log('안녕하세요' + username + '님');
  } else {
    console.log('no username');
  }
}

// 파라미터의 자릿수 세는 함수
function count(input: number | string): number {
  return input.toString.length;
}

// 결혼 가능 확률을 알려주는 함수
function possibility(income: number, hasHome: boolean, charm: string): string {
  let incomeScore: number;
  let homeScore: number;
  let charmScore: number;
  let totalScore: number;

  incomeScore = income;

  if (hasHome) homeScore = 500;
  else homeScore = 0;

  if (charm == '상') charmScore = 100;
  else charmScore = 0;

  totalScore = incomeScore + homeScore + charmScore;

  if (totalScore >= 600) {
    return "결혼가능";
  } else {
    return null;
  }
}

possibility(250, false, "중");

// type narrowing - if문 등으로 타입을 하나로 정해주는 것
// if (typeof x === 'number') 이런 식으로

// type assertion = 변수의 타입을 지정해주는 것.
// 변수명 as string 이렇게.
// 그러나 as는 주장만 하는거지 실제로 타입을 바꿔주지는 않는다.

// as 쓰면 간편하긴 하지만 정확회 코드짜려면 narrowing을 쓰는게 좋다.
// as문법은 왜 타입 에러가 나는지 정말 모르겠는 상황에 임시로 사용, 혹은 내가 어떤 타입이 들어올 지 확실히 알고 있는데 컴파일러가 에러를 띄울 때
function myfunc(x: number | string) {
  return (x as number) + 1;
}

// 예제
function cleaning(obj: (number | string)[]): number[] {
  let newObj: number[] = [];
  for (let i = 0; i < obj.length; i++) {
    newObj[i] = Number(obj[i]);
  }
  console.log(newObj);

  return newObj;
}

// 예제2
function getSubject(sbj: { subject: string | string[] }): string {
  if (Array.isArray(sbj.subject)) {
    return sbj.subject[sbj.subject.length - 1];
  }
}

// Type Aliases(별칭) - 타입을 변수에 담아 쓰는 것
// type의 첫 글자는 대문자로 쓰는게 관습
type AnimalType = string | number | undefined;
let animal: AnimalType;

// const 변수는 값이 변하지 않는 변수다. 그러나 object 자료를 const로 선언하면 object 내부는 변경 가능.
// const 변수는 재할당만 막아줄 뿐, 그 안에 있는 object 속성을 바꾸는 데 관여 안 함.
// object 속성 변경 불가능하겍 하려면 readonly 키워드 사용.
type Men = {
  readonly name: string,
}

let girl: Men = {
  name: 'kim',
}
// girl.name = 'noh' // readonly라서 에러남.

// 속성이 선택사항이라면 - 물음표 연산자 추가
type Square = {
  color?: string,
  width: number,
}

let square2: Square = {
  width: 1000,
}

// type 키워드를 여러개 합칠 수도 있다.
type Name = string;
type Age = number;
type NewOne = Name | Age;

// object는 &를 사용하여 합칠 수 있음(extend)
type PositionX = { x: number };
type PositionY = { y: number };
type XandY = PositionX & PositionY;

let xy: XandY = { x: 1, y: 2 };

// type 키워드는 재정의 불가능, 그러나 interface는 재정의 가능

// type alias 예제
type something = {
  color?: string,
  size: number,
  readonly position: number[],
}

let test: something = {
  color: 'black',
  size: 100,
  position: [10, 20]
}

// 예제2
type validation = {
  name: string,
  phone: number,
  email: string,
  adult: boolean,
}

// 특정 값만 갖고 싶게 만들려면 Literal Type
// 특정 글자나 숫자만 가질 수 있게 제한을 두는 타입. const 변수의 업그레이트 버전이라고 할 수 있음.
// 더욱 엄격한 타입이다.
let johnson: '남자'; // 이러면 johnson에는 '남자'라는 글자만 할당할 수 있다. 여기서 '남자는 string 타입이 아닌 '남자' 타입이다.
let kim: '여자';
let direction: 'left' | 'right';

// 함수도 마찬가지
function lit(a: 'hello'): 1 | 0 | -1 {
  return 1;
}

//예제
function game(a: '가위' | '바위' | '보'): ('가위' | '바위' | '보')[] {
  return ['가위', '보']
}

// as const - 타입을 object의 value 로 바꿔준다. 아래에서 타입이 'kim'이 되는 거임. 
// 그리고 object 안에 있는 모든 속성을 readonly로 바꿔줌(변경하면 에러나게)
var data = {
  name: 'kim'
} as const

function constpr(name: 'kim') {

}
constpr(data.name) // 이제 이게 가능해짐. as const 없으면 에러

//함수 타입도 type alias로 저장해서 쓸 수 있다. 근데 더 불편한듯
type NumOut = (x: number, y: number) => number
let ABC: NumOut = function (x, y) {
  return x + y;
}

// object 자료 안에 함수도 집어넣을 수 있다.
type Userdatas = {
  name: string,
  age: number,
  plusOne: (x: number) => number, // 숫자 파라미터 x를 가지고, 숫자를 리턴하는 함수
  changeName: () => void,
}

let userdata = {
  name: 'kim',
  age: 30,
  plusOne(x: number) {
    return x + 1
  },
  changeName: () => {
    console.log('hi')
  }
}
userdata.plusOne(1);
userdata.changeName();

// 예제
type CutType = (x: string) => string

let cutZero: CutType = function (x) {
  let result = x.replace(/^0+/, "");
  return result;
}

type RemoveType = (x: string) => number

let removeDash: RemoveType = function (x) {
  let result = x.replace(/-/g, "");
  return parseFloat(result);
}

// type funcType1 = (a: string) => string;
type funcType2 = (a: string) => number;


function totalFunction(a: string, func1: (b: string) => string, func2: funcType2) {
  let result = func1(a);
  let result2 = func2(result);
  return result2;
}

totalFunction('010-1111-22222', cutZero, removeDash);

class Person2 {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // 클래스 내부에는 함수를 입력할 수 있다. 이 함수는 Person2 라는 클래스의 prototype에 추가된다.
  add(num: number): number {
    return num + 1;
  }
}

class Car {
  model: string;
  price: number;
  constructor(model: string, price: number) {
    this.model = model;
    this.price = price;
  }

  tax(): number {
    return this.price * 0.1;
  }
}

class Word {
  num: number[] = [];
  str: string[] = [];
  constructor(...param: (number | string)[]) {
    param.forEach((item) => {
      if(typeof item === 'string') {
        this.str.push(item)
      } else {
        this.num.push(item)
      }
    })

  }
}

// interface
interface Square2 {
  color: string,
  width: number,
}

let Square3: Square2 = { color : 'red', width : 100 }

interface Student {
  name: string
}

interface Teacher extends Student {
  age: number
}