import { auth } from '@/lib/auth'
import { NextResponse } from 'next/server'

export const GET = async (request: Request) => {
    const apiKey = request.headers.get('x-api-key')

    if (!apiKey) {
        return new NextResponse('Missing api key', { status: 401 })
    }

    const data = await auth.api.verifyApiKey({
        body: { key: apiKey },
    })

    if (!data.valid || !data.key) {
        return new NextResponse('Invalid api key', { status: 401 })
    }

    if (data.key?.requestCount > 5) {
        return new NextResponse('API key request limit exceeded', {
            status: 429,
        })
    }

    return new NextResponse(JSON.stringify(data))
}
