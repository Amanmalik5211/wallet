import express from "express";
import cors from "cors";
import walletRoutes from "./routes/walletRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/wallet", walletRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
