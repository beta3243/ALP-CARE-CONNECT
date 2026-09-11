# ALP CareConnect

> Your Home. Your Family. Our Care.

The ALP CareConnect website — a premium, customer-first site for a Chennai
local-support business serving NRIs and people living away from home.

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion,
GSAP ScrollTrigger, Lenis, React Three Fiber, React Email and Resend.

---

## Quick start

```bash
npm install
```

```bash
cp .env.example .env.local
```

```bash
npm run dev
```

Open http://localhost:3000.

The site runs fully without any configuration. The enquiry form will show its
error state until `RESEND_API_KEY` is set — see below.

---

## What still needs real business information

Nothing on this site is invented. Every detail ALP has not supplied is rendered
as a clearly marked placeholder. To go live, fill these in.

| What | Where to set it | Currently shows |
| --- | --- | --- |
| WhatsApp number | `NEXT_PUBLIC_WHATSAPP_NUMBER` | `[WhatsApp Number — to be added]` |
| Phone number | `NEXT_PUBLIC_PHONE_DISPLAY` | `[Phone Number — to be added]` |
| Instagram link | `NEXT_PUBLIC_INSTAGRAM_URL` | `[Instagram Link — to be added]` |
| Office address | `site.streetAddress` in `lib/site.ts` | `[Office Address — to be added]` |
| Map | `components/Contact.tsx` | A styled "Chennai, Tamil Nadu" panel |
| PG details (locations, rooms, amenities, pricing, availability) | `services[3].points` in `lib/site.ts` | `[to be added]` per line |
| Testimonials | `testimonials` array in `components/Trust.tsx` | An honest "awaiting published feedback" state |

Until a WhatsApp number exists, every "Talk to ALP" control and the floating
button stay **functional**: they scroll to the working enquiry form rather than
opening a chat with a number that doesn't exist. Add the number and they become
WhatsApp links automatically — no code change.

The only confirmed contact detail today is **alpcareconnect@gmail.com**, which
is live across the site.

---

## Email delivery (Resend)

The enquiry form is a real, server-side pipeline:

```
Customer submits
  → client validation (UX)
  → POST /api/contact
  → honeypot + timing check
  → server validation (authoritative, zod)
  → rate limit + duplicate guard
  → Resend sends a React Email template
  → ALP receives it at ALP_CONTACT_EMAIL
  → customer sees the success state
```

`RESEND_API_KEY` is read **only** in `app/api/contact/route.ts`, which runs on
the server. It is never prefixed with `NEXT_PUBLIC_` and never reaches the
browser bundle.

### Getting mail into alpcareconnect@gmail.com — fastest route

**Sign up for Resend using `alpcareconnect@gmail.com` itself.** Resend's shared
test sender (`onboarding@resend.dev`) is allowed to deliver to the address that
owns the account — so signing up with the ALP inbox means enquiries reach it
straight away, with **no domain and no DNS setup**.

1. Create the account at <https://resend.com> using `alpcareconnect@gmail.com`.
2. Create an API key at <https://resend.com/api-keys>.
3. Paste it into `.env.local` as `RESEND_API_KEY=re_...`.
4. Restart the dev server (`npm run dev`). Env vars are read at startup.

Submit the form and it lands in the Gmail inbox. That is the whole setup.

### Later: sending from your own domain

The test sender only delivers to the account owner's address, so it is fine for
receiving ALP's own enquiries but not for anything else. When ALP has a domain,
add it in Resend, complete DNS verification, then set:

```
ALP_FROM_EMAIL="ALP CareConnect <care@alpcareconnect.com>"
```

**A Gmail address can never be the sender.** `alpcareconnect@gmail.com` is the
*receiving* address (`ALP_CONTACT_EMAIL`); the *sending* address must be on a
domain verified in Resend. Replies from ALP's inbox go straight back to the
customer either way — the route sets `replyTo` to the enquirer's address.

### Previewing the email without sending

With the dev server running, open
<http://localhost:3000/api/email-preview> to see exactly what arrives in the
inbox. The route is development-only and returns 404 in production.

The email deliberately mirrors the website form — same field order, same
labels, same two-up row for email and phone — so reading it feels like reading
the form the customer filled in. Edit `emails/EnquiryEmail.tsx` to change it.

---

## Deploying to Vercel

1. Push this repository to GitHub. `.env.local` is git-ignored — **never commit
   secrets.**
