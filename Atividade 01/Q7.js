let vetor = [2,3,1,5,4]

let vetorCresc = vetor.sort()
console.log(vetorCresc)

let vetorDecresc = vetor.sort(function(a,b){
    return b - a
})

console.log(vetorDecresc)