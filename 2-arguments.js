const args = process.argv.slice(2);
let count = 0;

args.forEach(() => {   // for each argument
  count++;
});

if (count === 0) {
  console.log("No arguments were passed.");
} else if (count === 1) {
  console.log("One argument was passed.");
} else {
  console.log(`${count} arguments were passed.`);
}
