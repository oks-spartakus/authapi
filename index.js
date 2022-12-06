const app = require("express")();
const jwt = require("express-jwt");
const jwks = require("jwks-rsa");

var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://dev-s3lc2jx6s2yfmwwo.us.auth0.com/.well-known/jwks.json",
  }),
  audience: "https://authapi-production.up.railway.app/",
  issuer: "https://dev-s3lc2jx6s2yfmwwo.us.auth0.com/",
  algorithms: ["RS256"],
});

app.use(jwtCheck);

app.get("/authorized", function (req, res) {
  res.send("Secured Resource");
});

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

app.listen(1989, () => console.log("listening on 1989"));
