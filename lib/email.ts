import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: process.env.ZEPTOMAIL_HOST,
  port: Number(process.env.ZEPTOMAIL_PORT ?? 587),
  auth: {
    user: process.env.ZEPTOMAIL_USER,
    pass: process.env.ZEPTOMAIL_PASS,
  },
});

type RegistrationEmailData = {
  email: string;
  firstName: string;
  lastName: string;
  guestCategory: string;
  organisation: string;
};

export async function sendRegistrationEmail(data: RegistrationEmailData) {
  const { email, firstName, lastName, guestCategory, organisation } = data;

  return transport.sendMail({
    from: process.env.EMAIL_FROM ?? '"SNITIS" <noreply@scancode.ng>',
    to: email,
    subject: "Registration Confirmed",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
        <h2 style="color: #0a3d62;">Registration Confirmed</h2>
        <p>Dear ${firstName} ${lastName},</p>
        <p>Thank you for registering. We have successfully received your details:</p>
        <table style="border-collapse: collapse; margin: 16px 0;">
          <tr>
            <td style="padding: 6px 12px; font-weight: bold;">Category</td>
            <td style="padding: 6px 12px;">${guestCategory}</td>
          </tr>
          <tr>
            <td style="padding: 6px 12px; font-weight: bold;">Organisation</td>
            <td style="padding: 6px 12px;">${organisation}</td>
          </tr>
        </table>
        <p>We look forward to seeing you at the event.</p>
        <p style="margin-top: 24px; color: #555;">Best regards,<br/>The SNITIS Team</p>
      </div>
    `,
  });
}
