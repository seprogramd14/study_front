type Team = "red" | "yellow" | "blue";
type Health = 1 | 5 | 10

interface Player { // 오로지 object의 형태를 설명하기 위해서 사용 / 상속 가능
    nickname: string,
    team: Team
    health: Health
}

const player1: Player = {
    nickname: "Sepro",
    team: "red",
    health: 10
}

type Sex = "male" | "famale"
interface Person {
    readonly name: string,
    readonly age?: number,
    readonly sex: Sex
}

interface Student extends Person {
    grade: string
}

const student1: Student = {
    name: "승준",
    grade: "A",
    age: 18,
    sex: "famale"
}

// 인터페이스의 이름이 같은 것들은 알아서 하나로 합쳐준다.
interface User {
    name: string
}
interface User {
    age: number
}
interface User {
    nickname: string
}
const wns: User = {
    name: 'efe',
    age: 102,
    nickname: '234'
}