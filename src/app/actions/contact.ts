'use server';

import { Resend } from 'resend';
import { EnquiryFormData, EnquiryActionResult } from '@/lib/types';

export async function submitEnquiryAction(
  prevState: EnquiryActionResult | null,
  formData: FormData
): Promise<EnquiryActionResult> {
  const fullName = (formData.get('fullName') as string || '').trim();
  const email = (formData.get('email') as string || '').trim();
  const phone = (formData.get('phone') as string || '').trim();
  const service = (formData.get('service') as string || '').trim();
  const message = (formData.get('message') as string || '').trim();
  const honeypot = (formData.get('website_url') as string || '').trim();

  // Spam protection check (Honeypot)
  if (honeypot.length > 0) {
    return {
      success: true,
      message: 'Thank you for contacting ALP CareConnect. Your enquiry has been received successfully.',
    };
  }

  // Server-side validation
  const errors: Record<string, string> = {};

  if (!fullName || fullName.length < 2) {
    errors.fullName = 'Please enter your full name.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.email = 'Please provide a valid email address.';
  }

  const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]{6,15}$/;
  if (!phone || !phoneRegex.test(phone.replace(/\s+/g, ''))) {
    errors.phone = 'Please enter a valid contact phone number.';
  }

  if (!service) {
    errors.service = 'Please select a service requirement.';
  }

  if (!message || message.length < 10) {
    errors.message = 'Please describe your requirement (at least 10 characters).';
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: 'Please correct the highlighted errors before submitting.',
      errors,
      submittedData: { fullName, email, phone, service, message },
    };
  }

  const recipientEmail = process.env.ALP_CONTACT_EMAIL || 'alpcareconnect@gmail.com';
  const apiKey = process.env.RESEND_API_KEY;

  try {
    if (apiKey && apiKey !== 're_placeholder_key_add_your_real_key_here') {
      const resend = new Resend(apiKey);

      const htmlBody = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #F7F7F5; padding: 24px; border-radius: 12px; border: 1px solid #D9D2C7;">
          <div style="text-align: center; padding-bottom: 20px; border-bottom: 2px solid #6FAFA6;">
            <h2 style="color: #16202A; margin: 0; font-size: 24px;">ALP CareConnect</h2>
            <p style="color: #475569; margin: 4px 0 0 0; font-size: 14px; font-style: italic;">Your Home. Your Family. Our Care.</p>
          </div>
          
          <h3 style="color: #16202A; margin-top: 24px;">New Customer Service Enquiry</h3>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #E2E8F0; font-weight: bold; color: #475569; width: 140px;">Customer Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #E2E8F0; color: #16202A;">${escapeHtml(fullName)}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #E2E8F0; font-weight: bold; color: #475569;">Email Address:</td>
              <td style="padding: 10px; border-bottom: 1px solid #E2E8F0; color: #16202A;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #E2E8F0; font-weight: bold; color: #475569;">Phone Number:</td>
              <td style="padding: 10px; border-bottom: 1px solid #E2E8F0; color: #16202A;"><a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #E2E8F0; font-weight: bold; color: #475569;">Requested Service:</td>
              <td style="padding: 10px; border-bottom: 1px solid #E2E8F0; color: #6FAFA6; font-weight: bold;">${escapeHtml(service)}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #475569; vertical-align: top;">Message Details:</td>
              <td style="padding: 10px; color: #16202A; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</td>
            </tr>
          </table>

          <div style="margin-top: 28px; padding-top: 16px; border-top: 1px solid #E2E8F0; text-align: center; font-size: 12px; color: #64748B;">
            Submitted on ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })} IST • Sent to ${recipientEmail}
          </div>
        </div>
      `;

      await resend.emails.send({
        from: 'ALP CareConnect <onboarding@resend.dev>', // Default Resend test sender before domain verification
        to: recipientEmail,
        subject: `New ALP CareConnect Enquiry — ${service}`,
        html: htmlBody,
        replyTo: email,
      });
    } else {
      console.log(`[ALP CareConnect Enquiry Received]`);
      console.log(`To: ${recipientEmail}`);
      console.log(`From: ${fullName} (${email}, ${phone})`);
      console.log(`Service: ${service}`);
      console.log(`Message: ${message}`);
    }

    return {
      success: true,
      message: 'Thank you for contacting ALP CareConnect. Your enquiry has been received successfully. Our team will get back to you as soon as possible.',
    };
  } catch (error: unknown) {
    console.error('Failed to process enquiry email:', error);
    return {
      success: false,
      message: "We couldn't send your enquiry right now. Please try again in a moment or contact us directly via email at alpcareconnect@gmail.com.",
      submittedData: { fullName, email, phone, service, message },
    };
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
