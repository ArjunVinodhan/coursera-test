(function(window){
    const input = prompt("Input a positive number:");
    if (input % 2 == 0){
        alert ("Your number is even!");
    }
    if (input % 2 != 0){
        alert ("Your number is odd!");
    }
    let isPrime = true
    if (input == 1){
        alert ("1 is neither a prime nor a composite number");
    }
    else if (input > 1){
        for (let i = 2; i < input; i++){
            if (input % i == 0){
                isPrime = false;
                break;
            }
        }
        if (isPrime){
            alert ("Your number is prime!");
        }else{
            alert ("Your number is not prime!");
        }
    }
})(window);