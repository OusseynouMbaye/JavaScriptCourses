/*************** TypeScript sheetCheat ***********/
/*****  basic variables *****/
const str: string = "string";
const num: number = 1;
const bool: boolean = true;
const nul: null = null;
const objTest: { id: number; name: string } = { id: 2, name: "John" };
// On peut aussi utiliser un type pour ca Exemple avec un objet:
type Student = { firstName: string; lastName: string };
const student: Student = { firstName: "John", lastName: "Doe" };

/** syntaxe fonction */
function add(a: number, b: number): number {
  return a + b;
}
const functArrow = (a: number, b: number) => a + b;

/** syntaxe type ***/
type example = string;
const example: example = "string";

type Id = number | string;
const id: Id = "2";

/** Generics */
function getUser<T>(user2: T): T {
  return user2;
}
const user2 = getUser<string>("toto");
//exemple with array
function arrTest<T>(arr: T[]): T[] {
  return arr;
}

const arr: number[] = [1, 2, 3]; //ou bien const arr : Array<number | string> = [1,2,3,"toto"];

/** syntaxe interface ***/
interface UserTest {
  firstName: string;
  lastName: string;
  age?: number;
}
const userTest: UserTest = {
  firstName: "John",
  lastName: "Doe",
  age: 25, //age is optional
};

/** syntaxe class ***/
class UserClass {
   firstName: string;
  lastName: string;
  age?: number;

  constructor(firstName: string, lastName: string, age?: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}
const userClass = new UserClass("John", "Doe", 25);
userClass.firstName = "John";