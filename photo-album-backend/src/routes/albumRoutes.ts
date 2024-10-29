import { Router } from "express";
import { createAlbum, getAlbums } from "../controllers/albumController";

const router = Router();
router.post("/", createAlbum);
router.get("/", getAlbums);

export default router;
