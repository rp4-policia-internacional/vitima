import { Foto } from "@prisma/client";

export default interface ICreateVitimaDTO {
    id: string;
    paisDeOrigem: string;
    nomeCompleto: string;
    nacionalidade: string;
    altura: number; 
    genero: string;
    idade: number; 
    autorDoCrime: string;
    PaisVistoPorUltimo: string;
    statusDaVitima: string;

    foto: {
        create: {
          foto: Buffer; // Se você estiver armazenando fotos como Buffer
        };
      };
    //foto: Foto;  s
}
