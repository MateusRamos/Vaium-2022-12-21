import { Vaium } from "./vaium";

describe('vaium', () => {

    test('Testando o Teste', () => {
        //arrange
        const sut = new Vaium();
        //action
        const resultado = sut.contaVaium("1+9");
        //assert
        expect (resultado).toEqual("1 vai um");
    });

    test('Quebrando string', () => {
        //arrange
        const sut = new Vaium();
        //action
        const resultado = sut.contaVaium("1+9");
        //assert
        expect (resultado).toEqual("1 vai um");
    });

    test('Verificando Soma', () => {
        //arrange
        const sut = new Vaium();
        //action
        const resultado = sut.contaVaium("1+9");
        //assert
        expect (resultado).toEqual("1 vai um");
    });

    test('Verificando Soma SEM vai um', () => {
        //arrange
        const sut = new Vaium();
        //action
        const resultado = sut.contaVaium("1+8");
        //assert
        expect (resultado).toEqual("0 vai um");
    });

    

    

    //Testes de erro:    

    test('Verificando Erro', () => {
        //arrange
        const sut = new Vaium();
        //action
        //assert
        expect ( 
            () => { sut.contaVaium("a+5") } 
        ).toThrow('');
    });

})