import VitimaRepository from "@modules/vitima/infra/prisma/repositories/VitimaRepository";
import IVitimaRepository from "@modules/vitima/repositories/IVitimaRepository";
import { container } from "tsyringe";

container.registerSingleton<IVitimaRepository>(
    'VitimaRepository',
    VitimaRepository
)//preparar o que vai ser executado quando chamar o reposition