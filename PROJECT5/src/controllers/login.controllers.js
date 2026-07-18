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
        secure: true,
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

export {loginCtrl}