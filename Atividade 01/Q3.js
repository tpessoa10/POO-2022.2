let n1 = 7
let n2 = 5
let n3 = 9

if (n1 > n2 && n1 > n3 && n2 > n3){
    console.log('maior = ',n1,'menor = ',n3)
}
else if(n1 > n2 && n1 > n3 && n3 > n2){
    console.log('maior = ',n1,'menor = ',n2)
}
else if(n2 > n1 && n2 > n3 && n1 > n3){
    console.log('maior = ',n2,'menor = ',n3)
}
else if(n2 > n1 && n2 > n3 && n3 > n1){
    console.log('maior = ',n2,'menor = ',n1)
}
else if(n3 > n1 && n3 > n2 && n1 > n2){
    console.log('maior = ',n3,'menor = ',n2)
}
else if(n3 > n1 && n3 > n2 && n2 > n1){
    console.log('maior = ',n3,'menor = ',n1)
}