import { Request, Response } from "express";
import Album from "../models/Album";

export const uploadPhoto = (req, res) =>{
  try {
    const album = new Album({ name: req.body.name });
    await album.save();
    res.status(201).json(album);
  }catch (error) {
    if (error instanceof Error) {
        res.status(500).json({ message: error.message });
    } else {
        res.status(500).json({ message: "An unknown error occurred." });
    }
  }
};

export const getAlbums = async (req: Request, res: Response) => {
  try {
    const albums = await Album.find();
    res.json(albums);
  }  catch (error) {
    const err = error as Error; // Cast error as Error
    res.status(500).json({ message: err.message });
  }
};

