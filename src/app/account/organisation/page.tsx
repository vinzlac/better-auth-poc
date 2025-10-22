import {
    OrganizationMembersCard,
    OrganizationSettingsCards,
    OrganizationSwitcher,
} from '@daveyplate/better-auth-ui'

export default async function AccountPage() {
    return (
        <main className="container self-center p-4 md:p-6 gap-8 flex flex-col">
            <OrganizationSwitcher />
            <OrganizationSettingsCards />
            <OrganizationMembersCard />
        </main>
    )
}
