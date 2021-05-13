import App from "./App.svelte";
const { ipcRenderer } = require("electron");

const ytdl = require("ytdl-core");

const ytUrl = "https://www.youtube.com/watch?v=HNHKsJsShhM";

ipcRenderer.on("yt-data", (event, arg) => {
  console.log("on kısmı çalıştı");
  return new Promise((resolve, reject) => {
    ytdl.getBasicInfo(ytUrl, (err, info) => {
      if (err) reject(err);
      console.log(info);
      resolve(info);
    });
  });
});

const app = new App({
  target: document.body,
});

export default app;
