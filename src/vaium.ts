class Vaium {

    static numeros: string[];

    contaVaium(expressao: string):string{

        var vaiQuantos = 0;
        
        Vaium.quebraString(expressao);
        
        var cont = Vaium.verificaTamanho();

        Vaium.verificaErro();
        
        for(cont; cont>0; cont--)
        {
            vaiQuantos = vaiQuantos + Vaium.verificaSoma(cont-1);
        }

        var resultado = vaiQuantos + " vai um";

        return resultado;
    }

    static quebraString(expressao: string) {
        this.numeros = expressao.split('+');
    }

    static verificaErro() {

        if( (isNaN(Number(this.numeros[0]))) ||  (isNaN(Number(this.numeros[1])))  )
        {
            throw new Error("Essa soma é inválida!");
        }

    }

    static verificaSoma(cont: number) {

        let numero1 = parseInt(this.numeros[0].substr(cont,1));
        let numero2 = parseInt(this.numeros[1].substr(cont,1));
        
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

    static verificaTamanho() {

        if(this.numeros[0].length > this.numeros[1].length)
        {
            var tamanho = this.numeros[0].length;

            this.numeros[1] = String(this.numeros[1]).padStart(tamanho, '0');
        }
        else
        {
            var tamanho = this.numeros[1].length;

            this.numeros[0] = String(this.numeros[0]).padStart(tamanho, '0');
        }

        return tamanho;

    }

}

export { Vaium };