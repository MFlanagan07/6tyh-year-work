let set = [20,21,19,22,21,20,19,20,21,20]
let set1 = [303,299,306,298,304,307,299,302,305,299,300]
let set2 = [15.3,14.9,15.1,15.2,14.8,14.7,15.1,14.8,15.0,15.0]
let set3 = [87,89,84,88,89,87,86,87,86,87]
function standarddeviationcalculator(numberset){
    let total = 0
    for (let i = 0; i<numberset.length; i = i + 1){
        total += numberset[i]    
    }
    means = total / numberset.length

squaresum = 0
console.log("here")
for (let i = 0; i<numberset.length; i = i + 1){
    squaresum += (numberset[i]-means)**2
} 
console.log(squaresum)
let standarddeviation = Math.sqrt(squaresum/numberset.length)
return(standarddeviation)
}
answer = standarddeviationcalculator(set)
answer2 = standarddeviationcalculator(set1)
answer3 = standarddeviationcalculator(set2)
answer4 = standarddeviationcalculator(set3)
console.log(answer)
console.log(answer2)
console.log(answer3)
console.log(answer4)