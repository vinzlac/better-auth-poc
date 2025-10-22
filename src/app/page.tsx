import ListLink from '@/components/list-link'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'

export default async function Home() {
    const session = await auth.api.getSession({
        headers: await headers(),
    })

    return (
        <div className="grid grow grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
            {session && session.user ? (
                <span>Connecté en tant que : {session.user.email}</span>
            ) : (
                <span>Non connecté</span>
            )}

            <ListLink />
        </div>
    )
}
