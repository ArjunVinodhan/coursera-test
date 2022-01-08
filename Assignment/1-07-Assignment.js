(function(window){
    const input = prompt("Input a positive number:");
    var x = input;
    if (x % 2 == 0){
        alert ("Your number is even!");
    }
    if (x % 2 != 0){
        alert ("Your number is odd!");
    }
    let isPrime = true
    if (x == 1){
        alert ("1 is neither a prime nor a composite number");
    }
    else if (x > 1){
        for (let i = 2; i < x; i++){
            if (x % i == 0){
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