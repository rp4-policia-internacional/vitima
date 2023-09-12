import { injectable, inject } from "tsyringe";
import IVitimaRepository from "../repositories/IVitimaRepository";

@injectable()
class ListVitimaService {

    constructor(
        @inject('VitimaRepository')
        private  vitimaRepository: IVitimaRepository
    ){}

    public async execute() {
        return await this.vitimaRepository.listAll();
    }
}

export default ListVitimaService;
