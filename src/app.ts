import * as express from 'express';
import * as cors from 'cors';
import userRoutes from './routes/user.routes';
import trailRoutes from './routes/trail.routes';
import subtrailRoutes from './routes/subtrail.routes';
import contentRoutes from './routes/content.routes';

const app = express();

const accessControl: express.RequestHandler = (_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
  res.header('Access-Control-Allow-Headers', '*');
  next();
};

app.use(express.json());
app.use(accessControl);
app.use(cors());
app.use(userRoutes);
app.use(trailRoutes);
app.use(subtrailRoutes);
app.use(contentRoutes);

export default app;
