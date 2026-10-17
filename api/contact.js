import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, subject, message } = req.body;

  // Basic server-side validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Create Gmail SMTP transporter using .env credentials
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,       // smtp.gmail.com
    port: Number(process.env.SMTP_PORT), // 587
    secure: false,                     // false for port 587 (STARTTLS)
    auth: {
      user: process.env.SMTP_USER,     // your Gmail
      pass: process.env.SMTP_PASS,     // Gmail App Password
    },
  });

  try {
    // Send email to Gokulraj's inbox
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.SMTP_USER,       // delivers to gokulv62637@gmail.com
      subject: `[Portfolio Contact] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 24px; border-radius: 12px;">
          <h2 style="color: #2563eb; margin-bottom: 4px;">📩 New Portfolio Message</h2>
          <p style="color: #666; font-size: 13px; margin-top: 0;">Received from your portfolio contact form</p>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 120px;">Name</td>
              <td style="padding: 8px 0; color: #1f2937;">${name}</td>
            </tr>
            <tr style="background:#f1f5f9;">
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone</td>
              <td style="padding: 8px 0; color: #1f2937;">${phone || 'Not provided'}</td>
            </tr>
            <tr style="background:#f1f5f9;">
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Subject</td>
              <td style="padding: 8px 0; color: #1f2937;">${subject}</td>
            </tr>
          </table>

          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />

          <h3 style="color: #374151; margin-bottom: 8px;">Message</h3>
          <div style="background: #fff; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0; color: #1f2937; line-height: 1.6; white-space: pre-wrap;">${message}</div>

          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
          <p style="font-size: 12px; color: #9ca3af;">This email was sent from your portfolio at gokulrajv.dev — Reply directly to respond to ${name}.</p>
        </div>
      `,
      text: `New Portfolio Message\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nSubject: ${subject}\n\nMessage:\n${message}`,
    });

    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('SMTP Error:', error);
    return res.status(500).json({ error: 'Failed to send email. Please try again.' });
  }
}
