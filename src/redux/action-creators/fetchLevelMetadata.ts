import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { fetchLevelMetadataFromApi } from "../../api/fetch-level-metadata";
import { ILevelMetadataFetchSuccess } from "../actions/ILevelMetadataFetchSuccess";
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
        const levelMetadata = await fetchLevelMetadataFromApi();
        return dispatch(succeedFetchLevelMetadata(levelMetadata));
    };
};
