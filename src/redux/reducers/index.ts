import { combineReducers } from "redux";
import { levelMetadataReducer } from "./levelMetadata";

export const rootReducer = combineReducers({
    levelMetadata: levelMetadataReducer,
});
