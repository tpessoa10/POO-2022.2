function saudacao(nome, pronome) {
    if (pronome === void 0) { pronome = 'Sr'; }
    console.log('Olá ', pronome, nome);
}
saudacao('Thiago', 'Sr');
saudacao('Ana', 'Sra');
saudacao('Matheus');
