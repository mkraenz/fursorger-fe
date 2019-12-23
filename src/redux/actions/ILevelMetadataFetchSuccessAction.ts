import { ILevelMetadata } from "../store/ILevelMetadataState";
import { ActionType } from "./ActionType";

export interface ILevelMetadataFetchSuccess {
    type: ActionType.LevelMetadataFetchSuccess;
    payload: {
        levelMetadata: ILevelMetadata[];
    };
}
