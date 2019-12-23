import { ActionType } from "../actions/ActionType";
import { ITestmeAction } from "../actions/ITestmeAction";
import { ITestState } from "../store/IState";

const initialState: ITestState = {
    test: "initial state of test state",
};

export const testReducer = (
    state = initialState,
    action: ITestmeAction
): ITestState => {
    console.log(`trigger with ${action.type}`);
    switch (action.type) {
        case ActionType.TestMe:
            return {
                ...state,
                test: action.payload.test,
            };
        default:
            return state;
    }
};
