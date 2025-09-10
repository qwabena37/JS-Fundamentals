
const firstArg = process.argv[2];
const secondArg = process.argv[3];

if (firstArg === undefined || secondArg === undefined) {
  console.log("Please provide two arguments.");
} else {
  console.log(`${firstArg} is ${secondArg}`);
}
