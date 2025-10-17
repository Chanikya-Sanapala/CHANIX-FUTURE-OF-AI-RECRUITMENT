import dotenv from 'dotenv';

dotenv.config();

export const jwtConfig = {
  secret: process.env.JWT_SECRET,
  expiresIn: process.env.JWT_EXPIRE,
  refreshExpiresIn: process.env.JWT_REFRESH_EXPIRE,
  issuer: 'smart-engine-api',
  audience: 'smart-engine-client',
};

export const jwtOptions = {
  expiresIn: jwtConfig.expiresIn,
  issuer: jwtConfig.issuer,
  audience: jwtConfig.audience,
};
