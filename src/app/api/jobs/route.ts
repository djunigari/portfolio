import { prisma } from '@/utils/prisma'

async function findByCursor(take: number, lastCursor?: string | null) {
  return prisma.employer.findMany({
    include: { tecnologies: { include: { tecnology: true } } },
    take,
    ...(lastCursor && {
      skip: 1, // Skip the cursor
      cursor: {
        id: lastCursor as string,
      },
    }),
    orderBy: {
      startAt: 'desc',
    },
  })
}

export async function GET(req: Request, res: Response) {
  const origin = req.headers.get('Origin')

  try {
    const { searchParams } = new URL(req.url as string)
    const takeParam = searchParams.get('take')
    const take = takeParam ? parseInt(takeParam as string) : 3
    const lastCursor = searchParams.get('lastCursor')

    const employers = await findByCursor(take, lastCursor)

    if (employers.length === 0) {
      return new Response(
        JSON.stringify({
          data: [],
          metaData: {
            lastCursor: null,
            hasNextPage: false,
          },
        }),
        {
          headers: {
            'Access-Control-Allow-Origin':
              origin || process.env.NODE_ENV !== 'production' ? '*' : '',
            'Content-Type': 'application/json',
          },
        },
      )
    }

    const cursor = employers[employers.length - 1].id

    const nextPage = await findByCursor(take, cursor)

    return new Response(
      JSON.stringify({
        data: employers,
        metaData: {
          lastCursor: cursor,
          hasNextPage: nextPage.length > 0,
        },
      }),
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
