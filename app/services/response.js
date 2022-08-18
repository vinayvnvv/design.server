const Utils = require("./../services/utils");
class Response {
  error(err, response) {
    const { error, status } = err;
    response
      .status(status || 400)
      .json({
        error: Utils.isString(error)
          ? error
          : error._message
          ? error._message
          : "Error",
      });
  }
  success(body, response) {
    response.json(body);
  }
}

module.exports = new Response();
