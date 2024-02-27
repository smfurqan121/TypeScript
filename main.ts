//question-1
console.log("Hello World");

//question-2
let person: string = "sir zia";
console.log("Hello " + person + " would you like to learn some Python today?");

//question-3
let person2: string = "syed Muhammad furqan"
//uppercase:
console.log(person2.toUpperCase());
//lowercase:
console.log(person2.toLowerCase());
//Titlecase:
let firstletter: string = person2.charAt(0).toUpperCase();
let restletter: string = person2.slice(1).toLowerCase();
let titleCase: string = firstletter + restletter;
console.log(titleCase);

//question-4
let quote:string = "Be Aware Of Your Own Worth, Use All of Your Power To Achive It.Creat An Ocean From A Dewdrop.Do not beg for light from the moon,obtain it from the spark within you."
let author:string = "Allama Iqbal"
console.log(`${author} once said, "${quote}"`)

//question-5
// Program: Famous Quote
// Author: [syed furqan]
// Date: [24-feb]
// Description: This program prints a famous quote along with its author.
const famous_person:string = "Albert Einstein";// Store the name of the famous person
const quote2:string = "A person who never made a mistake never tried anything new.";// Store the quote
const message:string = `${famous_person} once said, "${quote2}"`;// Compose the message

console.log(message);// Print the message

// question-6
const personName:string = "\t\n furqan \n\t";
console.log("person name with whiteSpace",personName);

const strippedName:string = personName.trim();
console.log("stripped name",strippedName);

// question-7
// Program: Number Eight
// Author: [syed furqan]
// Date: [24-feb]
// Description: This program demonstrates addition, subtraction, multiplication, and division operations that result in the number 8.

//Addition
const add:number = 4+4;
//subtraction
const sub:number = 12-4;
//multiplication
const mul:number = 4*2;
//division
const div:number = 16/2;

console.log("Addition:",add ,"subtract:",sub ,"multiplication:",mul ,"division:",div );//print numbers

//question-8
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);

//question-9:
const favNum:number = 10;
const myMessage:string = `my favorite number is ${favNum}.`;
console.log(myMessage);

//question-10
console.log("Done with Question no-5 and question no-7");

//question-11
const names:string[] = ["hamza","Ali","rehman"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

// question-12
console.log(`Hello, ${names[0]} ! I hope you're having a great day!`);
console.log(`Hello, ${names[1]} ! I hope you're having a great day!`);
console.log(`Hello, ${names[2]} ! I hope you're having a great day!`);

//question-13
const transportationModes:string[] = ['car', 'motorcycle', 'bicycle', 'boat'];
console.log(`I would like to own a ${transportationModes[0]}.`);
console.log(`I enjoy riding my ${transportationModes[1]}.`);
console.log(`I love riding my ${transportationModes[2]} to work.`);
console.log(`I dream of sailing on a ${transportationModes[3]} someday.`);

//question-14
const guestList:string[] = ['Sir Zia', 'Sir Ameen', 'Sir Daniyal'];
console.log(`Dear ${guestList[0]}, you are invited to dinner at my place.`);
console.log(`Dear ${guestList[1]}, you are invited to dinner at my place.`);
console.log(`Dear ${guestList[2]}, you are invited to dinner at my place.`);

//question-15
const unableToAttend:string[] = guestList.splice(0,1);
console.log(`${unableToAttend[0]} can't make it to dinner.`);

const newGuest:string = "sarwar";
guestList.push(newGuest);

console.log(`Dear ${guestList[0]} you are invited to dinner at my place.`);
console.log(`Dear ${guestList[1]}, you are invited to dinner at my place.`);
console.log(`Dear ${guestList[2]}, you are invited to dinner at my place.`);

console.log("Great news!,I found a bigger dinner table");

//question-16
guestList.unshift("hamza");

let middleIndex = Math.ceil(names.length / 2);
guestList.splice(middleIndex,0,"ali");

guestList.push("rehman");
console.log(`Dear ${guestList[0]} you are invited to dinner at my place.`);
console.log(`Dear ${guestList[1]}, you are invited to dinner at my place.`);
console.log(`Dear ${guestList[2]}, you are invited to dinner at my place.`);
console.log(`Dear ${guestList[3]} you are invited to dinner at my place.`);
console.log(`Dear ${guestList[4]}, you are invited to dinner at my place.`);
console.log(`Dear ${guestList[5]}, you are invited to dinner at my place.`);

console.log("Sorry, we can only invite two people for dinner.");

//question-17

while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest}! We can't invite you to dinner.`);
};

