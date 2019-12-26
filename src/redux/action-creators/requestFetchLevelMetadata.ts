import { ActionType } from "../actions/ActionType";
import { ILevelMetadataFetchRequest } from "../actions/ILevelMetadataFetchRequest";

export const requestFetchLevelMetadata = (): ILevelMetadataFetchRequest => ({
    type: ActionType.LevelMetadataFetchRequest,
});
