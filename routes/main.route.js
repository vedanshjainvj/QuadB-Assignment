import express from 'express';

// -------------------- IMPORTING OTHER FILES --------------------
import cryptoRoutes from './moduleRoutes/cryptoModule/crypto.route.js';

const router = express.Router();

router.use('/crypto', cryptoRoutes);

export default router;