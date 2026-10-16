import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      firstName,
      company,
      email,
      countryCode,
      phone,
      supportType,
      processDetails,
      volume,
    } = body;

    const clientName = name || firstName;

    // Basic validation
    if (!clientName || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const toEmail = process.env.INTRO_CALL_TO_EMAIL || 'tescalante@vvbridge.net';
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'VVBridge Leads <onboarding@resend.dev>';
    const clientPhone =
      countryCode && phone ? `${countryCode} ${phone}`.trim() : (phone || 'Not provided');

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `New Lead - Estimating Support: ${clientName}`,
      html: `
        <h2>New Lead - Estimating Support</h2>
        <p><strong>Name:</strong> ${clientName}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${clientPhone}</p>
        <p><strong>Support Type:</strong> ${supportType || 'Estimating Support'}</p>
        <p><strong>Process Details:</strong> ${processDetails || volume || 'Not specified'}</p>
      `,
    });

    if (error) {
      console.error('Error from Resend:', error);
      return NextResponse.json({ error: error.message || 'Error sending email' }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error in /api/intro-call:', error);
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
}
