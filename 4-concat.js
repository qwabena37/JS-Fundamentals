
const firstArg = process.argv[2];
const secondArg = process.argv[3];

if (firstArg !== undefined && secondArg !== undefined) {
  // Case: two arguments
  console.log(`${firstArg} ${secondArg}`);
} else {
  // Case: one or zero arguments
  console.log(`${firstArg} is ${secondArg}`);
}
