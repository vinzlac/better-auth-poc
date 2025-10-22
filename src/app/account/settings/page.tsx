import {
    ChangeEmailCard,
    ChangePasswordCard,
    DeleteAccountCard,
} from '@daveyplate/better-auth-ui'

export default async function AccountPage() {
    return (
        <main className="gap-8 flex flex-col w-full">
            <ChangeEmailCard />
            <ChangePasswordCard />
            <DeleteAccountCard />
        </main>
    )
}
