import { asyncHandler } from "../utilis/asynchandler.js";

const studentCtrlon = asyncHandler( async (req, res) => {
    res.status(200).json({
        message: "OK"
    })
})

export  {studentCtrlon} 