let user = {"name":"John Doe","age":21}
let car = {"enginesize":1200,"name":"Mazda"} 



function candrivecar(person,cars){
    if (person["age"] > 18){
    console.log("can drive")
    }
    else if (person["age"] < 18){
        if (cars["enginesize"] < 1000){
        console.log("can drive")
        }
    }
}

candrivecar(user,car)
let mynumbers = {"a":6,"b":10,"c":8,"d":4}
let mykeys = Object.keys(mynumbers)
let myvalues = Object.values(mynumbers)

console.log(myvalues)

function areeven(numbers){
    console.log(numbers)
    if (numbers%2 ==0){
        
        console.log("all numbers are even")
    }
    else{
        console.log("not all numbers are even")
    }
}
for (let i of myvalues){areeven(i)}

