import { injectable, inject } from "tsyringe";
import IVitimaRepository from "../repositories/IVitimaRepository";

@injectable()
class FindOneVitimaService {
  constructor(
    @inject('VitimaRepository')
    private vitimaRepository: IVitimaRepository
  ) {}

  public async execute(id: string) {
    const findVitima = await this.vitimaRepository.findById(id);
    return findVitima;
  }
}

export default FindOneVitimaService;
