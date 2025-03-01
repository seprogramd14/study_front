
type Anything = <T, M>(a: T[], b: M) => T

const anything: Anything = (a) => {
    return a[0]
}

anything([1,2,3,4,5], "2")

function printSuper<T>(a: T[]) {
    return a[0]
}

printSuper([1, 2, 3, false, true, "string"])

type Player<E> = {
    name: string,
    extraInfo: E
}

type FavFood = {
    favFood: string
}

type TmdwnsPlayer = Player<FavFood> // 타입끼리 상속 가능

const tmdwns: TmdwnsPlayer = {
    name: "tmdwns",
    extraInfo: {
        favFood: "bulgogi"
    }
}

const gkdbs: Player<null> = {
    name: "gkdbs",
    extraInfo: null
}

type Arr = Array<number>

const arr: Arr = [1,2,3,4,5]
console.log(arr)