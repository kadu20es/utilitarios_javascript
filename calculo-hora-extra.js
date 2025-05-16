
/**
 * 
 * @param {*} jornada 
 * @param {*} qtdHoras 
 * @param {*} salario 
 * @returns number
 * 
 * Calcula o valor da hora extra de acordo com a jornada
 * do trabalhador (44 ou 36 horas semanais) e retorna o valor
 * a ser adicionado ao salário bruto
 */
const calcHoraTrabalhada = require('./calculo-hora-trabalhada.js')

function calculoHoraExtra(jornada, qtdHoras, salario) {
    if (jornada === 44) {
        return qtdHoras * (salario/220) + ((salario/220) * 0.5)
    } 
    
    if (jornada === 36) {
        const base = salario/180
        let valor = qtdHoras * base + (base * 0.5)
        
        return valor
    }

    if (jornada === 30) {
        const base = calcHoraTrabalhada(jornada)

        const horaExtra = salario / base
        console.log(base, 'base', horaExtra, 'hora extra')
        return qtdHoras * (base + (base * 0.5))
    }
}

module.exports = calculoHoraExtra