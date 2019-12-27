import { ILevelMetadata } from "../redux/store/ILevelMetadataState";

const createDataRow = (
    id: number,
    name: string,
    likes: number,
    downloads: number,
    uploadDate: string,
    uploader: string,
    gameVersion: string,
    version: number
): ILevelMetadata => ({
    id,
    name,
    likes,
    downloads,
    uploadDate,
    uploader,
    gameVersion,
    version,
});

export const levelRows = [
    createDataRow(0, "Wesnoth", 5, 7, "19 Nov, 2019", "Mirco", "1.0.0", 2),
    createDataRow(1, "Brandenburg", 49, 65, "6 Dec, 2019", "Matze", "1.0.1", 1),
    createDataRow(
        2,
        "My first Level",
        0,
        1,
        "21 Dec, 2019",
        "Peter",
        "1.5.3",
        1
    ),
    createDataRow(
        3,
        "First steps",
        12,
        194,
        "1 Oct, 2019",
        "Matze and Mirco",
        "1.0.1",
        16
    ),
];
