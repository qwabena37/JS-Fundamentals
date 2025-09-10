

function checkArg(arg) {
  const num = parseInt(arg, 10);

  if (!isNaN(num)) {
    console.log(`${arg} → My number: ${num}`);
  } else {
    console.log(`${arg} → Not a number`);
  }
}

const cases = [null, 89, '89', 89.89, 'school'];

cases.forEach(value => checkArg(value));
