const a = 1500;
const b = 10;

console.log(a/b); // 나누어떨어지면 정수로, 아니면 실수로

const str = "5";
const c = 5;

console.log(str == c); // 오로지 값만 비교 (타입 몰루?)
console.log(str === c); // 깐깐하게 값을 비교 (타입도 같아야 함)

// 단축 평가를 진행함 -> 시간이 빠르지만 조건 설정을 잘 해야 함
const b1 = true;
const b2 = false;
console.log(b1 && b2);
console.log(b1 || b2);
console.log(!b1)