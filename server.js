const express = require("express");
const app = express();

const exec = (command, cwd = ".") =>
  require("child_process").execSync(command, { cwd, stdio: "inherit" });

app.get("/exp", (req, res) => {
  console.log("working");
  exec("python exp.py");
});

app.listen(8080, () => {
  console.log("SERVER WORKING");
});
