import { ActionType } from "./ActionType";

export interface ILevelMetadataUpdateRequest {
    type: ActionType.LevelMetadataUpdateRequest;
    payload: ILevelUpdate;
}

export interface ILevelUpdate {
    like?: true;
    download?: true;
}
