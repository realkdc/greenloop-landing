import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendLeadNotification(leadData: {
  name: string;
  email: string;
  timestamp: string;
}) {
  try {
    // Send notification email to you
    await resend.emails.send({
      from: 'GreenLoop <notifications@greenloop.dev>', // Will set up domain in Resend
      to: process.env.NOTIFICATION_EMAIL || 'your-email@example.com',
      subject: `🎯 New Lead: ${leadData.name} - GreenLoop`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #059669;">New Lead Submitted!</h2>
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${leadData.name}</p>
            <p><strong>Email:</strong> ${leadData.email}</p>
            <p><strong>Submitted:</strong> ${new Date(leadData.timestamp).toLocaleString()}</p>
          </div>
          <p style="color: #6b7280; font-size: 14px;">
            Reply to this lead's email: <a href="mailto:${leadData.email}">${leadData.email}</a>
          </p>
        </div>
      `,
    });

    // Send confirmation email to the lead
    await resend.emails.send({
      from: 'GreenLoop <hello@greenloop.dev>',
      to: leadData.email,
      subject: 'Your Agreement is on the way - GreenLoop',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #059669;">Hey ${leadData.name},</h2>
          <p>Thanks for requesting the agreement! We received your submission and will send you the details shortly.</p>
          <p>If you have any questions in the meantime, just reply to this email.</p>
          <p style="margin-top: 40px; color: #6b7280; font-size: 14px;">
            Best,<br>
            The GreenLoop Team
          </p>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
}

