import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { sendLike } from "../../api/send-like";
import { ILevelMetadataLikeSuccess } from "../actions/ILevelMetadataLikeSuccess";
import { requestFetchLevelMetadata } from "./requestFetchLevelMetadata";
import { succeedLikeLevelMetadata } from "./succeedLikeLevelMetadata";

export const sendLikeLevel: ActionCreator<
    ThunkAction<
        Promise<ILevelMetadataLikeSuccess>, // The type of the last action to be dispatched - will always be promise<T> for async actions
        ILevelMetadataLikeSuccess["payload"], // The type for the data within the last action
        null, // The type of the parameter for the nested function
        ILevelMetadataLikeSuccess // The type of the last action to be dispatched
    >
> = (levelId: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(requestFetchLevelMetadata());
        const levelMetadata = await sendLike(levelId);
        return dispatch(succeedLikeLevelMetadata(levelMetadata));
    };
};
