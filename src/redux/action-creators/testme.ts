import { ActionType } from "../actions/ActionType";
import { ITestmeAction } from "../actions/ITestmeAction";

export const testme = (): ITestmeAction => ({
    type: ActionType.TestMe,
    payload: {
        test: "heyo i'm Karen in Action",
    },
});
