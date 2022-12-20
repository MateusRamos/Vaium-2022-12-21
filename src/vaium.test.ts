import { Vaium } from "./vaium";

describe('vaium', () => {

    test('Tesntando o Teste', () => {
        //arrange
        const sut = new Vaium();
        //action
        const resultado = sut.contaVaium(1);
        //assert
        expect (resultado).toEqual("0");
    })

})