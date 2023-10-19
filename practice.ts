import { Car3, Bike2, ObjFunction } from ".";

let Car: Car3 = {
  wheel: 4,
  model: 'sedan',
}

let Bike: Bike2 = {
  wheel: 2,
  model: 'SUV'
}

let myFunc: ObjFunction = function (a) {
  console.log(a);
}

myFunc({ abc: 'hi' })

// object를 파라미터로 받는 함수 연습
// 1. 사용자 지정 타입
type obj {
  name: string,
  age: number,
  gender? : string,
}

function myFunc2(param: obj) {
  console.log(param);
}
myFunc2({name:'dd', age:20})

// 2. 구조분해(destructuring) 방식
function myFunc3({name, age} : {name : string, age: number}) {
  console.log(name, age)
}

