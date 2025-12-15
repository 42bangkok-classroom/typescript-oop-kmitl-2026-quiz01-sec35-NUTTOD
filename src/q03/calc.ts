{
  const args = process.argv.slice(2);
  const [op, argA, argB] = args;

  const A: number = parseFloat(argA);
  const B: number = parseFloat(argB); 

  let result: number;
  switch (op){
    case 'add': {
      result = A+B;
      break;
    }
    case 'sub': {
      result = A-B;
      break;
    }
    case 'mul': {
      result = A*B;
      break;
    }
    case 'div': {
      if (B === 0){
        console.error('Error : cannot divide by zero');
        process.exit();
      }
      result = A/B;
      break;
    }
    default :{
      console.error("Invalid input");
      process.exit();
    }
  }
  console.log(result);
}