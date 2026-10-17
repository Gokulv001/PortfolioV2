// Local dev API server — runs on port 3001 so Vite can proxy /api/* to it
// Run with: npm run dev:api  (in a separate terminal)
// Then run: npm run dev       (in the main terminal)

import express from 'express';
import nodemailer from 'nodemailer';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load .env manually for the dev server
try {
  const envFile = readFileSync(resolve(__dirname, '../.env'), 'utf8');
  envFile.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const [key, ...vals] = trimmed.split('=');
      if (key && vals.length) process.env[key.trim()] = vals.join('=').trim();
    }
  });
} catch (_) { /* .env not found, use system env */ }

const app = express();
app.use(express.json());

// Replicate the serverless function handler locally
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.SMTP_USER,
      subject: `[Portfolio Contact] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 24px; border-radius: 12px;">
          <h2 style="color: #2563eb; margin-bottom: 4px;">📩 New Portfolio Message</h2>
          <p style="color: #666; font-size: 13px; margin-top: 0;">Received from your portfolio contact form</p>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: bold; color: #374151; width: 120px;">Name</td><td style="padding: 8px 0; color: #1f2937;">${name}</td></tr>
            <tr style="background:#f1f5f9;"><td style="padding: 8px 0; font-weight: bold; color: #374151;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone</td><td style="padding: 8px 0; color: #1f2937;">${phone || 'Not provided'}</td></tr>
            <tr style="background:#f1f5f9;"><td style="padding: 8px 0; font-weight: bold; color: #374151;">Subject</td><td style="padding: 8px 0; color: #1f2937;">${subject}</td></tr>
          </table>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
          <h3 style="color: #374151; margin-bottom: 8px;">Message</h3>
          <div style="background: #fff; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0; color: #1f2937; line-height: 1.6; white-space: pre-wrap;">${message}</div>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
          <p style="font-size: 12px; color: #9ca3af;">Sent from portfolio contact form — Reply directly to respond to ${name}.</p>
        </div>
      `,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nSubject: ${subject}\n\n${message}`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('SMTP Error:', error.message);
    return res.status(500).json({ error: 'Failed to send email' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`✅ Dev API server running → http://localhost:${PORT}`);
  console.log(`   SMTP_USER: ${process.env.SMTP_USER || '(not set)'}`);
  console.log(`   SMTP_HOST: ${process.env.SMTP_HOST || '(not set)'}`);
});
