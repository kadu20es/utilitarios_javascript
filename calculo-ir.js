
    /**
     * 
     * @param {*} salario 
     * @param {*} qtdDependentes 
     * @returns number
     * 
     * Retorna a valor a ser descontado do salário referente ao IR
     * Deve ser utilizada após o cálculo do INSS
     */
    function calcularIR(salario, qtdDependentes = 0) {
        
        // obter desconto do INSS antes

        const VL_DEPENDENTE = 189.59;
        const SALARIO_IR = salario - (VL_DEPENDENTE * qtdDependentes)

        const FAIXA1 = 2259.20 // isento
        const FAIXA2 = 2826.65 // 7.5%
        const FAIXA3 = 3751.05 // 15%
        const FAIXA4 = 4664.68 // 22,5%
        //FAIXA5 = 27,5%

        if (SALARIO_IR <= FAIXA1) {
            return salario
        }

        if (SALARIO_IR > FAIXA1 && SALARIO_IR <= FAIXA2) {
            return (SALARIO_IR * 0.075)
        }

        if (SALARIO_IR > FAIXA2 && SALARIO_IR <= FAIXA3) {
            return (FAIXA2 - FAIXA1) * 0.075 + ((FAIXA3 - FAIXA2) * 0.15) + ((SALARIO_IR - FAIXA3) * 0.225)
        }

        if (SALARIO_IR >= FAIXA4) {
            return ((FAIXA2 - FAIXA1) * 0.075 + (FAIXA3 - FAIXA2) * 0.15 + (FAIXA4 - FAIXA3) * 0.225 + (SALARIO_IR - FAIXA4) * 0.275)
        }
    }

    module.exports = calcularIR