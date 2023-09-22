import { Decimal } from "@prisma/client/runtime/library";

class VitimaEntity {

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

   
    constructor(data: {
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
      }) 
      {
     this.id = data.id;
      this.id_paisDeOrigem = data.id_paisDeOrigem;
      this.id_autorDoCrime = data.id_autorDoCrime;
      this.nomeCompleto = data.nomeCompleto;
      this.nacionalidade = data.nacionalidade;
      this.altura = data.altura;
      this.genero = data.genero;
      this.idade = data.idade;
      this.id_paisVistoPorUltimo = data.id_paisVistoPorUltimo;
      this.statusDaVitima = data.statusDaVitima;
      this.foto = data.foto;
    }
  }
  export default VitimaEntity;