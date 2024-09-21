import { mkdirSync, existsSync } from "fs";
import { join } from "path";
import { writeFileSync } from "fs";

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

export class Artwork {
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

  constructor(data: APIArtworkData) {
    this.id = data.id;
    this.title = data.title;
    this.artist = data.artist;
    this.images = {
      source: data.original_urls,
      proxy: data.original_urls_proxy,
      thumbnail: data.thumbnails,
    };
    this.multiple = data.multiple;
    this.single_url = data.original_url;
    this.single_proxy = data.original_url_proxy;
  }

  async download(path: string = "./") {
    if (!existsSync(path)) {
      mkdirSync(path, { recursive: true });
    }
    if (this.multiple == false) {
      const ext = this.single_proxy.split("/").pop() || "a.jpg";
      const imagePath = join(path, ext);
      await dl(this.single_proxy, imagePath);
      return;
    }

    for (const url of this.images.proxy) {
      const ext = url.split("/").pop() || "a.jpg";
      const imagePath = join(path, ext);
      await dl(url, imagePath);
    }
  }
}

const dl = async (url: string, path: string) => {
  const resp = await fetch(url);

  if (!resp.ok) throw new Error("fetch https error, when try download image");

  const raw = await resp.arrayBuffer();
  const buffer = Buffer.from(raw);
  const uint8Array = new Uint8Array(
    buffer.buffer,
    buffer.byteOffset,
    buffer.byteLength
  ); // Convert buffer to Uint8Array

  writeFileSync(path, uint8Array);
};
