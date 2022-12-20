import { Request, Response } from "express";
import { Vaium } from "./vaium";

const vaium = new Vaium();

function vaiumController(req: Request, resp: Response) {
    const numero = parseInt(req.params.numero);

    const retorno = vaium.contaVaium(numero);

    return resp.status(200).json({ vaium: retorno  });
}

export { vaiumController }
