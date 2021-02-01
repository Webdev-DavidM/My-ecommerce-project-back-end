import jwt from 'jsonwebtoken';

const jwtVerify = async (req, res, next) => {
  let { token, email } = req.headers;
  try {
    await jwt.verify(token, 'crystal palace are the best');
    console.log(email);
    req.email = email;

    next();
  } catch (err) {
    res.status(401).json('jwt token incorrect');
  }
};

export default jwtVerify;