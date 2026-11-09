# My personal website

A one-page resume site with no build step and nothing to install. All of your text lives in **`content.js`**.

| File | What it is | Edit it? |
|---|---|---|
| `content.js` | Your name, resume, hobbies, links, tracking IDs | **Yes, this is the only file you edit** |
| `images/` | Your photo and hobby pictures | Add files here |
| `resume.pdf` | Your resume (optional) | Drop it in and set `resumePdf: "resume.pdf"` |
| `index.html`, `style.css`, `site.js` | Page layout and design | No |

## 1. Edit your content
Open `content.js` and replace the sample text. Some tips:
- `style: "editorial"` gives a warm, serif, magazine look. `style: "terminal"` gives a dark, code-style look similar to shaunwallace.me.
- To hide a section, empty its list, e.g. `education: [],`
- Visitors can switch between light and dark mode with the ◐ button.

To preview on your computer, double-click `index.html`.

## 2. Put it online for free (GitHub Pages, about 10 minutes)
1. Create a free account at https://github.com.
2. Click **New repository**. Name it `<your-username>.github.io`, make it **Public**, and click **Create**.
3. Click **uploading an existing file**, drag in all of these files and the `images` folder, then click **Commit changes**.
4. Go to **Settings → Pages**, set Source to **Deploy from a branch**, choose `main`, and save.
5. After a minute or two, your site is live at `https://<your-username>.github.io`.

**Later edits:** open `content.js` on github.com, click the ✏️ pencil, change the text, and click **Commit changes**. The site updates within about a minute.

*Alternative:* Cloudflare Pages (https://pages.cloudflare.com) is also free and can connect to the same GitHub repo.

**Your own domain (optional, about $10/year):** buy one, for example from Cloudflare Registrar or Namecheap. Then add it under **Settings → Pages → Custom domain** and follow GitHub's DNS instructions.

## 3. Set up visitor tracking (Statcounter, free)
1. Sign up at https://statcounter.com and click **Add Project**. Enter your site's address.
2. When it shows the install code, look for the two values `sc_project=` and `sc_security=`.
3. Paste them into `content.js`:
   ```js
   statcounter: { project: "12345678", security: "abcd1234" },
   ```
4. Commit the change. Visits will start showing in Statcounter. Under **Visitor Activity / Recent Visitors** you'll see each visit's IP address, country/city, ISP or company network, browser, referring site and pages viewed.

Notes:
- The free plan keeps details for roughly the last 500 visits. Check it weekly, or use **Download Logs**.
- IP-based location is approximate. Country is reliable, while city often isn't.
- Visits from a company's office network often show the company name as the ISP. Remote workers show their home provider.
- In Statcounter **Project Settings**, add your own IP to **Blocking** so your own visits aren't counted.
- When tracking is on, the footer shows a short privacy note automatically. Keep it there.
