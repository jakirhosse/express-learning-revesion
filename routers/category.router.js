import express from "express";
import { API } from "../util/context";
const categoryRouter = express.Router();
//create
categoryRouter.post(API.API_CONTEXT + API.CREATE_CATEGORY);

export default categoryRouter;
