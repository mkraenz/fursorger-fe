import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { updateLevelMetadata } from "../../api/send-update";
import { ILevelUpdate } from "../actions/ILevelMetadataUpdateRequest";
import { ILevelMetadataUpdateSuccess } from "../actions/ILevelMetadataUpdateSuccess";
import { requestUpdateLevelMetadata } from "./requestUpdateLevelMetadata";
import { succeedUpdateLevelMetadata } from "./succeedUpdateLevelMetadata";

export const sendUpdateLevelMetadata: (
    update?: ILevelUpdate
) => ActionCreator<
    ThunkAction<
        Promise<ILevelMetadataUpdateSuccess>, // The type of the last action to be dispatched - will always be promise<T> for async actions
        ILevelMetadataUpdateSuccess["payload"], // The type for the data within the last action
        null, // The type of the parameter for the nested function
        ILevelMetadataUpdateSuccess // The type of the last action to be dispatched
    >
> = (update = { like: true }) => (levelId: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(requestUpdateLevelMetadata(update));
        const levelMetadata = await updateLevelMetadata(levelId, update);
        return dispatch(succeedUpdateLevelMetadata(levelMetadata));
    };
};
