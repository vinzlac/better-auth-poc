import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import type { ReactNode } from 'react'

import '@/styles/globals.css'

import { Header } from '@/components/header'
import { Providers } from './providers'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Better Auth Next.js Starter',
    description:
        'Better Auth Next.js Starter with Postgres, Drizzle, shadcn/ui and Tanstack Query',
}

export const viewport: Viewport = {
    initialScale: 1,
    viewportFit: 'cover',
    width: 'device-width',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable}  w-full flex min-h-screen h-full flex-col antialiased `}
            >
                <Providers>
                    <Header />
                    <main className="w-full mx-auto max-w-7xl mt-8 h-full">
                        {children}
                    </main>
                </Providers>
            </body>
        </html>
    )
}
