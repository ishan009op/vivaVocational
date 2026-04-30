import { SendMessages } from "../Controller/Message.Controller";
import express from 'express'
const router=express.Router()


Router.post("/",SendMessages )
