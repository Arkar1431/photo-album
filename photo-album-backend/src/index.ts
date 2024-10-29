import albumRoutes from './routes/albumRoutes';
import photoRoutes from './routes/photoRoutes';

app.use('/albums', albumRoutes);
app.use('/photos', photoRoutes);
