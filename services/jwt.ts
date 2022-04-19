import jwt from "jsonwebtoken";

const generateAccessToken = (data: any, options = {}) => {
  return jwt.sign({ ...data, isAccess: true }, process.env.JWT_SECRET ?? "", {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRE,
    ...options,
  });
};

const generateRefreshToken = (data: any, options = {}) => {
  return jwt.sign({ ...data, isRefresh: true }, process.env.JWT_SECRET ?? "", {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRE,
    ...options,
  });
};

const verifyToken = async (token: string) => {
  return await jwt.verify(token, process.env.JWT_SECRET);
};

export { generateAccessToken, generateRefreshToken, verifyToken };
