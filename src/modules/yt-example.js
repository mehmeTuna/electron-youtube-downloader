const { ipcMain } = require("electron");

const ytdl = require("ytdl-core");

const ytUrl = "https://www.youtube.com/watch?v=HNHKsJsShhM";

ipcMain.handle("yt-data", (event, ...args) => {
  return new Promise((resolve, reject) => {
    ytdl.getBasicInfo(ytUrl, (err, info) => {
      if (err) reject(err);
      console.log(info);
      resolve(info);
    });
  });
});
