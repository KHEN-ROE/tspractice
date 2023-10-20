// 타입스크립틀를 쓰는 이유?
// 프로젝트 사이즈가 큰 경우, 협업 시 다른 사람이 짠 코드를 참조할 일이 많은 경우, 장기적으로 유지보수에 도움이 되는지 여부, 나중에  팀원이 더 필요해도 인력수급이 쉽게 가능한 경우, 팀원들 학습에 필요한 시간과 비용이 적게 드는 경우

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
      if (typeof item === 'string') {
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

let Square3: Square2 = { color: 'red', width: 100 }

interface Student {
  name: string
}

interface Teacher extends Student {
  age: number
}

// 인터페이스와 type aliass의 차이점 - extends 문법이 약간 다르다.
// 인터페이스는 extends, type alias는 &(intersection) 기호 사용하여 object 두 개 합칠 수 있다.
type Animal {
  name: string
}
type Cat = Animal & { legs: number }

// 근데 인터페이스도 type처럼 & 기호 사용 가능
let sum: Student & Teacher = { name: 'kim', age: 90 }

// 인터페이스는 타입이름 중복선언 허용 = 중복 시 extends 한 것과 동일하게 동작
// 장점 - type 선언을 자주 쓰는 외부 라이브러리 이용시 타입 선언을 내가 덮어쓰고 오버라이드하기 편함
interface Animals {
  legs: string
}

interface Animals {
  name: string
}

// type alias의 경우 중복 선언 불허
// 그래서 일반적인 상황에서는 type 키워드 자주 활용. 다른 사람이 내 코드를 이용하는 상황이 많으면 interface로 유연하게 만드는 게 좋다.
// 그래서 타입스크립트로 작성된 라이브러리들은 interface로 타입정해놓은 곳이 많다.
// 혹은 object 자료형은 전부 인터페이스로 만들고 다른 자료형은 type 키워드로 만드는 것도 괜찮다.
interface Product {
  brand: string,
  serialNumber: number,
  model: string[],
}

// 예제
let goods: Product = { brand: 'Samsung', serialNumber: 1360, model: ['TV', 'phone'] }

interface Product2 {
  product: string,
  price: number,
}

let wishList: Product2[] = [{ product: '청소기', price: 7000 }, { product: '삼다수', price: 800 }]

interface card extends Product2 {
  card: boolean
}

// 예제
let myobj: FuncObj = {
  plus: (a: number, b: number) => {
    return a + b;
  },
  minus(a: number, b: number) {
    return a - b;
  }
}

interface FuncObj {
  plus: (a: number, b: number) => number,
  minus: (a: number, b: number) => number,
}

// rest 파라미터 - 함수에 어떤 파라미터가 몇개 들어올 지 미리 정의가 불가능한 경우에 사용
function sumAll(...num: number[]) { // ...사용해서 rest 파라미터 정의
  console.log(num);
}
sumAll(1, 2, 3, 4, 5)
// rest 파라미터는 다른 일반 파라미터 뒤에만 올 수 있다. rest 파라미터 자리에 집어넣은 값을은 전부 []안에 담겨있다.
// 따라서 타입 지정 또한 array처럼 해주면 됨.

// 주의할 점 = 스프레드 연산자와 다르다.
// 스프레드 연산자 - array or object 괄호 벗기고 싶을 때 왼쪽에 사용
// 여러 개의 파라미터를 의미하는 ...rest는 함수선언 할 때 소괄호 안에서 사용
let arr3 = [3, 4, 5];
let arr4 = [1, 2, ...arr3];

// Destructuring 문법
// 자바스크립트에서 array, object 안에 있는 데이터를 빼서 변수로 만들고 싶을 때 쓰는 문법.
let man1 = { student: true, age: 20 };
let student1 = man1.student;
let age1 = man1.age;
// 위와 같이 써도 되는데, Destructuring을 사용하면 변수로 빠르고 쉽게 뺄 수 있다.
let { student3, age3 } = { student3: true, age3: 20 };

// object도 가능
let [a, b] = ['안녕', 100];

// 함수 파라미터에도 적용
let person = { student: true, age: 20 };

function testDestructuring({ student: boolean, age: Number }) {
  console.log(student1, age);
}
testDestructuring({ student: true, age: 20 });

// 숫자를 여러 개 쓰면 최댓값을 리턴하는 함수
function calcMax(...num: number[]): number {
  let max = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] > max) {
      max = num[i];
    }
  }
  return max;
}

