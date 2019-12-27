import { ILevelMetadata } from "../redux/store/ILevelMetadataState";

export const toTableData = (
    unparsed: ILevelMetadataFromServer
): ILevelMetadata => {
    return {
        id: unparsed.id,
        name: unparsed.name,
        likes: unparsed.likes,
        downloads: unparsed.downloads,
        uploadDate: new Date(unparsed.created).toLocaleDateString(),
        uploader: unparsed.uploader,
        gameVersion: "1.0.0",
        version: unparsed.version,
        level: unparsed.level,
    };
};

export interface ILevelMetadataFromServer {
    id: number;
    likes: number;
    downloads: number;
    version: number;
    name: string;
    created: string; // isodate string
    lastUpdate: string; // isodate string
    uploader: string;
    level: {};
}

export const assertIsLevelDataFromServer = (
    unparsed: ILevelMetadataFromServer
) => {
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
