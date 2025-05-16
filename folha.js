//import { calcularINSS } from "./calculo-inss";
//import { calcularIR } from "./calculo-ir";
//import { calculoHoraExtra } from "./calculo-hora-extra";
//import { calculoFGTS } from "./calculo-fgts";

const calcularINSS = require('./calculo-inss.js')
const calcularIR = require('./calculo-ir.js')
const calculoHoraExtra = require('./calculo-hora-extra.js')
const calculoFGTS = require('./calculo-fgts.js')
const calculoDSR = require('./calculo-dsr.js')

function folhaPagamento(salario, qtdDependentes=0, horasExtras=0, jornadaFuncionario=44, diasUteis, diasNaoUteis, outrosDescontos=[]) {

    // ----- proventos
    const ads = 43.56 * 2
    const gratificacao = (salario + ads) * 0.25
    const home_office = 100.27
    const valor_horas_extras = calculoHoraExtra(jornadaFuncionario, horasExtras, salario + gratificacao)
    const dsr = calculoDSR(diasUteis, diasNaoUteis, valor_horas_extras)
    const fgts = calculoFGTS(salario + valor_horas_extras + dsr + gratificacao + home_office)
    let proventos = gratificacao + home_office + valor_horas_extras + dsr
    console.log(valor_horas_extras)

    // ----- descontos
    const descontoINSS = calcularINSS(salario + proventos)
    const descontoIR = calcularIR((salario + proventos) - descontoINSS, qtdDependentes)
    let descontos = descontoINSS + descontoIR
    console.log(descontoINSS, descontoIR)

    // --------- outros descontos
    const previdenciaPrivada = (salario + gratificacao) * outrosDescontos[0]
    const adminPrevidenciaPrivada = (salario + gratificacao) * outrosDescontos[1]
    const consignado = outrosDescontos[2]
    let outros_descontos = previdenciaPrivada + adminPrevidenciaPrivada + consignado
    
    
    const salario_liquido = (salario + proventos) - (descontos + outros_descontos)


    console.log(`
            ---------------------------
            Salário bruto: ${(salario + proventos).toFixed(2)}
            Horas extras 50%: ${horasExtras.toFixed(2)} 
                Valor: ${valor_horas_extras.toFixed(2)}
            DSR (Horas extras 50%): ${dsr.toFixed(2)}
            FGTS: ${fgts.toFixed(2)}
            Gratificação semestral: ${gratificacao.toFixed(2)}
            Ajuda de custo Home Office: ${home_office}
            Adicional por tempo de serviço: ${ads.toFixed(2)}
            ---------------------------
            Descontos:
            INSS: ${descontoINSS}
            IRRF: ${descontoIR}
            Previdência privada: ${previdenciaPrivada.toFixed(2)}
            Administração previdencia privada: ${adminPrevidenciaPrivada.toFixed(2)}
            Consignado: ${consignado}
            ---------------------------
            Salario liquido: ${salario_liquido.toFixed(2)}
            ---------------------------`)
    
}

folhaPagamento(4490.15, 0, 36.88, 30, 25, 4,  [0.09, 0.0065, 512.24])

