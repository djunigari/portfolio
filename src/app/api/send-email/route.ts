import { sendEmail } from '@/libs/email'
import { render } from '@react-email/render'
import MessageFromPortfolioTemplate from '../../../../emails/MessageFromPortfolioTemplate'

export async function POST(req: Request, res: Response) {
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
    return new Response(JSON.stringify({ error: error.message }), {
      status: 403,
    })
  }
}
