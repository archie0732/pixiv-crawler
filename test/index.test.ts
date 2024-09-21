import { describe, it, expect } from "bun:test";
import pixiv, { Pixiv } from "../src";

describe("pixiv", () => {
  it("default import should be a instance of Pixiv", () => {
    expect(pixiv).toBeInstanceOf(Pixiv);
  });

  it("should throw error when artwork is not found", () => {
    return expect(pixiv.getArtworkImage(0)).rejects.toThrowError();
  });

  it("should return an object that contains proxied image urls", () => {
    return expect(
      pixiv.getArtworkImage(120455500).then((r) => r.images.proxy)
    ).resolves.not.toBeEmpty();
  });
});
