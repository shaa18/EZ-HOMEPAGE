# EZ Labs — Homepage (Assignment)

This project was developed manually by **SHASHANK DADHICH** for the EZ Labs front-end assignment.
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

## Deploy (Vercel)
1. Push this repository to GitHub.
2. Import the project on Vercel and use the build command: `npm run build`, output directory: `dist`.
3. Deploy and test the contact form on the deployed URL.

---
**Author:** SHASHANK DADHICH
