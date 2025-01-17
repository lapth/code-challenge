import * as dotenv from 'dotenv'
dotenv.config()

import express, { Application } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { AppDataSource } from './database/data-source';
import userRoute from './routes/user-routes';
import { errorHandler } from './middlewares/error-handler';

const app: Application = express();

const startServer = async () => {
  try {
    // Initialize TypeORM
    await AppDataSource.initialize();

    // Middleware
    app.use(cors());
    app.use(bodyParser.json());
    app.use(errorHandler);

    // Routes
    app.use('/api', userRoute);

    // Basic route to verify server is running
    app.get('/ping', (req, res) => {
      res.send('pong');
    });

    // Start server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();

export default app;
