"use strict";
let username = 'kim';
let username2 = 'kim';
let usernames = ['kim', 'park'];
let age = { age: 21, username: 'kim' };
let username3 = 'kim';
let username4 = 'kim';
function practice(x) {
    return x * 2;
}
// 에러(지금 변수의 타입이 확실치 않아서)
// function practice2(x: number | string) {
//   return x * 2
// }
// 정상
function practice3(x) {
    if (typeof x === 'number') {
        return x * 2;
    }
}
let john = [10, true];
let username5 = {
    name: 'kim', age: 21
};
let username6 = {
    age: 50,
    weight: 100,
};
class Person {
    constructor(name) {
        this.name = name;
    }
}
// 모든 변수에 타입 지정할 필요 없다.
// 변수 생성 시 타입스크립트가 타입을 자동으로 부여해줌.
// 간단한 변수들을 타입 생략해도 됨.
// 예제
let myname = 'noh';
let myage = 28;
let region = 'Masan';
let music = { group: 'NewJeans', title: 'Attention' };
let project = {
    member: ['kim', 'noh'],
    days: 30,
    started: true,
};
let arr = [1, '2', 3];
let obj = { data: '123' };
// any, unknown 타입 - 아무 타입 가능. 비상 시 쓰는 변수 타입 체크 해제기능
// 혹은 어떤 타입이 들어올 지 모르는 경우, 다양한 타입을 넣어야할 경우 사용.
// 자료를 집어넣어도 타입은 그대로 unknown이다.
let username7 = 'kim';
username7 = 20;
username7 = '김';
username7 = [];
username7 = undefined;
//예제
let user = 'kim';
let age2 = undefined;
let married = false;
let info = [user, age2, married];
let school = {
    score: [100, 97, 84],
    teacher: 'phil',
    friend: 'john',
};
school.score[4] = false;
school.friend = ['Lee', school.teacher];
// 파라미터에서 ?는 옵션이라는 의미.
// 구체적으로는 x: number | undefined 라는 의미임. 따라서 아래의 코드는 에러발생(x 의 타입이 명확하지 않기 때문).
function fpr(x) {
    return x * 2;
}
fpr(2);
// 함수 예제
function hello(username) {
    if (username != '') {
        console.log('안녕하세요 ' + username + '님');
    }
    else {
        console.log('no username');
    }
}

hello('홍길동')


// 파라미터의 자릿수 세는 함수
function count(input) {
    return input.toString.length;
}
// 결혼 가능 확률을 알려주는 함수
function possibility(income, hasHome, charm) {
    let incomeScore;
    let homeScore;
    let charmScore;
    let totalScore;
    incomeScore = income;
    if (hasHome)
        homeScore = 500;
    else
        homeScore = 0;
    if (charm == '상')
        charmScore = 100;
    else
        charmScore = 0;
    totalScore = incomeScore + homeScore + charmScore;
    if (totalScore >= 600) {
        return "결혼가능";
    }
    else {
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
function myfunc(x) {
    return x + 1;
}
// 예제
function cleaning(obj) {
    let newObj = [];
    for (let i = 0; i < obj.length; i++) {
        newObj[i] = Number(obj[i]);
    }
    console.log(newObj);
    return newObj;
}
// 예제2
function getSubject(sbj) {
    if (Array.isArray(sbj.subject)) {
        return sbj.subject[sbj.subject.length - 1];
    }
}
let animal;
let girl = {
    name: 'kim',
};
let square2 = {
    width: 1000,
};
let xy = { x: 1, y: 2 };
let test = {
    color: 'black',
    size: 100,
    position: [10, 20]
};
// 특정 값만 갖고 싶게 만들려면 Literal Type
// 특정 글자나 숫자만 가질 수 있게 제한을 두는 타입. const 변수의 업그레이트 버전이라고 할 수 있음.
// 더욱 엄격한 타입이다.
let johnson; // 이러면 johnson에는 '남자'라는 글자만 할당할 수 있다. 여기서 '남자는 string 타입이 아닌 '남자' 타입이다.
let kim;
let direction;
// 함수도 마찬가지
function lit(a) {
    return 1;
}
//예제
function game(a) {
    return ['가위', '보'];
}
// as const - 타입을 object의 value 로 바꿔준다. 아래에서 타입이 'kim'이 되는 거임. 
// 그리고 object 안에 있는 모든 속성을 readonly로 바꿔줌(변경하면 에러나게)
var data = {
    name: 'kim'
};
function constpr(name) {
}
constpr(data.name); // 이제 이게 가능해짐. as const 없으면 에러
let ABC = function (x, y) {
    return x + y;
};
let userdata = {
    name: 'kim',
    age: 30,
    plusOne(x) {
        return x + 1;
    },
    changeName: () => {
        console.log('hi');
    }
};
userdata.plusOne(1);
userdata.changeName();
let cutZero = function (x) {
    let result = x.replace(/^0+/, "");
    return result;
};
let removeDash = function (x) {
    let result = x.replace(/-/g, "");
    return parseFloat(result);
};
function totalFunction(a, func1, func2) {
    let result = func1(a);
    let result2 = func2(result);
    return result2;
}
totalFunction('010-1111-22222', cutZero, removeDash);
;

conso