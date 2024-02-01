import {neon, neonConfig} from "@neondatabase/serverless"
import {drizzle} from 'drizzle-orm/neon-html'

neonConfig.fetchConnectionCache = true

if(!process.env.DATABASE_URL) {
    throw new Error("database url not found")
}

const sql = neos(process.env.DATABASE_URL)

export const db = drizzle {aql}