export interface ILevelMetadata {
    id: number;
    name: string;
    likes: number;
    downloads: number;
    uploadDate: string;
    uploader: string;
    gameVersion: string;
    version: number;
    level: {};
}

export type ILevelMetadataState = ILevelMetadata[];
