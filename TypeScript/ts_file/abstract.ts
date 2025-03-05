abstract class User {
    constructor(
        protected firstName: string,
        protected lastName: string
    ) {}
    abstract sayHi(name: string): string;
    abstract fullName(): string;
}

class Player extends User {
    sayHi(name: string): string {
        return `Hi! ${name}, My name is ${this.firstName}`;
    }
    fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

