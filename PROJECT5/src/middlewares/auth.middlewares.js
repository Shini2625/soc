

export const verifyJWT = asyncHandler(async (req, res, next) => {
  /* 1. get the token — from req.header('Authorization'), strip the "Bearer " prefix */
       const authHeader = req.header('Authorization');
       const token = authHeader?.replace('Bearer ', '');
  /* 2. if no token — 401, reject */
    if (!token) {
      return res.status(401).json(new apierror(401, "unauthorized request"));
        }
  /* 3. jwt.verify(token, process.env.ACCESS_TOKEN_SECRET) — wrap in try/catch,
        since verify() throws on invalid/expired tokens rather than returning false */
        let decoded;
           try {
             decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
           } catch (error) {
             return res.status(401).json(new apierror(401, "invalid or expired token"));
           }
  /* 4. look up the student by the decoded id, attach it to req.student */
       const student = await studentdata.findById(decoded.id);

      if (!student) {
        return res.status(401).json(new apierror(401, "invalid token — user no longer exists"));
      }

      req.student = student;
  /* 5. call next() to let the request through */
    next();
});