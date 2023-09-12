import { inject, injectable } from "tsyringe";
import IVitimaRepository from "../repositories/IVitimaRepository";
import ICreateVitimaDTO from "../dtos/ICreateVitima.dto";
import VitimaEntity from "../entities/Vitima.entity";

@injectable()
class CreateVitimaService{
    constructor(
        @inject('VitimaRepository')

        private vitimaRepository:IVitimaRepository
    ){}

    public async execute(data:ICreateVitimaDTO): Promise<VitimaEntity>{
        
        const vitima = await this.vitimaRepository.create(data);
        return vitima;
    }
}

export default CreateVitimaService;
