{
    const accountBalanced = process.argv[2];
    const withDraw = process.argv[3];
    const accountBalancedN = +accountBalanced
    const withDrawN = +withDraw

    if (Number.isNaN(accountBalancedN) || Number.isNaN(withDrawN)) {
        console.log("Invalid Input");
        process.exit();
    }

    if (accountBalanced === "" || withDraw === ""){
        console.log("Invalid Input");
        process.exit();
    }

    if (withDrawN > 5000){
        console.log("Exceeds per-withdrawal limit");
    }
    else if (withDrawN > accountBalancedN){
        console.log("Insufficient balance");
    }
    else {
        console.log("Withdrawal approved");
    }
}