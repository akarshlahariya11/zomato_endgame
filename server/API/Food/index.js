import express from "express";
import passport from "passport";

//Database model
import { FoodModel } from "../../database/allModels";

// Setting Router
const Router = express.Router();

/*
Route     /
Des       Get all the restaurant deatils based in city
Params    none
Access    Public
Method    GET
*/