import { NextApiRequest, NextApiResponse } from 'next';
import convertSvgToJsx from '../../utils/convertSvg';

type BodyType = {
  svg: string;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.statusCode = 404;
    res.json({ success: false, message: 'Not Found' });
  }

  const { svg }: BodyType = req.body;

  try {
    const data = await convertSvgToJsx(svg);

    res.statusCode = 200;
    res.json({ success: true, code: data });
  } catch (error) {
    res.statusCode = 400;
    res.json({ success: false, message: error.message || 'Invalid Input' });
  }
};
