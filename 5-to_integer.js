


function checkArg(arg) {
  const num = parseInt(arg, 10);

  if (!isNaN(num)) {
    console.log(`Argument: ${arg}`);
  } else {
    console.log(`Argument: ${arg}`);
  }
}

// Test the 5 cases
const cases = [89, '89', -4545, '-4545', 'ALX'];

cases.forEach(value => checkArg(value));
