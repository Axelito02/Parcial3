import { Recipe } from "../types/recipes";
import { Actions, SomeActions } from "../types/store";
import firebase from "../utils/firebase";

export const saveRecipe = (recipe: Recipe): Actions => {
    const resp = firebase.saveRecipesDB
    return {
        action: SomeActions.NEW_RECIPE,
        payload: recipe,
    }
}
