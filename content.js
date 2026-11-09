/* =====================================================================
   YOUR CONTENT — edit this file only.
   - Keep text inside "quotes". Keep the commas at the end of lines.
   - To hide a whole section, make its list empty:  education: [],
   - Photos: put image files in the "images" folder and write e.g. "images/me.jpg"
   - Lines marked  TODO  still need your input.
   ===================================================================== */

window.SITE = {

  /* Look of the site — pick one:
       Noir family (dark + amber, with charts):
       "noir"       near-black + amber, serif headings (dark editorial)
       "ledger"     annual-report feel: champagne, hairline rules, big serif figures
       "ticker"     financial-terminal feel: pure black, amber monospace, boxed panels
       "quant"      charcoal, amber + teal two-tone data, rounded dashboard panels
       Others:
       "dashboard"  navy + cyan, grid backdrop, KPI tiles
       "signal"     graphite + violet, geometric headings
       "terminal"   black + green, code-style labels (like shaunwallace.me)
       "editorial"  warm paper, serif (light magazine)                      */
  style: "ledger",

  /* What first-time visitors see: "dark", "light", or "auto" (follow their device). They can still switch with ◐. */
  theme: "dark",

  name: "Anveh Turel",
  role: "Data, Digital & AI Transformation Leader",
  location: "Haifa Metro, Israel",
  tagline: "15+ years turning customer data and generative AI into measurable growth, from first idea to production at enterprise scale.",
  status: "Open to new opportunities",  // set to "" to hide the badge
  photo: "images/me.jpg",               // leave "" to show your initials instead
  resumePdf: "",                        // TODO e.g. "resume.pdf" — leave "" to hide the button

  /* Big numbers under your intro. */
  stats: [
    { value: "15+",   label: "years in data, digital & AI" },
    { value: "$180M+", label: "revenue opportunities identified" },
    { value: "40",    label: "person analytics organization led" },
    { value: "120K+", label: "customer questions answered by GenAI" },
  ],

  about: {
    heading: "Where business, data and AI meet",
    paragraphs: [
      "I lead data, digital and AI transformation for large eCommerce businesses. At The Home Depot I direct a 40-person Digital CX and UGC Analytics organization supporting a $25B online business, and I own a $15M P&L.",
      "I care about getting AI out of the slide deck and into production. Recent work includes an AI 'closing the loop' model that cut manual effort by about 83%, generative AI product Q&A answering 120,000+ unanswered customer questions, and review summarization that lifted conversion 16%. I also build my own tools: two AI-enabled stock valuation apps in Python and Streamlit, automated with GitHub Actions.",
      "My path is unusual: Captain in an IDF special-forces unit, attorney advising tech startups, analyst at an algo-trading fintech, then a STEM MBA at Carnegie Mellon. That mix taught me to lead under pressure, think precisely, and connect strategy with hands-on execution.",
    ],
    callout: {
      title: "What I'm looking for",
      text: "Leadership roles in data, digital or AI transformation where I can own outcomes end to end, from strategy and team building to shipping AI products that move business KPIs.",  // TODO adjust: role level, industries, location / remote
    },
  },

  /* "By the numbers" charts. Every figure comes from your resume — keep it that way.
     Set metrics: null to hide the whole section. */
  metrics: {
    heading: "Impact, measured",
    intro: "A few of the results behind the résumé.",

    /* Bar chart. value = millions of dollars (used for bar length). */
    impact: [
      { label: "Business impact identified from site anomalies & funnel friction", value: 400, display: "$400M+", when: "2019–22" },
      { label: "Revenue opportunities identified across the digital funnel",       value: 180, display: "$180M+", when: "2023–" },
      { label: "Annual sales from rating & UX A/B tests",                          value: 12,  display: "$12M",   when: "2023–" },
      { label: "Potential 3-year vendor savings (RFPs & negotiations)",            value: 6,   display: "$6M",    when: "2023–" },
      { label: "Business value from process automation",                           value: 4.6, display: "$4.6M",  when: "2022–23" },
      { label: "Chargeback expense reduced by fraud monitoring",                   value: 2,   display: "$2M",    when: "2019–22" },
    ],

    /* Ring gauges (percentages). */
    gains: [
      { value: 83, label: "less manual effort",        detail: "AI closing-the-loop model" },
      { value: 34, label: "more efficient analysis",   detail: "AI in analytics workflows" },
      { value: 23, label: "faster issue detection",    detail: "AI in analytics workflows" },
      { value: 16, label: "higher product-to-order",   detail: "GenAI review summaries" },
    ],

    /* Before → after comparisons. */
    beforeAfter: [
      { label: "AI text-classification accuracy", before: 78, after: 85, unit: "%", detail: "Qualtrics Text iQ, scaled from pilot to portfolio" },
    ],

    /* Small KPI tiles. */
    proof: [
      { value: "120K+",    label: "customer questions answered by GenAI Q&A" },
      { value: "11,000",   label: "labor hours eliminated through automation" },
      { value: "99%",      label: "of top 20K SKUs with 10+ reviews" },
      { value: "+371 bps", label: "year-over-year NPS improvement" },
      { value: "300+/mo",  label: "fraudulent orders blocked" },
      { value: "1,000+",   label: "associates aligned by the strategic plan" },
    ],

    /* Career timeline chart. Years can be decimals (2019.7 ≈ Sept 2019). end: "now" for current.
       kind: "work", "edu" or "service" (sets the color). */
    timeline: [
      { label: "Captain, IDF Sayeret Nahal",            start: 2004.2,  end: 2009.0, kind: "service" },
      { label: "LLB + BBA, Reichman University",        start: 2009.5,  end: 2013.5, kind: "edu" },
      { label: "Senior Analyst, FINAL (fintech)",       start: 2011.5,  end: 2013.6, kind: "work" },
      { label: "Attorney, FWMK Law Offices",            start: 2013.7,  end: 2017.5, kind: "work" },
      { label: "STEM MBA, Carnegie Mellon",             start: 2017.6,  end: 2019.4, kind: "edu" },
      { label: "Co-Founder, Mami Kids",                 start: 2018.1,  end: 2020.2, kind: "work" },
      { label: "Home Depot · eCommerce Ops Manager",    start: 2019.7,  end: 2022.2, kind: "work" },
      { label: "Home Depot · Sr. Manager, Digital CX",  start: 2022.35, end: 2023.3, kind: "work" },
      { label: "Home Depot · Sr. Manager, CX & UGC",    start: 2023.35, end: "now",  kind: "work" },
    ],
  },

  /* Most recent first. */
  experience: [
    {
      dates: "2023 — Present",
      title: "Senior Manager, Digital CX & UGC Analytics",
      company: "The Home Depot",
      link: "https://www.homedepot.com",
      place: "Atlanta, GA",
      summary: "Direct a 40-person organization covering Digital Analytics (CX/VoC) and User-Generated Content analytics for a $25B eCommerce business, with a $15M P&L.",
      highlights: [
        "Identified $180M+ in revenue opportunities across the digital funnel, shaping Product, UX and Technology roadmaps.",
        "Operationalized customer-facing AI (chatbot Q&A, Digital Assistant, review summarization), improving product-to-order rate by 16%.",
        "Led A/B testing in response to FTC content requirements, lifting average ratings 51 bps and about $12M in annual sales.",
        "Led the analytics workstream for the Online organization's annual strategic plan, influencing 1,000+ associates.",
        "Identified $6M in potential three-year vendor savings through RFPs and negotiations.",
      ],
      tags: ["Generative AI", "CX / VoC", "Experimentation", "P&L"],
    },
    {
      dates: "2022 — 2023",
      title: "Senior Manager, Digital CX (Voice of the Customer)",
      company: "The Home Depot",
      link: "",
      place: "Atlanta, GA",
      summary: "",
      highlights: [
        "Launched 20+ intercepts and A/B tests, contributing to a 371-bps YoY improvement in NPS.",
        "Co-developed an enterprise KPI linking digital engagement to store traffic and sales.",
        "Integrated AI into analytics workflows: issue detection 23% faster, analysis 34% more efficient.",
        "Delivered $4.6M in business value and removed about 11,000 labor hours through automation.",
      ],
      tags: ["Forecasting", "NPS", "Automation"],
    },
    {
      dates: "2019 — 2022",
      title: "Manager, eCommerce Operations (Consumer App & Checkout)",
      company: "The Home Depot",
      link: "",
      place: "Atlanta, GA",
      summary: "",
      highlights: [
        "Used behavioral analytics and data science to find site-wide friction, contributing to $400M+ in identified business impact.",
        "Built checkout fraud monitoring that blocks 300+ fraudulent orders a month and cut chargebacks by about $2M.",
        "Tuned login security rules to catch 800 more bad actors a week while reducing false positives.",
      ],
      tags: ["Funnel analytics", "Fraud", "Anomaly detection"],
    },
    {
      dates: "2018 — 2020",
      title: "Co-Founder, Head of Analytics & Marketing",
      company: "Mami Kids Technologies",
      link: "",
      place: "Pittsburgh, PA",
      summary: "",
      highlights: [
        "Optimized inventory planning from sales data, reducing storage fees by 34%.",
        "Built the go-to-market messaging and positioning from 20+ customer interviews and surveys.",
      ],
      tags: ["Startup", "GTM"],
    },
    {
      dates: "Summer 2018",
      title: "Summer Associate, Product Strategy",
      company: "Fiserv",
      link: "",
      place: "Alpharetta, GA",
      summary: "",
      highlights: ["Analyzed BI practices and recommended a unified approach worth $2M in savings."],
      tags: [],
    },
    {
      dates: "2013 — 2017",
      title: "Attorney, IT Department",
      company: "FWMK Law Offices",
      link: "",
      place: "Tel Aviv",
      summary: "",
      highlights: [
        "Advised tech companies, founders, investors and boards; contributed to multiple capital raises and the launch of 10 startups.",
        "The only intern of 9 promoted to Associate after the Bar Exam.",
      ],
      tags: [],
    },
    {
      dates: "2011 — 2013",
      title: "Senior Analyst",
      company: "FINAL (algo-trading fintech)",
      link: "",
      place: "Herzliya",
      summary: "",
      highlights: [
        "Analyzed trading data to fix automation failures, adding $100K+ in annual revenue.",
        "Led API optimization that cut internal redundancies by 25%.",
      ],
      tags: [],
    },
    {
      dates: "2004 — 2009",
      title: "Captain (Seren), Sayeret Nahal",
      company: "Israel Defense Forces",
      link: "",
      place: "",
      summary: "Led a 120-person unit through complex, high-pressure operations, owning planning, training and leader development.",
      highlights: [],
      tags: [],
    },
  ],

  skills: [
    { group: "AI & Digital Transformation", items: ["Generative AI", "AI product development", "Chatbot integration", "API integration", "Workflow automation"] },
    { group: "Programming", items: ["Python", "SQL", "GitHub Actions", "Streamlit", "Claude"] },
    { group: "Data & Analytics", items: ["BigQuery", "GCP", "Tableau", "Power BI", "Adobe Analytics", "Qualtrics", "Quantum Metric", "Bazaarvoice"] },
    { group: "Modeling", items: ["Forecasting", "Regression", "Random Forest", "Valuation modeling", "Conjoint analysis"] },
    { group: "Delivery", items: ["Jira", "ServiceNow", "Smartsheet", "Miro", "Figma"] },
    { group: "Leadership", items: ["40-person org", "$15M P&L", "Executive influence", "Vendor strategy"] },
  ],

  education: [
    { dates: "2019", degree: "STEM MBA", school: "Carnegie Mellon University, Tepper School of Business", note: "Merit Scholarship" },
    { dates: "2013", degree: "LLB, Law — Cum Laude", school: "Reichman University", note: "" },
    { dates: "2013", degree: "BBA, Finance & Risk Management — Cum Laude", school: "Reichman University", note: "" },
  ],

  /* Your personal side. Use an emoji, or a photo like "images/hiking.jpg". */
  interestsHeading: "Beyond work",
  interests: [
    { emoji: "📈", photo: "", title: "Building AI side projects", text: "I design and ship my own AI-enabled stock valuation apps that combine financial models, generative AI, external APIs and a chatbot." },
    { emoji: "🔨", photo: "", title: "DIY building", text: "Hands-on home projects, from building a retaining wall to putting up a shiplap accent wall. Same mindset as work: plan it, measure twice, ship it." },
    { emoji: "👨‍👩‍👧‍👦", photo: "images/family.svg", title: "Family first", text: "Husband and dad of three young kids. They keep me curious, patient and very good at prioritizing." },
  ],

  contact: {
    heading: "Let's talk about what you're building.",
    text: "I'm happy to talk about data, digital and AI leadership roles. Email is the fastest way to reach me.",
    links: [
      { label: "Email me", url: "mailto:anveh1@gmail.com" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/anveh-turel-671a44b7" },
    ],
  },

  /* Visitor tracking — see README "Set up visitor tracking".
     Paste the two numbers Statcounter gives you. Leave "" to turn tracking off. */
  statcounter: {
    project: "",
    security: "",
  },
};
