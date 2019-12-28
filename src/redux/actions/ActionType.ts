import { ILevelMetadataFetchRequest } from "./ILevelMetadataFetchRequest";
import { ILevelMetadataFetchSuccess } from "./ILevelMetadataFetchSuccess";
import { ILevelMetadataUpdateRequest } from "./ILevelMetadataUpdateRequest";
import { ILevelMetadataUpdateSuccess } from "./ILevelMetadataUpdateSuccess";

export enum ActionType {
    TestMe = "TEST_ME",
    LevelMetadataFetchSuccess = "LEVEL_METADATA_FETCH_SUCCESS",
    LevelMetadataFetchRequest = "LEVEL_METADATA_FETCH_REQUEST",
    LevelMetadataUpdateSuccess = "LEVEL_METADATA_UPDATE_SUCCESS",
    LevelMetadataUpdateRequest = "LEVEL_METADATA_UPDATE_REQUEST",
}

export type ILevelMetadataAction =
    | ILevelMetadataFetchSuccess
    | ILevelMetadataFetchRequest
    | ILevelMetadataUpdateRequest
    | ILevelMetadataUpdateSuccess;
