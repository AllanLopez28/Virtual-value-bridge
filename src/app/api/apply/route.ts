import { NextResponse } from 'next/server';
import { put } from '@vercel/blob';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    // Extract file
    const file = formData.get('resume') as File;
    if (!file) {
      return NextResponse.json({ error: 'Resume file is required' }, { status: 400 });
    }

    // Extract other fields
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phonePrefix = formData.get('phonePrefix') as string;
    const phone = formData.get('phone') as string;
    const availability = formData.get('availability') as string;
    const experience = formData.get('experience') as string;
    const lastSalary = formData.get('lastSalary') as string;
    const salaryExpectation = formData.get('salaryExpectation') as string;
    const englishLevel = formData.get('englishLevel') as string;
    const jobTitle = formData.get('jobTitle') as string;

    // Extract locations (could be multiple if checkbox)
    const locations = formData.getAll('location');

    // Step A: Storage (Vercel Blob)
    if (!process.env.BLOB_READ_WRITE_TOKEN) {
      console.error("Missing BLOB_READ_WRITE_TOKEN");
    }
    const blob = await put(file.name, file, {
      access: 'public',
      token: process.env.BLOB_READ_WRITE_TOKEN,
      addRandomSuffix: true,
    });
    const resumeUrl = blob.url;

    // TODO (Escalabilidad): Insertar datos del candidato y 'resumeUrl' en Supabase (PostgreSQL) aquí.

    // Step C: Email Notification (Resend)
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            background-color: #f8fafc;
            margin: 0;
            padding: 20px;
          }
          .email-wrapper {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid #e2e8f0;
          }
          .header {
            background-color: #0B132B;
            color: #ffffff;
            padding: 32px 24px;
            text-align: center;
          }
          .header h1 {
            margin: 0 0 8px 0;
            font-size: 24px;
          }
          .role-badge {
            display: inline-block;
            background-color: rgba(132, 204, 22, 0.2);
            color: #84cc16;
            padding: 6px 16px;
            border-radius: 999px;
            font-size: 14px;
            font-weight: bold;
            margin: 0;
          }
          .content {
            padding: 32px 24px;
            color: #334155;
          }
          h2 {
            font-size: 18px;
            color: #0B132B;
            border-bottom: 2px solid #f1f5f9;
            padding-bottom: 8px;
            margin-top: 24px;
            margin-bottom: 16px;
          }
          .data-table {
            width: 100%;
            border-collapse: collapse;
          }
          .data-table td {
            padding: 12px 8px;
            border-bottom: 1px solid #f1f5f9;
            font-size: 15px;
          }
          .label {
            font-weight: 600;
            color: #64748b;
            width: 40%;
          }
          .value {
            color: #0f172a;
          }
          .resume-section {
            text-align: center;
            margin-top: 40px;
            margin-bottom: 16px;
          }
          .btn-primary {
            background-color: #84cc16;
            color: #0B132B;
            padding: 14px 32px;
            text-decoration: none;
            border-radius: 999px;
            font-weight: bold;
            display: inline-block;
          }
        </style>
      </head>
      <body>
        <div class="email-wrapper">
          <div class="header">
            <h1>New Application Received</h1>
            <p class="role-badge">${jobTitle || 'Specialist'}</p>
          </div>
          
          <div class="content">
            <h2>Personal Information</h2>
            <table class="data-table">
              <tr>
                <td class="label">Full Name</td>
                <td class="value">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td class="label">Email</td>
                <td class="value"><a href="mailto:${email}" style="color: #0ea5e9;">${email}</a></td>
              </tr>
              <tr>
                <td class="label">Phone</td>
                <td class="value">${phonePrefix} ${phone}</td>
              </tr>
            </table>

            <h2>Work Details</h2>
            <table class="data-table">
              <tr>
                <td class="label">Availability</td>
                <td class="value">${availability}</td>
              </tr>
              <tr>
                <td class="label">Locations</td>
                <td class="value">${locations.join(', ')}</td>
              </tr>
              <tr>
                <td class="label">Experience</td>
                <td class="value">${experience}</td>
              </tr>
            </table>

            <h2>Financial & Language</h2>
            <table class="data-table">
              <tr>
                <td class="label">Current Salary</td>
                <td class="value">${lastSalary}</td>
              </tr>
              <tr>
                <td class="label">Salary Expectation</td>
                <td class="value">${salaryExpectation}</td>
              </tr>
              <tr>
                <td class="label">English Level</td>
                <td class="value">${englishLevel}%</td>
              </tr>
            </table>

            <div class="resume-section">
              <a href="${resumeUrl}" class="btn-primary">View Resume Document</a>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'allan.escalante3@gmail.com', // Cambiar a un arreglo con Tanya cuando el dominio esté verificado
      subject: `New Job Application: ${firstName} ${lastName} - ${jobTitle || 'Specialist'}`,
      html: emailHtml
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing application:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
