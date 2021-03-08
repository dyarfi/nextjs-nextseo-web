import CONTACT from '@config/data/contact';

export default function handler(req, res) {
  return res.status(200).json(CONTACT);
}
