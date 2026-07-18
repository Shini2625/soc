import { asyncHandler} from "../utilis/asynchandler.js";
import { studentdata } from "../models/student.model.js";
import {apierror} from "../utilis/apierror.js";
import {apires} from "../utilis/apiresponse.js";

const logoutCtrl = asyncHandler(async (req, res) => {
  res.clearCookie('refreshToken', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
  });
  res.status(200).json(new apires(200, {}, "logged out successfully"));
});

export {logoutCtrl}