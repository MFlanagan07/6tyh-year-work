// for loops 
// for(stat value; conditional check; increment value){
//    {} <-- these act like indent locks
for (let i = 0; i < 10; i=i+1.5){
    // if statement for odd numbers
    if (i%2 ==1){
    console.log(i);
    console.log(i*2)
    }
    else if (i%2 ==0){
        console.log("even number found", i);
    }
    else{
        console.log("unknown number");
    }

}
// functions
function addtwonumbers(number1, number2){
    let sum = number1 + number2;
    return sum;
}
let answer = addtwonumbers(5,7);
console.log(answer);


//Objects/dictionsaries in JS
let myobject = {"a":1, "b":2, "c":3};
console.log(myobject)
// to loop through the keys "for ... in loop"
for (key in myobject){
    console.log(key, myobject[key]);
}
//to return a list of keys
let mykeys = Object.keys(myobject)
console.log(mykeys)
// to return a list of values
let myvalues = Object.values(myobject)
console.log(myvalues)
// to return a list f key,value pairs
let myKVPairs = Object.entries(myobject)
console.log(myKVPairs)
// the forEach method can be used with an array
// it passes every value in the array into a 
// function - kind of like map() in python
function doublevalues(valuein){
    console.log(valuein*2)
}

myvalues.forEach(doublevalues);
// for ... of will loop through
// each value in an array
for (let v of myvalues){
    console.log(v)
}
// to make a object (read dictionary) from
// a list
let myDictionary = Object.fromEntries(myKVPairs)





