import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload, Secret } from 'jsonwebtoken';
import { User } from '../model/user';


export function generateToken(user: User) {
    const payload = {
      email: user.email,
      id: user.id,
    };
    const secret = "Your-default-secret-key";
    const options = { expiresIn: "1d" };
  
    return jwt.sign(payload, secret, options);
}


interface AccessTokenPayload extends JwtPayload {
  email: string;
  id: string;
}

export interface AuthRequest extends Request {
  headers: {
    'user-id'?: string;
  };
}

export function verifyToken(token: string): { success: boolean; data: AccessTokenPayload | string } {
  const secret: Secret = "Your-default-secret-key";

  try {
    const decoded = jwt.verify(token, secret) as AccessTokenPayload;
    return { success: true, data: decoded };
  } catch (error) {
    return { success: false, data: (error as Error).message };
  }
}

export interface CustomRequest extends Request {
  user?: AccessTokenPayload;
}

export const authenticate = (req: CustomRequest, res: Response, next: NextFunction) => {
  const authHeader = req.header('Authorization')?.replace('Bearer ', '');
  //console.log(req.header);
  if (!authHeader) {
    //console.log(authHeader);
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const secret: Secret = process.env.JWT_SECRET_KEY || 'Your-default-secret-key';
  console.log(secret);

  try {
    const decoded = jwt.verify(authHeader, secret) as { userId: string };
    //console.log(decoded);
    req.headers['user-id'] = decoded.userId;
    //console.log(req.headers);
    next();
  } catch (error) {
    console.error('Token Verification Error:', error);
    return res.status(403).send('Invalid token');
  }
};
