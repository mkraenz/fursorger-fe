import { isArray } from "util";
import { ILevelMetadata } from "../redux/store/ILevelMetadataState";
import { CONFIG } from "./config";
import {
    assertIsLevelDataFromServer,
    toTableData,
} from "./server-level-metadata";

export const fetchLevelMetadataFromApi = async () => {
    const levelsJson = await fetch(CONFIG.levelsMetadataUri, {
        method: "GET",
        redirect: "error",
        mode: "cors",
    });
    const unparsedArr: unknown = await levelsJson.json();
    if (!isArray(unparsedArr)) {
        throw new Error("fetched data for levelMetadata is not an array");
    }
    unparsedArr.forEach(assertIsLevelDataFromServer);
    const levelMetadata: ILevelMetadata[] = unparsedArr.map(toTableData);
    return levelMetadata;
};
