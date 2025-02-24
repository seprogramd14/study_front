const score = 95;
const grade = score > 90 ? "A" : "F"; // 삼항 연산자
console.log(grade)

if (score == 95) {
    console.log(score);
} else if (score > 90) { // elif 아님
    console.log(score);
} else {
    console.log("F");
}

switch (grade) { // 분기를 가장 쉽게 나누는 문법
    case "A":
        console.log("오 만점~");
        break;
    default:
        console.log("낙제");
}

// 반복문 종류 => for(고전), for .. in(객체 순환, 키 위주), for .. of(배열, iterable),
//             forEach(배열), while(조건 중심), do .. while(1회 무조건 실행)

let array = [10, 20, 30, 40, 50];
array.forEach((num, index) => { // 배열 전용 메서드
    console.log(`${index+1}번 값: ${num}`)
})