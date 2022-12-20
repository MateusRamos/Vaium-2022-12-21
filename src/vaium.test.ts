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



})