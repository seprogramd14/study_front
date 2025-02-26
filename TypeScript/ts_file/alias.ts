type Student = {
    readonly name: string, // 처음 생성 후 오로지 읽을 수만 있음
    age: number,
    grade?: string
}

const tmdwns: Student = {
    name: "tmdwns",
    age: 17
}

const tjdms: Student = {
    name: "tjdms",
    age: 18,
    grade: "A"
}

const studentMaker = (name: string, age: number): Student => ({name, age})
let student1 = studentMaker(";ljasf", 123456);
console.log(student1)