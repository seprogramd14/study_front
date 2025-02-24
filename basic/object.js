const fruit = ["apple", "banana", "cherry", "mango"]
// 대부분은 익명 함수(화살표 함수)를 이용해서 인자값을 넘김
console.log(fruit.map((x) => x.length)); // python map하고 유사함
console.log(fruit.filter((x) => x === "apple"));

const numbers = [5, 13202, 2034, 23956, 79, 5954]
console.log(numbers.filter((x) => x > 100));

const user = { name: "노승준", age: 18 } // 복제하면 참조 모델이기 때문에 원본 간섭 가능

const { name, age } = user; // 객체 분해 할당 -> 키에 맞는 변수로 들어감
console.log(name);