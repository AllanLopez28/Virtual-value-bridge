import Image from 'next/image';
import { Phone, DollarSign, Check, ShieldCheck, Users, Star, ArrowRight, Ruler, Calculator, Monitor, Scale, FileText, Clock, Globe, Wrench, RefreshCw, Eye } from 'lucide-react';
import EstimatorForm from '@/app/services/estimating-support/EstimatorForm';
import LandingInteractions from '@/app/services/estimating-support/LandingInteractions';
import styles from '@/app/services/estimating-support/estimating.module.css';

const copy = [
  "Talk to our team",
  "+1 (718) 650-6786",
  "Bid more jobs with a remote ",
  "construction",
  " estimator.",
  "Stop turning down bids. Add a dedicated estimator or project-based takeoffs, working in your software and your time zone.",
  "Save up to 50–60% vs. an in-house U.S. estimator",
  "Free replacement, no long-term contract",
  "You stay in control.",
  " We handle the quantity takeoffs, plan markups and bid leveling — you review and set final pricing & margins.",
  "“Moving takeoffs and estimates out of our project team’s workload has been one of the best decisions we’ve made.”",
  "Moses G., Artistic Tile & Installation",
  "6 YEARS EXPERIENCE",
  "Carlos M.",
  "Estimating & Bid Support",
  "Trusted by businesses like yours",
  "MEET THE KIND OF ESTIMATOR YOU’LL WORK WITH",
  "Real experience, ",
  "in your software.",
  "EST",
  "6+",
  " years of experience",
  "Carlos M.",
  "Estimating & Bid Support",
  "“Accurate takeoffs, faster bids.”",
  "Xactimate",
  "Bluebeam Revu",
  "PlanSwift",
  "Procore",
  "Industry",
  "Roofing · Construction",
  "English",
  "C1 · Advanced",
  "Schedule",
  "Full-time · U.S. hours",
  "Handles",
  "Material takeoffs",
  "Bid preparation",
  "Cost comparisons",
  "Get profiles like this one ",
  "Example profile. Your estimator is selected for your trade, software and volume.",
  "Our estimators work in",
  "Xactimate",
  "Bluebeam Revu",
  "PlanSwift",
  "Procore",
  "AccuLynx",
  "Buildertrend",
  "Jobber",
  "Microsoft Excel",
  "WHAT YOUR ESTIMATOR HANDLES",
  "Faster bids, ",
  "without adding headcount.",
  "Full material takeoffs",
  "From blueprints, aerial roof reports and field notes.",
  "Line-item pricing",
  "Consistent, organized pricing on every estimate.",
  "Software-driven bid prep",
  "Bids built in the estimating software you already use.",
  "Vendor & material cost comparisons",
  "Supplier quotes gathered and compared before you price.",
  "CRM & proposal management",
  "Proposals built, sent and tracked in your CRM.",
  "More bids, same team",
  "Add estimating capacity without adding headcount.",
  "TWO WAYS TO WORK WITH US",
  "Pick the model that fits ",
  "your volume.",
  "DEDICATED",
  "Dedicated remote estimator",
  "A full-time estimator who learns your trade, your software and your pricing.",
  "Works your hours, only on your account",
  "Save up to 50–60% vs. an in-house U.S. hire",
  "Plugs into your team and CRM",
  "Get dedicated estimator profiles ",
  "FLEXIBLE",
  "Project-based takeoff support",
  "Takeoff help when bids pile up, without adding a full-time role.",
  "48–72 hr turnaround on takeoffs",
  "Same quality, in your software",
  "Get takeoff support options ",
  "CLIENT RESULT",
  "“It allows our team to stay focused on active projects, while estimates are completed faster and details stay organized.”",
  "Moses G.",
  " · Project Manager, Artistic Tile & Installation",
  "HOW IT WORKS",
  "Your estimator, in three steps.",
  "1",
  "Tell us what you need",
  "Your trade, your software and your bid volume.",
  "2",
  "Meet your estimator",
  "Hand-picked profiles that match your work. Review real work first.",
  "3",
  "Start bidding more",
  "Your estimator plugs into your team and tools.",
  "Get matched with an estimator ",
  "WHY VIRTUAL VALUE BRIDGE",
  "An estimator with ",
  "a team behind them.",
  "English + Spanish",
  "Talks with your team, clients and suppliers.",
  "Your time zone",
  "Works U.S. hours, so bids move while you’re on site.",
  "Trained on your stack",
  "Onboarded into your tools, pricing and SOPs.",
  "Backed by a team",
  "HR, supervisors and quality reviews behind every estimator.",
  "Free replacement",
  "Not the right fit? We replace them at no cost.",
  "See real work first",
  "Review real work before you commit to anything.",
  "QUESTIONS",
  "Before you hire.",
  "Who sets the final price on my bids?",
  "You do. We handle the quantity takeoffs, plan markups and bid leveling — you review and set final pricing & margins.",
  "How fast can I get started?",
  "We match you with an estimator in 48 hours. Project-based takeoffs have a 48–72 hour turnaround.",
  "Can they work from my plans and roof reports?",
  "Yes. Takeoffs are built from blueprints, aerial roof reports and field notes.",
  "Which estimating software do they use?",
  "Xactimate, Bluebeam Revu, PlanSwift, Procore, AccuLynx and Excel, among others. We match you with someone who knows your tools.",
  "Do I have to hire full-time?",
  "No. Choose a dedicated remote estimator, or project-based takeoff support when you need it.",
  "Is there a long-term contract?",
  "No. And if the fit isn’t right, we replace your estimator at no cost.",
  "Will they work during my business hours?",
  "Yes. Our estimators work U.S. hours, aligned with your team.",
  "How much does it cost?",
  "It depends on the model and hours you need. Most contractors save up to 50–60% compared with hiring an in-house U.S. estimator. Leave your details and we’ll send options that fit your volume.",
  "What happens after I submit the form?",
  "Our team reviews your answers and reaches out with estimator profiles that match your trade and software.",
  "Ready to bid on more jobs?",
  "Answer 3 quick questions and get estimator profiles that fit your trade.",
  "Get my estimator profiles ",
  "Call +1 (718) 650-6786",
  "© 2026 Virtual Value Bridge",
  "Privacy policy",
  "info@vvbridge.net",
  "Get estimator profiles "
];

