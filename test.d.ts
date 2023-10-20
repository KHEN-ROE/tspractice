// 타입정의 보관용 파일
// 자바스크립트로 컴파일되지 않는다.
// 타입정의만 따로 해놓고 import 해서 씀(type, interface).
// 또는 프로젝트에서 사용하는 타입을 쭉 정리해놓을 레퍼런스 용으로 사용.
// 함수는 {} 붙이는 건 불가능. 파라미터와 리턴 타입만 지정가능.

export type Age = number;
export type multiply = (x:number, y: number) => number;
export interface Person { name : string }

// d.ts 파일은 ts파일이 아니라서 ambient module이 안 됨. export 해야함.
// 한 번에 많은 타입을 export 하고 싶은 경우 namespace 씀

//d.ts 파일을 레퍼런스 용으로 쓰려면 ts 파일마다 d.ts 파일을 자동생성하면 됨.
// tsconfig 에다가 declaration 옵션을 true로 바꿔주면 된다.