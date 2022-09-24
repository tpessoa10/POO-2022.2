function primo(num){
    let cont:number = 0
    for(let i=0; i<num+1;i++){
        if(num % i == 0){
            cont = cont + 1
        }
    }
    if(cont <= 2){
        return true
    } else {
        return false
    }
}

console.log(primo(7))
console.log(primo(8))