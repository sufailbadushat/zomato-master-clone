import joi from "joi";

export const ValidateRestauantCity = (restaurantObj) => {
  const Schema = joi.object({
    city: joi.string().required()
  });

  return Schema.validateAsync(restaurantObj);
};



export function ValidateRestauantSearchString(restaurantObj) {
    const Schema = joi.object({
        searchString: joi.string().required()
    });

    return Schema.validateAsync(restaurantObj);
}
  