const tabelaDeValores = (digito) => {
    const valores = {
        '0': 0,
        '1': 1, 
        '2': 2, 
        '3': 3, 
        '4': 4, 
        '5': 5, 
        '6': 6, 
        '7': 7, 
        '8': 8, 
        '9': 9, 
        'A': 17, 
        'B': 18, 
        'C': 19, 
        'D': 20, 
        'E': 21, 
        'F': 22, 
        'G': 23, 
        'H': 24, 
        'I': 25, 
        'J': 26, 
        'K': 27, 
        'L': 28, 
        'M': 29, 
        'N': 30, 
        'O': 31, 
        'P': 32, 
        'Q': 33, 
        'R': 34, 
        'S': 35, 
        'T': 36, 
        'U': 37, 
        'V': 38, 
        'W': 39, 
        'X': 40, 
        'Y': 41, 
        'Z': 42,
    }

    for (const [key, value] of Object.entries(valores)) {
       
        if (key === digito) {
            return value
        }
        
        if (value === digito) {
            return key
        }
    }
}

function validarCnpjAlfanumerico(cnpj) {
    
    const indicePeso = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const cnpjFiltrado = cnpj
                            .replace(/[.\-\/]/g, '')
                            .split('');

    const cnpjTemp = cnpjFiltrado.
                            slice(0, 12)
                            .map(elemento => tabelaDeValores(elemento));

    const digitoVerificador = (cnpjTemp, indicePeso) => {
        const soma = cnpjTemp.reduce((soma, valorAtual, index) => { 
            return soma + valorAtual * indicePeso[index], 0
        });
        return soma > 9 ? 0 : 11 - (soma % 11);
    }
    
    // calcular 1º digito verificador
    cnpjTemp.push(digitoVerificador(cnpjTemp, indicePeso));
    indicePeso.unshift(6);
    
    // calcular 2º digito verificador
    cnpjTemp.push(digitoVerificador(cnpjTemp, indicePeso));

    compararCnpjs(cnpjTemp, cnpjFiltrado); 
}

function compararCnpjs(cnpjTemp, cnpjFiltrado) {
    
    if (cnpjTemp.length !== cnpjFiltrado.length) return false;

    const temp = cnpjTemp.map(elemento => tabelaDeValores(elemento));
    
    for (const item of temp) {
        if (temp[item] !== cnpjFiltrado[item]){
            console.log('CNPJ inválido');
            return false
        }
    }
    console.log('CNPJ válido');
}

validarCnpjAlfanumerico('12.ABC.345/01DE-35');