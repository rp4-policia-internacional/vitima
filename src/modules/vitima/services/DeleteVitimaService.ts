import { inject, injectable } from "tsyringe";
import IVitimaRepository from "../repositories/IVitimaRepository";
import AppError from "@shared/Errors/AppError";


@injectable()
class DeleteVitimaService{
    constructor(
    @inject('VitimaRepository')
        private vitimaRepository:IVitimaRepository
    ){}

    public async execute(id: string): Promise<void>{
        const findVitima = await this.vitimaRepository.findById(id);
        if(!findVitima) {

            throw new AppError("Vitima nao encontrada",404);

        }
        await this.vitimaRepository.delete(id);
        return;
    }   
}

export default DeleteVitimaService;