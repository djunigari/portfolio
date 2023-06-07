import { sendEmail } from '@/libs/email'
import { render } from '@react-email/render'
import MessageFromPortfolioTemplate from '../../../../emails/MessageFromPortfolioTemplate'

export async function POST(req: Request, res: Response) {
  const { name, email, message } = await req.json()
  await sendEmail({
    to: email,
    subject: 'Message from portfolio',
    html: render(
      MessageFromPortfolioTemplate({
        name,
        email,
        message,
      }),
    ),
  })

  return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
    status: 200,
  })
}
