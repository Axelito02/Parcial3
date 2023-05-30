import { Actions, AppState, SomeActions } from "../types/store";

export const reducer = (actions: Actions, state: AppState) => {
    {action, payload} = actions;

    switch (action) {
        case SomeActions.NEW_RECIPE:
                state.recipes = [...state.recipes];
            return state;
    
        default:
            return state;
    }
}
