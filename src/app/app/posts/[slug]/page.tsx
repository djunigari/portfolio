interface PostProps {
  params: {
    slug: string
  }
}

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props) {
  return {
    title: `Post ${params.slug}`,
  }
}

export default function Post({ params }: PostProps) {
  return <h1>Post: {params.slug}</h1>
}
