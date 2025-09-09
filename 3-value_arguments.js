const args = process.argv.slice(2); // skip node and script name

if (args.length === 0) {
  console.log("No argument");
} else {
  console.log(`The first argument is: ${args[0]}`);
}
