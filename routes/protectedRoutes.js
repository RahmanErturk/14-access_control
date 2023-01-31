import { Router } from "express";
import checkRole from "../middlewares/checkUsers.js";

const router = Router();

router.post("/", checkRole(["editor", "admin"]), (req, res, next) => {
  res.status(201).end();
});
router.get("/", (req, res, next) => {
  res.json([]);
});
router.put("/:id", checkRole(["editor", "admin"]), (req, res, next) => {
  res.status(204).json("updated");
});
router.delete("/:id", checkRole(["admin"]), (req, res, next) => {
  res.status(204).end();
});

export default router;
