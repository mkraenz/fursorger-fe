import pickBy from "lodash.pickby";
import { ILevelUpdate } from "../redux/actions/ILevelMetadataUpdateRequest";
import { CONFIG } from "./config";
import {
    assertIsLevelDataFromServer,
    ILevelMetadataFromServer,
    toTableData,
} from "./server-level-metadata";

export const updateLevelMetadata = async (
    levelId: number,
    update: ILevelUpdate
) => {
    // avoid sending additional properties because of interfaces being open for extension
    const payload = toExactUpdatePayload(update);
    const levelsJson = await fetch(`${CONFIG.levelsMetadataUri}/${levelId}`, {
        method: "PATCH",
        redirect: "error",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });
    const unparsedMetadata: ILevelMetadataFromServer = await levelsJson.json();
    assertIsLevelDataFromServer(unparsedMetadata);
    return toTableData(unparsedMetadata);
};

interface IUpdateLevelForServer {
    like?: true;
    download?: true;
}

function toExactUpdatePayload(update: ILevelUpdate): IUpdateLevelForServer {
    const validKeys: (keyof ILevelUpdate)[] = ["download", "like"];
    const payload = pickBy(
        update,
        (val, key) => val && validKeys.includes(key as any)
    );
    return payload;
}
