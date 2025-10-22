import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'

import { db } from '@/database/db'
import * as schema from '@/database/schema'
import { admin, apiKey, multiSession, organization } from 'better-auth/plugins'
import { sendOrganizationInvitation } from './email'

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: 'pg',
        usePlural: true,
        schema,
    }),
    appName: 'Better Auth - Veille techno',
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: false,
    },
    plugins: [
        multiSession(),
        admin(),
        apiKey(),
        organization({
            async sendInvitationEmail(data) {
                sendOrganizationInvitation({ data })
            },
        }),
    ],
})
