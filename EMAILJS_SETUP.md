# EmailJS Configuration Guide

This document explains how to set up EmailJS for the contact form to work properly.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free plan allows 200 emails/month)
3. Verify your email address

## Step 2: Set Up an Email Service

1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Copy the **Service ID** (e.g., `service_abc1234`)

## Step 3: Create an Email Template

1. Go to **Email Templates** in your EmailJS dashboard
2. Click **Create New Template**
3. Set up your template with these variables:
   ```
   From: {{from_name}}
   Email: {{reply_to}}
   Phone: {{phone}}
   Legal Area: {{legal_area}}
   Message: {{message}}
   ```
4. Example template:
   ```
   New consultation request from {{from_name}}

   Contact Details:
   Name: {{from_name}}
   Email: {{reply_to}}
   Phone: {{phone}}
   Legal Area: {{legal_area}}

   Message:
   {{message}}
   ```
5. Copy the **Template ID** (e.g., `template_xyz5678`)

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in your EmailJS dashboard
2. Find your **Public Key** (e.g., `AbCdEfGhIjKlMnOpQ`)
3. Copy this key

## Step 5: Configure Environment Variables

1. Open the `.env` file in the project root
2. Replace the placeholder values with your actual credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=service_abc1234
   VITE_EMAILJS_TEMPLATE_ID=template_xyz5678
   VITE_EMAILJS_PUBLIC_KEY=AbCdEfGhIjKlMnOpQ
   ```
3. Save the file
4. **IMPORTANT**: Never commit the `.env` file to Git (it's already in `.gitignore`)

## Step 6: Test the Contact Form

1. Restart your development server: `npm run dev`
2. Navigate to the contact form section
3. Fill out and submit the form
4. Check your email inbox for the test message
5. Check the browser console for any errors

## Security Features

The contact form includes several anti-spam measures:

### 1. **Honeypot Field**
- A hidden field that bots will fill out but humans won't see
- If this field is filled, the submission is silently rejected

### 2. **Rate Limiting**
- Users can only submit once per minute
- Prevents spam flooding

### 3. **Environment Variables**
- API keys are stored in `.env` file (not in source code)
- Keeps credentials secure

### 4. **Privacy Notice**
- Users are informed about data handling
- Important for GDPR compliance (law firm requirement)

## Troubleshooting

### Form doesn't send emails
- Check browser console for errors
- Verify all three environment variables are set correctly
- Ensure EmailJS service is active and verified
- Check EmailJS dashboard for error logs

### "EmailJS not configured" error
- Make sure `.env` file exists in project root
- Verify environment variables don't contain placeholder text
- Restart development server after changing `.env`

### Rate limit message appears
- This is normal if you submit multiple times quickly
- Wait 1 minute between submissions

### Receiving spam
- Honeypot and rate limiting should catch most bots
- Consider adding EmailJS captcha (paid feature)
- Monitor submissions in EmailJS dashboard

## Production Deployment

When deploying to production (e.g., Vercel, Netlify):

1. Add environment variables in your hosting platform's settings:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

2. Do NOT include `.env` file in your repository

3. The hosting platform will inject these variables during build

## Cost

- **Free Plan**: 200 emails/month (sufficient for most law firms)
- **Personal Plan**: $7/month - 1,000 emails
- **Professional Plan**: $35/month - 10,000 emails

For a law firm contact form, the free plan should be adequate unless you receive significant traffic.
