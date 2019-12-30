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
    level: {}
) => {
    const payload = {
        name,
        uploader,
        level,
    };
    const response: Response & { error: string } = (await fetch(
        CONFIG.levelsMetadataUri,
        {
            method: "POST",
            redirect: "error",
            mode: "cors",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json",
            },
        }
    )) as any;
    const unparsedMetadata: ILevelMetadataFromServer = await response.json();
    if (response.statusText === "Conflict") {
        throw new Error("Conflict: Level name already in use");
    }

    if (response.statusText === "Bad Request") {
        throw new Error(JSON.stringify((unparsedMetadata as any).message));
    }
    assertIsLevelDataFromServer(unparsedMetadata);
    return toTableData(unparsedMetadata);
};
