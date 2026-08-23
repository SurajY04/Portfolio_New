import axios from "axios";

export async function sendEmail(email, name, message) {
    try {
        const response = await axios.post(
            "https://api.brevo.com/v3/smtp/email",
            {
                sender: {
                    name: "Portfolio Contact Form",
                    email: process.env.My_Email
                },

                to: [
                    {
                        email: process.env.My_Email,
                        name: "Portfolio Owner"
                    }
                ],

                subject: `New Contact Message from ${name}`,

                htmlContent: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f4f5f7; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f4f5f7; padding: 40px 10px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border: 1px solid #e5e7eb;">
          
          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%); padding: 32px 40px; text-align: left;">
              <span style="font-size: 12px; font-weight: 700; color: #c7d2fe; text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-bottom: 6px;">Portfolio Notification</span>
              <h1 style="color: #ffffff; font-size: 22px; margin: 0; font-weight: 600;">New Contact Form Message</h1>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style="padding: 40px;">
              
              <!-- Sender Details Box -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f8fafc; border-radius: 8px; border: 1px solid #f1f5f9; padding: 20px; margin-bottom: 28px;">
                <tr>
                  <td style="padding-bottom: 12px;">
                    <span style="font-size: 11px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Sender Name</span>
                    <p style="margin: 4px 0 0 0; font-size: 15px; font-weight: 600; color: #0f172a;">${name}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span style="font-size: 11px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Email Address</span>
                    <p style="margin: 4px 0 0 0; font-size: 15px; font-weight: 500; color: #2563eb;">
                      <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Message Content -->
              <div>
                <span style="font-size: 11px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 8px;">Message</span>
                <div style="font-size: 15px; line-height: 1.6; color: #334155; background-color: #ffffff; padding: 20px; border-left: 4px solid #4f46e5; border-radius: 0 8px 8px 0; background-color: #fafafa; white-space: pre-wrap;">${message}</div>
              </div>

              <!-- Quick Action Button -->
              <div style="margin-top: 32px; text-align: left;">
                <a href="mailto:${email}" style="display: inline-block; background-color: #4f46e5; color: #ffffff; text-decoration: none; font-size: 14px; font-weight: 600; padding: 12px 24px; border-radius: 6px;">Reply directly to ${name}</a>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 20px 40px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; font-size: 12px; color: #94a3b8;">Sent automatically from your portfolio website contact form.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`
            },
            {
                headers: {
                    "api-key": process.env.BREVO_KEY,
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            }
        );

        return response.data;

    } catch (error) {

        console.log("STATUS:", error.response?.status);
        console.log("BREVO ERROR:", error.response?.data);
        console.log("SENT DATA:", error.config?.data);

        throw error;
    }
}