for (let i = 0; i < 21; i = i+1){ //Q1
    console.log(i);
}

for (let i = 3; i < 30; i = i+1){ //Q2
    if (i%2 ==1){
        console.log(i)
    }
} 

for (let i = 12; i > -15; i = i-1){ //Q3
    if (i%2 ==0){
        console.log(i)
    }
}

for (let i = 50; i > 19; i = i-1){ // Q4
    if (i%3 ==0){
        console.log(i)
    }
}

function positiveornegative(number){ //Q5
    let value =0; 
    if (number > 0){
        value = "number is positive";
    }
    else{
        value = "number is negative"
    }
    return value;
}
let posorneg = (positiveornegative(-4))
console.log(posorneg)

function evenorodd(number){ //Q6
    if (number%2 == 0){
        sign = "Even"
    }
    else{
        sign = "odd"
    }
    return(sign)
}
let oddoreven = (evenorodd(5))
console.log(oddoreven)

function biggerorsmaller(number1, number2){ //Q7
    if (number1 > number2){
        result = (number1)
    }
    else{
        result = (number2)
    }
    return(result)
}

let smallerorbigger = (biggerorsmaller(5,4))
console.log(smallerorbigger)

function gradetranslator(grade){ //Q8
    if (grade == 10){
        console.log("A")
    }
    else if(grade ==9){
        console.log("B")
    }
    else if(grade ==7){
        console.log("C")
    }
    else if(grade ==6){
        console.log("D")
    }
    else if(grade ==5){
        console.log("E")
    }
    else if(grade ==4){
        console.log("F")
    }
    else if (grade < 4){
        console.log("F")
    }
}
gradetranslator(5)

function ticketpricer(age){ //Q9
    if (age < 12){
        console.log("Ticket Price: 5 Ambiguous Currency")
    }
    else if (age < 18){
        console.log("Ticket Price: 10 Ambiguous Currency")
    }
    else if (age < 60){
        console.log("Ticket Price: 20 Ambiguous Currency")
    }
    else if (age > 60){
        console.log("Ticket Price: 15 Ambiguous Currency")
    }
}   
ticketpricer(65)

//Q next questions
function minutestohours(mins){
    let hours = mins/60
    return hours
}
houramount = minutestohours(120)
console.log(houramount)

function averageoffournumbers(num1, num2, num3, num4){
    let total = num1+num2+num3+num4
    let average = total/4
    return average
}
averages = averageoffournumbers(2,4,3,7)
console.log(averages)

function getgasolineamount(kilometres, averageconsumption){
    
}