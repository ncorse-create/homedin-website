# HomedIn Privacy Policy

**Effective date: November 20, 2026**

<!-- NOT LEGAL ADVICE. Drafted from the app's source facts: HOMEDIN-RELAUNCH-CHECKLIST.md, AI-FEATURE-PLAN.md (commit 0da64fd, section 13.6 "What the privacy policy must say") and PrivacyInfo.xcprivacy. Have it reviewed by a qualified attorney before publishing, and keep it identical in substance to the in-app consent text, the App Privacy answers and the privacy manifest. -->

HomedIn is a home maintenance app for iPhone and iPad, made by **Persue Apps LLC** ("we", "us"). This policy explains what happens to your information when you use the HomedIn app and this website.

The short version: HomedIn was built to know a lot about your home and very little about you. There's no account and no analytics. Your home data lives on your devices and in your own private iCloud, which we can't read. HomedIn AI is optional, asks your permission first, and our server keeps none of your content.

## 1. Who we are

HomedIn is published by Persue Apps LLC, which is responsible for the app and this website. You can reach us using the details in [Contact us](#10-contact-us).

This policy covers the HomedIn app (including its widgets) and the HomedIn website. It doesn't cover Apple, Anthropic or Cloudflare, whose services the app relies on. Their own privacy policies apply to them, and we link to them below.

## 2. What HomedIn keeps

### No account, no analytics, no tracking

- HomedIn has **no accounts**. We don't ask for your name, email address or phone number to use the app.
- HomedIn has **no analytics** and contains **no third-party SDKs**. It uses Apple frameworks only.
- There's no advertising. We don't track you across other companies' apps or websites, and we don't sell or share your personal information.

### Your home data stays on your device and in your iCloud

To build your plan, you tell HomedIn about your home: things like the ZIP code, the year it was built, roof and foundation type, exterior, systems and appliances. As you use the app, you add tasks, notes, receipts and documents.

- This home data is stored **on your device** and, if you're signed in to iCloud, in **your own private iCloud database** (Apple's CloudKit), so it syncs between your devices. That data is held by Apple in your iCloud account under [Apple's Privacy Policy](https://www.apple.com/legal/privacy/). **We can't read it.**
- **Photos, HomedIn AI chats and saved AI reports stay on your device.** They aren't synced to iCloud and aren't stored on our server. If you choose **Save to Homebook** on an AI answer, that text is saved as a regular note in your home data and syncs like the rest of it.
- App settings are saved on your device using Apple's standard settings storage, and reminders are scheduled on your device as local notifications.

### What our server keeps

HomedIn AI uses a small HomedIn server (a "proxy") to reach the AI provider. **The server keeps no content: no messages, no photos, no home facts and no content logs.** Its technical logs record only things like the route, status, response time and error codes, never what you sent.

With no name or email attached, the server does keep:

- an **anonymous device key** (stored only as a hash) and **AI credit counters**, so monthly allowances work;
- for subscribers, a **hash of the App Store transaction ID**, so your allowance follows your purchase across devices;
- **counts** of thumbs-down ratings and reported concerns;
- **your own note**, only if you choose to write one when you give a thumbs-down or report a concern.

Notes are deleted after **90 days**. Counters for a device that hasn't used HomedIn AI are deleted after **13 months**.

### Permissions

HomedIn asks for the **Camera** and **Photos** only when you choose to take or attach a photo, and for **notifications** for your reminders. It doesn't ask for your device's location. You can change these in Settings on your device at any time.

### Weather forecasts

To show a local forecast, HomedIn sends your home's **ZIP code** to **Apple Weather** (WeatherKit) about once a day. Only the **ZIP centroid** (the geographic center of that ZIP code) is used — not your street address, precise location or GPS. HomedIn doesn't ask for location permission. Forecast data comes from Apple under [Apple's Privacy Policy](https://www.apple.com/legal/privacy/) and Apple Weather terms.

## 3. HomedIn AI

HomedIn AI lets you ask questions about your home, get photo cost estimates and remodel ideas, check a quote, identify an appliance from its label, find the right kind of pro, and receive AI home scans and seasonal and yearly reports. It's powered by **Claude**, an AI model made by **Anthropic**.

<div class="callout iris" markdown="1">
**Nothing is sent until you say yes.** Before HomedIn AI sends anything, the app shows a consent screen that names Anthropic and lists what will be sent. Data goes to Anthropic **only after you tap Allow, and only when you use Ask AI, a photo feature or a report.** If you choose **Not now**, the rest of HomedIn works exactly the same. If what we send ever changes, the app asks you again.
</div>

### What's sent to Anthropic

When you use an AI feature, HomedIn sends only what that request needs:

- **the messages you write**;
- **photos you choose to send**, after you review them, with **location and camera metadata removed**;
- **facts about your home and its systems, your maintenance history and totals**, for the categories you leave switched on. You choose these under **Choose what's shared**: systems and ages, model numbers, maintenance history and costs;
- **the brand and model** from a label you scan;
- your **approximate area: the first three digits of your ZIP code and your state**, so price estimates fit your region.

**Never sent:** your name, an email address, your street address, your full ZIP code, your precise location, serial numbers, your notes or receipt images.

When you look up an appliance from its label, Anthropic runs a **web search** using the brand and model text as the search query.

### What Anthropic does with it

Anthropic is HomedIn's AI provider. It uses your request to write the answer. Under Anthropic's standard API terms, Anthropic **does not train its models on this data** and **deletes it within 30 days**. It keeps data longer only if a request is flagged for a policy violation or where the law requires it. See the [Anthropic Privacy Center](https://privacy.claude.com/en/articles/7996866-how-long-do-you-store-my-organization-s-data) and [Anthropic's Privacy Policy](https://www.anthropic.com/legal/privacy).
<!-- Verified Nov 20, 2026 on privacy.claude.com ("How long do you store my organization's data?", updated July 1, 2026): API inputs/outputs deleted within 30 days; up to 2 years if flagged for Usage Policy violations; API data not used for training. Re-check before each release. -->

### Feedback and reactions

Hearts, thumbs-ups and other reactions stay on your device. Only a **thumbs-down** (when you send "What was off?") and **Report a concern** reach our server, as a content-free count plus the reason you picked and your own note if you write one. They never include the message, the answer or a photo.

### Finding a pro nearby

When a job needs a professional, HomedIn AI suggests which **trade** to call. HomedIn AI never names a business. HomedIn then searches **Apple Maps on your device** for that trade near your saved ZIP code. That search sends Apple a search phrase and your area. **It doesn't go through our server or to Anthropic**, and results aren't saved unless you save one to your notes. Apple Maps is covered by [Apple's Privacy Policy](https://www.apple.com/legal/privacy/).

### Your choices

In **More > Ask AI & privacy** you can:

- **withdraw consent** at any time, and the rest of the app keeps working;
- see exactly what HomedIn sends about your home, and switch categories on or off;
- **Delete my AI data**, which removes your AI chats, reports and photos from your device and deletes any notes held on our server. Anonymous credit counters are kept so credits can't be refilled by deleting, and they hold no content.

Anything already sent to Anthropic is deleted on Anthropic's schedule described above.

### AI can be wrong

HomedIn AI is a helpful second opinion, not a professional. Its answers can be wrong. **Cost estimates are not quotes, and home scans and reports are not inspections.** Prices vary by region. HomedIn AI always tells you to use a licensed professional for gas, electrical panel, structural, roof and other high-risk work. Check anything important with a qualified pro.

### Where HomedIn AI is available

HomedIn is for US homeowners, and HomedIn AI is available in the United States at launch.

## 4. Other companies involved

- **Apple** provides iCloud sync, App Store purchases, Apple Maps for contractor search, and **Apple Weather** (WeatherKit) for forecasts from your home's ZIP code, as described in section 2. Purchases are processed by Apple; we never see your payment card or billing details. See [Apple's Privacy Policy](https://www.apple.com/legal/privacy/).
- **Anthropic** provides the Claude AI model used by HomedIn AI, as described in section 3.
- **Cloudflare** hosts HomedIn's server and processes requests in transit to deliver them and protect the service. See [Cloudflare's Privacy Policy](https://www.cloudflare.com/privacypolicy/).

### This website

This website collects nothing: **no analytics, no cookies and no third-party scripts**. Its fonts and images are served from the site itself. It's hosted on GitHub Pages, and like any web host, GitHub may log technical information such as IP addresses to run and secure its service. See the [GitHub Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement). <!-- TODO(Noah): update this paragraph if the site moves to a custom domain or another host (plan open question 3). -->

If you email us, including through the support page, which opens your own email app, we receive your email address and whatever you include. We use it only to help you and delete it when it's no longer needed. <!-- TODO(Noah): confirm the support-email retention period. -->

## 5. How long information is kept

| Information | Where it lives | How long |
|---|---|---|
| Home data, tasks, notes, receipts, documents | Your device and your private iCloud | Until you delete it |
| Photos, AI chats and saved AI reports | Your device only | Until you delete them |
| Weather forecasts | Fetched from Apple Weather; cached on your device | Refreshed about once a day |
| AI request content (messages, photos, home facts) | Not stored by HomedIn's server | Passed through only |
| AI request content at Anthropic | Anthropic | Deleted within 30 days (longer only if flagged or required by law) |
| Notes you write with a thumbs-down or a concern | HomedIn's server | 90 days |
| Anonymous device key (hashed), credit counters, feedback counts, hashed transaction ID | HomedIn's server | Deleted after 13 months without use |
| Support emails | Our email | As long as needed to help you |

## 6. Children

HomedIn is meant for homeowners and isn't directed to children under 13. We don't knowingly collect personal information from children under 13. If you think a child has sent us information, contact us and we'll delete it.

## 7. Your privacy rights

Depending on where you live, including California (CCPA/CPRA) and other US states, you may have the right to know about, access, correct, delete or get a copy of your personal information, to withdraw consent, and not to be discriminated against for using these rights.

Because HomedIn has no accounts and keeps your content on your devices, most of these rights are in your hands directly:

- **Access and copy:** everything is visible in the app, and you can export your home data and PDF reports.
- **Correct:** edit anything in the app.
- **Delete:** delete items in the app, use **Delete my AI data**, or delete the app. To remove synced data, delete HomedIn's data from iCloud in your device's Settings.
- **Withdraw AI consent:** in More > Ask AI & privacy, at any time.

For anything else, such as a support email you sent us, contact us. We'll respond within the time the law requires. Our server holds only anonymous, hashed identifiers that we can't link to you, so we may not be able to find records for a specific person.

**We do not sell or "share" personal information**, as those terms are defined in California law, and we don't use it for targeted advertising.

If you're outside the US: HomedIn is designed for US homes, and our providers process data in the United States. Where privacy laws such as the GDPR apply, we rely on your **consent** for HomedIn AI, on our **legitimate interest** in preventing abuse and keeping AI within its limits for anonymous counters, and on **providing the service** you've chosen. You can contact us to use your rights or complain to your local data protection authority.

## 8. Security

Collecting as little as possible is our best protection. In addition, AI traffic is encrypted in transit, our AI provider key lives only on our server and never in the app, Apple's App Attest helps make sure requests come from the genuine HomedIn app, photo metadata is removed before upload, and our logs never contain your content. iCloud data is protected by Apple. No system is perfectly secure, so please protect your devices with a passcode.

## 9. Changes to this policy

If we change this policy, we'll update the effective date above and post the new version here. If a change affects what HomedIn AI sends, the app will ask for your consent again before sending anything new.

## 10. Contact us

Questions about privacy? Contact **Persue Apps LLC**:  
Email: [persueapps@gmail.com](mailto:persueapps@gmail.com)  
Support page: [HomedIn Support](support.html)
<!-- TODO(Noah): add a mailing address for the LLC if you want one listed. -->
