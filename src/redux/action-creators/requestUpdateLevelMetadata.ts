import { ActionType } from "../actions/ActionType";
import { ILevelMetadataUpdateRequest } from "../actions/ILevelMetadataUpdateRequest";

export const requestUpdateLevelMetadata = (): ILevelMetadataUpdateRequest => ({
    type: ActionType.LevelMetadataUpdateRequest,
});
