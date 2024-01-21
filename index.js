/* 

Step 1: Accept user input
Step 2: Assign user input to a variable
Step 3: Pass variable into if statement 
Step 4: Use if statement to decide if the user should wear a jacket or not based on their input temp
Step 5: Log or return the results of the if statement

*/

let temp = prompt("Enter the temperature outside: ", "60");
let isRaining = prompt("Is it raining? (Y/N): ", "Y");

let rain = isRaining.toLowerCase();

function needJacket(temp, isRaining) {
  if (temp <= 40) {
    console.log(`It's ${temp} degrees outside! Wear a heavy jacket.`);
  } else if (temp <= 60) {
    console.log(`It's ${temp} degrees outside! Wear a jacket.`);
  } else if (temp <= 70) {
    console.log(`It's ${temp} degrees outside! Wear a light jacket.`);
  } else {
    console.log("It is hot out today! No jacket is needed.");
  }

  if (rain === "y") {
    console.log(`It's raining, too, so you should bring an umbrella!`);
  } else {
    console.log("No rain today, you can leave the umbrella at home!");
  }
}

needJacket(temp, rain);
