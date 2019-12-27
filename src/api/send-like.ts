import { CONFIG } from "./config";
import {
    assertIsLevelDataFromServer,
    ILevelMetadataFromServer,
    toTableData,
} from "./server-level-metadata";

export const sendLike = async (levelId: number) => {
    const levelsJson = await fetch(`${CONFIG.levelsMetadataUri}/${levelId}`, {
        method: "PATCH",
        redirect: "error",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ like: true }),
    });
    const unparsedArr: ILevelMetadataFromServer = await levelsJson.json();
    assertIsLevelDataFromServer(unparsedArr);
    return toTableData(unparsedArr);
};
