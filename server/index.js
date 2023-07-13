import express from "express"; 
import cors from 'cors';
import router from "./routes/routes.js";
import DBConnection from './database/db.js';

const app = express();
app.use(cors());
app.use('/', router);
const port = 8000;
DBConnection();
app.listen(port, () => 
    console.log(`Server running on ${port}`)
)
