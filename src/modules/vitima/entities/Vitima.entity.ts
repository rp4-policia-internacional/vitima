
import FotoEntity from "./Vitima.entity";

class VitimaEntity {
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
    foto: FotoEntity; // Relação com a tabela FotoEntity
  
    constructor(data: {
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
      foto:FotoEntity ;
    }) {
      this.id = data.id;
      this.paisDeOrigem = data.paisDeOrigem;
      this.nomeCompleto = data.nomeCompleto;
      this.nacionalidade = data.nacionalidade;
      this.altura = data.altura;
      this.genero = data.genero;
      this.idade = data.idade;
      this.autorDoCrime = data.autorDoCrime;
      this.PaisVistoPorUltimo = data.PaisVistoPorUltimo;
      this.statusDaVitima = data.statusDaVitima;
      this.foto = data.foto;
    }
  }
  export default VitimaEntity;