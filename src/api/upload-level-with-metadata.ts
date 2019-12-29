import { CONFIG } from "./config";
import {
    assertIsLevelDataFromServer,
    ILevelMetadataFromServer,
    toTableData,
} from "./server-level-metadata";

/** level is expected to be a stringified level object */
export const uploadLevelWithMetadata = async (
    name: string,
    uploader: string,
    level: string
) => {
    const payload = {
        name,
        uploader,
        level,
    };
    const levelsJson = await fetch(CONFIG.levelsMetadataUri, {
        method: "POST",
        redirect: "error",
        mode: "cors",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const unparsedMetadata: ILevelMetadataFromServer = await levelsJson.json();
    assertIsLevelDataFromServer(unparsedMetadata);
    return toTableData(unparsedMetadata);
};
