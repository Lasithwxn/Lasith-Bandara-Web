# EmailJS Setup Guide

Your contact form is now connected to EmailJS and configured to send emails to `lasithwxn@gmail.com`. Follow these steps to complete the configuration:

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and sign up for a **free account**
2. Verify your email address

## Step 2: Create an Email Service

1. Log in to your EmailJS dashboard
2. Go to **Email Services** (or click "Add Service" if none exist)
3. Click **Create New Service**
4. Select your email provider:
   - If using Gmail: Select **Gmail**
   - If using another provider: Select it from the list
5. Follow the authentication steps EmailJS provides
6. Once connected, copy your **Service ID** (looks like: `service_xxxxxxxxxxxxx`)

## Step 3: Create an Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Set up your template with these variables:

```
To Email: {{to_email}}
Subject: New Contact Form Submission from {{name}}

Name: {{name}}
Email: {{email}}
Message:
{{message}}
```

4. Important: Use these **exact variable names** in your template:
   - `{{to_email}}` - The recipient email (lasithwxn@gmail.com)
   - `{{name}}` - The sender's name (from form input)
   - `{{email}}` - The sender's email (from form input)
   - `{{message}}` - The message content (from form input)

5. Copy your **Template ID** (looks like: `template_xxxxxxxxxxxxx`)

## Step 4: Update Your Code

In [src/app/components/ContactSection.tsx](src/app/components/ContactSection.tsx), find this line:

```typescript
emailjs.init("X0cuS95oi0PV_qsjL");
```

And the `emailjs.send()` call:

```typescript
await emailjs.send(
  "service_txf1qaf",
  "template_qsw4nag",
  {
    // ... email data
  }
);
```

Your values are already configured:
- Public Key: `X0cuS95oi0PV_qsjL`
- Service ID: `service_txf1qaf`
- Template ID: `template_qsw4nag`

### Use environment variables (recommended)

Place your keys in a local env file so you don't need to edit source files. Create a `.env.local` file at the project root and add:

```bash
# .env.local
VITE_EMAILJS_PUBLIC_KEY=X0cuS95oi0PV_qsjL
VITE_EMAILJS_SERVICE_ID=service_txf1qaf
VITE_EMAILJS_TEMPLATE_ID=template_qsw4nag
```

I added `.env.example` to the repo with these keys as placeholders — copy it to `.env.local` and replace values with your real keys. Restart the dev server after editing env files.

### Where to Find Your Keys:

**Public Key:**
1. Go to **Account** → **API Keys** in your EmailJS dashboard
2. Copy your **Public Key**

**Service ID & Template ID:**
- Service ID: Available in **Email Services** page
- Template ID: Available in **Email Templates** page

## Step 5: Test Your Form

1. Run your development server: `npm run dev`
2. Fill out the contact form on your website
3. Click "Send Message"
4. You should receive an email at `lasithwxn@gmail.com`

## Troubleshooting

### "403 Forbidden" Error
- Make sure your Public Key is correct
- Check that your Service ID and Template ID match exactly

### Not Receiving Emails
- Verify your email service is properly configured in EmailJS
- Check your email's spam/junk folder
- Make sure template variables match exactly: `{{to_email}}`, `{{name}}`, `{{email}}`, `{{message}}`

### CORS Issues
- EmailJS handles CORS automatically, no additional configuration needed

## Security Notes

The Public Key is meant to be exposed in your frontend code (it's public). EmailJS handles all sensitive server operations.

For production, consider:
- Monitoring your API usage in the EmailJS dashboard
- Setting up rate limiting if needed
- Adding CAPTCHA for additional spam protection

## Free Plan Limits

EmailJS free tier includes:
- Up to 200 emails/month
- Full template editor
- Basic analytics
- Perfect for personal portfolios

Upgrade anytime if you need more emails.