2. Import the repository at <https://vercel.com/new>. The framework is detected
   automatically; no build settings need changing.
3. Add these environment variables in **Project → Settings → Environment
   Variables**:

   | Name | Value | Notes |
   | --- | --- | --- |
   | `RESEND_API_KEY` | your key | Server-side only |
   | `ALP_CONTACT_EMAIL` | `alpcareconnect@gmail.com` | Where enquiries land |
   | `ALP_FROM_EMAIL` | `ALP CareConnect <care@yourdomain.com>` | Verified domain |
   | `NEXT_PUBLIC_SITE_URL` | `https://alpcareconnect.com` | SEO, sitemap, OG |
   | `NEXT_PUBLIC_WHATSAPP_NUMBER` | e.g. `919876543210` | Digits only, no `+` |
   | `NEXT_PUBLIC_PHONE_DISPLAY` | e.g. `+91 98765 43210` | |
   | `NEXT_PUBLIC_INSTAGRAM_URL` | profile URL | |

4. **Redeploy after adding or changing any environment variable** — a running
   deployment keeps the values it was built with.

---

## Security

- Server-side validation with zod is authoritative; client validation is for UX
  only and is never trusted on its own.
- Input is sanitised (control characters stripped) and HTML-escaped before it
  reaches the email template.
- Honeypot field plus a minimum time-on-form check catch simple bots. Both fail
  *silently* with a 200 so automated submitters get no useful signal.
- Rate limiting: 5 enquiries per IP per hour.
- Duplicate protection: an identical submission within 10 minutes is accepted
  without sending ALP a second copy. A *failed* send releases the guard so a
  genuine retry always works.
- Provider errors are logged server-side only; visitors see one friendly
  message and never see internals.
- Security headers are set in `next.config.mjs`.

> **Scaling note:** rate limiting and duplicate detection use in-process memory,
> which is right for this site's volume. If ALP ever needs strict guarantees
> across many concurrent serverless instances, swap the two stores in
> `lib/rate-limit.ts` for Vercel KV or Upstash Redis — the exported function
> signatures are designed to stay the same.

---

## Performance & 3D

The hero's frosted glass house is real WebGL (React Three Fiber with a
transmissive material and an in-scene light environment — no HDR download).

It is **capability-gated** in `components/three/HeroScene.tsx` and only mounts
on devices that can carry it comfortably. Phones, small screens, machines with
≤4 cores, data-saver mode, reduced-motion users and any browser without WebGL
get a hand-built SVG glass house instead, which is designed as a finished piece
rather than a degraded fallback. Three.js is dynamically imported, so it is not
part of the initial JavaScript bundle.

The six service visuals are SVG, not WebGL — six transmissive canvases on one
page would cost far more than they are worth.

---

## Accessibility

- Semantic landmarks, one `h1`, ordered headings, skip-to-content link.
- Full keyboard support, including a focus trap and Escape handling in the
  mobile menu.
- Visible focus rings; all controls have accessible names.
- Form fields use real labels with `aria-invalid` and `aria-describedby`; errors
  are announced, and focus moves to the first field needing attention.
- `prefers-reduced-motion` is honoured everywhere: Lenis is not started, the
  preloader is skipped entirely, the GSAP timeline renders in its final state
  and all reveals become plain elements.

---

## Project structure

```
app/
  layout.tsx            root shell, metadata, JSON-LD
  page.tsx              section order (customer → problem → solution → trust → contact → story)
  globals.css           design tokens, glass system, form styles
  api/contact/route.ts  the enquiry endpoint (server only)
  opengraph-image.tsx   generated social card
  privacy/page.tsx      privacy policy
components/
  Navbar, Hero, HelpSelector, Services, HowItWorks,
  WhyALP, Trust, Contact, EnquiryForm, OurStory, Footer,
  WhatsAppButton, Preloader, SmoothScroll, Logo, TalkToAlp
  three/    GlassHouse (WebGL), HeroScene (gate), HeroVisualFallback (SVG)
  ui/       Reveal, Ambient
emails/
  EnquiryEmail.tsx      the notification ALP receives
lib/
  site.ts               ALL business content and placeholders — edit here first
  validation.ts         shared zod schema
  rate-limit.ts         spam and duplicate protection
```

`lib/site.ts` is the single source of truth for business content. Most copy
changes need no component edits.

---

## Scripts

```bash
npm run dev
```

```bash
npm run build
```

```bash
npm run typecheck
```
