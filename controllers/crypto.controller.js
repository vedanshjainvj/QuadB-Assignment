// -------------------- IMPORTING OTHER FILES --------------------
import CryptoService from "../services/crypto.service.js";
import ResponseHandler from "../utils/responseHandler.js";
import statusCodeUtility from "../utils/statusCodeUtility.js";

class CryptoController {
    async fetchAndStoreCryptoData(req, res) {
        try {
            const response = await CryptoService.fetchAndStoreCryptoData();
            return ResponseHandler(statusCodeUtility.Success, "Crypto data fetched and stored successfully!", response, res);
        } catch (error) {
            return ResponseHandler(statusCodeUtility.InternalServerError, error.message, null, res);
        }
    }

    async getCryptoData(req, res) {
        try {
            const data = await CryptoService.getCryptoData();
            return ResponseHandler(statusCodeUtility.Success, "Crypto data retrieved successfully!", data, res);
        } catch (error) {
            return ResponseHandler(statusCodeUtility.InternalServerError, error.message, null, res);
        }
    }
}

export default new CryptoController();