function CalculadoraService()
{
    const SOMA = '+';
    const SUBTRACAO = '-';
    const DIVISAO = '/';
    const MULTIPLICACAO = '*';
    
    function calcular(numero1, numero2, operacao)
    {
        let resultado;

        switch (operacao)
        {
            case SOMA:
                resultado = numero1 + numero2;
                break;
            case SUBTRACAO:
                resultado = numero1 - numero2;
                break;
            case DIVISAO:
                resultado = numero1 / numero2;
                break;
            case MULTIPLICACAO:
                resultado = numero1 * numero2;
                break;
            default:
                resultado = 0;
        }
        return resultado;
    }

    function concatenarNumero(numAtual, numConcat)
    {
        if(numAtual === '' || numAtual === null)
        {
            numAtual = '';
        }

        if(numConcat === '.' && numAtual === '')
        {
            return '0.';
        }

        if(numConcat === '.' && numAtual.indexOf('.') > -1)
        {
            return numAtual;
        }

        return numAtual + numConcat;
    }

    return [calcular, concatenarNumero, SOMA, SUBTRACAO, DIVISAO, MULTIPLICACAO];
}

export default CalculadoraService;