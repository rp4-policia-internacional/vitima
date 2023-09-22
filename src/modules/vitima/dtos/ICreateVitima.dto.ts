//definir a estrutura de dados que vai ser recebida em operações da vitima

import { Decimal } from "@prisma/client/runtime/library";

export default interface ICreateVitimaDTO {
    id: string;
    id_paisDeOrigem:         string;                                                                                              //cpais
    id_autorDoCrime:         string;     
    nomeCompleto:            string;
    nacionalidade:           string;
    altura:                  Decimal;
    genero:                  string;
    idade:                   number;                                                                              //id do criminoso
    id_paisVistoPorUltimo:     string;
    statusDaVitima:          string;
    foto:                    string;
}
