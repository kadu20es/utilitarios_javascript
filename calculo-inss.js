 /*
    - Calculo INSS
    - Até R$ 1.412,00: 7,5%
    - De R$ 1.412,01 a R$ 2.666,68: 9%
    - De R$ 2.666,69 a R$ 4.000,03: 12%
    - De R$ 4.000,04 a R$ 7.786,02: 14%
    */
    
    /**
     * 
     * @param {*} salario 
     * @returns number
     * 
     * Retorna o valor a ser descontado do salário refente ao INSS
     */
    function calcularINSS(salario) {
    
        const FAIXA1 = 1412.00
        const FAIXA2 = 2666.68
        const FAIXA3 = 4000.03
        const FAIXA4 = 7786.02

        if (salario <= FAIXA1) {
           return (salario * 0.075)
        }

        if (salario > FAIXA1 && salario <= FAIXA2) {
            return ((FAIXA1 * 0.075) + ((salario - FAIXA2) * 0.09))
        }

        if (salario > FAIXA2 && salario <= FAIXA3) {
            return ((FAIXA1 * 0.075) + ((FAIXA2 - FAIXA1) * 0.09) + ((salario - FAIXA2) * 0.12))
        }

        if (salario > FAIXA3) {
            return ((FAIXA1 * 0.075) + ((FAIXA2 - FAIXA1) * 0.09) + ((FAIXA3 - FAIXA2) * 0.12) + ((salario - FAIXA3) * 0.14))
        }
    }

    module.exports = calcularINSS
