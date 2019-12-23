import { AnyAction } from "redux";
import { levelRows } from "../../components/levels.data";
import { ILevelMetadataState } from "../store/ILevelMetadataState";

export const levelMetadataReducer = (
    state: ILevelMetadataState = levelRows,
    action: AnyAction
) => {
    switch (action.type) {
        default:
            return state;
    }
};
