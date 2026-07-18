import { asyncHandler} from "../utilis/asynchandler.js";
import { studentdata } from "../models/student.model.js";
import {apierror} from "../utilis/apierror.js";
import {apires} from "../utilis/apiresponse.js";
import bcrypt from 'bcrypt';


const loginCtrl = asyncHandler(async (req, res) => {
  const { Email, Password } = req.body;

  /* 1. find the student by Email — remember select: false on Password,
        so you need .select('+Password') to get it back for this query */
    const student = await studentdata.findOne({ Email }).select('+Password');

  /* 2. if no student found — what status code, what error? */
     if(!student){
        return res.status(401).json(new apierror(401, "invalid email or password"));
     };

  /* 3. bcrypt.compare(Password, student.Password) — check the order of arguments */
    const pcheck = await bcrypt.compare(Password, student.Password)

  /* 4. if password doesn't match — what status code, what error? */
    if (!pcheck) {
         return res.status(401).json(new apierror(401, "invalid email or password"));
   }

  /* 5. only past this point: generate access + refresh tokens */
      const accessToken = student.generateAccessToken();
      const refreshToken = student.generateRefreshToken();

  /* 6. res.cookie('refreshToken', refreshToken, { httpOnly: true, secure: true, sameSite: 'strict' }) */
    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV ==='production',
        sameSite: 'strict',
      });

  /* 7. strip Password from the student object before sending it back — same pattern as studentCtrl */
      const studentObj = student.toObject();
     delete studentObj.Password;
  /* 8. res.status(200).json(new apires(200, { student: studentObj, accessToken }, 'login successful')) */
      res.status(200).json(
            new apires(200, { student: studentObj, accessToken }, 'logged in successfully')
  );
});

//refresh access token
const refreshAccessTokenCtrl = asyncHandler(async (req, res) => {
  /* 1. read the refresh token from req.cookies.refreshToken */
        const refreshtoken = req.cookies.refreshToken
  /* 2. if it's missing entirely — 401, reject */
        if(!refreshtoken) return res.status(403).json(new apierror(403, "invalid refreshtoken"));
  /* 3. jwt.verify(incomingToken, process.env.REFRESH_TOKEN_SECRET), 
        wrapped in try/catch since verify() throws on invalid/expired */
        let decoded;
           try {
            decoded = jwt.verify(refreshtoken, process.env.REFRESH_TOKEN_SECRET);
         } catch (error) {
         return res.status(403).json(new apierror(403, "invalid or expired refresh token"));
       }
  /* 4. look up the student using the decoded id (studentdata.findById) */
        const student = await studentdata.findById(decoded.id);
  /* 5. if no student found — 401, reject */
      if (!student) {
          return res.status(401).json(new apierror(401, "invalid refresh token — user no longer exists"));
       }
  /* 6. generate a new access token: student.generateAccessToken() */
     const accessToken = student.generateAccessToken();

  /* 7. send it back: res.status(200).json(new apires(200, { accessToken }, "access token refreshed")) */
    res.status(200).json(new apires(200, { accessToken }, "access token refreshed"));
});

export {loginCtrl, refreshAccessTokenCtrl}