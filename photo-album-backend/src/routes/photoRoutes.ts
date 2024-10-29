import { Router } from "express";
import { uploadPhoto, getPhotosByAlbum } from "../controllers/albumController";

const router = Router();
router.post("/upload", uploadPhoto);
router.get("/:albumId", getPhotosByAlbum);

export default router;
