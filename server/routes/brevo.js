console.log("📦 brevo.js module loaded successfully");
import Brevo from "@getbrevo/brevo";
import dotenv from "dotenv";

// Load .env only in development
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
  console.log("⚙️ Loaded .env for development environment");
}

// Debug: Check if API key is loaded
console.log("🔑 API Key Status:", process.env.BREVO_API_KEY ? "✅ Loaded" : "❌ Missing");
console.log("🔑 API Key Preview:", process.env.BREVO_API_KEY?.substring(0, 15) + "...");

// Initialize Brevo client
const brevoClient = new Brevo.TransactionalEmailsApi();
brevoClient.authentications["apiKey"].apiKey = process.env.BREVO_API_KEY;

export async function sendVerificationEmail(toEmail, code) {
  console.log("🟦 sendVerificationEmail() called");
  console.log("🟦 Sending email to:", toEmail);
  console.log("🟦 Verification code:", code);
  
  const sendSmtpEmail = new Brevo.SendSmtpEmail();
  sendSmtpEmail.subject = `Your verification code is ${code}`;
  sendSmtpEmail.htmlContent = `
    <h2>Email Verification</h2>
    <p>Your confirmation code is:</p>
    <h1 style="color:blue;">${code}</h1>
  `;
  sendSmtpEmail.sender = { email: "vince.salenga@gmail.com", name: "citizencharter" };
  sendSmtpEmail.to = [{ email: toEmail }];
  
  try {
    console.log("📤 Attempting to send email via Brevo API...");
    console.log("📧 Email payload:", JSON.stringify({
      from: sendSmtpEmail.sender,
      to: sendSmtpEmail.to,
      subject: sendSmtpEmail.subject
    }, null, 2));
    
    const response = await brevoClient.sendTransacEmail(sendSmtpEmail);
    console.log("✅ Email sent successfully!");
    console.log("📬 Response:", JSON.stringify(response, null, 2));
    return response;
  } catch (error) {
    console.error("❌ Email sending failed!");
    console.error("❌ Error type:", error.constructor.name);
    console.error("❌ Error message:", error.message);
    console.error("❌ Full error:", error);
    if (error.response) {
      console.error("❌ Response status:", error.response.status);
      console.error("❌ Response body:", JSON.stringify(error.response.body, null, 2));
    }
    throw error;
  }
}

export async function sendPasswordResetEmail(toEmail, code, username) {
  console.log("🔑 sendPasswordResetEmail() called");
  console.log("📧 Recipient:", toEmail);
  console.log("👤 Username:", username);
  console.log("🔢 Reset code:", code);
  
  const sendSmtpEmail = new Brevo.SendSmtpEmail();
  sendSmtpEmail.subject = "Password Reset Code";
  sendSmtpEmail.htmlContent = `
    <html>
      <body style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
        <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px;">
          <h2 style="color: #7A0101;">Password Reset Request</h2>
          <p>Hi ${username || 'there'},</p>
          <p>You requested to reset your password. Use the code below:</p>
          <div style="background-color: #f9f9f9; padding: 20px; text-align: center; margin: 20px 0; border-radius: 5px; border: 2px dashed #7A0101;">
            <h1 style="color: #7A0101; letter-spacing: 8px; font-size: 36px; margin: 0;">${code}</h1>
          </div>
          <p style="color: #666;">This code will expire in 15 minutes.</p>
          <p style="color: #999; font-size: 12px; margin-top: 30px;">If you didn't request this, please ignore this email.</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">Best regards,<br>Pampanga State University</p>
        </div>
      </body>
    </html>
  `;
  sendSmtpEmail.sender = { email: "vince.salenga@gmail.com", name: "citizencharter" };
  sendSmtpEmail.to = [{ email: toEmail }];
  
  try {
    console.log("📤 Attempting to send password reset email...");
    console.log("📧 Email payload:", JSON.stringify({
      from: sendSmtpEmail.sender,
      to: sendSmtpEmail.to,
      subject: sendSmtpEmail.subject
    }, null, 2));
    
    const response = await brevoClient.sendTransacEmail(sendSmtpEmail);
    console.log("✅ Password reset email sent successfully!");
    console.log("📬 Response:", JSON.stringify(response, null, 2));
    return response;
  } catch (error) {
    console.error("❌ Password reset email failed!");
    console.error("❌ Error type:", error.constructor.name);
    console.error("❌ Error message:", error.message);
    console.error("❌ Full error:", error);
    if (error.response) {
      console.error("❌ Response status:", error.response.status);
      console.error("❌ Response body:", JSON.stringify(error.response.body, null, 2));
    }
    throw error;
  }
}