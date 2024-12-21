const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const ApiLogsService = require("../models/ApiLogs");

exports.getLogs = asyncHandler(async (req, res, next) => {
  try {
    const getLogs = await ApiLogsService.find({})
      .sort({ timestamp: -1 }) // Sort by timestamp in descending order
      .limit(100); // Limit the result to the latest 30 logs

    if (!getLogs || getLogs.length === 0) {
      return next(new ErrorResponse("No logs found!", 404));
    }

    return res.status(200).json({
      success: true,
      msg: "Logs fetched successfully!",
      data: getLogs,
    });
  } catch (error) {
    return next(new ErrorResponse("Failed to fetch logs!", 500));
  }
});

