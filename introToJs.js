// printing in js
//console.log("hello")

// creating variables, "let" allows us to change it later
let name = "Allison";

// "const" for variables that won't be changed
const age = 18;

// older way to initialize variables
var city = "New York";

// print all of this^
//console.log(name, age, city);

// try to reassign const --> error
// age = 19;
// console.log(age);

// assigning numbers
let number = 10;
let num = 0.1;

// strings
let text = "Hello";

// booleans
let isCool = true;

// we can assign null
let something = null;

// we can assign nothing
let notDefined;

// arrays
let arr = [1, 2, 3];

// objects, accessing name and age
let obj = { name: "Allison", age: 18 };
//console.log(obj.name);

// functions, can set the parameters
function greet(name, message) {
    return "Hello " + name + "!" + " You are " + message + ".";
}
//console.log(greet("Allison", "cool"));

// binary operators
let y = 0.83;
let x = 3;
//console.log(x+y);
//console.log(x-y);
//console.log(x*y);
//console.log(x/y);

// if statements
let n = 18;
if (n >= 18) {
    //console.log("You are an adult!");
} else {
    //console.log("You are a minor.");
}

// for and while loops
for (let i = 0; i < 5; i++) {
    //console.log("Number: ", i);
}
let count = 0;
while (count < 3) {
    //console.log("Count: ", count);
    count++;
}

// more with arrays
let colors = ["Red", "Green", "Blue"];
//console.log(colors[0]); //"Red"
colors.push("Yellow"); //append to end
//console.log(colors);

// iterating over arrays
let found = false;

for (let i = 0; i < colors.length; i++) {
    if (colors[i] === "Blue") {
        //console.log("Bue is at index " + i);
        found = true;
        break
    }
}
// if (!found) console.log("Blue not found");

// more with objects
let person = {
    name: "Allison",
    age: 18,
    city: "New York"
};

//console.log(person.city);