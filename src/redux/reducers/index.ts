import { ActionType } from "../actions/ActionType";
import { ITestmeAction } from "../actions/ITestmeAction";
import { IState } from "../store/IState";

const initialState: IState = {
    test: "asdf",
};

export const rootReducer = (state = initialState, action: ITestmeAction) => {
    console.log(`trigger with ${action.type}`);
    switch (action.type) {
        case ActionType.TestMe:
            return {
                test: action.payload.test,
            };
        default:
            return state;
    }
};