// object 자료를 파라미터로 입력할 수 있는 함수
type UserType = {
  user: string,
  comment2: number[],
  admin2: boolean,
}

function testFunc({ user, comment2, admin2 }: { user: string, comment2: number[], admin2: boolean }): void {
  console.log(user, comment2, admin2);
}
testFunc({ user: 'kim', comment2: [3, 5, 4], admin2: false })

// array 자료를 파라미터로 받는 함수
type MyArr = (number | string | boolean)[];

function testFunc2([a, b, c]: MyArr) {
  console.log(a, b, c);
}

// && - falsy
let 변수: string = "";
let strs: string = "";
if (변수 && typeof strs === "string") {
  // 변수가 undefined라면 if문이 실행되지 않는다.
}

function printAll(strs: string | undefined) {
  if (strs && typeof strs === "string") {

  }
}

// in 연산자로 object 자료 narrowing
type Fish = { swim: string };
type Bird = { fly: string };

function testFunc3(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim;
  }
  return animal.fly;
}

// class로부터 생산된 object라면 instanof 로 narrowing
let date = new Date();
if (date instanceof Date) { // instanceof로 부모 클래스가 누군지 검사 가능
  console.log("true");
}

// literal type이 있으면 narrowing이 쉽다.
type Car2 = {
  wheel: "4개",
  color: string,
}
type Bike = {
  wheel: '2개',
  color: string,
}

function testFunc4(x: Car2 | Bike) {
  if (x.wheel === "4개") {
    console.log('this car is ' + x.color);
  } else {
    console.log('this bike is ' + x.color);
  }
}

//Never type = 함수의 return타입으로 사용 가능. 근데 잘 안씀
function testFunc5(): never {
  // 절대 return을 하지 말아야함.
  // 함수 실행이 끝나지 않아야 함(endPoint가 없어야 함).
  while (true) {
    console.log(123); // 무한히 실행되는 코드만 작성가능
  }
}

function testFunc6(): never {
  throw new Error('에러');
}

function testFunc7(param: string) {
  if (typeof param == 'string') {
    param + 1;
  } else {
    param; // 잘못된 코드다. param은 string 밖에 못오기 때문. 따라서 이런 잘못된 코드에 never가 오니까, never가 뜨면 수정하면 됨.
  }
}

// 함수를 만드는 2가지 방법(함수 선언문, 함수 표현식)
function testFunc8() {
  // 함수 선언문 - 아무 것도 리턴하지 않으면 void타입 자동 리턴
  throw new Error();
}

let testFunc9 = function () {
  // 함수 표현식 - 아무 것도 리턴하지 않으면 never타입 자동 리턴
  throw new Error();
}

// public, private
// class 안에서 public, private 키워드 사용가능
// 사실 public은 선언 안 해도 기본값. 자바의 default처럼.
// private은 해당 클래스 내에서만 수정가능.

// private 부여된 속성을 class 밖에서 수정해야할 경우? 자바의 게터세터와 같다.
class User {
  public name: string;
  private familyName: string;

  constructor() {
    this.name = 'kim';
    let hello = this.familyName + 'hi';
  }
  getFamilyName(): string {
    return this.familyName;
  }

  setFamilyName(familyName: string) {
    this.familyName = this.familyName;
  }


}
let user1 = new User();
user1.getFamilyName();

// public쓰면 생성자에서 this.name = name 이런거 생략가능.

class People {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
let person1 = new Person('john');

class People2 {
  constructor(public name: string) {

  }
}
let person2 = new People2('john');

// protected의 경우 private과 비슷하지만 extends된 class 안에서 사용할 수 있음.
class People3 {
  protected x = 10;
}

class NewUser extends People3 {
  doThis() {
    this.x = 20;
  }
}

// static - 객체 생성 없이 바로 사용가능
// extends로 class 복사할 경우 static 또한 따라옴
// class 안에 메모를 하거나, 기본 설정값을 입력하거나, class로부터 생성되는 object가 사용할 필요가 없는 변수들을 만들고 싶을 때 사용
class People4 {
  static x = 10;
  y = 20;
}
People4.x = 20;

// 예제
class People5 {
  private static x = 10;
  public static y = 20;