guestList.forEach(guest => {
    console.log(`Hello, ${guest}! You're still invited to dinner.`);
});

guestList.pop();
guestList.pop();

console.log("Remaining guests:", guestList);

//question-18
// Store the locations in an array (not in alphabetical order)
let places: string[] = ["Japan", "Italy", "Australia", "Iceland", "Brazil"];

// Print the array in its original order
console.log("Original order:", places);

// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", [...places].sort());

// Show that the array is still in its original order by printing it again
console.log("Still in original order:", places);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:", [...places].sort().reverse());

// Show that the array is still in its original order by printing it again
console.log("Still in original order:", places);

// Reverse the order of the list
places.reverse();
console.log("Reversed order:", places);

// Reverse the order of the list again to restore the original order
places.reverse();
console.log("Back to original order:", places);

// Sort the array so it's stored in alphabetical order
places.sort();
console.log("Sorted in alphabetical order:", places);

// Sort the array to change it to reverse alphabetical order
places.sort().reverse();
console.log("Sorted in reverse alphabetical order:", places);

//question-19
console.log(`You are inviting ${guestList.length} people to dinner.`);

//question-20
let mountains: string[] = [
    "Mount Everest",
    "K2",
    "Kangchenjunga",
    "Makalu",
    "Lhotse",
    "Cho Oyu"
];

console.log("List of famous mountains:");
mountains.forEach(mountain => {
    console.log(mountain);
});

//question-21
// Define an interface to represent a country
interface Country {
    name: string;
    capital: string;
    population: number;
    language: string;
}

// Create an array of country objects
let countries: Country[] = [
    {
        name: "United States",
        capital: "Washington, D.C.",
        population: 331449281,
        language: "English"
    },
    {
        name: "United Kingdom",
        capital: "London",
        population: 68207116,
        language: "English"
    },
    {
        name: "France",
        capital: "Paris",
        population: 65273511,
        language: "French"
    }
];

// Print information about each country
console.log("Countries Information:");
countries.forEach(country => {
    console.log(`Name: ${country.name}`);
    console.log(`Capital: ${country.capital}`);
    console.log(`Population: ${country.population}`);
    console.log(`Official Language: ${country.language}`);
    console.log("----------------------");
});

//question-22
console.log("Accessing a valid index:", mountains[1]); 

// Intentionally accessing an invalid index
console.log("Accessing an invalid index:", mountains[6]); // This will cause an index error

console.log("Correctly accessing the last element:", mountains[5]);

//question-23
let car = 'subaru';

// Test 1: 
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); 

// Test 2:
console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota'); 

// Test 3:
console.log("Is car == 'Subaru'? I predict False.");
console.log(car == 'Subaru'); 

// Test 4:
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru'); 

// Test 5: 
console.log("Is car !== 'Subaru'? I predict True.");
console.log(car !== 'Subaru'); 

// Test 6:
console.log("Is car.length == 6? I predict False.");
console.log(car.length == 6); 

// Test 7:
console.log("Is car.length != 5? I predict True.");
console.log(car.length != 5);

// Test 8:
console.log("Does car start with 's'? I predict True.");
console.log(car.startsWith('s'));

// Test 9:
console.log("Does car end with 'ru'? I predict True.");
console.log(car.endsWith('ru')); 

// Test 10:
console.log("Does car include 'uba'? I predict True.");
console.log(car.includes('uba'));

//question-24
// Tests for equality and inequality with strings
let fruit:string = 'apple';
console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit == 'apple'); 

