import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { isArray } from "util";
import { CONFIG } from "../../api-config";
import { ILevelMetadataFetchSuccess } from "../actions/ILevelMetadataFetchSuccess";
import { ILevelMetadata } from "../store/ILevelMetadataState";
import { requestFetchLevelMetadata } from "./requestFetchLevelMetadata";
import { succeedFetchLevelMetadata } from "./succeedFetchLevelMetadata";

export const fetchLevelMetadata: ActionCreator<
    ThunkAction<
        Promise<ILevelMetadataFetchSuccess>, // The type of the last action to be dispatched - will always be promise<T> for async actions
        ILevelMetadataFetchSuccess["payload"], // The type for the data within the last action
        null, // The type of the parameter for the nested function
        ILevelMetadataFetchSuccess // The type of the last action to be dispatched
    >
> = () => {
    return async (dispatch: Dispatch) => {
        dispatch(requestFetchLevelMetadata());
        const levelsJson = await fetch(CONFIG.levelsMetadataUri, {
            method: "GET",
            redirect: "error",
        });
        const levelMetadata: ILevelMetadata[] = await levelsJson.json();
        if (!isArray(levelMetadata)) {
            throw new Error("fetched data for levelMetadata is not an array");
        }
        return dispatch(succeedFetchLevelMetadata(levelMetadata));
    };
};
