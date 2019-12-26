import { ActionType, ILevelMetadataAction } from "../actions/ActionType";
import { ILevelMetadataState } from "../store/ILevelMetadataState";

export const levelMetadataReducer = (
    state: ILevelMetadataState = [],
    action: ILevelMetadataAction
) => {
    console.log(`reducer received ${action.type}`);
    switch (action.type) {
        case ActionType.LevelMetadataFetchSuccess:
            return action.payload.levelMetadata;
        default:
            return state;
    }
};
