import { ActionType, IAppAction } from "../actions/ActionType";
import { IAppState } from "../store/IAppState";

export const appReducer = (
    state: IAppState = { levelUploadDialogOpen: false },
    action: IAppAction
) => {
    switch (action.type) {
        case ActionType.ToggleLevelUploadDialog:
            return {
                ...state,
                levelUploadDialogOpen: !state.levelUploadDialogOpen,
            };
        default:
            return state;
    }
};
