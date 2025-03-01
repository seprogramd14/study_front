// type Add = (a:number, b:number) => number

// type Add = {
//     (a: number, b: number): number
// }
// const add: Add = (a, b) => a+b;

type Config = {
    push: string
    state: object
}

type Push = {
    (path: string): void
    (config: Config): void
}

const push: Push = (config) => {
    if (typeof config === "string") {
        console.log(config);
    } else {
        console.log(config.push);
    }
}

type Add = {
    (a: number, b: number): number
    (a: number, b: number, c: number): number
}

const add: Add = (a, b, c?:number) => {
    if (c) return a+b+c;
    return a+b;
}
console.log(add(3, 2, 4))