class Vaium {

    contaVaium(expressao: string):string{

        var vaiQuantos = 0;
        var cont = 2;

        var numeros = Vaium.quebraString(expressao);

        Vaium.verificaErro(numeros);
        
        for(cont; cont>0; cont--)
        {
            vaiQuantos = vaiQuantos + Vaium.verificaSoma(numeros, cont-1);

        }

        var resultado = vaiQuantos + " vai um";

        return resultado;
    }

    static quebraString(expressao: string) {

        var parcelas = expressao.split('+');

        return parcelas;
    }

    static verificaErro(numeros: any[]) {

        if( (isNaN(Number(numeros[0]))) ||  (isNaN(Number(numeros[1])))  )
        {
            throw new Error("Essa soma é inválida!");
        }

    }

    static verificaSoma(numeros: any[], cont: number) {

        let numero1 = parseInt(numeros[0].substr(cont,1));
        let numero2 = parseInt(numeros[1].substr(cont,1));
        
        if((numero1 + numero2) >= 10 )
        {
            let vaiQuantos = Math.floor((numero1 + numero2)/10);
            
            return vaiQuantos;
        }
        else
        {
            return 0;
        }

    } 

}

export { Vaium };