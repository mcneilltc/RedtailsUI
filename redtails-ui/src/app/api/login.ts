import type { NextApiRequest, NextApiResponse } from 'next';
import { sign } from 'jsonwebtoken';
import { serialize } from 'cookie';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'; // Use environment variable in production

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { username, password } = req.body;

  // Replace this with actual database authentication
  if (username === 'admin' && password === 'your-secure-password') {
    // Create JWT token
    const token = sign(
      { username, admin: true },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Set HTTP-only cookie
    res.setHeader('Set-Cookie', serialize('admin-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 3600,
      path: '/',
    }));

    return res.status(200).json({ success: true });
  }

  return res.status(401).json({ message: 'Invalid credentials' });
}
