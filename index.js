const app = require("express")();

app.get("/", (req, res) => {
  res.send(`Hello World`);
});

app.get("/status", (req, res) => {
  const response = {
    success: true,
    data: { mock: "data" },
    message: `Witamy na pokładzie`,
  };

  res.status(200);
  res.send(response);
});
