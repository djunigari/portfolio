interface MessageFromPortfolioTemplateProps {
  name: string
  email: string
  message: string
}

export default function MessageFromPortfolioTemplate({
  name,
  email,
  message,
}: MessageFromPortfolioTemplateProps) {
  return (
    <html>
      <body className="flex flex-col gap-2">
        <h1 className="text-lg">Message from porftolio</h1>
        <span className="font-bold">Name: {name}</span>
        <span className="font-bold">E-mail: {email} </span>
        <p>{message}</p>
      </body>
    </html>
  )
}
