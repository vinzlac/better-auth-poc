import { User } from 'better-auth'
import { Invitation, Member, Organization } from 'better-auth/plugins'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    host: 'localhost',
    secure: false,
    port: 2525,
})

export const sendEmail = async ({
    to,
    subject,
    text,
}: {
    to: string
    subject: string
    text: string
}) => {
    const res = await transporter.sendMail({
        from: 'test@example.com',
        to: to,
        subject: subject,
        html: text,
    })
    console.log('res', res)
}

export const sendOrganizationInvitation = async ({
    data,
}: {
    data: {
        id: string
        role: string
        email: string
        organization: Organization
        invitation: Invitation
        inviter: Member & {
            user: User
        }
    }
}) => {
    const inviteLink = `http://localhost:3000/auth/accept-invitation?invitationId=${data.id}`
    const subject = `${data.inviter.user.name} invited you to ${data.organization.name}`
    const text = `<a href=${inviteLink} >
    ${inviteLink}
    </a>
  `
    await sendEmail({
        to: data.email,
        subject,
        text,
    })
}

export const sendVerificationEmailServer = async ({
    user,
    url,
    token,
}: {
    user: {
        id: string
        createdAt: Date
        updatedAt: Date
        email: string
        emailVerified: boolean
        name: string
        image?: string | null | undefined
    }
    url: string
    token: string
}) => {
    await sendEmail({
        to: user.email,
        subject: 'Verify your email address',
        text: `Click the link to verify your email: <a href=${url}>${url}</a>`,
    })
}
