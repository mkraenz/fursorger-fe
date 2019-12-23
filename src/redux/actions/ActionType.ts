import { ILevelMetadataFetchSuccess } from "./ILevelMetadataFetchSuccessAction";

export enum ActionType {
    TestMe = "TEST_ME",
    LevelMetadataFetchSuccess = "LEVEL_METADATA_FETCH_SUCCESS",
}

export type ILevelMetadataAction = ILevelMetadataFetchSuccess;
