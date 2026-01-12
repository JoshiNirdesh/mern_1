const userModel = require("../models/userModel")

const registerController = async (req, res) => {
    try {
        const { username, password, email, phone, address } = req.body
        if (!username || !password || !email || !phone || !address) {
            res.status(500).send({
                success: false,
                message: "All fields are required"
            })
        }
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            res.status(500).send({
                success: false,
                message: "User Already exist"
            })
        }
        const newUser = await userModel.create({ username, email, password, phone, address });
        res.status(200).send({
            success: true,
            message: "Register Successfully",
            newUser
        })
    } catch (error) {
        res.status(500).send({
            message: false,
            success: "Register API error",
            error: error.message
        })
    }
}
module.exports = { registerController }