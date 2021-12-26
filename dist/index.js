"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    say() {
        console.log(`Hello my name is ${this.name}`);
    }
}
const p = new Person("Guilherme");
p.say();
