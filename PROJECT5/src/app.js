import dotenv from 'dotenv';
dotenv.config() 
import express from 'express';

import { apierror } from './utilis/apierror.js';
import { apires } from './utilis/apiresponse.js';
import { studentdata } from './models/student.model.js';

const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json(new apires(200, {}, 'backend running successfully'));
});

app.post('/student', async (req, res) => {
  try {
    const student = await studentdata.create(req.body);
    res.status(201).json(new apires(201, student, 'student created successfully'));
  } catch (error) {
      console.error(error);

      if (error.name=="MongooseError" && error.cause.code==11000 ) {
        res.status(409).json(new apierror(409, "conflict"));
      } else if (error.name == "ValidationError") {
        res.status(400).json(new apierror(400, "all the require fields are not filled"));
      } else {
        res.status(400).json(new apierror(400, error.message));
      }
    }
});

export default app;