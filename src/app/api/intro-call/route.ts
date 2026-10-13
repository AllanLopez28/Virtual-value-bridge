import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, email, phone, volume } = body;

    // Validación básica
    if (!firstName || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // En modo de prueba con onboarding@resend.dev, Resend sólo permite enviar al correo registrado (tescalante@vvbridge.net).
    // Al verificar el dominio en resend.com/domains, se puede configurar INTRO_CALL_TO_EMAIL=jgoldstein@vvbridge.net
    const toEmail = process.env.INTRO_CALL_TO_EMAIL || 'tescalante@vvbridge.net';
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'VVBridge Leads <onboarding@resend.dev>';

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `New Estimating Support Lead: ${firstName}`,
      html: `
        <h2>New Intro Call Request - Estimating Support</h2>
        <p><strong>Name:</strong> ${firstName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Monthly Bid Volume:</strong> ${volume || 'Not specified'}</p>
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
