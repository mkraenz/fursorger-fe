import { ILevelMetadataFetchRequest } from "./ILevelMetadataFetchRequest";
import { ILevelMetadataFetchSuccess } from "./ILevelMetadataFetchSuccess";

export enum ActionType {
    TestMe = "TEST_ME",
    LevelMetadataFetchSuccess = "LEVEL_METADATA_FETCH_SUCCESS",
    LevelMetadataFetchRequest = "LEVEL_METADATA_FETCH_REQUEST",
}

export type ILevelMetadataAction =
    | ILevelMetadataFetchSuccess
    | ILevelMetadataFetchRequest;
