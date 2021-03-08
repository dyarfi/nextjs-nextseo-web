import ABOUT from '@config/data/about';

export default function handler(req, res) {
  return res.status(200).json(ABOUT);
}
