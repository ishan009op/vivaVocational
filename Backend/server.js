import express from "express";
import dotenv from "dotenv";

import cors from 'cors'
import ChatRoutes from './Routes/Chat.Route.js'
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors())



app.use('/api/chat',ChatRoutes)




app.listen(5000, () => {
  console.log("Server running on http://localhost:5000")
});