  public static addOne(num: number): number {
    return this.x += num;
  }

  public static printX() {
    console.log(this.x);
  }

}
People5.addOne(3);
People5.printX();

// <div> 박스를 무작위로 만드는 클래스.
class Square4 {
  x: number;
  y: number;
  color: string;

  constructor(x: number, y: number, color: string) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  draw() {
    let a = Math.random();
    let square = `<div style="position:relative;
    top:${a * 400}px;
    left:${a * 400}px;
    width:${this.x}px;
    height:${this.y}px;
    background:${this.color}"></div>`;
    document.body.insertAdjacentHTML('beforeend', square);
  }
}

let mySquare = new Square4(30, 30, 'red');
mySquare.draw();
mySquare.draw();
mySquare.draw();
mySquare.draw();

// 타입변수를 다른 파일에서 사용하고 싶은 경우 import, export 가능.
//a.ts
export let userName9 = 'kim';
export let userAge = 30;
export type UserName10 = string | boolean;
export type UserAge2 = (a: number) => number;

//b.ts
// import (userName9, UserName10, userAge, UserAge2) from './a'
let username11: UserName10 = 'kim';
let testFunc10: UserAge2 = (a) => { return a + 10 };

// 예제
export type Car3 = {
  wheel: number,
  model: string,
}

export interface Bike2 {
  wheel: 2,
  model: string
}

export type ObjFunction = (a?: object) => voidl

// namespace
namespace GoodDog {
  export type Dog = string;
}
namespace BadDog {
  export interface Dog { name: string };
}

let dog1: GoodDog.Dog = 'bard';
let dog2: BadDog.Dog = { name: 'paw' }

// 함수 return 값의 타입이 애매하다면? Generic
// 제네릭 적용한 함수만들기
// <>안에 파라미터를 또 입력가능, 근데 여기에는 타입만 입력 가능(타입 파라미터 문법).
function myFunc4<T>(x: T[]): T {
  return x[0];
}
// 제네릭을 쓰면 임의로 정한 타입을 RETURN 값으로 뱉는 함수를 제작할 수 있다.
let a1 = myFunc4<number>([4, 2]) // 여기서 <>는 안써도 됨
let b1 = myFunc4<string>(['kim', 'park']);

// 제네릭 타입 제한하기(constraints)
// extends 문법을 쓰면 넣을 수 있는 타입 제한 가능.
// 인터페이스 문법에 쓰는 extends와 좀 다름. 그거는 상속 인데 이거는 if문으로 체크하는 문법.
function myFunc5<T extends number>(x: T) {
  return x - 1;
}
let a2 = myFunc5<number>(2);

// 커스텀 타입도 extends 가능
interface lengthCheck {
  length: number;
}
function myFunc6<T extends lengthCheck>(x: T) {
  return x.length;
}

let a3 = myFunc6<string>('sdasd');

// 예제
function count2<T>(param: T) {
  if (typeof param === 'string') {
    return param.length;
  } else if (Array.isArray(param)) {
    let count = 0;
    for (let i = 0; i < param.length; i++) {
      count++;
    }
    return count;
  }
} // 이게 narrowing

// constraint
function count3<T extends string | string[]>(x: T) {
  console.log(x.length);
}

count2<string>('kim');
count3<string[]>(['asd', 'asd']);

// 두 함수의 차이? 제네릭은 number의 하위타입인 리터럴 타입 가질 수 있ㄷ다.
function myFunc7<T extends number>(x: T) {
  return x - 1;
}
function myFunc8(x: number) {
  return x - 1;
}
// 주요 차이점
type MyNumber = 5;

const result1 = myFunc7<MyNumber>(5);  // 첫 번째 함수 호출, 결과의 타입은 MyNumber가 된다.
const result2 = myFunc8(5);  // 두 번째 함수 호출, 결과의 타입은 number


// 예제2 JSON 자료를 object{} 자료로 변환해서 리턴하는 함수
interface Animal2 {
  name: string,
  age: number,
}
let data2 = '{"name" : "dog", "age" : 1}'

function jsonParser<T>(param: string): T { // 파라미터는 string으로 받는데, 리턴타입이 불확실해서 제네릭 쓰는 경우인가? 
  // 어쨌든 파라미터 타입은 string으로 정해져있네.
  return JSON.parse(param)
}
let result = jsonParser<Animal2>(data2)
console.log(result);

// 예제 - 클래스에 제네릭 적용
class People6<T> {
  name: T;
  constructor(name: T) {
    this.name = name;
  }
}
let a4 = new Person('kim');
a4.name;

// Tuple 타입 - array에 붙일 수 있는 타입으로서 자료의 위치까지 정확히 지정 가능.
let dog3: [string, boolean]; // [] 안에 타입을 적으면 됨
dog3 = ['dog', true];

// Tuple 응용: rest parameter
function myFunc9(...x: [string, number]) { //파라미터 왼쪽에 점 3개 붙이면 rest parameter(파라미터가 몇 개 들어올지 모를 때 사용). 이걸 튜플 이용해서 타입지정 가능.
  // rest parameter 쓰면 파라미터가 전부 array에 담겨온다.
  console.log(x);
}

// tuple 안에도 옵션 가능
type Num = [number, number?, number?];
type Num2 = [number, number?, number]; // 이건 안 됨. 논리적으로 이상함. ?옵션기호는 뒤에만 붙일 수 있다.

let arr5 = [1, 2, 3];
let arr6: [number, number, ...number[]] = [4, 5, ...arr5];

// 예제1
let food: [string, number, boolean];
food = ['구내식당', 6000, true];

// 예제2
let arr7: [string, number, ...boolean[]]
arr7 = ['동서녹차', 4000, true, false, true, true, false, true]

// 예제3 함수에 타입지정
function myFunc10(...a: [string, boolean, ...(number | string)[]]) {

}
myFunc10('a', true, 6, 'a', 10, 10);

function myFunc11(a: string, b: number): [...string[], ...number[]] {
  let str: string[] = [];
  let num: number[] = [];
  let result: [...string[], ...number[]] = [];

  str.push(a);
  num.push(b);
  result.push(a)
  result.push(b)
  return result;
}

// js파일 -> ts파일로 변수를 가져다 쓰고 싶으면 import export 하면됨
// import {a} from './data'

declare let a5: number; // declare 쓰면 이미 정의된 변수나 함수를 재정의할 수 있다. a5라는 변수를 이 파일에서 잠깐 정의하겠다는 뜻(a5라는 변수는 어딘가에 있으니까 에러내지 말라는 뜻) 
// declare로 정의한 내용은 js로 변환되지 않는다.
// 그래서 자바스크립트로만 작성된 외부 라이브러리들을 쓸 때도 유용함.
// 근데 tsconfig.json안에 allowJs 옵션을 켜두면 js파일도 타입 지정이 알아서 implicit하게 됨.

// Ambient Module - import export 없이 타입들을 다른 파일에서 가져다쓸 수 있는 기능(같은 폴더 안에  있는 경우).
// ts  파일ㄹ에 입력한  변수와  타입들은 전부 global  변수 취급하기 때문
// 전역으로 쓸 수 있는 파일을 ambient module이라고 함.
let man2: myAge11 = 30;

// 반면 import, export 키워드가 들어간 ts파일은 다르다. 두 키워드 중 하나만 있으면 그 파일은 로컬 모듈이 됨. 거기 있는 모든 변수는  export 해줘야 다른 파일에서 사용가능.
// 따라서 타입스크립트 파일ㄹ이 다른 파일에 영향끼치는 걸 막교 싶으면 export 키워드 강제로 추가하면 됨


// implements
interface CarType {
  model: string,
  price: number,
}

// class 이름 우측에 implements로 인터페이스를 구현하면 이 class가 이 인터페이스에 있는 속성을 다 들고 있는지 확인가능
class CarInfo implements CarType {
  model: string;
  price: number = 1000;
  constructor(model: string) {
    this.model = model;
  }
}
let myCar = new CarInfo('morning');


// index signatures = object 자료에 타입을 미리 만들어주고 싶은데, object 자료에 어떤 속성들이 들어올 수 있는지 아직 모르는 경우, 타입지정할 속성이 너무 많은 경우 사용

interface StringOnly {
  [key: string]: string
}

let obj5: StringOnly = {
  name: 'kim',
  age: '20',
  location: 'Seoul',
}

// array 형태도 가능
interface StringOnly2 {
  [key: number]: string,
}

let obj6: StringOnly2 = {
  0: 'kim',
  1: '20',
  2: 'seoul'
}

interface MyType3 {
  'font-size': MyType3 | number
}

let obj7: MyType3 = {
  'font-size': {
    'font-size': {
      'font-size': 14
    }
  }
}

interface MyType4 {
  [key: string]: string | number
}

let obj8 = {
  model: 'k5',
  brand: 'kia',
  price: 6000,
  year: 2020,
  date: '6월',
  percent: '5%',
  dealer: '김차장',
}

interface MyType5 {
  'font-size': number,
  [key: string]: MyType5 | number,
}

let obj9:MyType5 = {
  'font-size' : 10,
  'secondary' : {
    'font-size' : 12,
    'third' : {
      'font-size' : 14
    }
  }
}

// 가끔 object를 다른 타입으로 변환하고 싶을 때? mapping 이용
// keyof 연산자 - object 타입이 가지고 있는 모든 key값을 union type으로 합쳐서 내보내줌.
// object의 key를 뽑아서 새롱운 타입으로 만들고 싶을 때 사용하는 연산자.
interface People7 {
  age: number,
  name: string,
}
type PeopleKeys = keyof People7; // age, name 타입이 됨.
let a6: PeopleKeys = 'age'; // 가능
// let b6: PeopleKeys = 'ageeee'; // 불가능

interface People8 {
  [key: string]: number;
}
type PeopleKeys2 = keyof People8; // string | number
let a7: PeopleKeys2 = 'age'; // 가능
let b7: PeopleKeys2 = 'ageeee' // 가능

// object 안의 속성들의 타입을 싸그리 바꾸고 싶을 때
type CarInfo2 = {
  color: boolean,
  model: boolean,
  price: boolean | number,
}

type TypeChanger <newType> = {
  [key in keyof newType]: string;
}

type newType = TypeChanger<CarInfo2>;

let obj10: newType = {
  color: 'red',
  model: 'kia',
  price: '300',
}

// 예제
type Bus = {
  color: string,
  model: boolean,
  price: string,
}

type TypeChanger2 <newType2> = {
  [key in keyof newType2]: string | number;
}

type newType2 = TypeChanger2<Bus>;

let obj11: newType2 = {
  color: 'blue',
  model: 'HYUNDAI',
  price: 2000
}

// 삼항 연산
type Age2<T> = T extends string? string : unknown;
let age4: Age2<String>; // string
let age5: Age2<number>; // unknown

// 파라미터가 array면 array 자료의 타입 반환, 아니면 any 타입 반환
type FirstItem<T> = T extends any[] ? T[0] : any 

let age6: FirstItem<string[]>
let age7: FirstItem<number>

// infer 키워드
type Person3<T> = T extends infer R ? R : unknown;
type newType3 = Person3<string> 

// infer 키워드는 조건문 안에서만 사용가능.
// infer 우측에 자유롭게 작명해주면 타입을 T에서 유추해서 R이라는 변수에 집어넣어라는 뜻. 위에서 R은 string이 됨.
// R을 조건식 안에서 사용 가능
// 즉 infer는 타입파라미터에서 타입을 추출해서 쓰고 싶을 때 쓰는 키워드.
// 용도 - 1. array 안에 있던 타입이 어떤 타입인지 뽑아서 변수로 만들 수 있음.
type ext<T> = T extends (infer R)[] ? R : unknown;
type NewType4 = ext< boolean[] >

// 2. 함수의 returnn 타입이 어떤 타입인지 뽑아서 변수로 만들 수 있다.
type ext2<T> = T extends (() => infer R) ? R : unknown;
type NewType5 = ext< () => number>
