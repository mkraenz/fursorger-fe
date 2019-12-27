import { isArray } from "util";
import { ILevelMetadata } from "../redux/store/ILevelMetadataState";
import { CONFIG } from "./config";

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

const toTableData = (unparsed: ILevelMetadataFromServer): ILevelMetadata => {
    return {
        id: unparsed.id,
        name: unparsed.name,
        likes: unparsed.likes,
        downloads: unparsed.downloads,
        uploadDate: new Date(unparsed.created).toLocaleDateString(),
        uploader: unparsed.uploader,
        gameVersion: "1.0.0",
        version: unparsed.version,
    };
};

interface ILevelMetadataFromServer {
    id: number;
    likes: number;
    downloads: number;
    version: number;
    name: string;
    created: string; // isodate string
    lastUpdate: string; // isodate string
    uploader: string;
}

const assertIsLevelDataFromServer = (unparsed: ILevelMetadataFromServer) => {
    if (
        !Number.isInteger(unparsed.id) ||
        !Number.isInteger(unparsed.likes) ||
        !Number.isInteger(unparsed.downloads) ||
        !Number.isInteger(unparsed.version) ||
        !isString(unparsed.name) ||
        !isString(unparsed.created) ||
        !isString(unparsed.lastUpdate) ||
        !isString(unparsed.uploader)
    ) {
        throw new Error(
            "Client's and server's level metadata interfaces do not coincide."
        );
    }
};
const isString = (x: unknown): x is string => {
    return typeof x === "string";
};
