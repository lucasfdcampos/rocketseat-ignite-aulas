import express, { json } from 'express';
import { createCourse } from './routes';

const app = express();

app.use(json());

app.get('/', createCourse);

app.listen(3333);
