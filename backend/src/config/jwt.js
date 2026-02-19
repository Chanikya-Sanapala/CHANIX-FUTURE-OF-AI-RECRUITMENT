import dotenv from 'dotenv';

dotenv.config();

export const jwtConfig = {
  secret: process.env.JWT_SECRET || 'smart_engine_default_secret_key_123_change_this_in_production',
  expiresIn: process.env.JWT_EXPIRE || '7d',
  refreshExpiresIn: process.env.JWT_REFRESH_EXPIRE || '30d',
  issuer: 'smart-engine-api',
  audience: 'smart-engine-client',
};

export const jwtOptions = {
  expiresIn: jwtConfig.expiresIn,
  issuer: jwtConfig.issuer,
  audience: jwtConfig.audience,
};
