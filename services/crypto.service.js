import axios from 'axios';

// -------------------- IMPORTING OTHER FILES --------------------
import { sql } from '../db/database.js';
import CLogger from '../utils/cLogger.js';
import { WAZIRX_API } from '../constants/constants.js';
import { insertCryptoData, createCryptoTable } from '../models/crypto.model.js';

class CryptoService {
    async fetchAndStoreCryptoData() {
        try {
            await createCryptoTable();
            const response = await axios.get(WAZIRX_API);
            const data = Object.values(response.data);

            const top10 = data
                .filter(entry => entry.base_unit && entry.last)
                .sort((a, b) => Number(b.last) - Number(a.last))
                .slice(0, 10)
                .map(({ base_unit, name, last, buy, sell, volume }) => ({
                    base_unit, name, last, buy, sell, volume
                }));

            for (const cryptoEntry of top10) {
                await insertCryptoData(cryptoEntry);
            }
        } catch (error) {
            CLogger.err("Error fetching and storing crypto data:", error.message);
            throw new Error("Failed to fetch and store crypto data");
        }
    }

    async getCryptoData() {
        try {
            const data = await sql`SELECT * FROM crypto ORDER BY id DESC LIMIT 10;`;
            return data;
        } catch (error) {
            CLogger.err("Error retrieving crypto data:", error.message);
            throw new Error("Failed to retrieve crypto data");
        }
    }
}

export default new CryptoService();