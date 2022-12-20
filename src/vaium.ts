class Vaium {

    contaVaium(expressao: string):string{

        var numeros = Vaium.quebraString(expressao);

        Vaium.verificaErro(numeros);

        var vaiQuantos = Vaium.verificaSoma(numeros);

        var resultado = vaiQuantos + " vai um";

        return resultado;
    }

    static quebraString(expressao: string) {

        var parcelas = expressao.split('+');

        let numeros: number[] = [0, 0];

        numeros[0] = parseFloat(parcelas[0]);
        numeros[1] = parseFloat(parcelas[1]);

        return numeros;
    }

    static verificaErro(numeros: any[]) {

        if( (isNaN(Number(numeros[0]))) ||  (isNaN(Number(numeros[1])))  )
        {
            throw new Error("Essa soma é inválida!");
        }

    }

    static verificaSoma(numeros: any[]) {

        if((numeros[0] + numeros[1]) >= 10 )
        {
            let vaiQuantos = Math.floor((numeros[0] + numeros[1]/10));

            return vaiQuantos;
        }
        else
        {
            return 0;
        }

    } 

}

export { Vaium };