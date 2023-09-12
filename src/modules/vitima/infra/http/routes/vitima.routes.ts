import { Router } from "express";
import VitimaController from "../controllers/VitimaController";

const vitimaRoutes = Router();

const controller = new VitimaController();
 vitimaRoutes.post("/", controller.create);

 export default vitimaRoutes;
