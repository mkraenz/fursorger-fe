import { ActionType } from "../actions/ActionType";
import { ILevelMetadataUpdateSuccess } from "../actions/ILevelMetadataUpdateSuccess";
import { ILevelMetadata } from "../store/ILevelMetadataState";

export const succeedUpdateLevelMetadata = (
    levelMetadata: ILevelMetadata
): ILevelMetadataUpdateSuccess => ({
    type: ActionType.LevelMetadataUpdateSuccess,
    payload: {
        levelMetadata,
    },
});
