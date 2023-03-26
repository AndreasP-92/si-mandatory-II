import express from 'express';
import controller from './routes/controller.js'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());

app.use(controller);

const PORT = 3000;

app.listen(PORT, ()=>{console.log(`server are listening on port ${PORT}`)});

// TODO:
// Hosting
