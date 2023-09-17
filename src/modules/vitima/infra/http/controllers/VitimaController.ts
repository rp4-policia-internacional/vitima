import CreateVitimaService from "@modules/vitima/services/CreateVitimaService";
import { container } from "tsyringe";
import { Request, Response } from "express";
import DeleteVitimaService from "@modules/vitima/services/DeleteVitimaService";
import FindOneVitimaService from "@modules/vitima/services/FindOneVitimaService";
import ListVitimaService from "@modules/vitima/services/ListVitimaService";
import UpdateVitimaService from "@modules/vitima/services/UpdateVitimaService";

// lida com solicitações HTTP relacionadas às vítimas em nosso sistema. 


export default class VitimaController {
    public async create(req: Request, res: Response): Promise<Response>{
        
        
        const createVitima = container.resolve(CreateVitimaService);
        
        const {
            id,
            id_paisDeOrigem,
            id_autorDoCrime,
            nomeCompleto,
            nacionalidade,
            altura,
            genero,
            idade,
            paisVistoPorUltimo,
            statusDaVitima,
            foto,
          } = req.body;
          const alturaFormatada = parseFloat(altura).toFixed(2);

        const createdVitima = await createVitima.execute({
            id,
            id_paisDeOrigem,
            id_autorDoCrime,
            nomeCompleto,
            nacionalidade,
            altura,
            genero,
            idade,
            paisVistoPorUltimo,
            statusDaVitima,
            foto,
        });

        return res.status(201).json(createdVitima);
    }

//delete pelo id
    public async delete(req: Request, res: Response): Promise<Response> {
        const deleteVitima = container.resolve(DeleteVitimaService);

        const {id} = req.params;

        const deletedVitima = await deleteVitima.execute(
            id
        );

        return res.json(deletedVitima).status(202).send();

    }

    public async getOne(req: Request, res: Response): Promise<Response> {
        const getOneVitima = container.resolve(FindOneVitimaService);

        const {id} = req.params;

        const gotOneVitima = await getOneVitima.execute(
            id
        );
        return res.json(gotOneVitima).status(200).send();

    }

    public async getAll(req: Request, res: Response): Promise<Response> {
        const getAllVitima = container.resolve(ListVitimaService);

        const gotAllVitima = await getAllVitima.execute();

        return res.json(gotAllVitima).status(200).send();
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const updateVitima = container.resolve(UpdateVitimaService);

        const {
            id,
            id_paisDeOrigem,
            id_autorDoCrime,
            nomeCompleto,
            nacionalidade,
            altura,
            genero,
            idade,
            paisVistoPorUltimo,
            statusDaVitima,
            foto,  
        
        } = req.body;

       
        const createVitima = await updateVitima.execute({
            id,
            id_paisDeOrigem,
            id_autorDoCrime,
            nomeCompleto,
            nacionalidade,
            altura,
            genero,
            idade,
            paisVistoPorUltimo,
            statusDaVitima,
            foto,
        });

        return res.json(createVitima).status(201).send();
    }


}
