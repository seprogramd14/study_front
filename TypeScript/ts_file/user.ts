interface User { // 용량을 줄일 경우에 많이 사용
    firstName: string,
    lastName: string,
    sayHi(name: string): string,
    fullName(): string
}

class Player implements User {
    constructor(
        public firstName: string,
        public lastName: string
    ) {}
    sayHi(name: string): string {
        return `Hi! ${name}, My name is ${this.firstName}`;
    }
    fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

function makeUser(user: User): User {
    return {
        firstName: "노",
        lastName: "승준",
        sayHi: (name) => {return `Hi, ${name}`},
        fullName: () => {return ""}
    }
}

makeUser({
    firstName: "노",
    lastName: "승준",
    sayHi: (name) => {return `Hi, ${name}`},
    fullName: () => {return ""}
})