const express = require("express");
const fileUpload = require("express-fileupload");
const photoRoutes = require("./photos.routes");

const app = express();

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/files",
  })
);

app.use(photoRoutes);

app.listen(3000, () => {
  console.log(`Listening on port: ${3000}`);
});
