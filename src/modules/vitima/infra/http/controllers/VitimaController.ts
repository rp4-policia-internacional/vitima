import CreateVitimaService from "@modules/vitima/services/CreateVitimaService";
import {Request, Response} from "express";
import { container } from "tsyringe";


export default class VitimaController{
    public async create(req: Request,res: Response ): Promise<Response>{
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
            statusDaVitima
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
            foto: {
                create: {
                  foto: Buffer.from([]), // Preencha com um valor apropriado para a foto, ou deixe um Buffer vazio
                },
              },
            });
        return res.json(createVitima).status(201).send();
        
    }
}