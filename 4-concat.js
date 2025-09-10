
const firstArg = process.argv[2];
const secondArg = process.argv[3];
const thirdArg = process.argv[4]; // to detect if there's more than 2

if (firstArg === undefined) {
  console.log("No argument");
} else if (secondArg === undefined) {
  console.log(`one argument "${firstArg}"`);
} else if (thirdArg === undefined) {
  console.log(`2 arguments: "${firstArg} ${secondArg}"`);
} else {
  console.log("More than 2 arguments");
}










/*const firstArg = process.argv[2];
const secondArg = process.argv[3];

if (firstArg !== undefined && secondArg !== undefined) {
  // Case: two arguments
  console.log(`${firstArg} ${secondArg}`);
} else {
  // Case: one or zero arguments
  console.log(`${firstArg} is ${secondArg}`);
}*/
