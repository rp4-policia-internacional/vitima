import ICreateFotoDTO from "../dtos/ICreateFoto.dto";

import FotoEntity from "./Foto.entit";

export default interface IFotoRepository {

    create (data: ICreateFotoDTO): Promise<FotoEntity>
    findAll (id: string): Promise<FotoEntity>;
    
}