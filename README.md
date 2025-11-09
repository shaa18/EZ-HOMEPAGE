# EZ Labs — Homepage (Assignment)

This project was developed for the EZ Labs front-end assignment.
It is a single-page React (Vite) application that recreates the home page and integrates a Contact Form with the EZ Labs backend API.

## Features
- Responsive landing page (desktop and mobile)
- Contact form integrated with the API: https://vernanbackend.ezlab.in/api/contact-us/
- Client-side validation (no empty fields and email format validation)
- Displays "Form Submitted" on successful submission
- Tailwind CSS for styling (included)

## How I built it (brief)
1. Scaffolded a React + Vite project locally.
2. Implemented modular components: Header, Hero, ContactForm.
3. Added client-side validation and integrated the provided API endpoint.
4. Tested locally and prepared for deployment on Vercel.

## Run locally
```bash
npm install
npm run dev
# open http://localhost:5173
```

### Deploy (Vercel)

Once the project was complete and tested locally, I deployed it on **Vercel** for hosting and live access.  
Vercel automatically detected the **Vite + React** setup and configured the environment for production.

**Steps I followed:**
1. Imported the repo into **Vercel Dashboard** and confirmed the build settings:
   - **Framework Preset:** Vite  
   - **Build Command:** `npm run build`  
   - **Output Directory:** `dist`
2. Deployed directly through Vercel — the build completed successfully and went live at:  https://ez-homepage.vercel.app
3. Tested the deployed site and verified that the **Contact Form** works correctly, showing the “Form Submitted” message on success.



---
**Author:** SHASHANK DADHICH
