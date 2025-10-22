import { UserButton } from '@daveyplate/better-auth-ui'
import { Home } from 'lucide-react'
import Link from 'next/link'

export function Header() {
    return (
        <header className="sticky top-0 z-50 flex justify-between border-b bg-background/60 px-safe-or-4 backdrop-blur md:h-16 md:px-safe-or-6">
            <Link href="/" className="flex items-center gap-4 px-4 h-full">
                <Home /> Home
            </Link>

            <div className="flex items-center justify-end w-full gap-2">
                <UserButton size="icon" />
            </div>
        </header>
    )
}
