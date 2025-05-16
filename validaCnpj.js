

const digitoVerificador = (cnpjTemp, pesos) => {
    const soma = cnpjTemp.reduce((soma, valorAtual, indice) => {
        soma += valorAtual * pesos[indice], 0
        return soma
    });

    let dv = 11 - (soma % 11)
    return dv > 9 ? 0 : dv;
}

function isCnpjValido(cnpjTemp, cnpjFiltrado) {
    if (cnpjTemp.length !== cnpjFiltrado.length) return false;

    for (let numero of cnpjTemp) {
        if (cnpjTemp[numero] !== cnpjFiltrado[numero]) return false
    }

    return true
}

function validaCnpj(cnpj) {
    let cnpjFiltrado = cnpj.replace(/[.\-\/]/g, '');

    if (cnpjFiltrado.substring(0, 3) === cnpjFiltrado.substring(3, 6) || cnpjFiltrado.substring(0, 6) === '123456') {
        console.log('CNPJ inválido.');
        return
    }

    cnpjFiltrado = cnpjFiltrado.split('').map(numero => parseInt(numero));
    const cnpjTemp = cnpjFiltrado.slice(0,12).reverse();
    let pesos = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];

    cnpjTemp.unshift(digitoVerificador(cnpjTemp, pesos))
    pesos.push(6)
    cnpjTemp.unshift(digitoVerificador(cnpjTemp, pesos))
    cnpjTemp.reverse()

    console.log(isCnpjValido(cnpjTemp, cnpjFiltrado) ? 'CNPJ válido' : 'CNPJ inválido');
}


validaCnpj('59.541.264/0001-03');
validaCnpj('11.111.111/1111-11');
validaCnpj('12.345.611/1111-11');