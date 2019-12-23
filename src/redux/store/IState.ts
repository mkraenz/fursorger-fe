import { rootReducer } from "../reducers";

export type IState = ReturnType<typeof rootReducer>;

export interface ITestState {
    test: string;
}
