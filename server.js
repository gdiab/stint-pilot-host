const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.type("html").send(`<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Stint Pilot</title>
<style>body{font-family:system-ui,sans-serif;max-width:42rem;margin:2rem auto;padding:0 1rem;line-height:1.55}
a{color:#0b57d0}.note{background:#f6f8fa;border:1px solid #ddd;border-radius:8px;padding:0.9rem 1rem}</style></head>
<body>
<h1>Stint Pilot</h1>
<p>Personal productivity pilot operated by <strong>George Diab</strong> (sole proprietor). Use the website to review the pilot and complete setup.</p>
<div class="note">
<p><strong>SMS is optional.</strong> You can use Stint Pilot and complete website setup <em>without</em> agreeing to receive text messages. Messaging consent is never required to access the service.</p>
</div>
<p>If you separately opt in, transactional texts only may be sent from <strong>+1 (424) 473-1779</strong> (verification, session logging, optional calendar confirmations). Message frequency varies. Message and data rates may apply. Reply <strong>STOP</strong> to cancel, <strong>HELP</strong> for help.</p>
<p><a href="/onboarding/setup"><strong>Setup &amp; optional SMS opt-in</strong></a></p>
<p><a href="/privacy">Privacy Policy</a> · <a href="/terms">Terms of Service</a></p>
</body></html>`);
});

app.get("/privacy", (_req, res) => {
  res.sendFile(path.join(__dirname, "privacy.html"));
});

app.get("/terms", (_req, res) => {
  res.sendFile(path.join(__dirname, "terms.html"));
});

app.get("/onboarding/setup", (_req, res) => {
  res.sendFile(path.join(__dirname, "onboarding-setup.html"));
});

app.get("/health", (_req, res) => res.json({ ok: true }));

app.listen(port, () => {
  console.log(`stint-pilot-legal-host listening on ${port}`);
});
