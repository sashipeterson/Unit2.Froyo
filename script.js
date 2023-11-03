

//Prompt user to enter a list of a variety of froyo flavors. Have it by default say vanilla, vanilla, vanilla, strawberry, coffee, coffee
const inputFlavor = prompt(
    "Welcome to Froyo, please place your order.",
    "vanilla, vanilla, vanilla, strawberry, coffee, coffee"
  );

// Split the string of numbers into an array of strings.
const flavorsArray = inputFlavor.split(", ");

//Build object to count flavors
const totalFlavors = {
    vanilla: 0,
    strawberry: 0,
    coffee: 0,
}

// Convert the array of strings into an array of numbers.
for (let i = 0; i < flavorsArray.length; i++) {

    //If the flavor is vanilla add to object
    if(flavorsArray[i] === 'vanilla'){
        totalFlavors.vanilla += 1;
    }

    //If the flavor is strawberry add to object
    else if(flavorsArray[i] === 'strawberry'){
        totalFlavors.strawberry += 1;
    }

    //If the flavor is coffee add to object
    else if(flavorsArray[i] === 'coffee'){
        totalFlavors.coffee += 1;
    }

}

console.table(totalFlavors);