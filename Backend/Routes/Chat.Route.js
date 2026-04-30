import { Chat } from "../Controller/Chat.controller.js";

import express from 'express'

const router=express.Router()

router.post('/',Chat)

export default router