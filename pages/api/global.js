import GLOBAL from '@config/data/global';

export default function handler(req, res) {
  return res.status(200).json(GLOBAL);
}
