function calcularDV(cpfTemp) {
    let dv = 0;

    for (let i = cpfTemp.length + 1; i >= 2; i--) {
        dv += i * cpfTemp[i-2];
    }
    dv = (dv * 10) % 11
    
    return dv > 9 ? 0 : dv;
}

function validarCPF(cpfFornecido) {
    
    let cpfFiltrado = cpfFornecido.replace(/[.\-]/g, '');

    if (cpfFiltrado.substring(0, 3) === cpfFiltrado.substring(3, 6) || 
        cpfFiltrado.substring(0, 6) === '123456') {
        console.log('CPF inválido');
        return
    }

    cpfFiltrado = cpfFiltrado.split('').map(numero => parseInt(numero));
    
    let cpfTemp = cpfFiltrado.slice(0, 9).reverse();
    
    cpfTemp.unshift(calcularDV(cpfTemp));
    cpfTemp.unshift(calcularDV(cpfTemp));
    cpfTemp = cpfTemp.reverse();

    const compararCpf = (cpfTemp, cpfFiltrado) => {
        if (cpfTemp.length !== cpfFiltrado.length) return false;
    
        for (let numero of cpfFiltrado) {
            if (cpfTemp[numero] !== cpfFiltrado[numero]) return false;
        }
        return true;
    }
    
    console.log(compararCpf(cpfTemp, cpfFiltrado) ? 'CPF válido' : 'CPF inválido');
}

validarCPF('101.036.597-57');
validarCPF('11111111111');
validarCPF('125.675.789-10');