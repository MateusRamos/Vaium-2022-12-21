class Vaium {

    contaVaium(expressao: string):string{

        var numeros = Vaium.quebraString(expressao);

        console.log(numeros);

        return "1 vai um";
    }

    static quebraString(expressao: string) {

        var parcelas = expressao.split('+');

        let numeros: number[] = [0, 0];

        numeros[0] = parseFloat(parcelas[0]);
        numeros[1] = parseFloat(parcelas[1]);

        return numeros;
    }

}

export { Vaium };