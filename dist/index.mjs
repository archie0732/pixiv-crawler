import { Artwork } from "./artwork.interface.mjs";
export class Pixiv {
  async getArtworkImage(artworkId) {
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
    const data = await res.json();
    if (!data.success) {
      throw new Error(data.error);
    }
    return new Artwork(data);
  }
}
export const archiePixivAPI = async (id) => {
  const pixiv = new Pixiv();
  return await pixiv.getArtworkImage(id);
};
