import jwt from "jsonwebtoken";
const userAuth = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.json({ success: false, message: "Not Authorized.Login Again" });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

    if (tokenDecode.id) {
      if (req.method === "GET") {
        req.userId = tokenDecode.id;
      } else {
        req.body.userId = tokenDecode.id;
        console.log(tokenDecode);
      }
    } else {
      return res.json({
        success: false,
        message: "Not Authorized.Login Again",
      });
    }

    next();
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};
export default userAuth;
