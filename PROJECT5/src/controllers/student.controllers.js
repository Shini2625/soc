import { asyncHandler } from "../utilis/asynchandler.js";
import { studentdata } from "../models/student.model.js";
import { apierror } from "../utilis/apierror.js";
import { apires } from "../utilis/apiresponse.js";

const updateStudentCtrl = asyncHandler( async (req, res) => {
     const { id } = req.params;
     const { Name, Semester, Branch } = req.body;
     const updatedStudent = await studentdata.findByIdAndUpdate(id,
    { Name, Semester, Branch },
    { new: true, runValidators: true }
  );

  if (!updatedStudent) {
    return res.status(404).json(new apierror(404, "student not found"));
  }

  res.status(200).json(new apires(200, updatedStudent, "student updated successfully"));
})

export  {updateStudentCtrl} 