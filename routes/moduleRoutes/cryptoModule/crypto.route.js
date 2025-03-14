import express from 'express';

// -------------------- IMPORTING OTHER FILES --------------------
import cryptoController from '../../../controllers/crypto.controller.js';

const router = express.Router();

router.get('/fetch-data', cryptoController.fetchAndStoreCryptoData);
router.get('/get-cryptos', cryptoController.getCryptoData);

export default router;