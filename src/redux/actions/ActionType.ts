import { ILevelMetadataFetchRequest } from "./ILevelMetadataFetchRequest";
import { ILevelMetadataFetchSuccess } from "./ILevelMetadataFetchSuccess";
import { ILevelMetadataUpdateRequest } from "./ILevelMetadataUpdateRequest";
import { ILevelMetadataUpdateSuccess } from "./ILevelMetadataUpdateSuccess";
import { IToggleLevelUploadDialog } from "./IToggleLevelUploadDialog";

export enum ActionType {
    LevelMetadataFetchSuccess = "LEVEL_METADATA_FETCH_SUCCESS",
    LevelMetadataFetchRequest = "LEVEL_METADATA_FETCH_REQUEST",
    LevelMetadataUpdateSuccess = "LEVEL_METADATA_UPDATE_SUCCESS",
    LevelMetadataUpdateRequest = "LEVEL_METADATA_UPDATE_REQUEST",

    ToggleLevelUploadDialog = "TOGGLE_LEVEL_UPLOAD_DIALOG",
}

export type ILevelMetadataAction =
    | ILevelMetadataFetchSuccess
    | ILevelMetadataFetchRequest
    | ILevelMetadataUpdateRequest
    | ILevelMetadataUpdateSuccess;

export type IAppAction = IToggleLevelUploadDialog;
