import Link from 'next/link'
import { Separator } from './ui/separator'
import { Building, Building2, Home, Key, Lock, User } from 'lucide-react'

const linksData = [
    {
        href: '/',
        name: 'Home',
        icon: Home,
    },
    {
        href: '/protected',
        name: 'Protected',
        icon: Lock,
    },
    {
        href: '/admin',
        name: 'Admin',
        icon: Lock,
    },
    {
        href: '/organisation',
        name: 'Organisation',
        icon: Building,
    },
] as { href: string; name: string; icon: any }[]

const listSettings = [
    {
        href: '/account/settings',
        name: 'Account',
        icon: User,
    },
    {
        href: '/account/advanced',
        name: 'Advanced settings',
        icon: Key,
    },
    {
        href: '/account/organisation',
        name: 'Organisation settings',
        icon: Building2,
    },
]

export default function ListLink() {
    return (
        <div className="flex flex-col">
            <h2 className=" text-2xl font-semibold">Liens</h2>
            <div className="flex flex-col w-60">
                {linksData.map((link) => (
                    <Link
                        href={link.href}
                        key={link.href}
                        className="flex flex-col w-full gap-1 pt-3 hover:bg-gray-50 rounded-sm text-xl"
                    >
                        <div className=" flex justify-between w-full">
                            {link.name}
                        </div>
                        <Separator />
                    </Link>
                ))}
            </div>
            <h2 className=" text-2xl font-semibold mt-12">Settings</h2>
            <div className="flex flex-col w-60">
                {listSettings.map((link) => (
                    <Link
                        href={link.href}
                        key={link.href}
                        className="flex flex-col w-full gap-1 pt-3 hover:bg-gray-50 rounded-sm text-xl"
                    >
                        <div className=" flex justify-between w-full">
                            {link.name}
                        </div>
                        <Separator />
                    </Link>
                ))}
            </div>
        </div>
    )
}
