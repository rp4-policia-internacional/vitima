// routes.ts
import vitimaRoutes from '@modules/vitima/infra/http/routes/vitima.routes';
import { Router } from 'express';

const router = Router();

router.use("/vitima", vitimaRoutes);

export default router;
