
const arg = process.argv[2];      // first argument
const size = parseInt(arg, 10);   // try converting to integer

if (isNaN(size)) {
  console.log("Missing size");
} else {
  for (let i = 0; i < size; i++) {
    let row = "";
    for (let j = 0; j < size; j++) {
      row += "X";
    }
    console.log(row);
  }
}
