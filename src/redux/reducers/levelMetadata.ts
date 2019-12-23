import { ActionType, ILevelMetadataAction } from "../actions/ActionType";
import { ILevelMetadataState } from "../store/ILevelMetadataState";

export const levelMetadataReducer = (
    state: ILevelMetadataState = [],
    action: ILevelMetadataAction
) => {
    switch (action.type) {
        case ActionType.LevelMetadataFetchSuccess:
            return action.payload.levelMetadata;
        default:
            return state;
    }
};
