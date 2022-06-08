"use strict";
/*************** TypeScript sheetCheat ***********/
/*****  basic variables *****/
const str = "string";
const num = 1;
const bool = true;
const nul = null;
const objTest = { id: 2, name: "John" };
const student = { firstName: "John", lastName: "Doe" };
/** syntaxe fonction */
function add(a, b) {
    return a + b;
}
const functArrow = (a, b) => a + b;
const example = "string";
const id = "2";
/** Generics */
function getUser(user2) {
    return user2;
}
const user2 = getUser("toto");
//exemple with array
function arrTest(arr) {
    return arr;
}
const arr = [1, 2, 3]; //ou bien const arr : Array<number | string> = [1,2,3,"toto"];
const userTest = {
    firstName: "John",
    lastName: "Doe",
    age: 25, //age is optional
};
/** syntaxe class ***/
class UserClass {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}
const userClass = new UserClass("John", "Doe", 25);
userClass.firstName = "John";
