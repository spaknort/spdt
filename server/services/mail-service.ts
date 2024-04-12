import { create } from 'domain'
import { Transporter, createTransport } from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport';

class MailService {
    transporter: Transporter;

    constructor() {
        this.transporter = createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        } as SMTPTransport.Options)
    }

    async sendActivationMail(email_to: string, link: string) {
        this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to: email_to,
            subject: `Aктивация аккаунта на ${process.env.API_URL}`,
            html: `
                <div>
                    <h1>Для активации перейдите по ссылке</h1>
                    <a href="${link}">${link}</a>
                </div>
            `
        })
    }
}

export const mailService = new MailService()