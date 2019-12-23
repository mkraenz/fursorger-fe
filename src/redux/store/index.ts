import { createStore } from "redux";
import { rootReducer } from "../reducers";

export const makeStore = () => createStore(rootReducer);
// export const store = createStore(rootReducer);
