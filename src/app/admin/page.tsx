import { headers } from 'next/headers'
import ImpersonateUser from './impersonate'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function AdminPage() {
    const session = await auth.api.getSession({
        headers: await headers(),
    })

    if (!session) {
        return redirect('/')
    }
    const isAdmin = session.user.role?.includes('admin')

    if (!isAdmin) {
        return redirect('/')
    }

    return (
        <div>
            Page administrateur
            {session && isAdmin && <ImpersonateUser />}
        </div>
    )
}
