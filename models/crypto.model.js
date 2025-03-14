// -------------------- IMPORTING OTHER FILES --------------------
import { sql } from "../db/database.js";
import CLogger from "../utils/cLogger.js";

export const createCryptoTable = async () => {
    try {
        await sql(`
            CREATE TABLE IF NOT EXISTS crypto (
                id SERIAL PRIMARY KEY,
                base_unit VARCHAR(10) NOT NULL UNIQUE,
                name VARCHAR(50),
                last DECIMAL(18, 8),
                buy DECIMAL(18, 8),
                sell DECIMAL(18, 8),
                volume DECIMAL(18, 8)
            );
        `);
        CLogger.success("Crypto table created successfully");
    } catch (error) {
        CLogger.err("Error creating crypto table:", error.message);
    }
};

export const insertCryptoData = async (cryptoData) => {
    try {
        const result = await sql`
            INSERT INTO crypto (base_unit, name, last, buy, sell, volume)
            VALUES (${cryptoData.base_unit}, ${cryptoData.name}, ${cryptoData.last || 0}, 
                    ${cryptoData.buy || 0}, ${cryptoData.sell || 0}, ${cryptoData.volume || 0})
            ON CONFLICT (base_unit) 
            DO UPDATE SET 
                last = EXCLUDED.last,
                buy = EXCLUDED.buy,
                sell = EXCLUDED.sell,
                volume = EXCLUDED.volume
            RETURNING *;
        `;

        CLogger.success(`Crypto data inserted successfully: ${result[0].base_unit}`);
    } catch (error) {
        CLogger.err(`Error inserting crypto data: ${cryptoData.base_unit}`, error.message);
    }
};