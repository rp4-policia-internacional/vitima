import VitimaEntity from "./Vitima.entity";

class FotoEntity {
    id: string;
    foto: Buffer; // Usando Buffer para representar dados binários (imagem)
    vitima: VitimaEntity; // Relação com a tabela VitimaEntity
  
    constructor(data: {
      id: string;
      foto: Buffer;
      vitima: VitimaEntity;
    }) {
      this.id = data.id;
      this.foto = data.foto;
      this.vitima = data.vitima;
    }
  }