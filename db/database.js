import { neon } from '@neondatabase/serverless';

// -------------------- IMPORTING OTHER FILES --------------------
import { DB_CONFIG } from '../constants/constants.js';

// ------------------- SQL CONNECTION -------------------
export const sql = neon(
    `postgres://${DB_CONFIG.user}:${DB_CONFIG.password}@${DB_CONFIG.host}/${DB_CONFIG.database}?sslmode=require`
)