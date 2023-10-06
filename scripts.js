/**********************************************************************
* AFTER EACH STEP WHERE YOU WRITE CODE, EITHER LOG THE RESULT TO THE
CONSOLE USING CONSOLE.LOG(), OR CHECK THE VALUE IN THE CONSOLE BY
TYPING IT IN AND PRESSING ENTER. MAKE SURE YOU HAVE THE VALUE YOU
EXPECT! *
**********************************************************************/

/********************** Exercise 1 - Creating Objects **********************/

let user1 = {
  name: "Rose Smith",
  age: 36,
  language: "English",
  programmer: true,
};

// Create a variable called "user2" that points to a new object. That object should hve the same keys as "user1", but different values, representing you—that is, it should have your name, your age, etc. Use the "user1" object above as a reference
let user2 = {
  name:"Dorcus",
  age: 27,
  language: "swahili",
  programer: true,
};

// Log the variable's value in the console.
 console.log(user2);

// Create a variable called "dino1" that points to anew object. It should have the keys "name", "species", and "diet". The values should be "T-Rex", "Tyrannosaurus Rex", and "carnivore", respectively.
 let dino1 = {
  name:"T-Rex",
  species:"Tyrannosaurus Rex",
  diet:"carnivore",

 };


// Log the variable's value in the console.
console.log(dino1);
// Create an object to hold information on your favorite recipe. It should have properties for:

// Title (a string, name of recipe)
// Servings (a number)
// Ingredients (an array of strings)

let recipe = {
  Title:'lemon cake',
  serving: 1,
  ingredients: ['salt','suger','oil','lemonJuice'],
  
};

// Log the object to the console.

console.log(recipe);

/********************** Exercise 2 - Accessing Values **********************/

// Create a variable that holds the value of the "title" key in the "recipe" object you created above.

let recipeTitle = recipe.Title;
console.log(recipeTitle);
// Log the value of that variable to the console.

let userName = user1.name;
console.log(userName);

// Create a variable that holds the value of the "name" key in the "user1" object from the previous exercise.

console.log(user1.name);

// Log the value of that variable to the console.

console.log(user2.age);

// WITHOUT creating a new variable, log the value of the "name" key in the "user1" object to the console.

// Log the value of the "age" key in the "user2" object to the console. You can create a new variable or log the value directly.

let user3 = {
  name: "Rose Smith",
  age: 36,
  language: ["English", "Spanish"],
  programmer: true,
};

// Log the value of the "language" key in the "user3" object to the console.

console.log(user3.language);

// Put the value of the "language" key in the "user3" object into a new variable. Log the value of the first language in that array to the console using an index.

let firstLanguage = user3.language[0];
console.log(firstLanguage);

// WITHOUT creating a new variable or accessing the one you just created, log the value of the first language in the "languages" array to the console. You'll have to use BOTH dot notation to access the "languages" array, and square bracket notation to access the first element in that array, all in the same line.
console.log(user3.language[0]);

/********************** Exercise 3 - Adding Values **********************/


// ALL OF THE STEPS BELOW SHOULD BE DONE WITHOUT CHANGING THE CODE ABOVE.

// Add a key-value pair to the above empty "dino2" object. The key should be "name", and the value should be "Raptor".
let dino2 = {};
dino2.name = "Raptor";
dino2.species = "Velociraptor";
dino2.diet = "carnivore";

console.log(dino2);

// Add a key-value pair to the "dino2" object. The key should be "species", and the value should be "Velociraptor".

let dino3 = {
  name: "Raptor",
  diet: "carnivore",
};
dino3.species = "Velociraptor";


// Add a key-value pair to the "dino2" object. The key should be "diet", and the value should be "carnivore".

 dino2.diet ="carnivores";

// Log the "dino2" object to the console.
 console.log(dino2);


// ALL OF THE STEPS BELOW SHOULD BE DONE WITHOUT CHANGING THE CODE ABOVE.

// Add a key-value pair to the "dino3" object. The key should be "species", and the value should be "Velociraptor".
let dino3 = {
  name: "Raptor",
  diet: "carnivore",
};
dino3.species = "Velociraptor";

// Now create a dino4 object with the name and species keys. The values should be "Triceratops" and "Triceratops Horridus", respectively.
let dino4 = {
  name: "Triceratops",
  species: "Triceratops Horridus",
};

// Add a key-value pair to the "dino4" object. The key should be "diet", and the value should be "herbivore".
dino4.diet = "herbivore";

// Log the "dino4" object to the console.
console.log(dino4);
/********************** Exercise 4 - Changing Values **********************/

let dino5 = {
  name: "Triceratops",
  species: "Triceratops Horridus",
  diet: "herbivore",
};

// ALL OF THE STEPS BELOW SHOULD BE DONE WITHOUT CHANGING THE CODE ABOVE.

// Change the value of the "diet" key in the "dino5" object to "omnivore".

dino5.diet = "omnivore";

// Log the "dino5" object to the console.

console.log(dino5);

// Change the value of the "name" key in the "dino5" object to "Sarah".

dino5.name = "Sarah";

// Log the "dino5" object to the console.

console.log(dino5);


// ALL OF THE STEPS BELOW SHOULD BE DONE WITHOUT CHANGING THE CODE ABOVE.

// Change the value of the "price" key in the "prettyGoodBook" object to 12.99.
let prettyGoodBook = {
  title: "The Hobbit",
  price: 14.99,
  rating: 4.5,
};
// Change the value of the "rating" key in the "prettyGoodBook" object to 5. (It's more than just pretty good!)

prettyGoodBook.price = 12.99;
prettyGoodBook.rating = 5;

// Log the "prettyGoodBook" object to the console.

console.log(prettyGoodBook);

