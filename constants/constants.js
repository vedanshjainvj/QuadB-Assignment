import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 8000;

export const DB_CONFIG = {
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
  };

export const WAZIRX_API = process.env.WAZIRX_API;

export const allowedOrigins = [process.env.ALLOWED_ORIGIN];