# HomedIn website

Marketing site for **HomedIn**, the home maintenance app for iPhone and iPad ([App Store](https://apps.apple.com/us/app/homedin/id6762814321)).

Static HTML, CSS and vanilla JS. No build step and no third-party scripts. Plus Jakarta Sans is self-hosted.

- Live (GitHub Pages): https://ncorse-create.github.io/homedin-website/
- Design system: Direction C "Soft & calm". Coral `#E8674F`, ivory `#F8F6F3`, pastel tints, and Iris `#7461BE` used only for AI.

## Pages

| File | What it is |
|---|---|
| `index.html` | Landing page: hero, trust strip, features (Today/Plan, Homebook), Ask AI, home scan and reports, audiences, how it works, plans, FAQ, final CTA |
| `realtors.html` | Landing page for real estate agents |
| `support.html` | Support page. The form opens the visitor's email app (`mailto:`), with no backend |
| `privacy.html` | Privacy Policy (draft, see below) |
| `PRIVACY-POLICY.md` | Plain Markdown copy of the Privacy Policy |

## Before launch: placeholders to replace

Search the HTML for `data-placeholder` and `TODO(Noah)`.

- **Pricing** (`index.html`, `#pricing`). No prices are published on purpose because pricing isn't final. The current proposal is kept in an HTML comment above the section.
- **Support email** `support@homedin.app` is a placeholder (in `support.html`, `privacy.html`, `realtors.html` and `PRIVACY-POLICY.md`). The domain isn't registered yet.
- **Domain.** Canonical and Open Graph URLs point to `https://ncorse-create.github.io/homedin-website/`. If you add a custom domain, update those `<meta>`/`<link rel="canonical">` tags and add a `CNAME` file.
- **"Coming in HomedIn 2.0"** chips on the AI sections. Remove them once 2.0 is live.
- **Realtor program** (gift codes, co-branding, early-access list) is planned, not built yet.
- **Testimonials**: a hidden `#testimonials` section is ready. Only add real quotes you have permission to use.
- **Privacy Policy** is a draft and not legal advice. Have it reviewed before publishing, and keep `privacy.html`, `PRIVACY-POLICY.md`, the in-app consent text, the App Privacy answers and `PrivacyInfo.xcprivacy` saying the same thing.

## Local preview

Open `index.html` in a browser, or run `python3 -m http.server` in this folder.
