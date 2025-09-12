
const firstArg = process.argv[2];
const secondArg = process.argv[3];
const thirdArg = process.argv[4]; // to detect if there's more than 2

if (firstArg === undefined) {
  console.log("No argument");
} else if (secondArg === undefined) {
  console.log(`${firstArg}`);
} else if (thirdArg === undefined) {
  console.log(`${firstArg}`);
} else {
  console.log("More than 2 arguments");
}


