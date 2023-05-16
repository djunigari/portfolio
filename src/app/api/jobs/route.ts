import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const res = {
    list: [
      {
        title: 'Learn GraphQL',
      },
      { title: 'Learn Prisma' },
      { title: 'Learn Next.js' },
    ],
  }
  return NextResponse.json({ res })
}
