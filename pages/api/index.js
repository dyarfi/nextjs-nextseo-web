import INDEX from '@config/data/index';

export default function handler(req, res) {
  return res.status(200).json(INDEX);
}
