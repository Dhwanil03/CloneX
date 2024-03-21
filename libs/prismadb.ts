import { PrismaClient } from "@prisma/client";

declare global{
    var prisma: PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV != 'production') globalThis.prisma = client;

export default client

/*This code is to prevent Nextjs to hot reload. 
If it hot reloads it will create multiple instances. */