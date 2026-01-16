# Netlify Functions + SendGrid Email Setup Guide

## Prerequisites
- SendGrid account (free tier available)
- Netlify account with this repository connected
- Local environment with Node.js

## Step 1: Create SendGrid API Key

1. Go to [SendGrid Console](https://app.sendgrid.com)
2. Navigate to **Settings → API Keys**
3. Click **Create API Key**
4. Name it "Portfolio Email" (or similar)
5. Grant these permissions:
   - Mail Send: **Full Access**
6. Copy the generated API key

## Step 2: Set Up Local Environment

1. Create `.env.local` in the project root (already exists)
2. Add your SendGrid API key:
   ```
   SENDGRID_API_KEY=SG.your_api_key_here
   ```

## Step 3: Install Netlify CLI (Optional for local testing)

```bash
npm install -g netlify-cli
```

Then run locally:
```bash
netlify dev
```

This will start your dev server with Netlify functions available at `/.netlify/functions/send-email`

## Step 4: Deploy to Netlify

### Important: Add SendGrid API Key to Netlify Environment

1. Go to your Netlify dashboard
2. Select your portfolio project
3. Go to **Site settings → Build & deploy → Environment**
4. Click **Edit variables**
5. Add:
   - **Key**: `SENDGRID_API_KEY`
   - **Value**: `SG.your_api_key_here` (the same key from Step 1)
6. Save and redeploy

### Deploy Changes

```bash
git add .
git commit -m "Add Netlify Functions email service with SendGrid"
git push origin main
```

Netlify will automatically build and deploy your changes.

## Step 5: Update SendGrid Sender Email

The function currently sends from `noreply@dominic-kipkorir.netlify.app`

To use a custom domain email:
1. Verify your domain in SendGrid (**Settings → Sender Authentication**)
2. Update the `from` field in `.netlify/functions/send-email.js`

## Testing

1. Open the portfolio site
2. Scroll to the Contact section
3. Fill out and submit the form
4. Check your inbox at `pkoordominic@gmail.com`
5. Reply will come from the visitor's email (set in `replyTo`)

## Troubleshooting

### "Failed to send message" error
- Check that `SENDGRID_API_KEY` is set in Netlify environment variables
- Verify the API key is correct and has "Mail Send" permissions
- Check Netlify function logs: **Site settings → Functions → Logs**

### Email not received
- Check spam/junk folder
- Verify `SENDGRID_API_KEY` is correct in Netlify dashboard
- Check SendGrid activity logs for bounces or blocks

### Local development not working
- Ensure `.env.local` file exists with correct API key
- Run `netlify dev` (not just `npm run dev`)
- Check terminal output for function errors

## Architecture

- **Frontend**: React form in `src/App.jsx` sends POST to `/.netlify/functions/send-email`
- **Backend**: Netlify Function (`/.netlify/functions/send-email.js`) receives request, validates data, and sends via SendGrid
- **Email Flow**: Visitor → Portfolio Form → Netlify Function → SendGrid → Your Inbox
- **Reply**: Your reply goes to visitor's email (set in `replyTo` field)
