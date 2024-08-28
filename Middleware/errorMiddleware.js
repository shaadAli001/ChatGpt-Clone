const errorResponse = require("../Utils/error");

const errorHandler = (err, req, res, next) => {
    let error = { ...err };
    error.message = err.message;

    // Mongoose Error
    if (err.name === "castError") {
        const message = "Resource Not Found!!";
        err = new errorResponse(message, 404)
    }

    if (err.code === 1100) {
        const message = "Duplicate Feild Enterd";
        err = new errorResponse(message, 400);
    }

    if (err.name === "ValidationError") {
        const message = Object.values(err.error).map(val => val.message);
        err = new errorResponse(message, 400);
        res.status(err.message || 500).json({ success: false, error: err.message || "Server Error" });
    }
}
module.exports = errorHandler;
