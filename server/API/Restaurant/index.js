import express from "express";
import { RestaurantModel } from "../../database/allModels";

//validation
import { ValidateRestauantCity, ValidateRestauantSearchString } from "../../Vallidation/restaurant";
import {ValidateRestauantId} from "../../Vallidation/food";

const Router = express.Router();


/* 
Route                 /
Des                   GEt all the Reastaurants details
Params                None
Access                Public
Method                GET
*/

Router.get("/", async (req, res) => {
    try {

        await ValidateRestauantCity(req.query);

        const { city } = req.query;
        const restaurants = await RestaurantModel.find({ city });
        return res.json({ restaurants })
    } catch {
        return res.status(500).json({ error: error.message });
    }
})


/* 
Route                 /
Des                   GET perticular Restaurants details by id
Params                _id
Access                Public
Method                GET
*/

Router.get("/:_id", async (req, res) => {
    try {

        await ValidateRestauantId(req.params);

        const { _id } = req.params;
        const restaurant = await RestaurantModel.findOne(_id);

        if (!restaurant)
            return res.status(404).json({ error: "Restaurant not found" });
        return res.json({ restaurant });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


/* 
Route                 /
Des                   GEt Restaurants details by id
Params                none
body                  searchString
Access                Public
Method                GET
*/

Router.get("/seach", async (req, res) => {
    try {

        await ValidateRestauantSearchString(req.body);

        const { searchString } = req.body;

        const restaurants = await RestaurantModel.find({
            name: { $regex: searchString, $options: "i" },
        });

        return res.json({ restaurants });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
});

export default Router;


