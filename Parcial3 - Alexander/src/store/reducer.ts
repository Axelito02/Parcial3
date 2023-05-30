import { Actions, AppState, SomeActions } from "../types/store";

export const reducer = (action: Actions , state: AppState) => {
    switch (action) {
        case SomeActions.NEW_RECIPE:
                state.recipes = [...state.recipes];
            return state;
    
        default:
            return state;
    }
}
