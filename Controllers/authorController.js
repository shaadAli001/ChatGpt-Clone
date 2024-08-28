const errorResponse = require("../Utils/error");
const userModel = require("../Model/userModel");

// Genrate token!
const sendToken = (user, statusCode, res) => {
    const token = user.getSignedToken(res);
    res.status(statusCode).json({ success: true, token });
}

// SignUp
const registerController = async (req, res, next) => {
    try {
        let { username, email, password } = req.body;
        const existingEmail = await userModel.findOne({ email });

        if (existingEmail) {
            return next(new errorResponse("Email already Exist", 500));
        }

        const user = await userModel.create({ username, email, password });
        this.sendToken(user, 201, res);
    }
    catch (error) {
        next(error)
    }
}

// Login
const loginController = async (req, res, next) => {
    try {
        let { email, password } = req.body;
        // Validation
        if (!email || !password) {
            return next(new errorResponse("Please Enter email or password"))
        }
        const user = await userModel.findOne({ email });
        if (!user) {
            return next(new errorResponse("Invalid details!", 401));
        }
        const isMatch = await userModel.matchPassword(password);
        if (!isMatch) {
            return next(new errorResponse("Invalid details!", 401));
        }
        // res
        this.sendToken(user, 201, res)

    } catch (error) {
        next(error);
    }
}

const logoutController = async (res) => {
    res.clearCookie('refreshToken')
    return res.status(200).json({
        success: true,
        message: "Logout Success"
    })
}

module.exports = { registerController, loginController, logoutController, sendToken };