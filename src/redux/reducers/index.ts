import { combineReducers } from "redux";
import { levelMetadataReducer } from "./levelMetadata";
import { testReducer } from "./test";

export const rootReducer = combineReducers({
    test: testReducer,
    levelMetadata: levelMetadataReducer,
});
