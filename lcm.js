factorObject = [];

for(i=2;i<=20;i++){
    factors = findFactors(i);
    factors = factors.substring(0,factors.length-1).split(",")
    for(j=0; j<factorObject.length;j++ ){
        removalindex= factors.indexOf(factorObject[j]);
        if(removalindex>-1){
            factors.splice(removalindex,1);
            if(factors.length===0){
                break;
            }
        }

    }
    if(factors.length>0){
        factorObject = factorObject.concat(factors);
    }

}
product=1;
factorObject = factorObject.reduce((product, current)=> product*parseInt(current));
console.log(factorObject)


function findFactors(number) {
    factors = "";
    n=number

    while (n%2==0 && n!=0)
    {
        factors = factors+"2,"
        n = n/2;
    }
    for (var i = 3; i <= number; i+= 2)
    {
        // While i divides n, print i and divide n
        while (n%i === 0)
        {
            factors = factors+i+","
            n = n/i;
        }
    }

    return factors;
}

