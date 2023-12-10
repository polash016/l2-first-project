import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//routes

app.use('/api/v1', router);

const getAController = (req: Request, res: Response) => {
  const a = 15;

  res.send(a);
};

app.get('/', getAController);

app.use(globalErrorHandler);

app.use(notFound);
export default app;
