import type {Config} from 'drizzle-kit'
import * as dotenv from 'dotenv'
dotenv.comfig([path: ".env"])

expor default {
    drive: 'pg',
    schema: './src/lib/db/schema.ts'
    dbCredentials:{
        connectionString: process.env.DATABASE_URL!,
    }
} satisfies config;

// npx drizzle-kit push;pg