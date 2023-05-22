import { prisma } from '@/utils/prisma'

export async function GET(req: Request, res: Response) {
  try {
    const { searchParams } = new URL(req.url as string)
    const take = searchParams.get('take')
    const lastCursor = searchParams.get('lastCursor')

    const result = await prisma.$transaction([
      prisma.employer.count(),
      prisma.employer.findMany({
        include: { tecnologies: { include: { tecnology: true } } },
        take: take ? parseInt(take as string) : 3,
        ...(lastCursor && {
          skip: 1, // Skip the cursor
          cursor: {
            id: lastCursor as string,
          },
        }),
        orderBy: {
          startAt: 'desc',
        },
      }),
    ])

    const total = result[0] ?? 0
    const employers = result[1]

    if (employers.length === 0) {
      return new Response(
        JSON.stringify({
          data: [],
          metaData: {
            total,
            lastCursor: null,
            hasNextPage: false,
          },
        }),
        { status: 200 },
      )
    }

    const cursor = employers[employers.length - 1].id

    const nextPage = await prisma.employer.findMany({
      take: take ? parseInt(take as string) : 7,
      skip: 1,
      cursor: {
        id: cursor,
      },
      orderBy: {
        startAt: 'asc',
      },
    })

    return new Response(
      JSON.stringify({
        data: employers,
        metaData: {
          total,
          lastCursor: cursor,
          hasNextPage: nextPage.length > 0,
        },
      }),
      { status: 200 },
    )
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 403,
    })
  }
}
