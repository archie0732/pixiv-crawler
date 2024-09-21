import { Artwork } from "./artwork.interface";
import type { APIArtworkData } from "./artwork.interface";
import type { APIError } from "./error.interface";

export class Pixiv {
  async getArtworkImage(artworkId: number) {
    //https://api.pixiv.cat/v1/generate
    const res = await fetch("https://api.pixiv.cat/v1/generate", {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      body: `p=${artworkId}`,
    });

    if (!res.ok) {
      throw new Error(`The server returned a status of ${res.status}`);
    }

    const data = (await res.json()) as APIArtworkData | APIError;

    if (!data.success) {
      throw new Error(data.error);
    }

    return new Artwork(data);
  }
}

export default new Pixiv();
