import { Artwork } from "./artwork.interface";
export declare class Pixiv {
    getArtworkImage(artworkId: number): Promise<Artwork>;
}
declare const _default: Pixiv;
export default _default;
