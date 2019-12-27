import { ActionType } from "../actions/ActionType";
import { ILevelMetadataLikeSuccess } from "../actions/ILevelMetadataLikeSuccess";
import { ILevelMetadata } from "../store/ILevelMetadataState";

export const succeedLikeLevelMetadata = (
    levelMetadata: ILevelMetadata
): ILevelMetadataLikeSuccess => ({
    type: ActionType.LevelMetadataLikeSuccess,
    payload: {
        levelMetadata,
    },
});
