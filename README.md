# YourBrand — Agency Website

A fast, secure, custom-coded multi-page site. No backend, no database, no build step — just
plain files you can open and edit. Written for a non-engineer.

---

## 📁 What's in here

The **pages stay at the root** (so the web addresses are clean, e.g. `/services.html`).
Everything else lives in folders:

```
index.html, services.html, work.html, about.html,
contact.html, thank-you.html, privacy.html, terms.html   ← the 8 pages
│
├── assets/
│   ├── css/styles.css   ← how everything looks (shared)
│   ├── js/script.js     ← interactivity: menu, form, animations (shared)
│   └── img/favicon.svg  ← the browser-tab icon
│
├── demos/               ← drop voice-call recordings here (see demos/README.md)
├── dev/                 ← internal preview tools, NOT part of the live site
│   ├── style-lab.html       (colour/animation playground)
│   └── sample-preview.html  (sample-display preview)
│
├── vercel.json          ← security + hosting settings for Vercel
├── README.md            ← this file
└── .gitignore
```

The `dev/` folder is just for you — you can delete it before launch with no effect on the site.

---

## 👀 How to preview it

**Double-click `index.html`** — it opens in your browser, and all the page links work.
(The contact form won't actually send until you do step 4 below.)

---

## ✅ Before it goes live — your checklist

Most of these are "find and replace across all the .html files" (in a text editor, that's `Ctrl + H`).

### 1. Your name
Replace **`YourBrand`** everywhere with your real agency name. It appears in every page's menu,
footer, title, and text.

### 2. Your email
Replace **`hello@yourbrand.com`** everywhere with your real brand email.

### 3. Your domain
Replace **`https://yourbrand.com`** everywhere with your real website address (this is used by Google
and social previews — the `canonical` and `og:url` lines).

### 4. Connect the contact form (5 minutes, free)
1. Go to **https://web3forms.com**, enter the email where you want enquiries → you get an **Access Key**
2. In `contact.html`, find `YOUR_WEB3FORMS_ACCESS_KEY` and paste your key in its place
3. Done — the form now emails you every enquiry and sends people to the thank-you page.

> The access key is safe to keep in the code — it can only send submissions to your email. It is not a password.

### 5. Turn on visitor analytics (one switch)
After you deploy to Vercel (below), open your project → **Analytics** → enable **Web Analytics**.
That's it — it starts counting visitors. It's cookieless and private, so no popup or cookie policy needed.

### 6. Finish the content
- **About page:** replace the founder section with your real story (it's marked with a comment).
- **Terms page:** remove the grey "Note to self" box once you've had the terms reviewed.
- **Work page:** add more samples before launch — each sample has a copy-paste template in the file.

### 7. (Optional, for strict EU clients) Self-host the font
Right now the font loads from Google. For maximum GDPR-friendliness you can self-host it later — ask me when you're ready.

---

## 🚀 How to publish it for free (Vercel)

1. Create a free account at **https://vercel.com**
2. Upload this folder (or connect it through GitHub)
3. Vercel gives you a free live link with automatic HTTPS 🔒
4. Add your real domain in Vercel → Settings → Domains when it's ready
5. Turn on Web Analytics (checklist step 5)

No server to manage, ever.

---

## 🎨 Want to change the colours?
Open `assets/css/styles.css`, look at the very top (`:root`). Change `--accent` to any colour and the
whole site re-themes itself. Nothing else to touch.

---

## 🔒 Security notes (why this is a safe setup)
- **No backend / no database** → nothing to hack, no stored customer data to leak.
- **The form** goes through Web3Forms over HTTPS, with a hidden honeypot field that blocks spam bots.
- **Analytics** is cookieless and privacy-friendly — no tracking, no consent popup needed.
- **Security headers** are set in `vercel.json` (clickjacking and content-type protection).
- **No secrets** live in this code. Don't paste API keys, passwords, or tokens into these files —
  if a future feature needs one, it belongs in a server environment variable. Ask me first.
