# @archie0732/pixivcrawler

To install dependencies:

```bash
npm i @archie0732/pixivcrawler
```

Get doujin infor

```ts
import a7Pixiv from "@archie0732/pixivcrawler";

a7Pixiv.getArtworkImage(1234).then(console.log);
```

or Download this image

```ts
a7Pixiv.getArtworkImage(1234).then(async (e) => e.download("./save"));
```
