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

interface SStorage<T> {
    [key:string]: T
}

class LocalStorage<T> {
    private storage: SStorage<T> = {};
    set(key: string, value: T) {
        this.storage[key] = value;
    }
    remove(key: string) {
        delete this.storage[key];
    }
    get(key: string): T {
        return this.storage[key];
    }
    clear() {
        this.storage = {};
    }
}

const stringStorage = new LocalStorage<string>();
stringStorage.set("key", "value")
console.log(stringStorage.get("key"))