import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import dns from 'node:dns';
import nodemailer from 'nodemailer';

// DNS resolution fix for MongoDB Atlas SRV records
dns.setDefaultResultOrder('ipv4first');
try {
  dns.setServers(['8.8.8.8', '8.8.4.4']);
} catch (e) {
  // Ignore fallback errors
}

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://alishabatham2_db_user:urq6lBf4WlNfk1Um@cluster0.upabs4c.mongodb.net/nx-drive?retryWrites=true&w=majority&appName=Cluster0';

app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('----------------------------------------------------');
    console.log('✅ Connected to MongoDB Cluster0 (Database: nx-drive)');
    console.log('✅ Target Collection: "nx-adis"');
    console.log('----------------------------------------------------');
  })
  .catch((err) => {
    console.error('❌ MongoDB Connection Error:', err);
  });

// Define Schema for contact responses in "nx-adis" collection
const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, default: '' },
    fleetSize: { type: String, default: '1-9' },
    message: { type: String, default: '' },
    submittedAt: { type: Date, default: Date.now },
  },
  {
    collection: 'nx-adis', // Explicit collection name requested by user
  }
);

const Contact = mongoose.model('Contact', contactSchema);

// Configure Nodemailer Transporter
const senderEmail = process.env.EMAIL_USER || 'alisha.522373@gmail.com';
const recipientEmail = process.env.RECIPIENT_EMAIL || 'hr@nexisparkx.com';
const rawPass = process.env.EMAIL_PASS || '';
const cleanPass = rawPass.replace(/\s+/g, '');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: senderEmail,
    pass: cleanPass,
  },
});

// POST Endpoint: Save contact form submission to nx-adis collection & send email
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, fleetSize, message } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        success: false,
        error: 'Name and email are required fields.',
      });
    }

    const newResponse = new Contact({
      name,
      email,
      phone: phone || '',
      fleetSize: fleetSize || '1-9',
      message: message || '',
    });

    await newResponse.save();
    console.log('📩 New form response saved to "nx-adis" collection:', newResponse);

    // Send email notification via Nodemailer to hr@nexisparkx.com
    const mailOptions = {
      from: `"NX ADIS Website" <${senderEmail}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `🚨 New Fleet Inquiry Received - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #2563eb; margin-top: 0;">NX ADIS — New Lead Response</h2>
          <p style="color: #475569; font-size: 14px;">A new commercial fleet inquiry has been submitted on the website and saved to the <strong>nx-adis</strong> database collection.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px; font-weight: bold; color: #1e293b; width: 140px;">Full Name:</td>
              <td style="padding: 10px; color: #334155;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px; font-weight: bold; color: #1e293b;">Work Email:</td>
              <td style="padding: 10px; color: #334155;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px; font-weight: bold; color: #1e293b;">Phone:</td>
              <td style="padding: 10px; color: #334155;">${phone || 'N/A'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px; font-weight: bold; color: #1e293b;">Fleet Size:</td>
              <td style="padding: 10px; font-weight: bold; color: #2563eb;">${fleetSize} Vehicles</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px; font-weight: bold; color: #1e293b;">Message / Requirement:</td>
              <td style="padding: 10px; color: #334155;">${message || 'No additional message provided.'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #1e293b;">Submission Date:</td>
              <td style="padding: 10px; color: #64748b; font-size: 12px;">${new Date().toLocaleString()}</td>
            </tr>
          </table>

          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0; text-align: center; color: #94a3b8; font-size: 12px;">
            © ${new Date().getFullYear()} NX ADIS — Adaptive Driver Intelligent System
          </div>
        </div>
      `,
    };

    if (cleanPass) {
      try {
        await transporter.sendMail(mailOptions);
        console.log(`✉️ Email successfully delivered to ${recipientEmail} from ${senderEmail}`);
      } catch (mailErr) {
        console.error('⚠️ Nodemailer failed to send email (Check Gmail App Password):', mailErr.message);
      }
    } else {
      console.log(`ℹ️ Email dispatch configured. Sender: ${senderEmail} -> Recipient: ${recipientEmail}. (Add EMAIL_PASS in .env to activate live SMTP dispatch)`);
    }

    return res.status(201).json({
      success: true,
      message: 'Form response saved successfully to nx-adis collection!',
      data: newResponse,
    });
  } catch (error) {
    console.error('❌ Error saving form response:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to save response to database.',
    });
  }
});

// GET Endpoint: Fetch all responses from nx-adis collection (for admin view/debug)
app.get('/api/responses', async (req, res) => {
  try {
    const responses = await Contact.find().sort({ submittedAt: -1 });
    return res.json({ success: true, count: responses.length, data: responses });
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Error fetching responses.' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    collection: 'nx-adis',
    senderEmail,
    recipientEmail,
  });
});

app.listen(PORT, () => {
  console.log(`🚀 NX ADIS Backend Server running on http://localhost:${PORT}`);
});
