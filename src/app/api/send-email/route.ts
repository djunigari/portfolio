import { sendEmail } from '@/libs/email'
import { render } from '@react-email/render'
import MessageFromPortfolioTemplate from '../../../../emails/MessageFromPortfolioTemplate'
import { checkLimiter } from '../config/checkLimiter'
import { limiter } from './config/limiter'

export async function POST(req: Request, res: Response) {
  const origin = req.headers.get('Origin')
  await checkLimiter(limiter)
  try {
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

    return new Response(
      JSON.stringify({ message: 'Email sent successfully' }),
      {
        headers: {
          'Access-Control-Allow-Origin':
            origin || process.env.NODE_ENV !== 'production' ? '*' : '',
          'Content-Type': 'application/json',
        },
      },
    )
  } catch (error: any) {
    console.log(error.message)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    })
  }
}
