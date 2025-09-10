

const arg = process.argv[2];           // first argument
const num = parseInt(arg, 10);         // try integer conversion

if (!isNaN(num)) {
  console.log(`Argument: ${num}`);
} else {
  console.log("Not a number");
}
// Test the 5 cases
const cases = [89, '89', -4545, '-4545', 'ALX'];


