import express from "express";
import passport from "passport";

//Database model
import { MenuModel, ImageModel } from "../../database/allModels";

// Setting Router
const Router = express.Router();

/*
Route     /list
Des       Get all the menu based on id
Params    id
Access    Public
Method    GET
*/

Router.get("/list/:_id", async(req, res)=> {
    try {
        const { id } = req.params;
        const menus = await MenuModel.findOne(_id);

        return res.json({ menus });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route     /image
Des       Get all the menu images based on id
Params    id
Access    Public
Method    GET
*/
Router.get("/image/:_id", async(req, res)=> {
    try {
        const { id } = req.params;
        const menus = await ImageModel.findOne(_id);

        return res.json({ menus });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default  Router;