function milissegundos(milissegundos){
    let milissegundosParaDias = Math.floor(milissegundos / 86400000)
    let restoDias = milissegundos % 86400000
    let milissegundosParaHoras = Math.floor(restoDias /  3600000)
    let restoHoras = restoDias % 3600000
    let milissegundosParaMinutos = Math.floor(restoHoras / 60000)
    let restoMinutos = restoHoras / 60000
    let milissegundosParaSegundos = restoMinutos / 1000
    console.log(milissegundosParaDias,':',milissegundosParaHoras,':',milissegundosParaMinutos,':',milissegundosParaSegundos)
}

milissegundos(259027200)