console.log("Is fruit != 'banana'? I predict True.");
console.log(fruit != 'banana'); 

console.log("Is fruit == 'Apple'? I predict False.");
console.log(fruit == 'Apple'); 

// Tests using the lower case function
let city:string = 'NEW YORK';
console.log("Is city in lower case equal to 'new york'? I predict True.");
console.log(city.toLowerCase() == 'new york'); 

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let x:number = 10;
let y:number = 20;
console.log("Is x == 10? I predict True.");
console.log(x == 10);

console.log("Is y != 10? I predict True.");
console.log(y != 10); 

console.log("Is x > 5? I predict True.");
console.log(x > 5); 

console.log("Is y < 30? I predict True.");
console.log(y < 30); 

console.log("Is x >= 10? I predict True.");
console.log(x >= 10); 

console.log("Is y <= 20? I predict True.");
console.log(y <= 20); 

// Tests using "and" and "or" operators
let isSunny:boolean = true;
let isWarm:boolean = true;
console.log("Is it sunny and warm? I predict True.");
console.log(isSunny && isWarm); 

let hasRain:boolean = true;
console.log("Is it sunny and raining? I predict False.");
console.log(isSunny && hasRain); 

let isWeekend:boolean = true;
console.log("Is it sunny or weekend? I predict True.");
console.log(isSunny || isWeekend); 

// Test whether an item is in an array
let fruits:string[] = ['apple', 'banana', 'orange', 'grape'];
console.log("Is 'apple' in the array fruits? I predict True.");
console.log(fruits.includes('apple')); 

// Test whether an item is not in an array
console.log("Is 'kiwi' not in the array fruits? I predict True.");
console.log(!fruits.includes('kiwi')); 

//question-25
let alien_color:string = "green";
if(alien_color === "green"){
    console.log("Congratulations! You just earned 5 points.");
};
if(alien_color === "red"){
    console.log("Congratulations! You just earned 5 points.");
};

//question-26
let alien_color2:string = "green";
if(alien_color2 === "green"){
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
}
else{
    console.log("Congratulations! You just earned 10 points for shooting the alien.");
};

if(alien_color2 === "red"){
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
}
else{
    console.log("Congratulations! You just earned 10 points for shooting the alien.");
};

//question-27
//version-1
if(alien_color === "green"){
    console.log("Congratulations! You just earned 5 points.");
}else if(alien_color === "yellow"){
    console.log("Congratulations! You just earned 10 points.");
}
else if(alien_color === "red"){
    console.log("Congratulations! You just earned 15 points.");
};
// version-2
let alien_colorV2:string = "yellow"
if(alien_colorV2 === "green"){
    console.log("Congratulations! You just earned 5 points.");
}else if(alien_colorV2 === "yellow"){
    console.log("Congratulations! You just earned 10 points.");
}
else if(alien_colorV2 === "red"){
    console.log("Congratulations! You just earned 15 points.");
};

//version-3
let alien_colorV3:string = "red"
if(alien_colorV3 === "green"){
    console.log("Congratulations! You just earned 5 points.");
}else if(alien_colorV3 === "yellow"){
    console.log("Congratulations! You just earned 10 points.");
}
else if(alien_colorV3 === "red"){
    console.log("Congratulations! You just earned 15 points.");
};

//quetion-28
let age: number = 25; 

if (age < 2) {
    console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}

//question-29
let favorite_fruits: string[] = ["apple", "banana", "strawberry"];

if (favorite_fruits.includes('banana')) {
    console.log("You really like bananas!");
}

if (favorite_fruits.includes('apple')) {
    console.log("You really like apples!");
}

if (favorite_fruits.includes('orange')) {
    console.log("You really like oranges!");
}

if (favorite_fruits.includes('strawberry')) {
    console.log("You really like strawberries!");
}

if (favorite_fruits.includes('pineapple')) {
    console.log("You really like pineapples!");
}

//quetion-30
let usernames: string[] = ["admin", "hamza", "rehman", "sarwar", "ali"];

usernames.forEach(username => {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
});

