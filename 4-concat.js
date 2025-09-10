
const firstArg = process.argv[2];
const secondArg = process.argv[3];

if (firstArg === undefined || secondArg === undefined) {
  console.log("HBTN is undefined");
} else {
  console.log(`Python is ${secondArg}`);
}
