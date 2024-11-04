import cors from "cors";
import express from 'express';
import albumRoutes from './routes/albumRoutes';
import photoRoutes from './routes/photoRoutes';

// Initialize Express app
const app = express();

// Use CORS middleware
app.use(cors());
app.use('/albums', albumRoutes);
app.use('/photos', photoRoutes);
