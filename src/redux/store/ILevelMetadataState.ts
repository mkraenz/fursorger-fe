export interface ILevelMetadata {
    id: number;
    levelName: string;
    likes: number;
    downloads: number;
    uploadDate: string;
    uploader: string;
    gameVersion: string;
    version: number;
}

export type ILevelMetadataState = ILevelMetadata[];
