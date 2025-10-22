import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function AdminPage() {
    const session = await auth.api.getSession({
        headers: await headers(),
    })

    const organizationId = session?.session.activeOrganizationId || null

    if (!organizationId) {
        return redirect('/')
    }

    const listUser = await auth.api.listUsers({
        query: {},
        headers: await headers(),
    })

    return (
        <div>
            {!session
                ? 'Non connecté'
                : `Page organisation Orgasiation id': ${organizationId}`}
            {listUser.users.map((user) => (
                <div key={user.id}>
                    {user.email} - {user.id}
                </div>
            ))}
        </div>
    )
}
