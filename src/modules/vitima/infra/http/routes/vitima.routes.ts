import { Router } from "express";
import VitimaController from "../controllers/VitimaController";
//conjunto de rotas relacionada as operações da vitima
const vitimaRoutes = Router();

const controller = new VitimaController();
 vitimaRoutes.post("/", controller.create);

vitimaRoutes.delete("/:id", controller.delete);
vitimaRoutes.get("/:id", controller.getOne);
vitimaRoutes.get("/", controller.getAll);
vitimaRoutes.put("/", controller.update);


 export default vitimaRoutes;
