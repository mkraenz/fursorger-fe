import { ILevelMetadata } from "../store/ILevelMetadataState";
import { ActionType } from "./ActionType";

export interface ILevelMetadataUpdateSuccess {
    type: ActionType.LevelMetadataUpdateSuccess;
    payload: {
        levelMetadata: ILevelMetadata;
    };
}