export default function EstimatingLanding(){return <LandingInteractions className={styles.page}><header className="top">
<Image className="logo" src="/estimating/4378676b61b1.png" alt="Virtual Value Bridge" width={450} height={120} sizes="165px" preload /><a className="tel" href="tel:+17186506786" aria-label="Call our team at +1 (718) 650-6786">
<Phone aria-hidden="true" /><span>
<small>
{copy[0]}
</small>
{copy[1]}
</span>

</a>

</header>

<main>
<section className="hero2" id="top">
<div className="h2-grid" aria-hidden="true">

</div>
<div className="h2-glow" aria-hidden="true">

</div>
<div className="h2-copy">
<h1>
{copy[2]}<span className="kwrap">
<em id="kw">
{copy[3]}
</em>

</span>
{copy[4]}
</h1>
<p className="sub">
{copy[5]}
</p>
<ul className="h2-ticks">
<li className="hl">
<DollarSign aria-hidden="true" />{copy[6]}
</li>
<li>
<Check aria-hidden="true" />{copy[7]}
</li>

</ul>
<p className="h2-control">
<ShieldCheck aria-hidden="true" /><span>
<b>
{copy[8]}
</b>
{copy[9]}
</span>

</p>
<div className="h2-proof">
<span className="h2-avs">
<Image src="/estimating/681ca71001b1.jpg" alt="" width={1200} height={900} sizes="(max-width: 760px) 100vw, 600px" /><Image src="/estimating/5b3dc60400bd.jpg" alt="" width={1200} height={900} sizes="(max-width: 760px) 100vw, 600px" /><span>
<Users aria-hidden="true" />
</span>

</span>
<p>
{copy[10]}<b>
{copy[11]}
</b>

</p>

</div>

</div>
<div className="h2-stage">
<div className="h2-card" aria-hidden="true">
<Image src="/estimating/681ca71001b1.jpg" alt="" width={1200} height={900} sizes="(max-width: 760px) 100vw, 600px" /><span className="h2-tag">
{copy[12]}
</span>
<div className="h2-plate">
<b>
{copy[13]}
</b>
<span>
{copy[14]}
</span>

</div>

</div>
<div className="hero-form">
<EstimatorForm />
</div>

</div>

</section>
<section className="logos" aria-label="Businesses that work with us">
<p>
{copy[15]}
</p>
<ul>
<li>
<Image src="/estimating/0cf08bebf8b1.png" alt="Artistic Tile" width={1200} height={900} sizes="(max-width: 760px) 100vw, 600px" />
</li>
<li>
<Image src="/estimating/d9467c9bad9f.png" alt="Stone Edge Management" width={1200} height={900} sizes="(max-width: 760px) 100vw, 600px" />
</li>
<li>
<Image src="/estimating/b54b2648a039.png" alt="LM Accounting" width={1200} height={900} sizes="(max-width: 760px) 100vw, 600px" />
</li>
<li>
<Image src="/estimating/a9cb36e30457.png" alt="SB Decor" width={1200} height={900} sizes="(max-width: 760px) 100vw, 600px" />
</li>
<li>
<Image src="/estimating/0cf08bebf8b1.png" alt="Artistic Tile" width={1200} height={900} sizes="(max-width: 760px) 100vw, 600px" />
</li>
<li>
<Image src="/estimating/d9467c9bad9f.png" alt="Stone Edge Management" width={1200} height={900} sizes="(max-width: 760px) 100vw, 600px" />
</li>
<li>
<Image src="/estimating/b54b2648a039.png" alt="LM Accounting" width={1200} height={900} sizes="(max-width: 760px) 100vw, 600px" />
</li>
<li>
<Image src="/estimating/a9cb36e30457.png" alt="SB Decor" width={1200} height={900} sizes="(max-width: 760px) 100vw, 600px" />
</li>

</ul>

</section>
<section className="profile">
<div className="head">
<p className="eyebrow">
{copy[16]}
</p>
<h2>
{copy[17]}<em>
{copy[18]}
</em>

</h2>

</div>
<article className="pcard">
<div className="pc-photo">
<Image src="/estimating/681ca71001b1.jpg" alt="Example estimator profile" width={1200} height={900} sizes="(max-width: 760px) 100vw, 600px" /><span className="pc-code">
{copy[19]}
</span>
<span className="pc-exp">
<Star aria-hidden="true" /><b>
{copy[20]}
</b>
{copy[21]}
</span>

</div>
<div className="pc-body">
<h3>
{copy[22]}
</h3>
<p className="pc-role">
{copy[23]}
</p>
<p className="pc-quote">
{copy[24]}
</p>
<div className="pc-tools">
<span>
{copy[25]}
</span>
<span>
{copy[26]}
</span>
<span>
{copy[27]}
</span>
<span>
{copy[28]}
</span>

</div>
<div className="pc-stats">
<div>
<b>
{copy[29]}
</b>
<span>
{copy[30]}
</span>

</div>
<div>
<b>
{copy[31]}
</b>
<span>
{copy[32]}
</span>

</div>
<div>
<b>
{copy[33]}
</b>
<span>
{copy[34]}
</span>

</div>

</div>
<div className="pc-chips">
<small>
{copy[35]}
</small>
<span>
{copy[36]}
</span>
<span>
{copy[37]}
</span>
<span>
{copy[38]}
</span>

</div>
<a className="btn" href="#top" data-pick="A dedicated full-time estimator">
{copy[39]}<ArrowRight className="ar" aria-hidden="true" />
</a>
<p className="pc-note">
{copy[40]}
</p>

</div>

</article>

</section>
<section className="tools" aria-label="Software our estimators use">
<p>
{copy[41]}
</p>
<ul>
<li>
{copy[42]}
</li>
<li>
{copy[43]}
</li>
<li>
{copy[44]}
</li>
<li>
{copy[45]}
</li>
<li>
{copy[46]}
</li>
<li>
{copy[47]}
</li>
<li>
{copy[48]}
</li>
<li>
{copy[49]}
</li>

</ul>

</section>
<section className="tasks">
<div className="head">
<p className="eyebrow">
{copy[50]}
</p>
<h2>
{copy[51]}<em>
{copy[52]}
</em>

</h2>

</div>
<div className="tgrid">
<article>
<span className="ti">
<Ruler aria-hidden="true" />
</span>
<h3>
{copy[53]}
</h3>
<p>
{copy[54]}
</p>

</article>
<article>
<span className="ti">
<Calculator aria-hidden="true" />
</span>
<h3>
{copy[55]}
</h3>
<p>
{copy[56]}
</p>

</article>
<article>
<span className="ti">
<Monitor aria-hidden="true" />
</span>
<h3>
{copy[57]}
</h3>
<p>
{copy[58]}
</p>

</article>
<article>
<span className="ti">
<Scale aria-hidden="true" />
</span>
<h3>
{copy[59]}
</h3>
<p>
{copy[60]}
</p>

</article>
<article>
<span className="ti">
<FileText aria-hidden="true" />
</span>
<h3>
{copy[61]}
</h3>
<p>
{copy[62]}
</p>

</article>
<article>
<span className="ti">
<Clock aria-hidden="true" />
</span>
<h3>
{copy[63]}
</h3>
<p>
{copy[64]}
</p>

</article>

</div>

</section>
<section className="models">
<div className="head">
<p className="eyebrow">
{copy[65]}
</p>
<h2>
{copy[66]}<em>
{copy[67]}
</em>

</h2>

</div>
<div className="mgrid">
<article>
<span className="tag">
{copy[68]}
</span>
<h3>
{copy[69]}
</h3>
<p>
{copy[70]}
</p>
<ul>
<li>
<Check aria-hidden="true" />{copy[71]}
</li>
<li>
<Check aria-hidden="true" />{copy[72]}
</li>
<li>
<Check aria-hidden="true" />{copy[73]}
</li>

</ul>
<a className="btn" href="#top" data-pick="A dedicated full-time estimator">
{copy[74]}<ArrowRight className="ar" aria-hidden="true" />
</a>

</article>
<article>
<span className="tag lime">
{copy[75]}
</span>
<h3>
{copy[76]}
</h3>
<p>
{copy[77]}
</p>
<ul>
<li>
<Check aria-hidden="true" />{copy[78]}
</li>
<li>
<Check aria-hidden="true" />{copy[79]}
</li>

</ul>
<a className="btn o" href="#top" data-pick="Project-based takeoffs">
{copy[80]}<ArrowRight className="ar" aria-hidden="true" />
</a>

</article>

</div>

</section>
<section className="proof">
<div className="proof-card">
<div className="pl">
<Image src="/estimating/0cf08bebf8b1.png" alt="Artistic Tile logo" width={1200} height={900} sizes="(max-width: 760px) 100vw, 600px" />
</div>
<div>
<p className="eyebrow lime">
{copy[81]}
</p>
<blockquote>
{copy[82]}
</blockquote>
<p className="who">
<b>
{copy[83]}
</b>
{copy[84]}
</p>

</div>

</div>

</section>
<section className="how">
<div className="head">
<p className="eyebrow">
{copy[85]}
</p>
<h2>
{copy[86]}
</h2>

</div>
<ol>
<li>
<span>
{copy[87]}
</span>
<h3>
{copy[88]}
</h3>
<p>
{copy[89]}
</p>

</li>
<li>
<span>
{copy[90]}
</span>
<h3>
{copy[91]}
</h3>
<p>
{copy[92]}
</p>

</li>
<li>
<span>
{copy[93]}
</span>
<h3>
{copy[94]}
</h3>
<p>
{copy[95]}
</p>

</li>

</ol>
<div className="mid-cta">
<a className="btn" href="#top">
{copy[96]}<ArrowRight className="ar" aria-hidden="true" />
</a>

</div>

</section>
<section className="why">
<div className="why-img">
<Image src="/estimating/5b3dc60400bd.jpg" alt="Virtual Value Bridge specialists reviewing an estimate" width={1200} height={900} sizes="(max-width: 760px) 100vw, 600px" />
</div>
<div>
<div className="head left">
<p className="eyebrow">
{copy[97]}
</p>
<h2>
{copy[98]}<em>
{copy[99]}
</em>

</h2>

</div>
<div className="wgrid">
<article>
<span className="wi">
<Globe aria-hidden="true" />
</span>
<div>
<h3>
{copy[100]}
</h3>
<p>
{copy[101]}
</p>

</div>

</article>
<article>
<span className="wi">
<Clock aria-hidden="true" />
</span>
<div>
<h3>
{copy[102]}
</h3>
<p>
{copy[103]}
</p>

</div>

</article>
<article>
<span className="wi">
<Wrench aria-hidden="true" />
</span>
<div>
<h3>
{copy[104]}
</h3>
<p>
{copy[105]}
</p>

</div>

</article>
<article>
<span className="wi">
<Users aria-hidden="true" />
</span>
<div>
<h3>
{copy[106]}
</h3>
<p>
{copy[107]}
</p>

</div>

</article>
<article>
<span className="wi">
<RefreshCw aria-hidden="true" />
</span>
<div>
<h3>
{copy[108]}
</h3>
<p>
{copy[109]}
</p>

</div>

</article>
<article>
<span className="wi">
<Eye aria-hidden="true" />
</span>
<div>
<h3>
{copy[110]}
</h3>
<p>
{copy[111]}
</p>

</div>

</article>

</div>

</div>

</section>
<section className="faq">
<div className="head">
<p className="eyebrow">
{copy[112]}
</p>
<h2>
{copy[113]}
</h2>

</div>
<div className="flist">
<details>
<summary>
{copy[114]}<i aria-hidden="true">

</i>

</summary>
<p>
{copy[115]}
</p>

</details>
<details>
<summary>
{copy[116]}<i aria-hidden="true">

</i>

</summary>
<p>
{copy[117]}
</p>

</details>
<details>
<summary>
{copy[118]}<i aria-hidden="true">

</i>

</summary>
<p>
{copy[119]}
</p>

</details>
<details>
<summary>
{copy[120]}<i aria-hidden="true">

</i>

</summary>
<p>
{copy[121]}
</p>

</details>
<details>
<summary>
{copy[122]}<i aria-hidden="true">

</i>

</summary>
<p>
{copy[123]}
</p>

</details>
<details>
<summary>
{copy[124]}<i aria-hidden="true">

</i>

</summary>
<p>
{copy[125]}
</p>

</details>
<details>
<summary>
{copy[126]}<i aria-hidden="true">

</i>

</summary>
<p>
{copy[127]}
</p>

</details>
<details>
<summary>
{copy[128]}<i aria-hidden="true">

</i>

</summary>
<p>
{copy[129]}
</p>

</details>
<details>
<summary>
{copy[130]}<i aria-hidden="true">

</i>

</summary>
<p>
{copy[131]}
</p>

</details>

</div>

</section>
<section className="final">
<h2>
{copy[132]}
</h2>
<p>
{copy[133]}
</p>
<div className="final-cta">
<a className="btn lime" href="#top">
{copy[134]}<ArrowRight className="ar" aria-hidden="true" />
</a>
<a className="btn ghost" href="tel:+17186506786">
<Phone aria-hidden="true" />{copy[135]}
</a>

</div>

</section>

</main>

<footer className="foot">
<span>
{copy[136]}
</span>
<a href="https://www.vvbridge.net/privacy">
{copy[137]}
</a>
<a href="mailto:info@vvbridge.net">
{copy[138]}
</a>

</footer>

<a className="sticky" href="#top">
{copy[139]}<ArrowRight className="ar" aria-hidden="true" />
</a>
</LandingInteractions>;}
