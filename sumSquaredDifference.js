function squaresum(n){
     return Math.pow((n)*(n+1)/2,2)
}
function sumsquare(n){
    return (n)*(n+1)*((2*n)+1)/6
}

var difference = squaresum(100) - sumsquare(100)
console.log(difference);
