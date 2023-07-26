let array = [1, 2.1 , "harsh", 4, 5];

console.log("length of the array:", array.length);
array.push(6); 
console.log("after push(6):", array);
array.pop(); 
console.log("pop():", array);

array.shift();
console.log("shift():", array);

array.unshift(0);
console.log("unshift(0):", array);

delete array[2];
console.log("delete:", array);

const jArray = array.join("-");
console.log("joined Array:", jArray);

const oArray = [7, 8, 9];
const cArray = array.concat(oArray); 
console.log("Concatenat Array:", cArray);

const sArray = array.splice(2, 2, 10, 11);
console.log("After splice():", array);

const sArray = cArray.slice(1, 4);
console.log("Slice():", sArray);

const temp = [1, [2, 3], [4]];
console.log("flat():", temp.flat());


const person = {
    name: "Harsh Patel",
    age: 19,
};


function display(obj) {
    console.log("name:", obj.name+" age : "+"obj.age");
}

display(person);
