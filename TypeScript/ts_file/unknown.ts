let a:unknown;

if (typeof a === "number") {
    let b = a + 1;
}
if (typeof a === "string") {
    let b = a.toUpperCase();
}

function hello(): void {
    console.log("hello");
}
hello()

function condition(name:string|number) {
    if (typeof name === "string") {
        console.log(name)
    } else if (typeof name === "number") {
        console.log(name)
    } else {
        name
    }
}
condition(123456)


function err():never { // never 타입
    throw new Error();
}