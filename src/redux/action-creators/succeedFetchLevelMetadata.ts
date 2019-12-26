import { ActionType } from "../actions/ActionType";
import { ILevelMetadataFetchSuccess } from "../actions/ILevelMetadataFetchSuccess";
import { ILevelMetadata } from "../store/ILevelMetadataState";

export const succeedFetchLevelMetadata = (
    levelMetadata: ILevelMetadata[]
): ILevelMetadataFetchSuccess => ({
    type: ActionType.LevelMetadataFetchSuccess,
    payload: {
        levelMetadata,
    },
});
