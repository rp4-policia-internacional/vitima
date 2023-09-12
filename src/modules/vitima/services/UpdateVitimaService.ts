import { inject, injectable } from "tsyringe";
import VitimaEntity from "../entities/Vitima.entity";
import AppError from "@shared/Errors/AppError";
import IVitimaRepository from "../repositories/IVitimaRepository";
import ICreateVitimaDTO from "../dtos/ICreateVitima.dto";
@injectable()
class UpdateVitimaService {

    constructor(
        @inject('VitimaRepository')
        private vitimaRepository: IVitimaRepository
    ){}

    public async execute( data: VitimaEntity): Promise<VitimaEntity> {
        const findVitima = await this.vitimaRepository.findById(data.id);

        if(!findVitima) {
            throw new AppError("Vitima não encontrada", 404);
        }

        const updateVitima = await this.vitimaRepository.update(data);
        return updateVitima;
    }
}

export default UpdateVitimaService;
