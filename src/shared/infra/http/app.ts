import '../../config/env';
import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import routes from './routes';

import createConnection from '../typeorm';
import errorsHandler from '../../errors/handler';

const app = express();

createConnection();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(errorsHandler);

export default app;
