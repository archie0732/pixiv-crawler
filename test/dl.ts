import pixiv from "../src";

pixiv.getArtworkImage(123).then(async (e) => await e.download("./saves/"));
