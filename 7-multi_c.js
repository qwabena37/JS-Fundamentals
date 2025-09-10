
const arg = process.argv[2];         // first argument
const num = parseInt(arg, 10);       // try converting to integer

if (isNaN(num)) {
  console.log("Missing number of occurrences");
} else {
  for (let i = 0; i < num; i++) {
    console.log("C is fun");
  }
}
