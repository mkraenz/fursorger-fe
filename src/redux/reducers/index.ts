import { combineReducers } from "redux";
import { appReducer } from "./app";
import { levelMetadataReducer } from "./levelMetadata";

export const rootReducer = combineReducers({
    levelMetadata: levelMetadataReducer,
    app: appReducer,
});