//question-31

if (usernames.length > 0) {
    usernames.forEach(username => {
        if (username === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    });
} else {
    console.log("We need to find some users!");
}

// Remove all usernames from the array
usernames = [];

// Check if the list of users is not empty
if (usernames.length > 0) {
    usernames.forEach(username => {
        if (username === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    });
} else {
    console.log("We need to find some users!");
}
//question-32
// List of current usernames
let current_users: string[] = ["hamza", "zia", "ameen", "rehman", "sarwar"];

// List of new usernames
let new_users: string[] = ["huzaifa ", "farhan", "ali", "hamza", "abdullah"];

// Loop through the new_users list
new_users.forEach(new_user => {
    if (current_users.some(current_user => current_user.toLowerCase() === new_user.toLowerCase())) {
        console.log(`Sorry, the username '${new_user}' is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username '${new_user}' is available.`);
    }
});

//question-33
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through the array
numbers.forEach(number => {
    let ordinalEnding: string;
    if (number === 1) {
        ordinalEnding = "st";
    } else if (number === 2) {
        ordinalEnding = "nd";
    } else if (number === 3) {
        ordinalEnding = "rd";
    } else {
        ordinalEnding = "th";
    }

    console.log(`${number}${ordinalEnding}`);
});

//question-34
let pizzas: string[] = ["Pepperoni", "Margherita", "BBQ Chicken"];

// Print the name of each pizza using a for loop
for (let i = 0; i < pizzas.length; i++) {
    console.log(pizzas[i]);
}

// Print a sentence using the name of each pizza
for (let i = 0; i < pizzas.length; i++) {
    console.log(`I like ${pizzas[i]} pizza.`);
}

console.log("I really love pizza!");

//question-35
let animals: string[] = ["Dog", "Cat", "Rabbit"];

// Print the name of each animal using a for loop
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

// Print a statement about each animal
for (let i = 0; i < animals.length; i++) {
    console.log(`A ${animals[i]} would make a great pet.`);
}

// Print a statement about what these animals have in common
console.log("Any of these animals would make a great pet!");

//question-36
function make_shirt(size: string, message: string): void {
    console.log(`Creating a ${size}-sized shirt with the message: "${message}"`);
}

// Call the function
make_shirt("medium", "Hello, World!");

//quetion-37
// Function to create a shirt with given size and message
function make_shirt2(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`Creating a ${size}-sized shirt with the message: "${message}"`);
}

// Create a large shirt with the default message
make_shirt2();

// Create a medium shirt with the default message
make_shirt2("medium");

// Create a shirt of any size with a different message
make_shirt2("small", "Hello, World!");

//question-38
function describe_city(city: string, country: string = "Unknown"): void {
    console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describe_city("Karachi", "Pakistan");
describe_city("New York", "USA");     
describe_city("Tokyo");               

//quetion-39
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}


let formatted1: string = city_country("Lahore", "Pakistan");
let formatted2: string = city_country("New York", "USA");
let formatted3: string = city_country("Tokyo", "Japan");

console.log(`"${formatted1}"`);
console.log(`"${formatted2}"`);
console.log(`"${formatted3}"`);

//question-40
// Function to create an album object
function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    let album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

// Make three dictionaries representing different albums
let album1 = make_album("Artist1", "Album1");
let album2 = make_album("Artist2", "Album2", 12);
let album3 = make_album("Artist3", "Album3", 15);

// Print each return value to show that objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);

//question-41
function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

let magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Call the function to show magicians' names
show_magicians(magicians);

//quetion-42
/*function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}*/

function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}

//let magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

make_great(magicians);

show_magicians(magicians);

//question-43
console.log('skipped Dont understand');

//question-44
function makeSandwich(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    items.forEach(item => {
        console.log("- " + item);
    });
    console.log("Enjoy your sandwich!");
}

// Call the function three times with different numbers of arguments
makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
makeSandwich("Turkey", "Swiss cheese");
makeSandwich("Peanut butter", "Jelly");

//question-45
console.log("skipped")