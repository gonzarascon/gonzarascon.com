import sendEmail from 'helpers/sendEmail';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { msg, email, subject } = req.body;
    await sendEmail({ msg, subject, email });
    return res.status(200).end();
  }
  return res.status(404).json({
    error: {
      code: 'not_found',
      messgae:
        "The requested endpoint was not found or doesn't support this method.",
    },
  });
};
