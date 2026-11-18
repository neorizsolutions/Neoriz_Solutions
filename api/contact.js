export default async function handler(req, res) {
  // 1. Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  // 2. Parse payload
  const { 
    name, 
    email, 
    company, 
    projectType, 
    budget, 
    message, 
    bot_field,
    location,
    phone,
    githubUrl,
    portfolioUrl,
    screeningAnswers,
    resumeAttachment
  } = req.body;

  // 3. Spam Protection: Honeypot check
  if (bot_field) {
    // If bot_field is filled, silently "succeed" to deceive bots
    return res.status(200).json({ success: true, message: 'Inquiry received.' });
  }

  // 4. Basic Validation
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Missing required fields: Name, Email, and Project Details are required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: 'Invalid email format.' });
  }

  // 5. Length Validation (Abuse protection)
  if (name.length > 150 || email.length > 150 || (company && company.length > 150)) {
    return res.status(400).json({ success: false, message: 'Input length exceeded limits for standard fields.' });
  }
  
  if (message.length > 3000) {
    return res.status(400).json({ success: false, message: 'Project details exceed maximum length of 3000 characters.' });
  }

  // 6. Check Environment Setup
  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL;
  const fromEmail = process.env.EMAIL_FROM || 'Neoriz Solutions <onboarding@resend.dev>';

  if (!resendApiKey) {
    console.error('CRITICAL ERROR: RESEND_API_KEY is not configured in the environment.');
    return res.status(500).json({ 
      success: false, 
      message: 'Server configuration error. Please contact us directly via email.' 
    });
  }

  if (!toEmail) {
    console.error('CRITICAL ERROR: CONTACT_EMAIL is not configured in the environment.');
    return res.status(500).json({ 
      success: false, 
      message: 'Server configuration error. Please contact us directly via email.' 
    });
  }

  // 7. Determine Application Type & Destination
  const isJobApp = projectType && (projectType.toLowerCase().includes("job application") || projectType.toLowerCase().includes("career") || projectType.toLowerCase().includes("intern"));
  const destinationEmail = isJobApp 
    ? (process.env.CAREERS_EMAIL || toEmail || 'hradmin@neorizsolutions.com') 
    : toEmail;
  const subject = isJobApp 
    ? `Job Application: ${projectType} — ${name}`
    : `New Project Inquiry — ${projectType || 'General'} — ${name}`;

  // Attachment Handling
  const attachments = [];
  if (isJobApp) {
    if (!location || !location.trim()) {
      return res.status(400).json({ success: false, message: 'Current location is required.' });
    }
    if (!githubUrl || !githubUrl.trim()) {
      return res.status(400).json({ success: false, message: 'GitHub profile link is required.' });
    }
    if (!resumeAttachment || !resumeAttachment.content || !resumeAttachment.filename) {
      return res.status(400).json({ success: false, message: 'Mandatory: Please attach your résumé file (PDF or DOC/DOCX).' });
    }

    let base64Content = resumeAttachment.content;
    if (base64Content.includes(',')) {
      base64Content = base64Content.split(',')[1];
    }

    // Size limit check: approx bytes
    const approxBytes = Math.ceil((base64Content.length * 3) / 4);
    if (approxBytes > 4.5 * 1024 * 1024) {
      return res.status(400).json({ success: false, message: 'Résumé file exceeds the 4.5MB limit. Please upload a smaller file.' });
    }

    attachments.push({
      filename: resumeAttachment.filename,
      content: base64Content
    });
  }
  
  const textBody = isJobApp ? `
Neoriz Solutions — New Job Application

--- APPLICANT DETAILS ---
Full Name: ${name}
Email Address: ${email}
Current Location: ${location || 'Not provided'}
Phone / WhatsApp: ${phone || 'Not provided'}
GitHub Profile: ${githubUrl || 'Not provided'}
Portfolio / Projects: ${portfolioUrl || company || 'Not provided'}
Position: ${projectType}
Résumé File Attached: ${resumeAttachment?.filename || 'Attached'}

--- CANDIDATE SCREENING QUESTIONS ---
1. Available for full-time remote internship? ${screeningAnswers?.availableFullTime || 'N/A'}
2. Hands-on experience with React & JavaScript? ${screeningAnswers?.reactExp || 'N/A'}
3. Familiarity with backend (Node/Python) & REST APIs? ${screeningAnswers?.backendExp || 'N/A'}
4. Comfortable collaborating via Git & Pull Requests? ${screeningAnswers?.gitComfort || 'N/A'}

--- TECHNICAL BACKGROUND & PROBLEM SOLVED ---
${message}

Submitted At: ${new Date().toISOString()}
  `.trim() : `
Neoriz Solutions — New Project Inquiry

Name:
${name}

Email:
${email}

Company / Organization:
${company || 'Not provided'}

Project Type:
${projectType || 'Not specified'}

Estimated Budget:
${budget || 'Not specified'}

Project Details:
${message}

Submitted At:
${new Date().toISOString()}
  `.trim();

  const htmlBody = isJobApp ? `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1E293B; max-width: 640px; margin: 0 auto; line-height: 1.6; border: 1px solid #E2E8F0; border-radius: 12px; overflow: hidden; background: #FFFFFF;">
      <div style="background: #0A192F; padding: 24px 28px; color: #FFFFFF;">
        <span style="font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #60A5FA; font-weight: 700; display: block; margin-bottom: 4px;">Neoriz Solutions Careers</span>
        <h2 style="margin: 0; font-size: 20px; font-weight: 700; color: #FFFFFF;">New Application: ${projectType}</h2>
      </div>

      <div style="padding: 24px 28px;">
        <h3 style="font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; color: #64748B; margin: 0 0 12px 0; border-bottom: 1px solid #E2E8F0; padding-bottom: 6px; font-weight: 700;">
          Candidate Profile
        </h3>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 22px; font-size: 14px;">
          <tr>
            <td style="padding: 6px 0; color: #64748B; width: 140px;"><strong>Full Name:</strong></td>
            <td style="padding: 6px 0; color: #0A192F; font-weight: 600;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #64748B;"><strong>Email:</strong></td>
            <td style="padding: 6px 0;"><a href="mailto:${email}" style="color: #2563EB; text-decoration: none; font-weight: 500;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #64748B;"><strong>Location:</strong></td>
            <td style="padding: 6px 0; color: #0A192F; font-weight: 500;">${location || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #64748B;"><strong>Phone:</strong></td>
            <td style="padding: 6px 0; color: #0A192F;">${phone || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #64748B;"><strong>GitHub:</strong></td>
            <td style="padding: 6px 0;">${githubUrl ? `<a href="${githubUrl}" target="_blank" style="color: #2563EB; font-weight: 600; text-decoration: underline;">${githubUrl}</a>` : 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #64748B;"><strong>Portfolio / Live:</strong></td>
            <td style="padding: 6px 0;">${(portfolioUrl || company) ? `<a href="${portfolioUrl || company}" target="_blank" style="color: #2563EB; text-decoration: underline;">${portfolioUrl || company}</a>` : 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #64748B;"><strong>Attached Résumé:</strong></td>
            <td style="padding: 6px 0; color: #16A34A; font-weight: 700;">📎 ${resumeAttachment?.filename || 'Résumé file attached'}</td>
          </tr>
        </table>

        <h3 style="font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; color: #64748B; margin: 20px 0 12px 0; border-bottom: 1px solid #E2E8F0; padding-bottom: 6px; font-weight: 700;">
          Screening Questions
        </h3>
        <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 14px 18px; margin-bottom: 22px; font-size: 13.5px;">
          <p style="margin: 4px 0;">• <strong>Available for full-time remote internship?</strong> <span style="color: #0A192F; font-weight: 700;">${screeningAnswers?.availableFullTime || 'N/A'}</span></p>
          <p style="margin: 4px 0;">• <strong>Hands-on experience with React & JavaScript?</strong> <span style="color: #0A192F; font-weight: 700;">${screeningAnswers?.reactExp || 'N/A'}</span></p>
          <p style="margin: 4px 0;">• <strong>Familiar with Backend & REST APIs?</strong> <span style="color: #0A192F; font-weight: 700;">${screeningAnswers?.backendExp || 'N/A'}</span></p>
          <p style="margin: 4px 0;">• <strong>Comfortable collaborating via Git & PRs?</strong> <span style="color: #0A192F; font-weight: 700;">${screeningAnswers?.gitComfort || 'N/A'}</span></p>
        </div>

        <h3 style="font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; color: #64748B; margin: 20px 0 12px 0; border-bottom: 1px solid #E2E8F0; padding-bottom: 6px; font-weight: 700;">
          Technical Background & Problem Solved
        </h3>
        <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 8px; padding: 16px; font-size: 14px; white-space: pre-wrap; line-height: 1.6; color: #1E293B;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>

        <p style="font-size: 12px; color: #94A3B8; margin-top: 24px; border-top: 1px solid #E2E8F0; padding-top: 12px; margin-bottom: 0;">
          Submitted via Neoriz Solutions Careers portal at ${new Date().toISOString()}
        </p>
      </div>
    </div>
  ` : `
    <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; line-height: 1.6;">
      <h2 style="color: #2858F0; border-bottom: 2px solid #EAEAEA; padding-bottom: 12px;">Neoriz Solutions &mdash; New Inquiry</h2>
      
      <p><strong>Name:</strong><br/>${name}</p>
      <p><strong>Email:</strong><br/><a href="mailto:${email}">${email}</a></p>
      <p><strong>Company / Organization:</strong><br/>${company || 'Not provided'}</p>
      <p><strong>Project Type:</strong><br/>${projectType || 'Not specified'}</p>
      <p><strong>Estimated Budget:</strong><br/>${budget || 'Not specified'}</p>
      
      <p><strong>Project Details:</strong></p>
      <div style="background: #F9F9F9; padding: 16px; border-radius: 8px; border: 1px solid #EAEAEA; white-space: pre-wrap;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
      
      <p style="font-size: 0.8em; color: #888; margin-top: 32px; border-top: 1px solid #EAEAEA; padding-top: 12px;">
        Submitted At: ${new Date().toISOString()}
      </p>
    </div>
  `;

  // 8. Dispatch Email via Resend API
  try {
    const emailPayload = {
      from: fromEmail,
      to: [destinationEmail],
      reply_to: email, // Direct replies go to candidate
      subject: subject,
      text: textBody,
      html: htmlBody,
      ...(attachments.length > 0 ? { attachments } : {})
    };

    let resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`
      },
      body: JSON.stringify(emailPayload)
    });

    let data = await resendResponse.json();

    // If sending to a custom careers address failed (e.g. testing mode domain restriction on Resend),
    // automatically fallback to the verified toEmail (CONTACT_EMAIL) so applications are never dropped
    if (!resendResponse.ok && destinationEmail !== toEmail && toEmail) {
      console.warn(`Resend dispatch to ${destinationEmail} failed. Retrying fallback to verified address (${toEmail})...`, data);
      resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${resendApiKey}`
        },
        body: JSON.stringify({
          ...emailPayload,
          to: [toEmail]
        })
      });
      data = await resendResponse.json();
    }

    if (!resendResponse.ok) {
      console.error('Resend API Error: Failed to dispatch email.', {
        status: resendResponse.status,
        statusText: resendResponse.statusText,
        error: data
      });
      const providerMsg = data?.message || data?.error?.message || (typeof data === 'string' ? data : 'Failed to dispatch email via provider. Please check your Resend domain/API key configuration.');
      return res.status(resendResponse.status || 500).json({ 
        success: false, 
        message: providerMsg
      });
    }

    return res.status(200).json({ success: true, message: 'Inquiry received successfully.' });

  } catch (error) {
    console.error('Network or Execution Error in contact API:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'An unexpected error occurred while processing your request.' 
    });
  }
}
