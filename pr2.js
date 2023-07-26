let numbersArray = [1, 2, 3, 4, 5];

console.log("Length of the array:", numbersArray.length);
console.log("Element at index 2:", numbersArray[2]);
console.log("Element at index 4:", numbersArray[4]);
numbersArray.push(6); 
console.log("After push(6):", numbersArray);
numbersArray.pop(); 
console.log("After pop():", numbersArray);

numbersArray.shift();
console.log("After shift():", numbersArray);

numbersArray.unshift(0);
console.log("After unshift(0):", numbersArray);

delete numbersArray[2];
console.log("After delete:", numbersArray);

const joinedArray = numbersArray.join("-");
console.log("Joined Array:", joinedArray);

const otherArray = [7, 8, 9];
const concatenatedArray = numbersArray.concat(otherArray); 
console.log("Concatenated Array:", concatenatedArray);

const splicedArray = numbersArray.splice(2, 2, 10, 11);
console.log("After splice():", numbersArray);

const slicedArray = concatenatedArray.slice(1, 4);
console.log("Sliced Array:", slicedArray);

const flatArray = [1, [2, 3], [4, [5]]];
console.log("Flat Array:", flatArray.flat());


const person = {
    name: "Harsh Patel",
    age: 19,
    gender: "Male"
};


function displayPersonDetails(personObj) {
    console.log("Name:", personObj.name);
    console.log("Age:", personObj.age);
    console.log("Gender:", personObj.gender);
}


displayPersonDetails(person);
