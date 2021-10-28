//Librariese
import express from "express";
// import passport from "passport";

//Database model
import { FoodModel } from "../../database/allModels";
import { ValidateCategory, ValidateRestauantId } from "../../Vallidation/food";

const Router = express.Router();

/* 
Route                 /
Des                   GEt all the foods based on particular Restaurant
Params                _id
Access                Public
Method                GET
*/

Router.get("/:_id", async (req, res) => {
  try {
    await ValidateRestauantId(req.params);

    const { _id } = req.params;
    const foods = await FoodModel.find({ restaurant: _id });

    return res.json({ foods });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/* 
Route                 /r
Des                   GEt all the foods based on particular category
Params                category
Access                Public
Method                GET
*/
Router.get("/r/:category", async (req, res) => {
  try {
    await ValidateCategory(req.params);

    const { category } = req.params;
    const foods = await FoodModel.find({
      category: { $regex: category, $options: "i" },
    });

    return res.json({ foods });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
