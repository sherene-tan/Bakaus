

# Send Contact Form Messages to hadiikhsan104@gmail.com

## Overview
Add a "Reach Out to Us" contact form that sends submissions to your email address. This requires backend infrastructure to actually deliver the emails.

## Prerequisites (in order)
1. **Enable Lovable Cloud** — needed for backend/database/edge functions. You'll need to enable this from the Cloud panel in the preview.
2. **Set up an email domain** — required for sending emails from the app.
3. **Set up email infrastructure** — creates the queue and processing system.
4. **Scaffold transactional email** — creates the email-sending edge function.

## Implementation Steps

### 1. Contact Form UI
- Add a "Reach Out to Us" section after the game features section, before the footer
- Fields: Name, Email, Message (all required)
- Uses existing `Input`, `Textarea`, and `Button` components
- Styled with `bg-background` to alternate from the `bg-muted` features section
- Same heading/divider pattern as other sections

### 2. Contact Form Email Template
- Create a React Email template that formats the submission nicely
- Includes the sender's name, email, and message
- Styled to match the Bakaus brand (earthy greens/teals)

### 3. Form Submission Logic
- On submit, call `send-transactional-email` edge function with:
  - **recipientEmail**: `hadiikhsan104@gmail.com` (hardcoded)
  - **templateData**: `{ name, email, message }` from the form
- Show a success toast to the user after submission

## Blocker
**Lovable Cloud must be enabled first.** Please enable it from the Cloud panel in the preview, then I can proceed with the full implementation.

