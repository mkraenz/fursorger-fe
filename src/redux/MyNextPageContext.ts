import { NextPageContext } from "next";
import { Store } from "redux";
import { IState } from "./store/IState";

export interface MyNextPageContext extends NextPageContext {
    store: Store<IState>;
}
