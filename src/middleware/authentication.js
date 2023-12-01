const jwt = require("jsonwebtoken");
let authentication = async function (req, res, next) {
  try {
    let token = req.headers["token"];
    if (!token) {
      return res
        .status(400)
        .send({ message: "token is required in headers" });
    }

    try {
      const decodedToken = jwt.verify(token, "my-secret-key");
      if (!decodedToken.author_id) {
        return res
          .status(401)
          .send({ message: "Invalid token: Missing author ID" });
      }
      req.author_id = decodedToken.author_id;
      next();
    } catch (error) {
      return res.status(401).send({ message: "Invalid token" });
    }
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
};

module.exports.authentication = authentication;
