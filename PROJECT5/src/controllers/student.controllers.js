import { asyncHandler } from "../utilis/asynchandler.js";

const registerStudent = asyncHandler( async (req, res) => {
    res.status(200).json({
        message: "OK"
    })
})

export  {registerStudent} 