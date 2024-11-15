let set = [20,21,19,22,21,20,10,20,21,20]
function mean(numberset){
let total = 0
for (let i = 0; i<numberset.length; i = i + 1){
    total += numberset[i]    
}
means = total / numberset.length
return(means)

}
let meanset = mean(set)
console.log(meanset)
