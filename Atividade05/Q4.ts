function numeros(...nums:number[]){
    const exibir = (item, i) => {
        console.log(nums[i])
        console.log('-')
    }
    nums.forEach((item, i) =>{
        exibir(item, i)
    })
}

console.log(numeros(1,2,3,4,5,6))
