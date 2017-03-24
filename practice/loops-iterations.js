// ========================================== //
// ===== Loops and Iterations exercises ===== //
// ========================================== //


// ========== EXERCISE ========== //
// make the loop start at 30, and count down to 0
// ============================== //
var counter = 30;
while (counter >= 0) {
  console.log(counter);
  counter -= 1;
}


// ========== EXERCISE ========== //
// create a loop that totals all the numbers from 1 to 30, adding the previous two numbers together.
// ============================== //
var counter = 0,
    x = 0, // sets initial values for x and y to begin addition
    y = 1;
while (counter < 30) {
  z = x + y;
  console.log(z);
  x = y;  // use temporary variable to store values of previous two numbers
  y = z;
  counter += 1;
}


// ========== EXERCISE ========== //
// Create an array of at least 6 of your favorite foods ===== //
// With the loop of your choice, iterate through the array, but only print out the foods with an even index ===== //
// ============================== //
var favFood = ['milk', 'chocolate', 'cheese', 'bread', 'pasta', 'yogurt'];  // array for different loops ===== //
//while loop
var i = 0;
while (i < favFood.length) {
  if (i % 2 === 0) {    // check for even index
    console.log(favFood[i]);
  }
  i += 1;
}
//for loop
for (var i = 0; i < favFood.length; i++) {
  if (i % 2 === 0) {
    console.log(favFood[i]);
  }
}
// function using forEach method
favFood.forEach(function(food) { //store array in variable 'food'
  if ((favFood.indexOf(food) % 2 === 0)) { // get index number of each element and check for even number
    console.log(food);
  }
});
