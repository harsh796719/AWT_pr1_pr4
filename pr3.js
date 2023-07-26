let x = 10;
if (true) {
    let x = 20;
    console.log(x);
}
console.log(x);

const PI = 3.14;
// PI = 3.1415; error


const addArrow = (a, b) => a + b;
console.log(addArrow(2, 3));

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

console.log(newNumbers);

const cs = ["red", "green", "blue"];
for (const color of cs) {
    console.log(color);
}

const myMap = new Map();
myMap.set("name", "Harsh");
myMap.set("age", 19);

console.log(myMap.get("name"));
console.log(myMap.get("age"));

const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2);
console.log(mySet);


class Person {
    constructor(name) {
        this.name = name;
    }

    sHello() {
        console.log(`Hii, my name is ${this.name}`);
    }
}

const hp = new Person("Harsh");
hp.Hello();


function fetchData() {
    return new Promise((resolve, reject) => {
       
        setTimeout(() => {
            const data = "Resolved data";
            // resolve the promise with the data
            resolve(data);
        }, 2000);
    });
}

fetchData()
    .then((result) => console.log(result))
    .catch((error) => console.error(error));


const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2); 

function greet(name = "Anonymous") {
    console.log(`Hello, ${name}!`);
}

greet();
greet("harshh");

function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
