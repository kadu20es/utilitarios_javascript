function calculoDSR(diasUteis, diasNaoUteis, valor_horas_extras){
    // obter a quantidade de dias úteis e dias não uteis no mês
    // obter a quantidade de horas extras 50%
    // obter o valor pago de horas extras no mês
    // calcular (valor pago hora extras no mês) / (dias uteis) * (dias não iteis)
    let dsr = valor_horas_extras * diasNaoUteis
    dsr = dsr / diasUteis
    console.log(dsr)
    return dsr
}

module.exports = calculoDSR