import {
    AccountsCard,
    ApiKeysCard,
    SessionsCard,
} from '@daveyplate/better-auth-ui'

export default function page() {
    return (
        <main className="container self-center p-4 md:p-6 gap-8 flex flex-col">
            <SessionsCard />
            <AccountsCard />
            <ApiKeysCard />
        </main>
    )
}
