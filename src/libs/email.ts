import nodemailer from 'nodemailer'

type EmailPayload = {
  to: string
  subject: string
  html: string
}

export const sendEmail = async (data: EmailPayload) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.mailtrap.io',
    port: parseInt(process.env.SMTP_PORT || '2525'),
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'apikey',
      pass: process.env.SENDGRID_API_KEY,
    },
  })

  transporter.sendMail(
    {
      from: process.env.SMTP_SENDER_EMAIL, // verified sender email
      to: process.env.SMTP_RECIPIENT_EMAIL, // recipient email
      subject: data.subject,
      text: data.to,
      html: data.html,
    },
    function (error, info) {
      if (error) {
        console.log(error)
        throw error
      } else {
        console.log('Email sent: ' + info.response)
      }
    },
  )
}
