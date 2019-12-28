import { ActionType } from "../actions/ActionType";
import {
    ILevelMetadataUpdateRequest,
    ILevelUpdate,
} from "../actions/ILevelMetadataUpdateRequest";

export const requestUpdateLevelMetadata = (
    update: ILevelUpdate
): ILevelMetadataUpdateRequest => ({
    type: ActionType.LevelMetadataUpdateRequest,
    payload: update,
});
