

// is_palindrome function to check number
function is_palindrome(initial_number) {
    var stringified = initial_number.toString();
    var reverse = stringified.split("").reverse().join("")
    return stringified === reverse;
}

// the brute force approach, by for loop
function brute_force(upper,lower){
    var largest_palindrome = 0;

    for(var i=upper; i>lower; i--){
        for(var j=i; j>lower; j--){
            var number = i * j;
            if(is_palindrome(number) && number>largest_palindrome){
                largest_palindrome = number;
                if(j>lower){
                    lower = j;
                }
                break;
            }
        }
    }
    return largest_palindrome;
}
console.log(brute_force(999,100));
