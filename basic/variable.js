// 변수 선언이 3가지 방법이 있음
let a = 10; // 기본적으로 많이 쓰는 변수 선언 방식
var b = 10; // 호이스팅(메모리 공간이 먼저 할당, undefined)이 존재하는 변수 선언 방식 -> 잘 안씀
const c = 123; // 상수 설정할 때 많이 쓰는 변수 선언 방식

console.log(a); // 프린트는 console.log로 출력

// data type -> string, number, boolean, null(의도적으로 없음), 
// undefined(미정, 초기화X), symbol(고유 키 생성 응용), bigint, object, array, function
const str = "String";
const boolean = true;
const number = 12421423;
const obj = {ThisIsObject:"123456"};
const SYMBOL = Symbol();

console.log(typeof(str));
console.log(typeof(boolean));
console.log(typeof(number));
console.log(typeof(obj));
console.log(typeof(SYMBOL));