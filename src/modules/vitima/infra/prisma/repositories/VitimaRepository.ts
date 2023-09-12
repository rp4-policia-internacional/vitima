import ICreateVitimaDTO from "@modules/vitima/dtos/ICreateVitima.dto";
import VitimaEntity from "@modules/vitima/entities/Vitima.entity";
import IVitimaRepository from "@modules/vitima/repositories/IVitimaRepository";
import { prisma } from "@shared/infra/prisma";

export default class VitimaRepository implements IVitimaRepository {
    
    public async create(data: ICreateVitimaDTO): Promise<VitimaEntity> {
        const vitima = await prisma.vitima.create({ data });
        return vitima as unknown as VitimaEntity;
    }

    public async delete(id: string): Promise<void> {
        await prisma.vitima.delete({ where: { id } });
    }

    public async findById(id: string): Promise<VitimaEntity> {
        const vitima = await prisma.vitima.findUnique({ where: { id } });
        return vitima as unknown as VitimaEntity;
    }

    public async update(data: VitimaEntity): Promise<VitimaEntity> {
        const vitima = await prisma.vitima.update({ where: { id: data.id }, data });
        return vitima; // Retorne a vitima atualizada
      }
      
    public async listAll(): Promise<VitimaEntity[]> {
      
     return await prisma.vitima.findMany();
    }

    
}
