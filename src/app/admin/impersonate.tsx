'use client'

import { authClient } from '@/lib/auth-client'
import { UserWithRole } from 'better-auth/plugins/admin'
import React, { useEffect } from 'react'

export default function ImpersonateUser() {
    const [users, setUsers] = React.useState<UserWithRole[]>([])

    useEffect(() => {
        async function fetchUsers() {
            const { data: users, error } = await authClient.admin.listUsers({
                query: {},
            })
            if (error) {
                console.error(
                    'Erreur lors de la récupération des utilisateurs:',
                    error
                )
            } else {
                setUsers(users.users)
            }
        }
        fetchUsers()
    }, [])

    const impersonateUser = async (userId: string) => {
        const { data, error } = await authClient.admin.impersonateUser({
            userId,
        })
        if (error) {
            console.error(
                "Erreur lors de l'usurpation de l'utilisateur:",
                error
            )
        } else {
            window.location.href = '/'
        }
    }

    return (
        <div>
            {users && (
                <ul>
                    {users.map((user) => (
                        <li
                            key={user.id}
                            style={{ cursor: 'pointer' }}
                            onClick={() => impersonateUser(user.id)}
                        >
                            {user.email} - {user.role}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
