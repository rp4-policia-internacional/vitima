import ICreateVitimaDTO from "../dtos/ICreateVitima.dto";
import VitimaEntity from "../entities/Vitima.entity";

export default interface IVitimaRepository {

    create (data: ICreateVitimaDTO): Promise<VitimaEntity>
    delete (id: String): Promise<void>;
    findById (id: String): Promise<VitimaEntity>;
    update(data: VitimaEntity): Promise<VitimaEntity>;
    listAll(): Promise<VitimaEntity[]>;
}