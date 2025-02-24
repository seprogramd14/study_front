console.log(greet("노승준")) // 호이스팅 적용
function greet(name) {
    return `Hello ${name}!`;
};

const greet2 = function(name) { // 호이스팅 적용 X
    return `Hello ${name}`;
}
console.log(greet2("노승준"))

const greet3 = (name) => `Hello ${name}`; // 화살표 함수 (ES6 부터)
console.log(greet3("승준노"))