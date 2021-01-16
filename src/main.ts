import { app, BrowserWindow } from "electron";
import server from "./server";

const port = 4581;

const createWindow = (): void => {
  const mainWindow = new BrowserWindow({
    height: 600,
    width: 1000,
    backgroundColor: "#2C2C2C",
    webPreferences: {
      devTools: true,
      nodeIntegration: true,
      nativeWindowOpen: true,
      contextIsolation: true,
    },
    autoHideMenuBar: true,
  });

  mainWindow.menuBarVisible = false;

  mainWindow.on("page-title-updated", (e: Electron.Event) => {
    e.preventDefault;
  });

  server.listen(port, () => console.log(`listening on port ${port}`));

  mainWindow.loadURL(`http://localhost:${port}`);
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
