
const firstArg = process.argv[2];
const secondArg = process.argv[3];

if (firstArg === undefined || secondArg === undefined) {
  console.log("ABTN is undefined");
} else {
  console.log(`${firstArg} is ${secondArg}`);
}
