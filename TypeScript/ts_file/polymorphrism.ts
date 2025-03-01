type SuperPrint = { // -> 그냥 배열만 못하고 숫자 배열만 가능
    <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder // -> Generic 타입 선언
}

const superPrint: SuperPrint = (arr) => {
    arr.forEach(i => console.log(i))
    return arr[0]
}

superPrint([1,2,3,4,5])
superPrint(["1", "2", "3", "4", "5"])
superPrint([true, false, true, false])