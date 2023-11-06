

//Prompt user to enter a list of a variety of froyo flavors. Have it by default say vanilla, vanilla, vanilla, strawberry, coffee, coffee
const inputFlavor = prompt(
    "Welcome to Froyo, please place your order.",
    "vanilla, vanilla, vanilla, strawberry, coffee, coffee"
);

// Split the string of numbers into an array of strings.
// const flavorsArray = inputFlavor.split(", ");

// //Build object to keep track of flavors
// const totalFlavors = {
//     vanilla: 0,
//     strawberry: 0,
//     coffee: 0,
// }

// Convert the array of strings into an array of numbers.
// for (let i = 0; i < flavorsArray.length; i++) {

//     //If the flavor is vanilla add to object
//     if (flavorsArray[i] === 'vanilla') {
//         totalFlavors.vanilla += 1;
//     }

//     //If the flavor is strawberry add to object
//     else if (flavorsArray[i] === 'strawberry') {
//         totalFlavors.strawberry += 1;
//     }

//If the flavor is coffee add to object
//     else if (flavorsArray[i] === 'coffee') {
//         totalFlavors.coffee += 1;
//     }

// }

//Display amount of order on a table.
console.table(countFlavors(inputFlavor));

//Initialize function call it Count Flavors
function countFlavors(input) {

    // Split the string of numbers into an array of strings.
    const flavorsArray = input.split(", ");

    //Build object to keep track of flavors
    const totalFlavors = {
    }

    //Convert the array of strings into an array of numbers.
    for (let i = 0; i < flavorsArray.length; i++) {

        //Initialize key to contain the flavors array
        const key = flavorsArray[i];

        //If flavor is in object add flavor to object
        if (totalFlavors[key]) {
             totalFlavors[key]++;

         //Else add word to object with count of one.
         } else {
            totalFlavors[key] = 1;
         }

    }

    return totalFlavors;

}