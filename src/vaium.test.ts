import exp from "constants";
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

    test('Soma 2 casas decimais e 1 vai um, porcão', () => {
        //arrange
        const sut = new Vaium();
        //action
        const resultado = sut.contaVaium("11+19");
        //assert
        expect (resultado).toEqual("1 vai um");
    });

    test('Soma 2 casas decimais e 2 vai um, porcão', () => {
        //arrange
        const sut = new Vaium();
        //action
        const resultado = sut.contaVaium("91+19");
        //assert
        expect (resultado).toEqual("2 vai um");
    });

    test('Soma n casas decimais separadas de tamanhos iguais', () => {
        //arrange
        const sut = new Vaium();
        //action
        const resultado = sut.contaVaium("456+155");
        //assert
        expect (resultado).toEqual("2 vai um");
    });

    test('Soma n x m casas decimais separadas, n > m', () => {
        //arrange
        const sut = new Vaium();
        //action
        const resultado = sut.contaVaium("56+155");
        //assert
        expect (resultado).toEqual("2 vai um");
    });

    test('Soma n x m casas decimais separadas, n < m', () => {
        //arrange
        const sut = new Vaium();
        //action
        const resultado = sut.contaVaium("156+55");
        //assert
        expect (resultado).toEqual("2 vai um");
    });

    test('Soma final acumulando restos', () => {
        //arrange
        const sut = new Vaium();
        //action
        const resultado = sut.contaVaium("52+2348");
        //assert
        expect (resultado).toEqual("2 vai um");
    })

    

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