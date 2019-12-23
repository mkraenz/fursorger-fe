import { ActionType } from "./ActionType";

export interface ITestmeAction {
    type: ActionType.TestMe;
    payload: {
        test: string;
    };
}
