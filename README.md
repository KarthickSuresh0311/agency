# YourBrand — Agency Website

A fast, secure, **production-ready** static site. No backend, no database, no build step —
plain files you can open and edit. Written for a non-engineer.

---

## ✅ The production standard (and that it's met)

| Area | Standard | Status |
|------|----------|--------|
| **Security** | Strict headers + Content-Security-Policy on every response | ✅ `vercel.json` + `_headers` |
| **No secrets in code** | No API keys/passwords committed | ✅ verified |
| **SEO** | Per-page titles/descriptions, canonical, sitemap, robots, structured data | ✅ |
| **Social sharing** | Open Graph tags + share image on every page | ✅ `assets/img/og-cover.svg` |
| **Errors** | Branded 404 page | ✅ `404.html` |
| **Performance** | Long-cache for assets, font preconnect, no heavy libraries | ✅ |
| **Accessibility** | Proper headings, labels, reduced-motion respected | ✅ |
| **Resilience** | Works with JS off / failed (content still shows) | ✅ noscript fallback |
| **PWA basics** | Web manifest + theme color | ✅ `site.webmanifest` |
| **Robustness** | No broken internal links; dev tools excluded from search | ✅ |

---

## 📁 Structure

```
index · services · work · about · contact · thank-you · privacy · terms   ← pages (root)
404.html                ← custom not-found page
robots.txt · sitemap.xml ← SEO
site.webmanifest        ← install/PWA metadata
vercel.json · _headers  ← security headers (Vercel + Cloudflare)
│
├── assets/  css/ · js/ · img/ (favicon.svg, og-cover.svg)
├── demos/   ← drop voice-call recordings here (see demos/README.md)
└── dev/     ← internal preview tools (noindex; delete anytime)
```

---

## 👀 Preview locally
Double-click `index.html`. (The contact form only sends once connected — step 3 below.)

---

## 🚀 Deploy (free) — pick ONE host
**Cloudflare Pages (recommended — free, commercial-OK, private repo):**
connect the repo at dash.cloudflare.com → Pages → it serves the site and reads `_headers`.

**Vercel:** import the repo at vercel.com → it serves the site and reads `vercel.json`. Turn on **Web Analytics** in the dashboard (the analytics snippet is already in the pages).

Either host gives automatic HTTPS. Add your custom domain in the host's dashboard when ready.

---

## 🔧 Before launch — the only things still needed (your decisions)
1. **Name** → find-and-replace `YourBrand` everywhere.
2. **Email** → replace `hello@yourbrand.com` everywhere.
3. **Domain** → replace `https://yourbrand.com` everywhere (used in canonical, sitemap, robots, og:image).
4. **Connect the form** → get a free key at web3forms.com, paste it over `YOUR_WEB3FORMS_ACCESS_KEY` in `contact.html`.
5. **Founder photo** → add to `assets/img/` and swap it into the About page (marked with a comment).
6. **Voice samples** → record + drop `voice-dental.mp3` / `voice-restaurant.mp3` into `demos/`.
7. *(Optional)* Export `og-cover.svg` to PNG for best social-preview support on all platforms.

---

## 🎨 Change colours
Open `assets/css/styles.css` → top (`:root`) → change `--accent`. The whole site re-themes.

## 🔒 Security
No backend/database (nothing to hack). Security headers + CSP on every page. Spam honeypot on the form.
Cookieless analytics. **Never** paste API keys into these files — a future feature (like the chatbot) keeps
its key on a server, never in the page.
