// Figure out what set of credentials to return

if (process.env.NODE_ENV === "production") {
  // We are in prod, return prod keys
  module.exports = require("./prod");
} else {
  // We are in dev, return dev keys
  module.exports = require("./dev");
}
