// ICreateFotoDTO.ts
export default interface ICreateFotoDTO {
    id: string;
    vitimaId: string; // Chave estrangeira da VitimaEntity à qual a foto está associada
  }
  