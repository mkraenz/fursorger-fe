import { ActionType, ILevelMetadataAction } from "../actions/ActionType";
import { ILevelMetadataState } from "../store/ILevelMetadataState";

export const levelMetadataReducer = (
    state: ILevelMetadataState = [],
    action: ILevelMetadataAction
) => {
    switch (action.type) {
        case ActionType.LevelMetadataFetchSuccess:
            return action.payload.levelMetadata;
        case ActionType.LevelMetadataUpdateSuccess:
            const changedLevel = action.payload.levelMetadata;
            return state.map(item =>
                item.id === changedLevel.id ? changedLevel : item
            );
        default:
            return state;
    }
};
