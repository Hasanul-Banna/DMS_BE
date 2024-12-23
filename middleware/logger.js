// middleware/logger.js
const Log = require("../models/ApiLogs");

const logger = async (req, res, next) => {
  const originalSend = res.send;

  // Intercept response body
  res.send = async function (body) {
    try {
      let success = null;
      let msg = null;
      let dataLength = null;

      // Extract 'success', 'msg', and 'data.length' if the response body is JSON
      if (typeof body === "object") {
        success = body.success || null;
        msg = body.msg || null;
        dataLength = Array.isArray(body.data) ? body.data.length : null;
      } else {
        try {
          const parsedBody = JSON.parse(body);
          success = parsedBody.success || null;
          msg = parsedBody.msg || null;
          dataLength = Array.isArray(parsedBody.data)
            ? parsedBody.data.length
            : null;
        } catch (error) {
          // Ignore parsing errors for non-JSON responses
        }
      }
      console.log(req.body);

      // Save the log with only 'success' and 'msg' from the response body
      await Log.create({
        method: req.method,
        url: req.originalUrl,
        statusCode: res.statusCode,
        requestBody: req.body,
        responseBody: { success, msg, dataLength },
      });
    } catch (err) {
      console.error("Error saving log:", err);
    }

    // Call the original `res.send` method
    originalSend.call(this, body);
  };

  next();
};

module.exports = logger;
