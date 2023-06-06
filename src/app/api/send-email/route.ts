import { sendEmail } from '@/libs/email'
import { render } from '@react-email/render'
import WelcomeTemplate from '../../../../emails/WelcomeTemplate'

export async function GET(req: Request, res: Response) {
  await sendEmail({
    to: 'kiran@example.com',
    subject: 'Welcome to NextAPI',
    html: render(WelcomeTemplate()),
  })

  return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
    status: 200,
  })
}
