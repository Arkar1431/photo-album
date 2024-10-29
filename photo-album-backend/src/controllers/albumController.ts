import { Request, Response } from "express";
import Album from "../models/Album";

export const createAlbum = async (req: Request, res: Response) => {
  try {
    const album = new Album({ name: req.body.name });
    await album.save();
    res.status(201).json(album);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAlbums = async (req: Request, res: Response) => {
  try {
    const albums = await Album.find();
    res.json(albums);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
