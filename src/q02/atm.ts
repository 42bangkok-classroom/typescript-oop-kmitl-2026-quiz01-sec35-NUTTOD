{
    const accountBalanced = +process.argv[2];
    const withDraw = +process.argv[3];

    console.log(accountBalanced);
    console.log(withDraw);

    if (Number.isNaN(accountBalanced) || Number.isNaN(withDraw)) {
        console.log("Invalid Input");
        process.exit();
    }

    if (withDraw > 5000){
        console.log("Exceeds per-withdrawal limit");
    }
    else if (withDraw > accountBalanced){
        console.log("Insufficient balance");
    }
    else {
        console.log("Withdrawal approved");
    }
}