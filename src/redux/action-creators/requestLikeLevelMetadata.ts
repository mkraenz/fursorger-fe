import { ActionType } from "../actions/ActionType";
import { ILevelMetadataUpdateRequest } from "../actions/ILevelMetadataLikeRequest";

export const requestUpdateLevelMetadata = (): ILevelMetadataUpdateRequest => ({
    type: ActionType.LevelMetadataUpdateRequest,
});
