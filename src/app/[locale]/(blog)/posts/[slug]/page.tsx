interface PostProps {
  params: {
    slug: string
    lang: string
    country: string
  }
}

export async function generateMetadata({ params }: PostProps) {
  return {
    title: `Post ${params.slug}`,
  }
}

export default function Post({ params }: PostProps) {
  return (
    <>
      <h1>Post: {params.slug}</h1>
    </>
  )
}
