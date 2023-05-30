import { Recipe } from "./recipes";

export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  recipes: Recipe[];
};

export enum SomeActions {
  "NEW_RECIPE" = "NEW_RECIPE",
}

export interface NewRecipeAction {
  action: SomeActions.NEW_RECIPE;
  payload: Recipe;
}

export type Actions = NewRecipeAction;
