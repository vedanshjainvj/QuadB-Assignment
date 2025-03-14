import cors from "cors";
import dotenv from "dotenv";
import express from "express";

// -------------------- IMPORTING OTHER FILES --------------------
import CLogger from "./utils/cLogger.js";
import mainRoutes from "./routes/main.route.js";
import { PORT } from "./constants/constants.js";
import corsOptions from "./config/cors.config.js";
import { createCryptoTable } from "./models/crypto.model.js";

dotenv.config();
const app = express();

// -------------------- MIDDLEWARES --------------------
app.use(express.json());
app.use(cors(corsOptions));

// -------------------- ROUTES --------------------
app.use("/api/v1", mainRoutes);

// -------------------- ERROR HANDLING ROUTE --------------------
app.use("*", (req, res) => {
  res.status(404).json({ error: "Not found" });
});

// -------------------- DATABASE INITIALIZATION --------------------
const initDB = async () => {
  CLogger.debug("Initializing database...");
  await createCryptoTable();
  CLogger.success("Database initialized successfully");
};

// -------------------- SERVER INITIALIZATION --------------------
initDB()
  .then(() => {
    app.listen(PORT, () => {
      CLogger.success(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    CLogger.err("Error initializing database:", error.message);
  });
