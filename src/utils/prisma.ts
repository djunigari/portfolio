import { PrismaClient } from '@prisma/client'

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined
}
const { DATABASE_URL, CA_CERT_PATH } = process.env

// Adicionar o certificado CA à URL do banco de dados
const dsnWithCert = `${DATABASE_URL}&sslrootcert=${CA_CERT_PATH}`

process.env.DATABASE_URL_WITH_CERT = dsnWithCert

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    // log: ['query'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
