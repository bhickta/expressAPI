import express from 'express';
import router from './router';
import morgan from 'morgan';
import { protect } from './modules/auth';
import { createNewUser, signin } from './handlers/user';

export const port = 3001;
const app = express();

const jsonParser = (express.json());

app.use(morgan('dev'));
app.get('/', (req, res) => {
  console.log('hello from express');
  res.status(200);
  res.json({
    message: 'hello',
  });
});

app.use('/api', protect, router);
app.post('/user', jsonParser, createNewUser);
app.post('/signin', signin);
export default app;
