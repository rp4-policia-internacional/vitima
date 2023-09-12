import CreateVitimaService from "@modules/vitima/services/CreateVitimaService";
import { container } from "tsyringe";
import { Request, Response } from "express";
import DeleteVitimaService from "@modules/vitima/services/DeleteVitimaService";
import FindOneVitimaService from "@modules/vitima/services/FindOneVitimaService";
import ListVitimaService from "@modules/vitima/services/ListVitimaService";
import UpdateVitimaService from "@modules/vitima/services/UpdateVitimaService";


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
           //id: "",// Preencha com o valor apropriado, ou deixe vazio se for um UUID gerado automaticamente
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
            paisDeOrigem,
            nomeCompleto,
            nacionalidade,
            altura,
            genero,
            idade,
            autorDoCrime,
            PaisVistoPorUltimo,
            statusDaVitima,} = req.body;

       
        const createVitima = await updateVitima.execute({
            id: "",// Insira um valor apropriado aqui ou deixe em branco se for um UUID gerado automaticamente
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

        return res.json(createVitima).status(201).send();
    }


}
