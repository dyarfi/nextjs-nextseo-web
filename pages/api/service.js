import SERVICE from '@config/data/service';

export default function handler(req, res) {
  return res.status(200).json(SERVICE);
}
