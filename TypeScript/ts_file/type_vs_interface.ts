// 1. type / interface
type PlayerA = {
    name: string
}
const playerA: PlayerA = {
    name: "승준"
}

interface PlayerB {
    name: string
}
const playerB: PlayerB = {
    name: "승준"
}

// 2. merge type / interface
type PlayerAA = PlayerA & { 
    age: number
}
const playerAA: PlayerAA = {
    name: "승준",
    age: 18
}

interface PlayerBB extends PlayerB { // 조금 더 직관적이라고 해야 하나
    age: number
}
const playerBB: PlayerBB = {
    name: "승준",
    age: 18
}

// 3. add property type / interface
// type PlayerAA = { -> 중복이기 때문에 안됨
//     length: number
// }
interface PlayerBB {
    length?: number
}
const playerBBi: PlayerBB = {
    name: "승준",
    age: 18,
    length: 173
}

class User implements PlayerBB { // PlayerAA도 가능
    constructor(
        public name: string,
        public age: number
    ) {}
}