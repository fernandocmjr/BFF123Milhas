import express, { Express } from 'express';

import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swagger/swagger.json';
import router from './routes/index';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(router);

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`[server]: tste Server is running at port:${port}`);
});
