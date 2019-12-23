import { ActionType } from "./ActionType";

export interface ITestmeAction {
    type: ActionType;
    payload: {
        test: string;
    };
}
