import { Recipe } from "../types/recipes";
import { Actions, SomeActions } from "../types/store";

const saveRecipe = (recipe: Recipe): Actions => {
    return {
        action: SomeActions.NEW_RECIPE
        payload: recipe,
    }
}
