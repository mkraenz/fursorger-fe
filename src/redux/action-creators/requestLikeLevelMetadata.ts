import { ActionType } from "../actions/ActionType";
import { ILevelMetadataLikeRequest } from "../actions/ILevelMetadataLikeRequest";

export const requestLikeLevelMetadata = (): ILevelMetadataLikeRequest => ({
    type: ActionType.LevelMetadataLikeRequest,
});
