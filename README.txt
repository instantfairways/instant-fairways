# Instant Fairways website

This is a responsive static website built with HTML, CSS and vanilla JavaScript.

## Files
- `index.html` — page content and structure
- `styles.css` — layout, colours, typography and responsive styling
- `script.js` — mobile navigation and form placeholder behaviour

## Important before launch
The enquiry form is currently a front-end placeholder. It does **not** send emails. Connect it to Formspree or a Cloudflare Pages Function before publishing it as a live lead-generation form. Never advertise the form as working until a real test enquiry has arrived in the nominated inbox.

## Preview locally
Open `index.html` in a browser. For best results use a local static server or deploy to Cloudflare Pages.

## Deploy with Cloudflare Pages (Git integration)
1. Create a GitHub account if you don't already have one.
2. Create a new repository named `instant-fairways`.
3. Upload `index.html`, `styles.css`, and `script.js` to the repository root.
4. In Cloudflare Dashboard, go to Workers & Pages → Create → Pages → Connect to Git.
5. Choose the `instant-fairways` repository.
6. Framework preset: None. Build command: leave blank. Build output directory: `/` (or `.` if the dashboard requests a relative directory).
7. Deploy. Cloudflare will provide a `*.pages.dev` preview address.

## Connect your custom domain
1. In the Pages project, open Custom domains → Set up a custom domain.
2. Enter `instantfairways.com.au` and follow the DNS instructions Cloudflare provides.
3. Do not guess DNS records. Use the exact records Cloudflare shows.
4. Set `www.instantfairways.com.au` as an additional custom domain if desired, then choose one canonical address and redirect the other to it.
5. Test the site over HTTPS and on a phone.

If your domain is registered at VentraIP, keep the registration there; you can point its DNS to Cloudflare by following Cloudflare's exact instructions. Domain registration and website hosting are separate services.
