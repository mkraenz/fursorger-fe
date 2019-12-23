import { levelRows } from "../../components/levels.data";
import { ActionType } from "../actions/ActionType";
import { ILevelMetadataFetchSuccess } from "../actions/ILevelMetadataFetchSuccessAction";

export const succeedFetchLevelMetadata = (): ILevelMetadataFetchSuccess => ({
    type: ActionType.LevelMetadataFetchSuccess,
    payload: {
        levelMetadata: levelRows,
    },
});
