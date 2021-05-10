module.exports = {
  JWT_SECRET: process.env.JWT_SECRET || 'andromeda',
  PORT: process.env.PORT || 8080,
  DB_USER: process.env.DB_USER || 'artur',
  DB_PASS: process.env.DB_PASS || 'qwer1234',
  DB_NAME: process.env.DB_NAME || 'app',
  DB_HOSTNAME: process.env.DB_HOSTNAME || '@cluster0.j7la9.mongodb.net',
};
