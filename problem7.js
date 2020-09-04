var primes = [2,3,5,7,11,13];

function isprime(n){
    max = Math.sqrt(n);
    for(i=0;i<primes.length;i++){
        prime = primes[i];
        if(prime>max) break;
        if(n%prime==0) return false;
    }
    return true;
}

counter = 6;
for(x = 15;counter<10001;x+=2){
 if(isprime(x)){
     primes= primes.concat([x]);
     counter++;
 }
}

console.log(primes[10000])
