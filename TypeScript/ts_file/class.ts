abstract class User {
    constructor(
        protected firstName: string,
        protected lastName: string,
        protected nickName: string
    ) {} // 이걸 쓰는 이유? -> 아마도 함수라서 쓰는 게 아닐까.....
    abstract getNickName():void;
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Player extends User {
    getNickName() {
         console.log(this.nickName)
    }
}

const player1 = new Player("tmdwns", "sh", "sepro");
// player1.firstName; 둘 다 작동을 안함 -> private 속성이기 때문
// player1.lastName;
// player1.nickName;
player1.getNickName();
console.log(player1.getFullName());