import { ILevelMetadata } from "../store/ILevelMetadataState";
import { ActionType } from "./ActionType";

export interface ILevelMetadataLikeSuccess {
    type: ActionType.LevelMetadataLikeSuccess;
    payload: {
        levelMetadata: ILevelMetadata;
    };
}
