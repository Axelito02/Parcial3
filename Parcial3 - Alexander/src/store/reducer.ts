import { Actions, AppState, SomeActions } from "../types/store";

export const reducer = (actions: Actions, state: AppState) => {
    const {action, payload} = actions;

    switch (action) {
        case SomeActions.NEW_RECIPE:
                state.recipes = [...state.recipes, payload];
            return state;
    
        default:
            return state;
    }
}
