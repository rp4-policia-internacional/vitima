import CreateVitimaService from "@modules/vitima/services/CreateVitimaService";
import { container } from "tsyringe";
import { Request, Response } from "express";

export default class VitimaController {
    public async create(req: Request, res: Response): Promise<Response>{
        const createVitima = container.resolve(CreateVitimaService);
        
        const {
            paisDeOrigem,
            nomeCompleto,
            nacionalidade,
            altura,
            genero,
            idade,
            autorDoCrime,
            PaisVistoPorUltimo,
            statusDaVitima,
          } = req.body;

        const createdVitima = await createVitima.execute({
            id: "", // Preencha com o valor apropriado, ou deixe vazio se for um UUID gerado automaticamente
            paisDeOrigem,
            nomeCompleto,
            nacionalidade,
            altura,
            genero,
            idade,
            autorDoCrime,
            PaisVistoPorUltimo,
            statusDaVitima,
        });

        return res.status(201).json(createdVitima);
    }
}
