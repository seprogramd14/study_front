type Words = {
    [key:string]: string; // -> 아무 이름의 key를 가지고 싶을 때 사용
}

class Dict {
    private words: Words;
    constructor() {
        this.words = {}
    }
    add(word:Word) { // 클래스를 타입으로 사용할 수 있다.
        if(this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }
    def(term:string) {
        return this.words[term];
    }
}

class Word {
    constructor(
        public readonly term: string, // 수정 불가
        public readonly def: string
    ) {}
}

const kimchi = new Word("kimchi", "한국음식");

const dict = new Dict();
dict.add(kimchi);
console.log(dict.def("kimchi"));