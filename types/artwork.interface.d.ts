export interface APIArtworkData {
    success: true;
    id: number;
    title: string;
    artist: {
        id: number;
        name: string;
    };
    multiple: boolean;
    original_urls: string | string[];
    original_urls_proxy: string | string[];
    thumbnails: string | string[];
    original_url: string;
    original_url_proxy: string;
}
export declare class Artwork {
    id: number;
    title: string;
    artist: {
        id: number;
        name: string;
    };
    images: {
        source: string | string[];
        proxy: string | string[];
        thumbnail: string | string[];
    };
    multiple: boolean;
    single_url: string;
    single_proxy: string;
    constructor(data: APIArtworkData);
    download(path?: string): Promise<void>;
}
