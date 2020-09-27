import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import api from './api';

// app config
const app = express();
const port = process.env.PORT || 9000;

// middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(morgan('short'));

// api routes
app.use('/api/v1', api);

// listen
app.listen(port, () => console.log(`Listining on port ${port}`));
