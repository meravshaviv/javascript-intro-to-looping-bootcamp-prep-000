function forLoop(myArray) {
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      myArray.push("I am 1 strange loop.")
    }
    else {
      myArray.push(`I am ${i} strange loops.`)
    }
  }
  return myArray
}

function whileLoop(count) {
  while (count > 0) {
    console.log(count)
    count--
  }
  return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

function doWhileLoop(myArray) {
  do {
    myArray.pop();
  }
  while (maybeTrue() && myArray.length > 0);
  return myArray;
}
