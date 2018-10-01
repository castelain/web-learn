// learnyounode  -> baby step
var arg = process.argv;
var numArg = arg.slice(2).map(function(value,index){
    return Number(value);
});
var sum = numArg.reduce(function(total,value,index){
    return total += value;
});
console.log(sum);