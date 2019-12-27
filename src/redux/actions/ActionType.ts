import { ILevelMetadataFetchRequest } from "./ILevelMetadataFetchRequest";
import { ILevelMetadataFetchSuccess } from "./ILevelMetadataFetchSuccess";
import { ILevelMetadataLikeRequest } from "./ILevelMetadataLikeRequest";
import { ILevelMetadataLikeSuccess } from "./ILevelMetadataLikeSuccess";

export enum ActionType {
    TestMe = "TEST_ME",
    LevelMetadataFetchSuccess = "LEVEL_METADATA_FETCH_SUCCESS",
    LevelMetadataFetchRequest = "LEVEL_METADATA_FETCH_REQUEST",
    LevelMetadataLikeSuccess = "LEVEL_METADATA_LIKE_SUCCESS",
    LevelMetadataLikeRequest = "LEVEL_METADATA_LIKE_REQUEST",
}

export type ILevelMetadataAction =
    | ILevelMetadataFetchSuccess
    | ILevelMetadataFetchRequest
    | ILevelMetadataLikeRequest
    | ILevelMetadataLikeSuccess;
