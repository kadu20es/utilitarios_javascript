function calcHoraTrabalhada(horas){
    const MES = 30
    const DIAS_SEMANA = 6
    const HORAS_SEMANA = horas
    const HORA_TRABALHADAS = (HORAS_SEMANA / DIAS_SEMANA) * MES
    console.log(HORA_TRABALHADAS, 'horas trabalhadas')
    

    return HORA_TRABALHADAS
}

module.exports = calcHoraTrabalhada