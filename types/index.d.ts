import { Artwork } from "./artwork.interface";
export declare class Pixiv {
    getArtworkImage(artworkId: number): Promise<Artwork>;
}
export declare const archiePixivAPI: (id: number) => Promise<Artwork>;
