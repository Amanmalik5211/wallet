import express from "express";
const router = express.Router();
import {
  getWallet,
  rechargeWallet,
} from "../controllers/walletController.js";


router.get("/", getWallet);
router.post("/recharge", rechargeWallet);

export default router;
