import BookingButton from "@/components/redesign/BookingButton";
// Layout and content adapted from the supplied VVB_Website_v3.html.
import type { CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LeadForm from '@/components/redesign/LeadForm';
import { Star, ArrowRight, Pause, Play, MessageSquare, Heart, BriefcaseBusiness, ClipboardCheck, Search, ShieldCheck, Headphones, Check, Users, Clock, Calculator, House, ChartNoAxesCombined, Megaphone, CalendarDays, ListChecks, Quote, Mail, Phone, SquareArrowOutUpRight, Globe, Hammer, CircleCheck, Grid2X2, Fan, Droplet, Zap, Ruler, ReceiptText, Monitor, FileText, RefreshCw, Eye, Building2, Store, KeyRound, Inbox, Wrench, Banknote, DoorOpen, TriangleAlert } from 'lucide-react';

export function HomeDesign() {
 const copy = [
  "",
  "Great talent.",
  "Real impact.",
  "Real results.",
  "Real teamwork.",
  "Real impact.",
  "Bilingual specialists who work U.S. hours and become part of your day-to-day team. Hand-picked for your industry, trained on your tools and backed by our on-site team in San Salvador.",
  "Book a call ",
  "↗",
  "200+",
  "specialists",
  "100%",
  "bilingual",
  "CST",
  "time zone",
  "People make the difference.",
  "Find the specialist your business needs.",
  "Trusted by ",
  "businesses like yours",
  "A CLOSER LOOK AT OUR TALENT",
  "Specialists who fit",
  "the way you work.",
  "Explore sample role profiles, their focus areas, and the tools they may use to support your operation.",
  "EST",
  "6+",
  " years of experience",
  "Estimating & Bid Support",
  "Dedicated remote estimator",
  "Industry",
  "Roofing & Construction",
  "Experience",
  "6+ years",
  "Language",
  "English + Spanish",
  "Tools",
  "Xactimate",
  "Bluebeam Revu",
  "PlanSwift",
  "Procore",
  "Handles",
  "Material takeoffs",
  "Bid preparation",
  "Cost comparisons",
  "Explore this role",
  "Book a call",
  "VA",
  "4+",
  " years of experience",
  "Virtual Assistant",
  "Administrative support specialist",
  "Industry",
  "Administrative Support",
  "Experience",
  "4+ years",
  "Language",
  "English + Spanish",
  "Tools",
  "Google Workspace",
  "Microsoft Office",
  "Calendly",
  "Handles",
  "Calendar management",
  "Inbox triage",
  "Document prep",
  "Explore this role",
  "Book a call",
  "PM",
  "5+",
  " years of experience",
  "Property Manager",
  "Property management specialist",
  "Industry",
  "Property Operations",
  "Experience",
  "5+ years",
  "Language",
  "English + Spanish",
  "Tools",
  "ManageGo",
  "AppFolio",
  "Google Workspace",
  "Handles",
  "Tenant support",
  "Leasing admin",
  "Work orders",
  "Explore this role",
  "Book a call",
  "Meet all our agents ",
  "THE VIRTUAL VALUE BRIDGE APPROACH",
  "More than a resume.",
  "A great fit.",
  "We look at the person, the skills, and the needs of your business to help create a working relationship that lasts. Here’s how we work together:",
  "01",
  "GETTING STARTED",
  "Tell us what you need",
  "Share the role you need.",
  "02",
  "THE MATCH",
  "Meet your specialist",
  "Hand-picked for your industry.",
  "03",
  "WORKING TOGETHER",
  "Watch your business run smoother",
  "Plugs right into your team.",
  "Book a call ",
  "HOW IT WORKS",
  "01",
  "GETTING",
  "STARTED",
  "02",
  "THE",
  "MATCH",
  "03",
  "WORKING",
  "TOGETHER",
  "1",
  "Tell us what you need",
  "STEP 01 · GETTING STARTED",
  "Your role and tools",
  "Talk to a founder",
  "ON-SITE SUPPORT",
  "Your specialist is never ",
  "on their own.",
  "Every specialist works from our San Salvador office, backed by an on-site team.",
  "HR",
  "Hiring, onboarding and people support",
  "Supervisors",
  "Day-to-day guidance and follow-up",
  "Quality",
  "Reviews that keep the work consistent",
  "EXPLORE BY SPECIALTY",
  "What kind of support",
  "are you looking for?",
  "Pick the role you need and meet a bilingual specialist who fits the way you work.",
  "All roles",
  "Construction",
  "Property",
  "Finance",
  "Marketing",
  "Operations",
  "CONSTRUCTION",
  "Estimating & Bid Support",
  "Takeoff assistance, bid preparation, project documentation.",
  "Learn more ",
  "PROPERTY",
  "Leasing & Tenant Support",
  "Tenant requests, leasing administration, maintenance follow-up.",
  "Learn more ",
  "FINANCE",
  "Bookkeeping Assistant",
  "Accounts payable, reconciliations, and reporting support.",
  "Learn more ",
  "MARKETING",
  "Digital Marketing Assistant",
  "Social media, campaign coordination, and content support.",
  "Learn more ",
  "OPERATIONS",
  "Administrative Assistant",
  "Scheduling, inbox support, data entry, and research.",
  "Learn more ",
  "OPERATIONS",
  "Project Coordinator",
  "Task tracking, team follow-ups, and project organization.",
  "Learn more ",
  "San Salvador, El Salvador",
  "200+",
  "SPECIALISTS",
  "100%",
  "BILINGUAL",
  "CST",
  "TIME ZONE",
  "ABOUT VIRTUAL VALUE BRIDGE",
  "A boutique team, ",
  "founder-led",
  " from day one.",
  "We started Virtual Value Bridge to stay boutique, where big BPOs can’t. Every specialist is hand-picked, trained on your stack, and backed by founders who answer your messages.",
  "Hand-picked specialists, not seat-fillers",
  "Real onboarding into your tools and SOPs",
  "Direct line to founders, always",
  "Meet the team ",
  "MORE WINS",
  "Built on outcomes,",
  "not promises.",
  "What business owners and managers say about working with their Virtual Value Bridge specialists.",
  "FEATURED CASE STUDY",
  "“Bringing on support for our administrative and project needs has made a big difference in how we operate. It allows our team to stay focused on active projects, while estimates are completed faster and details stay organized. The team at Virtual Value Bridge integrated seamlessly and has become a reliable extension of our business.”",
  "M",
  "Moses G.",
  "Project Manager, Artistic Tile & Installation",
  "TENANT RESPONSE",
  "18h",
  "2h",
  "↑ Improved",
  "MONTH-END CLOSE",
  "14d",
  "3d",
  "↑ Improved",
  "NEW ADMIN HIRES",
  "4",
  "0",
  "↑ Improved",
  "OWNER REPORTS ON TIME",
  "60%",
  "100%",
  "↑ Improved",
  "Focus on customers & growth",
  "“Running a screen printing and embroidery business means staying on top of countless moving parts. Having our entire back office managed by their team has made a tremendous difference. They keep our orders and scheduling organized, handle invoicing and collections, and take care of our monthly accounting, so everything runs smoothly behind the scenes. It’s given us more time to focus on our customers and growing our business. They’ve become a trusted extension of our team, and we couldn’t imagine operating without their support.”",
  "S",
  "Sam R.",
  "Owner, SR Deco",
  "Accurate & on-time books",
  "“As the accountant, having their team handle our bookkeeping has made a huge difference. Everything is coded correctly, our financial documents are organized and easy to find, and bank reconciliations are always completed on time. The consistency and attention to detail make month-end close much smoother and give me confidence that our books are accurate. It’s dependable support that truly makes my job easier.”",
  "L",
  "Luis M.",
  "Owner, L&M Accounting",
  "CONTACT",
  "Let’s connect.",
  "Interested in outsourcing support, improving operations, or scaling your team with Virtual Value Bridge? Share a few details and our team will reach out to explore how we can help.",
  "Looking for career opportunities? ",
  "Click here.",
  "Email",
  "info@vvbridge.net",
  "Click here to call: ",
  "+1 (718) 650-6786",
  "Click here to text: ",
  "+1 (718) 650-6786",
  "LinkedIn",
  "Virtual Value Bridge",
  "Prefer to book directly?",
  "Pick a 30-minute slot that works for you. Founder-led, no sales pitch.",
  "Open calendar →",
  "US +1",
  "CA +1",
  "MX +52",
  "GB +44",
  "ES +34",
  "CO +57",
  "SV +503",
  "GT +502",
  "HN +504",
  "CR +506",
  "PA +507",
  "AR +54",
  "CL +56",
  "PE +51",
  "Other",
  "By submitting this form, I agree to be contacted by Virtual Value Bridge via any of the methods shared above.",
  "Submit →",
  "Your information is secure and will not be shared."
];
 return (
<div className="view" id="home">

<section className="intro hero-anim screenshot-hero">

<div className="intro-copy">

<p className="eyebrow">
{copy[0]}
</p>

<h1 aria-label="Great talent. Real impact.">
<span className="ln" aria-hidden="true"><span>{copy[1]}</span></span><span className="ln" aria-hidden="true"><em className="rot"><span className="rot-track"><span>{copy[2]}</span><span>{copy[3]}</span><span>{copy[4]}</span><span>{copy[5]}</span></span></em></span>
</h1>

<p className="intro-text">
{copy[6]}
</p>
<BookingButton className="primary-btn">{copy[7]}<span>{copy[8]}</span></BookingButton>
<ul className="hero-stats">

<li>
<b>{copy[9]}</b><span>{copy[10]}</span>
</li>

<li>
<b>{copy[11]}</b><span>{copy[12]}</span>
</li>

<li>
<b>{copy[13]}</b><span>{copy[14]}</span>
</li>

</ul>

</div>

<div className="intro-visual">
<Image src="/image(20261111-140007).png" alt="Sample portrait of a bilingual virtual specialist" width={1200} height={900} sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 600px" preload />
<div className="visual-caption">
<b>{copy[15]}</b><span>{copy[16]}</span>
</div>

<div className="lime-shape">

</div>

</div>

</section>

<section className="trusted" aria-label="Trusted by businesses like yours">

<p className="trusted-title">
<span className="trusted-line" aria-hidden="true"></span><span>{copy[17]}<b>{copy[18]}</b></span><span className="trusted-line" aria-hidden="true"></span>
</p>

<div className="logo-marquee">

<ul className="logo-track">

<li className="logo-item sq">
<span className="lg lg-0" role="img" aria-label="SB Decor"></span>
</li>

<li className="logo-item sq">
<span className="lg lg-1" role="img" aria-label="LM Accounting"></span>
</li>

<li className="logo-item wide">
<span className="lg lg-2" role="img" aria-label="Stone Edge Management"></span>
</li>

<li className="logo-item wide">
<span className="lg lg-3" role="img" aria-label="Artistic Tile"></span>
</li>

<li className="logo-item sq">
<span className="lg lg-0" aria-hidden="true"></span>
</li>

<li className="logo-item sq">
<span className="lg lg-1" aria-hidden="true"></span>
</li>

<li className="logo-item wide">
<span className="lg lg-2" aria-hidden="true"></span>
</li>

<li className="logo-item wide">
<span className="lg lg-3" aria-hidden="true"></span>
</li>

<li className="logo-item sq">
<span className="lg lg-0" aria-hidden="true"></span>
</li>

<li className="logo-item sq">
<span className="lg lg-1" aria-hidden="true"></span>
</li>

<li className="logo-item wide">
<span className="lg lg-2" aria-hidden="true"></span>
</li>

<li className="logo-item wide">
<span className="lg lg-3" aria-hidden="true"></span>
</li>

<li className="logo-item sq">
<span className="lg lg-0" aria-hidden="true"></span>
</li>

<li className="logo-item sq">
<span className="lg lg-1" aria-hidden="true"></span>
</li>

<li className="logo-item wide">
<span className="lg lg-2" aria-hidden="true"></span>
</li>

<li className="logo-item wide">
<span className="lg lg-3" aria-hidden="true"></span>
</li>

</ul>

</div>

</section>

<section className="talent-section">

<div className="section-head">

<div>

<p className="eyebrow">
{copy[19]}
</p>

<h2>
{copy[20]}<br />{copy[21]}
</h2>

</div>

<p>
{copy[22]}
</p>

</div>

<div className="spec-grid">

<article className="spec-card">

<div className="agent-photo spec-photo">
<Image src="/redesign/681ca71001b1.jpg" alt="Sample estimating and bid support specialist" width={1200} height={900} sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 600px" /><span className="spec-tag">{copy[23]}</span><span className="spec-exp"><Star aria-hidden="true" /><b>{copy[24]}</b>{copy[25]}</span>
</div>

<div className="spec-head">

<h3>
{copy[26]}
</h3>

<p>
{copy[27]}
</p>

</div>

<div className="spec-row spec-stats">

<div>
<b>{copy[28]}</b><span>{copy[29]}</span>
</div>

<div>
<b>{copy[30]}</b><span>{copy[31]}</span>
</div>

<div>
<b>{copy[32]}</b><span>{copy[33]}</span>
</div>

</div>

<div className="spec-row spec-tools">
<small>{copy[34]}</small>
<p>
<span>{copy[35]}</span><span>{copy[36]}</span><span>{copy[37]}</span><span>{copy[38]}</span>
</p>

</div>

<div className="spec-row spec-chips">
<small>{copy[39]}</small>
<p>
<span>{copy[40]}</span><span>{copy[41]}</span><span>{copy[42]}</span>
</p>

</div>

<div className="spec-row spec-actions">
<Link className="spec-btn spec-card-link" href="/services/estimating-support" aria-label="Explore Estimating & Bid Support">{copy[43]}</Link><BookingButton className="spec-btn-o">{copy[44]}</BookingButton>
</div>

</article>

<article className="spec-card">

<div className="agent-photo spec-photo">
<Image src="/redesign/7e024a8f36ca.jpg" alt="Sample virtual assistant" width={1200} height={900} sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 600px" /><span className="spec-tag">{copy[45]}</span><span className="spec-exp"><Star aria-hidden="true" /><b>{copy[46]}</b>{copy[47]}</span>
</div>

<div className="spec-head">

<h3>
{copy[48]}
</h3>

<p>
{copy[49]}
</p>

</div>

<div className="spec-row spec-stats">

<div>
<b>{copy[50]}</b><span>{copy[51]}</span>
</div>

<div>
<b>{copy[52]}</b><span>{copy[53]}</span>
</div>

<div>
<b>{copy[54]}</b><span>{copy[55]}</span>
</div>

</div>

<div className="spec-row spec-tools">
<small>{copy[56]}</small>
<p>
<span>{copy[57]}</span><span>{copy[58]}</span><span>{copy[59]}</span>
</p>

</div>

<div className="spec-row spec-chips">
<small>{copy[60]}</small>
<p>
<span>{copy[61]}</span><span>{copy[62]}</span><span>{copy[63]}</span>
</p>

</div>

<div className="spec-row spec-actions">
<Link className="spec-btn spec-card-link" href="/services/virtual-assistant" aria-label="Explore Virtual Assistant">{copy[64]}</Link><BookingButton className="spec-btn-o">{copy[65]}</BookingButton>
</div>

</article>

<article className="spec-card">

<div className="agent-photo spec-photo">
<Image src="/redesign/d0c8d4068aaa.jpg" alt="Sample property manager" width={1200} height={900} sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 600px" /><span className="spec-tag">{copy[66]}</span><span className="spec-exp"><Star aria-hidden="true" /><b>{copy[67]}</b>{copy[68]}</span>
</div>

<div className="spec-head">

<h3>
{copy[69]}
</h3>

<p>
{copy[70]}
</p>

</div>

<div className="spec-row spec-stats">

<div>
<b>{copy[71]}</b><span>{copy[72]}</span>
</div>

<div>
<b>{copy[73]}</b><span>{copy[74]}</span>
</div>

<div>
<b>{copy[75]}</b><span>{copy[76]}</span>
</div>

</div>

<div className="spec-row spec-tools">
<small>{copy[77]}</small>
<p>
<span>{copy[78]}</span><span>{copy[79]}</span><span>{copy[80]}</span>
</p>

</div>

<div className="spec-row spec-chips">
<small>{copy[81]}</small>
<p>
<span>{copy[82]}</span><span>{copy[83]}</span><span>{copy[84]}</span>
</p>

</div>

<div className="spec-row spec-actions">
<Link className="spec-btn spec-card-link" href="/services/property-management" aria-label="Explore Property Management">{copy[85]}</Link><BookingButton className="spec-btn-o">{copy[86]}</BookingButton>
</div>

</article>

</div>

<div className="spec-more">
<Link href="/our-agents">{copy[87]}<ArrowRight className="ic-arrow" aria-hidden="true" /></Link>
</div>

</section>

<section className="approach" id="how-it-works">

<div className="approach-copy">

<p className="eyebrow">
{copy[88]}
</p>

<h2>
{copy[89]}<br /><em>{copy[90]}</em>
</h2>

<p className="approach-text">
{copy[91]}
</p>

<ol className="hiw-steps">

<li>
<button type="button" data-step="0" aria-pressed="true" className="is-active"><span className="hiw-n">{copy[92]}</span><span className="hiw-txt"><small>{copy[93]}</small><b>{copy[94]}</b><em>{copy[95]}</em></span><i className="hiw-prog" aria-hidden="true"><i></i></i></button>
</li>

<li>
<button type="button" data-step="1" aria-pressed="false"><span className="hiw-n">{copy[96]}</span><span className="hiw-txt"><small>{copy[97]}</small><b>{copy[98]}</b><em>{copy[99]}</em></span><i className="hiw-prog" aria-hidden="true"><i></i></i></button>
</li>

<li>
<button type="button" data-step="2" aria-pressed="false"><span className="hiw-n">{copy[100]}</span><span className="hiw-txt"><small>{copy[101]}</small><b>{copy[102]}</b><em>{copy[103]}</em></span><i className="hiw-prog" aria-hidden="true"><i></i></i></button>
</li>

</ol>
<BookingButton className="pill-navy">{copy[104]}<ArrowRight className="ic-arrow" aria-hidden="true" /></BookingButton>
</div>

<div className="fit-board hiw" id="hiw" data-step="0">
<span className="fit-back" aria-hidden="true"></span>
<div className="fit-card">

<div className="hiw-top">
<span className="hiw-label"><i></i>{copy[105]}</span><button type="button" className="hiw-toggle" aria-label="Pause animation"><Pause className="i-pause" aria-hidden="true" /><Play className="i-play" aria-hidden="true" /></button>
</div>

<div className="fit-arc">
<svg viewBox="0 0 440 220" aria-hidden="true"><defs><mask id="hiwMask" maskUnits="userSpaceOnUse" x="-20" y="-60" width="480" height="300"><path className="hiw-mask" d="M70 165 Q220 -40 370 165" pathLength="100"></path></mask></defs><path className="hiw-base" d="M70 165 Q220 -40 370 165"></path><path className="hiw-fill" d="M70 165 Q220 -40 370 165" mask="url(#hiwMask)"></path><circle className="hiw-dot" r="8" cx="70" cy="165"></circle></svg><button type="button" className="hiw-node n1 is-active" data-step="0" aria-label="Step 1: Tell us what you need"><span>{copy[106]}</span>{copy[107]}<br />{copy[108]}</button><button type="button" className="hiw-node n2" data-step="1" aria-label="Step 2: Meet your specialist"><span>{copy[109]}</span>{copy[110]}<br />{copy[111]}</button><button type="button" className="hiw-node n3" data-step="2" aria-label="Step 3: Watch your business run smoother"><span>{copy[112]}</span>{copy[113]}<br />{copy[114]}</button>
<div className="hiw-center" aria-live="polite">
<b className="hiw-num" aria-hidden="true">{copy[115]}</b><span className="hiw-title">{copy[116]}</span>
</div>

</div>

<div className="hiw-bottom">
<span className="fit-blob" aria-hidden="true"></span>
<div className="fit-person hiw-person" aria-hidden="true">
<Star className="doodle d-star" aria-hidden="true" /><MessageSquare className="doodle d-bubble" aria-hidden="true" /><Heart className="doodle d-heart" aria-hidden="true" />
<div className="fit-avatar hiw-avatar">
<span className="hiw-ph"><BriefcaseBusiness aria-hidden="true" /></span><Image className="hiw-main" alt="" src="/redesign/1b11547f4755.jpg" width={1200} height={900} sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 600px" />
</div>
<span className="hiw-icons"><span className="hiw-ico s0 p0"><ClipboardCheck strokeWidth="2" aria-hidden="true" /></span><span className="hiw-ico s0 p1"><ClipboardCheck strokeWidth="2" aria-hidden="true" /></span><span className="hiw-ico s0 p2"><MessageSquare strokeWidth="2" aria-hidden="true" /></span><span className="hiw-ico s1 p0"><Search strokeWidth="2" aria-hidden="true" /></span><span className="hiw-ico s1 p1"><ShieldCheck strokeWidth="2" aria-hidden="true" /></span><span className="hiw-ico s1 p2"><Star strokeWidth="2" aria-hidden="true" /></span><span className="hiw-ico s2 p0"><ClipboardCheck strokeWidth="2" aria-hidden="true" /></span><span className="hiw-ico s2 p1"><ClipboardCheck strokeWidth="2" aria-hidden="true" /></span><span className="hiw-ico s2 p2"><Headphones strokeWidth="2" aria-hidden="true" /></span></span><span className="hiw-team"><Image alt="" data-src-from="0" src="/redesign/681ca71001b1.jpg" width={1200} height={900} sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 600px" /><Image alt="" data-src-from="1" src="/redesign/7e024a8f36ca.jpg" width={1200} height={900} sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 600px" /><Image alt="" data-src-from="2" src="/redesign/d0c8d4068aaa.jpg" width={1200} height={900} sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 600px" /></span>
</div>

<div className="hiw-panel">
<small className="hiw-phase">{copy[117]}</small>
<ul className="hiw-list">

<li style={{"--d":"0"} as CSSProperties}>
<Check aria-hidden="true" /><span>{copy[118]}</span>
</li>

<li style={{"--d":"1"} as CSSProperties}>
<Check aria-hidden="true" /><span>{copy[119]}</span>
</li>

</ul>
<span className="hiw-timer" aria-hidden="true"><i></i></span>
</div>

</div>

</div>

</div>

</section>

<section className="onsite" aria-labelledby="onsite-title">

<div className="onsite-copy">

<p className="eyebrow">
{copy[120]}
</p>

<h2 id="onsite-title">
{copy[121]}<em>{copy[122]}</em>
</h2>

<p>
{copy[123]}
</p>

</div>

<div className="onsite-grid">

<article>
<span className="onsite-ic"><Users strokeWidth="1.8" aria-hidden="true" /></span>
<div>

<h3>
{copy[124]}
</h3>

<p>
{copy[125]}
</p>

</div>

</article>

<article>
<span className="onsite-ic"><Clock strokeWidth="1.8" aria-hidden="true" /></span>
<div>

<h3>
{copy[126]}
</h3>

<p>
{copy[127]}
</p>

</div>

</article>

<article>
<span className="onsite-ic"><ShieldCheck strokeWidth="1.8" aria-hidden="true" /></span>
<div>

<h3>
{copy[128]}
</h3>

<p>
{copy[129]}
</p>

</div>

</article>

</div>

</section>

<section className="support" id="roles">
<span className="support-ring" aria-hidden="true"></span>
<div className="support-head">

<div className="support-title">

<p className="eyebrow underline">
{copy[130]}
</p>

<h2>
{copy[131]}<br />{copy[132]}
</h2>

<p className="support-lede">
{copy[133]}
</p>

</div>

<div className="role-filters">
<button className="active" data-filter="all">{copy[134]}</button><button data-filter="construction">{copy[135]}</button><button data-filter="property">{copy[136]}</button><button data-filter="finance">{copy[137]}</button><button data-filter="marketing">{copy[138]}</button><button data-filter="operations">{copy[139]}</button>
</div>

</div>

<div className="support-wrap">

<div className="support-grid">

<article data-type="construction">

<div className="support-top">
<span className="support-icon"><Calculator strokeWidth="1.8" aria-hidden="true" /></span><small>{copy[140]}</small>
</div>

<h3>
{copy[141]}
</h3>

<p>
{copy[142]}
</p>
<Link className="learn" href="/services/estimating-support">{copy[143]}<ArrowRight className="ic-arrow" aria-hidden="true" /></Link>
</article>

<article data-type="property">

<div className="support-top">
<span className="support-icon"><House strokeWidth="1.8" aria-hidden="true" /></span><small>{copy[144]}</small>
</div>

<h3>
{copy[145]}
</h3>

<p>
{copy[146]}
</p>
<Link className="learn" href="/services/property-management">{copy[147]}<ArrowRight className="ic-arrow" aria-hidden="true" /></Link>
</article>

<article data-type="finance">

<div className="support-top">
<span className="support-icon"><ChartNoAxesCombined strokeWidth="1.8" aria-hidden="true" /></span><small>{copy[148]}</small>
</div>

<h3>
{copy[149]}
</h3>

<p>
{copy[150]}
</p>
<Link className="learn" href="/services/bookkeeping-accounting">{copy[151]}<ArrowRight className="ic-arrow" aria-hidden="true" /></Link>
</article>

<article data-type="marketing">

<div className="support-top">
<span className="support-icon"><Megaphone strokeWidth="1.8" aria-hidden="true" /></span><small>{copy[152]}</small>
</div>

<h3>
{copy[153]}
</h3>

<p>
{copy[154]}
</p>
<Link className="learn" href="/services/marketing-support">{copy[155]}<ArrowRight className="ic-arrow" aria-hidden="true" /></Link>
</article>

<article data-type="operations">

<div className="support-top">
<span className="support-icon"><CalendarDays strokeWidth="1.8" aria-hidden="true" /></span><small>{copy[156]}</small>
</div>

<h3>
{copy[157]}
</h3>

<p>
{copy[158]}
</p>
<Link className="learn" href="/services/virtual-assistant">{copy[159]}<ArrowRight className="ic-arrow" aria-hidden="true" /></Link>
</article>

<article data-type="operations">

<div className="support-top">
<span className="support-icon"><ListChecks strokeWidth="1.8" aria-hidden="true" /></span><small>{copy[160]}</small>
</div>

<h3>
{copy[161]}
</h3>

<p>
{copy[162]}
</p>
<Link className="learn" href="/services/project-coordination">{copy[163]}<ArrowRight className="ic-arrow" aria-hidden="true" /></Link>
</article>

</div>

</div>

</section>

<section className="about" id="about">

<div className="about-media">

<div className="about-photo">
<Image src="/meeting.png" alt="Virtual value bridge team meeting in San Salvador" width={1200} height={900} sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 600px" /><span className="about-place"><ClipboardCheck aria-hidden="true" />{copy[164]}</span>
</div>

<div className="about-stats">

<div>
<b>{copy[165]}</b><span>{copy[166]}</span>
</div>

<div>
<b>{copy[167]}</b><span>{copy[168]}</span>
</div>

<div>
<b>{copy[169]}</b><span>{copy[170]}</span>
</div>

</div>

</div>

<div className="about-copy">

<p className="eyebrow">
{copy[171]}
</p>

<h2>
{copy[172]}<span className="hl">{copy[173]}</span>{copy[174]}
</h2>

<p className="about-text">
{copy[175]}
</p>

<ul className="checks">

<li>
<Check aria-hidden="true" />{copy[176]}
</li>

<li>
<Check aria-hidden="true" />{copy[177]}
</li>

<li>
<Check aria-hidden="true" />{copy[178]}
</li>

</ul>
<Link className="pill-navy" href="/team">{copy[179]}<ArrowRight className="ic-arrow" aria-hidden="true" /></Link>
</div>

</section>

<section className="stories" id="stories">

<div className="stories-head">

<div>

<p className="eyebrow">
{copy[180]}
</p>

<h2>
{copy[181]}<br /><span className="hl-full">{copy[182]}</span>
</h2>

</div>

<p>
{copy[183]}
</p>

</div>

<article className="case">

<div className="case-quote">
<span className="case-tag">{copy[184]}</span><Quote className="q" aria-hidden="true" />
<blockquote>
{copy[185]}
</blockquote>

<div className="story-author">
<span className="avatar av-lime">{copy[186]}</span>
<div>
<b>{copy[187]}</b><span>{copy[188]}</span>
</div>

</div>

</div>

<div className="case-stats">

<div className="case-stat">
<small>{copy[189]}</small>
<p>
<s>{copy[190]}</s><b>{copy[191]}</b>
</p>
<em>{copy[192]}</em>
</div>

<div className="case-stat">
<small>{copy[193]}</small>
<p>
<s>{copy[194]}</s><b>{copy[195]}</b>
</p>
<em>{copy[196]}</em>
</div>

<div className="case-stat">
<small>{copy[197]}</small>
<p>
<s>{copy[198]}</s><b>{copy[199]}</b>
</p>
<em>{copy[200]}</em>
</div>

<div className="case-stat">
<small>{copy[201]}</small>
<p>
<s>{copy[202]}</s><b>{copy[203]}</b>
</p>
<em>{copy[204]}</em>
</div>

</div>

</article>

<div className="story-grid">

<article className="story">

<div className="story-top">
<span className="stars" aria-label="5 out of 5 stars"><Star aria-hidden="true" /><Star aria-hidden="true" /><Star aria-hidden="true" /><Star aria-hidden="true" /><Star aria-hidden="true" /></span><span className="story-chip">{copy[205]}</span>
</div>

<blockquote>
{copy[206]}
</blockquote>

<div className="story-author">
<span className="avatar av-orange">{copy[207]}</span>
<div>
<b>{copy[208]}</b><span>{copy[209]}</span>
</div>

</div>

</article>

<article className="story">

<div className="story-top">
<span className="stars" aria-label="5 out of 5 stars"><Star aria-hidden="true" /><Star aria-hidden="true" /><Star aria-hidden="true" /><Star aria-hidden="true" /><Star aria-hidden="true" /></span><span className="story-chip">{copy[210]}</span>
</div>

<blockquote>
{copy[211]}
</blockquote>

<div className="story-author">
<span className="avatar av-green">{copy[212]}</span>
<div>
<b>{copy[213]}</b><span>{copy[214]}</span>
</div>

</div>

</article>

</div>

</section>

<section className="contact" id="contact">

<div className="contact-info">

<p className="eyebrow">
{copy[215]}
</p>

<h2>
{copy[216]}
</h2>

<p className="contact-text">
{copy[217]}
</p>

<p className="contact-careers">
{copy[218]}<Link href="/careers">{copy[219]}</Link>
</p>
<a className="contact-row" href="mailto:info@vvbridge.net"><span className="contact-ic"><Mail aria-hidden="true" /></span><span><small>{copy[220]}</small><b>{copy[221]}</b></span></a><a className="contact-pill" href="tel:+17186506786"><Phone aria-hidden="true" /><span>{copy[222]}<b>{copy[223]}</b></span></a><a className="contact-pill" href="sms:+17186506786"><MessageSquare aria-hidden="true" /><span>{copy[224]}<b>{copy[225]}</b></span></a><a className="contact-row" href="https://www.linkedin.com/company/virtual-value-bridge"><span className="contact-ic"><SquareArrowOutUpRight aria-hidden="true" /></span><span><small>{copy[226]}</small><b>{copy[227]}</b></span></a>
<div className="book-card">
<span className="book-ic"><CalendarDays aria-hidden="true" /></span>
<h3>
{copy[228]}
</h3>

<p>
{copy[229]}
</p>
<BookingButton className="btn-lime">{copy[230]}</BookingButton>
</div>

</div>

<LeadForm className="contact-form" id="contact-form">
<input name="name" placeholder="Name *" aria-label="Name" required /><input name="company" placeholder="Company *" aria-label="Company" required /><input name="email" type="email" placeholder="Email *" aria-label="Email" required />
<div className="phone-row">
<select name="country" aria-label="Country code"><option>{copy[231]}</option><option>{copy[232]}</option><option>{copy[233]}</option><option>{copy[234]}</option><option>{copy[235]}</option><option>{copy[236]}</option><option>{copy[237]}</option><option>{copy[238]}</option><option>{copy[239]}</option><option>{copy[240]}</option><option>{copy[241]}</option><option>{copy[242]}</option><option>{copy[243]}</option><option>{copy[244]}</option><option>{copy[245]}</option></select><input name="phone" type="tel" placeholder="Phone *" aria-label="Phone" required />
</div>
<input name="support" placeholder="What kind of support are you looking for? *" aria-label="What kind of support are you looking for?" required /><textarea name="process" rows={4} placeholder="What process would you like to outsource? *" aria-label="What process would you like to outsource?" required></textarea>
<p className="consent">
{copy[246]}
</p>
<button type="submit">{copy[247]}</button>
<p className="secure">
<ShieldCheck aria-hidden="true" />{copy[248]}
</p>

</LeadForm>

</section>

</div>
);
}

export function AgentsDesign() {
 const copy = [
  "OUR AGENTS",
  "Meet the specialists ",
  "behind your team.",
  "Every Virtual Value Bridge specialist is hand-picked for your industry and tools, bilingual in English and Spanish, and backed by our on-site team in San Salvador.",
  "200+",
  "specialists",
  "100%",
  "bilingual",
  "CST",
  "time zone",
  "Book a call ",
  "Browse agents",
  "FIN",
  "Roxana Alvarado",
  "Bookkeeping & Accounting Specialist",
  "FIN",
  "Roxana Alvarado",
  "Bookkeeping & Accounting Specialist",
  "“Clean books, no month-end surprises.”",
  "Experience",
  "8 years",
  "English",
  "C1 · Advanced",
  "Industries",
  "Accounting firms · Small business",
  "Tools",
  "QuickBooks Online, Xero, Excel",
  "View full profile ",
  "Flip",
  "card",
  "FIN",
  "CX",
  "OPS",
  "MKT",
  "SAL",
  "EST",
  "VA",
  "PM",
  "OUR STANDARD",
  "Hand-picked. Bilingual. ",
  "Never on their own.",
  "Every specialist comes with:",
  "01",
  "English + Spanish",
  "Bilingual communication with your team and your customers.",
  "02",
  "Trained on your stack",
  "Real onboarding into your tools and SOPs.",
  "03",
  "Your time zone",
  "Working CST hours, aligned with U.S. teams.",
  "04",
  "Hand-picked for you",
  "Selected for your industry, tools and workflow.",
  "Low risk from day one:",
  " see real work before you commit, with a free replacement and no long-term contract.",
  "How our on-site team supports them ",
  "The team at Virtual Value Bridge has become a valuable extension of our team.",
  "Mendy K.",
  "Maintenance Coordinator, Stone Edge NY",
  "BROWSE OUR AGENTS",
  "Find the profile that fits your role.",
  "Profiles shown are examples of the talent on our team. Your specialist is selected for your role, tools and industry.",
  "All agents",
  "Customer Experience",
  "Finance",
  "Operations",
  "Construction",
  "Property",
  "Marketing & Sales",
  "FIN",
  "Roxana Alvarado",
  "Bookkeeping & Accounting Specialist",
  "“Clean books, no month-end surprises.”",
  "QuickBooks Online",
  "Xero",
  "Excel",
  "Bill.com",
  "Experience",
  "8 years",
  "English",
  "C1 · Advanced",
  "Schedule",
  "Full-time · CST",
  "Industries",
  "Accounting firms · Small business",
  "Education",
  "B.A. in Accounting",
  "Handles",
  "AP & AR",
  "Bank reconciliations",
  "Month-end close",
  "Interests",
  "Baking",
  "Gardening",
  "Request a similar profile",
  "View full profile",
  "CX",
  "Daniel Portillo",
  "Customer Support Specialist",
  "“Every customer should feel heard on the first reply.”",
  "Zendesk",
  "Gorgias",
  "HubSpot",
  "Shopify",
  "Experience",
  "4 years",
  "English",
  "C2 · Proficient",
  "Schedule",
  "Full-time · CST",
  "Industries",
  "E-commerce · Retail",
  "Education",
  "B.A. in English Language",
  "Handles",
  "Email & chat support",
  "Order issues",
  "Customer follow-ups",
  "Interests",
  "Soccer",
  "Photography",
  "Request a similar profile",
  "View full profile",
  "OPS",
  "Patricia Guevara",
  "Project Coordinator",
  "“If it has a deadline, it has a plan.”",
  "Asana",
  "Monday.com",
  "Google Workspace",
  "Slack",
  "Experience",
  "12 years",
  "English",
  "C1 · Advanced",
  "Schedule",
  "Full-time · CST",
  "Industries",
  "Construction · Professional services",
  "Education",
  "B.S. in Industrial Engineering",
  "Handles",
  "Task tracking",
  "Team follow-ups",
  "Weekly reporting",
  "Interests",
  "Reading",
  "Travel",
  "Request a similar profile",
  "View full profile",
  "MKT",
  "Andrea Molina",
  "Marketing Support Specialist",
  "“Consistent content, every single week.”",
  "Canva",
  "Meta Ads",
  "HubSpot",
  "Mailchimp",
  "Experience",
  "5 years",
  "English",
  "C2 · Proficient",
  "Schedule",
  "Full-time · CST",
  "Industries",
  "Real estate · Home services",
  "Education",
  "B.A. in Marketing",
  "Handles",
  "Social content",
  "Campaign coordination",
  "Email marketing",
  "Interests",
  "Live music",
  "Illustration",
  "Request a similar profile",
  "View full profile",
  "SAL",
  "Gabriela Rivas",
  "Sales & Lead Generation Specialist",
  "“A clean pipeline is a full pipeline.”",
  "Salesforce",
  "Apollo",
  "Sales Navigator",
  "HubSpot",
  "Experience",
  "6 years",
  "English",
  "C1 · Advanced",
  "Schedule",
  "Full-time · CST",
  "Industries",
  "B2B services · Insurance",
  "Education",
  "B.A. in Business Administration",
  "Handles",
  "Prospect research",
  "Outbound outreach",
  "CRM hygiene",
  "Interests",
  "Running",
  "Coffee",
  "Request a similar profile",
  "View full profile",
  "EST",
  "Carlos Menjívar",
  "Estimating & Bid Support",
  "“Accurate takeoffs, faster bids.”",
  "Xactimate",
  "Bluebeam Revu",
  "PlanSwift",
  "Procore",
  "Experience",
  "6 years",
  "English",
  "C1 · Advanced",
  "Schedule",
  "Full-time · CST",
  "Industries",
  "Roofing · Construction",
  "Education",
  "B.S. in Civil Engineering",
  "Handles",
  "Material takeoffs",
  "Bid preparation",
  "Cost comparisons",
  "Interests",
  "Cycling",
  "Chess",
  "Request a similar profile",
  "View full profile",
  "VA",
  "Kevin Orellana",
  "Virtual Assistant",
  "“Your calendar, inbox and docs, handled.”",
  "Google Workspace",
  "Microsoft Office",
  "Calendly",
  "Notion",
  "Experience",
  "4 years",
  "English",
  "C1 · Advanced",
  "Schedule",
  "Full-time · CST",
  "Industries",
  "Professional services · Real estate",
  "Education",
  "B.A. in Business Administration",
  "Handles",
  "Calendar management",
  "Inbox triage",
  "Document prep",
  "Interests",
  "Gaming",
  "Cooking",
  "Request a similar profile",
  "View full profile",
  "PM",
  "Sofía Martínez",
  "Property Manager",
  "“Happy tenants, on-time owner reports.”",
  "ManageGo",
  "AppFolio",
  "Google Workspace",
  "Experience",
  "5 years",
  "English",
  "C1 · Advanced",
  "Schedule",
  "Full-time · CST",
  "Industries",
  "Property management",
  "Education",
  "B.A. in Business Administration",
  "Handles",
  "Tenant support",
  "Leasing admin",
  "Work orders",
  "Interests",
  "Yoga",
  "Travel",
  "Request a similar profile",
  "View full profile",
  "BEFORE YOU HIRE",
  "What clients ask us most.",
  "Straight answers to the questions we hear on almost every first call.",
  "Ask us anything ",
  "What if my specialist isn’t the right fit?",
  "We replace them at no cost. There’s no long-term contract, so you’re never stuck with the wrong match.",
  "Will they work during my business hours?",
  "Yes. Our specialists work in the CST time zone, aligned with U.S. teams, so they’re online when you are.",
  "How good is their English?",
  "Every specialist is bilingual in English and Spanish and ready to work with U.S.-based teams and customers.",
  "Do they already know my software?",
  "We hand-pick specialists for your industry and tools, then onboard them into your tools and SOPs.",
  "Can I see their work before I commit?",
  "Yes. You can see real work before you commit to anything.",
  "Who supports them day to day?",
  "Your specialist is backed by our on-site team in San Salvador, and you always have a direct line to the founders.",
  "How much does it cost?",
  "It depends on the role and the hours you need. Our ",
  "calculator",
  " compares it with a local hire, or answer 4 quick questions and we’ll send you options.",
  "Can I add more people later?",
  "Yes. You can scale up or down as your needs change.",
  "READY WHEN YOU ARE",
  "Your next teammate could be",
  "one conversation away.",
  "Book a call ",
  "Calculate your savings"
];
 return (
<div className="view" id="our-agents">

<section className="ag-hero">
<span className="ag-blob" aria-hidden="true"></span>
<div className="ag-hero-copy">

<p className="eyebrow">
{copy[0]}
</p>

<h1>
{copy[1]}<em>{copy[2]}</em>
</h1>

<p className="ag-lede">
{copy[3]}
</p>

<ul className="ag-proof">

<li>
<span><Users strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<b>{copy[4]}</b>{copy[5]}
</div>

</li>

<li>
<span><Globe strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<b>{copy[6]}</b>{copy[7]}
</div>

</li>

<li>
<span><Clock strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<b>{copy[8]}</b>{copy[9]}
</div>

</li>

</ul>

<div className="ag-cta">
<BookingButton className="ag-btn big">{copy[10]}<ArrowRight className="ic-arrow" aria-hidden="true" /></BookingButton><Link className="ag-btn-o big" href="/our-agents#directory">{copy[11]}</Link>
</div>

</div>

<div className="deck" id="deck">

<div className="flip" id="flip">

<div className="flip-inner">

<div className="flip-front">
<span className="fc-code l">{copy[12]}</span>
<div className="fc-photo">
<Image className="fc-img" alt="Roxana Alvarado" data-from="agent-roxana" style={{"objectPosition":"center 22%"} as CSSProperties} src="/redesign/c8402e7517e2.jpg" width={1200} height={900} sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 600px" unoptimized preload />
</div>

<div className="fc-plate">
<b className="fc-name">{copy[13]}</b><span className="fc-role">{copy[14]}</span>
</div>

</div>

<div className="flip-back" aria-hidden="true" inert>
<span className="fc-code l">{copy[15]}</span><b className="fb-name">{copy[16]}</b><span className="fb-role">{copy[17]}</span>
<p className="fb-quote">
{copy[18]}
</p>

<dl className="fb-list">

<div>
<dt>{copy[19]}</dt><dd className="fb-years">{copy[20]}</dd>
</div>

<div>
<dt>{copy[21]}</dt><dd className="fb-eng">{copy[22]}</dd>
</div>

<div>
<dt>{copy[23]}</dt><dd className="fb-ind">{copy[24]}</dd>
</div>

<div>
<dt>{copy[25]}</dt><dd className="fb-tools">{copy[26]}</dd>
</div>

</dl>
<a className="fb-link" href="#agent-roxana">{copy[27]}<ArrowRight className="ic-arrow" aria-hidden="true" /></a>
</div>

</div>
<button type="button" className="flip-btn hint" aria-pressed="false" aria-label="Flip card to see profile details"><ClipboardCheck strokeWidth="2" aria-hidden="true" /><span>{copy[28]}<br />{copy[29]}</span></button>
</div>

<div className="deck-thumbs" role="group" aria-label="Choose an agent">
<button type="button" className="deck-thumb is-active" data-i="0" aria-label="Show Roxana Alvarado, Bookkeeping & Accounting Specialist"><span className="deck-av"><Image alt="" data-from="agent-roxana" src="/redesign/c8402e7517e2.jpg" width={1200} height={900} sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 600px" unoptimized /></span><span className="deck-code">{copy[30]}</span></button><button type="button" className="deck-thumb" data-i="1" aria-label="Show Daniel Portillo, Customer Support Specialist"><span className="deck-av"><Image alt="" data-from="agent-daniel" src="/redesign/392022bff156.jpg" width={1200} height={900} sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 600px" unoptimized /></span><span className="deck-code">{copy[31]}</span></button><button type="button" className="deck-thumb" data-i="2" aria-label="Show Patricia Guevara, Project Coordinator"><span className="deck-av"><Image alt="" data-from="agent-patricia" src="/redesign/3da44cd88228.jpg" width={1200} height={900} sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 600px" unoptimized /></span><span className="deck-code">{copy[32]}</span></button><button type="button" className="deck-thumb" data-i="3" aria-label="Show Andrea Molina, Marketing Support Specialist"><span className="deck-av"><Image alt="" data-from="agent-andrea" src="/redesign/3ba4d46d11b2.jpg" width={1200} height={900} sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 600px" unoptimized /></span><span className="deck-code">{copy[33]}</span></button><button type="button" className="deck-thumb" data-i="4" aria-label="Show Gabriela Rivas, Sales & Lead Generation Specialist"><span className="deck-av"><Image alt="" data-from="agent-gabriela" src="/redesign/414643e8b396.jpg" width={1200} height={900} sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 600px" unoptimized /></span><span className="deck-code">{copy[34]}</span></button><button type="button" className="deck-thumb" data-i="5" aria-label="Show Carlos Menjívar, Estimating & Bid Support"><span className="deck-av"><Image alt="" data-from="agent-carlos" src="/redesign/681ca71001b1.jpg" width={1200} height={900} sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 600px" unoptimized /></span><span className="deck-code">{copy[35]}</span></button><button type="button" className="deck-thumb" data-i="6" aria-label="Show Kevin Orellana, Virtual Assistant"><span className="deck-av"><Image alt="" data-from="agent-kevin" src="/redesign/7e024a8f36ca.jpg" width={1200} height={900} sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 600px" unoptimized /></span><span className="deck-code">{copy[36]}</span></button><button type="button" className="deck-thumb" data-i="7" aria-label="Show Sofía Martínez, Property Manager"><span className="deck-av"><Image alt="" data-from="agent-sofia" src="/redesign/d0c8d4068aaa.jpg" width={1200} height={900} sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 600px" unoptimized /></span><span className="deck-code">{copy[37]}</span></button>
</div>

</div>

</section>

<section className="std">

<p className="eyebrow">
{copy[38]}
</p>

<h2>
{copy[39]}<em>{copy[40]}</em>
</h2>

<p className="std-sub">
{copy[41]}
</p>

<div className="std-flow">
<span className="std-track" aria-hidden="true"><i></i></span>
<div className="std-grid">

<article>

<div className="std-node">
<span className="std-ic"><Globe strokeWidth="1.8" aria-hidden="true" /></span><b className="std-num">{copy[42]}</b>
</div>

<h3>
{copy[43]}
</h3>

<p>
{copy[44]}
</p>

</article>

<article>

<div className="std-node">
<span className="std-ic"><Hammer strokeWidth="1.8" aria-hidden="true" /></span><b className="std-num">{copy[45]}</b>
</div>

<h3>
{copy[46]}
</h3>

<p>
{copy[47]}
</p>

</article>

<article>

<div className="std-node">
<span className="std-ic"><Clock strokeWidth="1.8" aria-hidden="true" /></span><b className="std-num">{copy[48]}</b>
</div>

<h3>
{copy[49]}
</h3>

<p>
{copy[50]}
</p>

</article>

<article>

<div className="std-node">
<span className="std-ic"><CircleCheck strokeWidth="1.8" aria-hidden="true" /></span><b className="std-num">{copy[51]}</b>
</div>

<h3>
{copy[52]}
</h3>

<p>
{copy[53]}
</p>

</article>

</div>
<svg className="std-funnel" viewBox="0 0 1000 100" preserveAspectRatio="none" aria-hidden="true"><path d="M125 0 C125 55 500 45 500 100" vectorEffect="non-scaling-stroke"></path><path d="M375 0 C375 55 500 45 500 100" vectorEffect="non-scaling-stroke"></path><path d="M625 0 C625 55 500 45 500 100" vectorEffect="non-scaling-stroke"></path><path d="M875 0 C875 55 500 45 500 100" vectorEffect="non-scaling-stroke"></path></svg>
<div className="std-bar">
<span className="std-hub"><ShieldCheck strokeWidth="1.8" aria-hidden="true" /></span>
<p>
<b>{copy[54]}</b>{copy[55]}
</p>
<Link className="std-more" href="/#about">{copy[56]}<ArrowRight className="ic-arrow" aria-hidden="true" /></Link>
</div>

</div>

</section>

<section className="ag-proof-band">

<figure className="aqb">

<div className="aqb-logo">
<Image src="/redesign/constructiontrades.png" alt="Stone Edge Management logo" width={1200} height={900} sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 600px" />
</div>

<div className="aqb-text">
<Quote className="aqb-q" aria-hidden="true" />
<blockquote>
{copy[57]}
</blockquote>

<figcaption>
<b>{copy[58]}</b><span>{copy[59]}</span>
</figcaption>

</div>

</figure>

</section>

<section className="dir" id="directory">

<div className="dir-head">

<div>

<p className="eyebrow">
{copy[60]}
</p>

<h2>
{copy[61]}
</h2>

</div>

<p>
{copy[62]}
</p>

</div>

<div className="dir-filters">
<button type="button" data-filter="all" className="active">{copy[63]}</button><button type="button" data-filter="cx">{copy[64]}</button><button type="button" data-filter="finance">{copy[65]}</button><button type="button" data-filter="operations">{copy[66]}</button><button type="button" data-filter="construction">{copy[67]}</button><button type="button" data-filter="property">{copy[68]}</button><button type="button" data-filter="growth">{copy[69]}</button>
</div>

<div className="ag-grid">

<article className="ag-card" id="agent-roxana" data-cat="finance">

<div className="ag-photo">
<Image src="/redesign/c8402e7517e2.jpg" alt="Roxana Alvarado, Bookkeeping & Accounting Specialist" style={{"objectPosition":"center 22%"} as CSSProperties} loading="lazy" width={1200} height={900} sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 600px" />
</div>

<div className="ag-body">
<span className="ag-code">{copy[70]}</span>
<div className="ag-name">

<h3>
{copy[71]}
</h3>

<p>
{copy[72]}
</p>

</div>

<p className="ag-quote">
{copy[73]}
</p>

<div className="ag-tools">
<span>{copy[74]}</span><span>{copy[75]}</span><span>{copy[76]}</span><span>{copy[77]}</span>
</div>

<div className="ag-stats">

<div>
<b>{copy[78]}</b><span>{copy[79]}</span>
</div>

<div>
<b>{copy[80]}</b><span>{copy[81]}</span>
</div>

<div>
<b>{copy[82]}</b><span>{copy[83]}</span>
</div>

</div>

<div className="ag-more" id="more-roxana" hidden>

<dl className="ag-meta">

<div>
<dt>{copy[84]}</dt><dd>{copy[85]}</dd>
</div>

<div>
<dt>{copy[86]}</dt><dd>{copy[87]}</dd>
</div>

</dl>

<div className="ag-chips">
<small>{copy[88]}</small><span>{copy[89]}</span><span>{copy[90]}</span><span>{copy[91]}</span>
</div>

<div className="ag-chips ag-int">
<small>{copy[92]}</small><span>{copy[93]}</span><span>{copy[94]}</span>
</div>

</div>

<div className="ag-actions">
<a className="ag-btn" href="#find-specialist" data-open-fs="" role="button" aria-haspopup="dialog" data-fs-need="Bookkeeping & billing">{copy[95]}</a><button type="button" className="ag-toggle" aria-expanded="false" aria-controls="more-roxana">{copy[96]}</button>
</div>

</div>

</article>

<article className="ag-card" id="agent-daniel" data-cat="cx">

<div className="ag-photo">
<Image src="/redesign/392022bff156.jpg" alt="Daniel Portillo, Customer Support Specialist" style={{"objectPosition":"center 18%"} as CSSProperties} loading="lazy" width={1200} height={900} sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 600px" />
</div>

<div className="ag-body">
<span className="ag-code">{copy[97]}</span>
<div className="ag-name">

<h3>
{copy[98]}
</h3>

<p>
{copy[99]}
</p>

</div>

<p className="ag-quote">
{copy[100]}
</p>

<div className="ag-tools">
<span>{copy[101]}</span><span>{copy[102]}</span><span>{copy[103]}</span><span>{copy[104]}</span>
</div>

<div className="ag-stats">

<div>
<b>{copy[105]}</b><span>{copy[106]}</span>
</div>

<div>
<b>{copy[107]}</b><span>{copy[108]}</span>
</div>

<div>
<b>{copy[109]}</b><span>{copy[110]}</span>
</div>

</div>

<div className="ag-more" id="more-daniel" hidden>

<dl className="ag-meta">

<div>
<dt>{copy[111]}</dt><dd>{copy[112]}</dd>
</div>

<div>
<dt>{copy[113]}</dt><dd>{copy[114]}</dd>
</div>

</dl>

<div className="ag-chips">
<small>{copy[115]}</small><span>{copy[116]}</span><span>{copy[117]}</span><span>{copy[118]}</span>
</div>

<div className="ag-chips ag-int">
<small>{copy[119]}</small><span>{copy[120]}</span><span>{copy[121]}</span>
</div>

</div>

<div className="ag-actions">
<a className="ag-btn" href="#find-specialist" data-open-fs="" role="button" aria-haspopup="dialog" data-fs-need="Customer support">{copy[122]}</a><button type="button" className="ag-toggle" aria-expanded="false" aria-controls="more-daniel">{copy[123]}</button>
</div>

</div>

</article>

<article className="ag-card" id="agent-patricia" data-cat="operations">

<div className="ag-photo">
<Image src="/redesign/3da44cd88228.jpg" alt="Patricia Guevara, Project Coordinator" style={{"objectPosition":"center 18%"} as CSSProperties} loading="lazy" width={1200} height={900} sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 600px" />
</div>

<div className="ag-body">
<span className="ag-code">{copy[124]}</span>
<div className="ag-name">

<h3>
{copy[125]}
</h3>

<p>
{copy[126]}
</p>

</div>

<p className="ag-quote">
{copy[127]}
</p>

<div className="ag-tools">
<span>{copy[128]}</span><span>{copy[129]}</span><span>{copy[130]}</span><span>{copy[131]}</span>
</div>

<div className="ag-stats">

<div>
<b>{copy[132]}</b><span>{copy[133]}</span>
</div>

<div>
<b>{copy[134]}</b><span>{copy[135]}</span>
</div>

<div>
<b>{copy[136]}</b><span>{copy[137]}</span>
</div>

</div>

<div className="ag-more" id="more-patricia" hidden>

<dl className="ag-meta">

<div>
<dt>{copy[138]}</dt><dd>{copy[139]}</dd>
</div>

<div>
<dt>{copy[140]}</dt><dd>{copy[141]}</dd>
</div>

</dl>

<div className="ag-chips">
<small>{copy[142]}</small><span>{copy[143]}</span><span>{copy[144]}</span><span>{copy[145]}</span>
</div>

<div className="ag-chips ag-int">
<small>{copy[146]}</small><span>{copy[147]}</span><span>{copy[148]}</span>
</div>

</div>

<div className="ag-actions">
<a className="ag-btn" href="#find-specialist" data-open-fs="" role="button" aria-haspopup="dialog" data-fs-need="Admin & scheduling">{copy[149]}</a><button type="button" className="ag-toggle" aria-expanded="false" aria-controls="more-patricia">{copy[150]}</button>
</div>

</div>

</article>

<article className="ag-card" id="agent-andrea" data-cat="growth">

<div className="ag-photo">
<Image src="/redesign/3ba4d46d11b2.jpg" alt="Andrea Molina, Marketing Support Specialist" style={{"objectPosition":"center 14%"} as CSSProperties} loading="lazy" width={1200} height={900} sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 600px" />
</div>

<div className="ag-body">
<span className="ag-code">{copy[151]}</span>
<div className="ag-name">

<h3>
{copy[152]}
</h3>

<p>
{copy[153]}
</p>

</div>

<p className="ag-quote">
{copy[154]}
</p>

<div className="ag-tools">
<span>{copy[155]}</span><span>{copy[156]}</span><span>{copy[157]}</span><span>{copy[158]}</span>
</div>

<div className="ag-stats">

<div>
<b>{copy[159]}</b><span>{copy[160]}</span>
</div>

<div>
<b>{copy[161]}</b><span>{copy[162]}</span>
</div>

<div>
<b>{copy[163]}</b><span>{copy[164]}</span>
</div>

</div>

<div className="ag-more" id="more-andrea" hidden>

<dl className="ag-meta">

<div>
<dt>{copy[165]}</dt><dd>{copy[166]}</dd>
</div>

<div>
<dt>{copy[167]}</dt><dd>{copy[168]}</dd>
</div>

</dl>

<div className="ag-chips">
<small>{copy[169]}</small><span>{copy[170]}</span><span>{copy[171]}</span><span>{copy[172]}</span>
</div>

<div className="ag-chips ag-int">
<small>{copy[173]}</small><span>{copy[174]}</span><span>{copy[175]}</span>
</div>

</div>

<div className="ag-actions">
<a className="ag-btn" href="#find-specialist" data-open-fs="" role="button" aria-haspopup="dialog" data-fs-need="Sales & marketing">{copy[176]}</a><button type="button" className="ag-toggle" aria-expanded="false" aria-controls="more-andrea">{copy[177]}</button>
</div>

</div>

</article>

<article className="ag-card" id="agent-gabriela" data-cat="growth">

<div className="ag-photo">
<Image src="/redesign/414643e8b396.jpg" alt="Gabriela Rivas, Sales & Lead Generation Specialist" style={{"objectPosition":"center 20%"} as CSSProperties} loading="lazy" width={1200} height={900} sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 600px" />
</div>

<div className="ag-body">
<span className="ag-code">{copy[178]}</span>
<div className="ag-name">

<h3>
{copy[179]}
</h3>

<p>
{copy[180]}
</p>

</div>

<p className="ag-quote">
{copy[181]}
</p>

<div className="ag-tools">
<span>{copy[182]}</span><span>{copy[183]}</span><span>{copy[184]}</span><span>{copy[185]}</span>
</div>

<div className="ag-stats">

<div>
<b>{copy[186]}</b><span>{copy[187]}</span>
</div>

<div>
<b>{copy[188]}</b><span>{copy[189]}</span>
</div>

<div>
<b>{copy[190]}</b><span>{copy[191]}</span>
</div>

</div>

<div className="ag-more" id="more-gabriela" hidden>

<dl className="ag-meta">

<div>
<dt>{copy[192]}</dt><dd>{copy[193]}</dd>
</div>

<div>
<dt>{copy[194]}</dt><dd>{copy[195]}</dd>
</div>

</dl>

<div className="ag-chips">
<small>{copy[196]}</small><span>{copy[197]}</span><span>{copy[198]}</span><span>{copy[199]}</span>
</div>

<div className="ag-chips ag-int">
<small>{copy[200]}</small><span>{copy[201]}</span><span>{copy[202]}</span>
</div>

</div>

<div className="ag-actions">
<a className="ag-btn" href="#find-specialist" data-open-fs="" role="button" aria-haspopup="dialog" data-fs-need="Sales & marketing">{copy[203]}</a><button type="button" className="ag-toggle" aria-expanded="false" aria-controls="more-gabriela">{copy[204]}</button>
</div>

</div>

</article>

<article className="ag-card" id="agent-carlos" data-cat="construction">

<div className="ag-photo">
<Image src="/redesign/681ca71001b1.jpg" alt="Carlos Menjívar, Estimating & Bid Support" style={{"objectPosition":"center 18%"} as CSSProperties} loading="lazy" width={1200} height={900} sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 600px" />
</div>

<div className="ag-body">
<span className="ag-code">{copy[205]}</span>
<div className="ag-name">

<h3>
{copy[206]}
</h3>

<p>
{copy[207]}
</p>

</div>

<p className="ag-quote">
{copy[208]}
</p>

<div className="ag-tools">
<span>{copy[209]}</span><span>{copy[210]}</span><span>{copy[211]}</span><span>{copy[212]}</span>
</div>

<div className="ag-stats">

<div>
<b>{copy[213]}</b><span>{copy[214]}</span>
</div>

<div>
<b>{copy[215]}</b><span>{copy[216]}</span>
</div>

<div>
<b>{copy[217]}</b><span>{copy[218]}</span>
</div>

</div>

<div className="ag-more" id="more-carlos" hidden>

<dl className="ag-meta">

<div>
<dt>{copy[219]}</dt><dd>{copy[220]}</dd>
</div>

<div>
<dt>{copy[221]}</dt><dd>{copy[222]}</dd>
</div>

</dl>

<div className="ag-chips">
<small>{copy[223]}</small><span>{copy[224]}</span><span>{copy[225]}</span><span>{copy[226]}</span>
</div>

<div className="ag-chips ag-int">
<small>{copy[227]}</small><span>{copy[228]}</span><span>{copy[229]}</span>
</div>

</div>

<div className="ag-actions">
<a className="ag-btn" href="#find-specialist" data-open-fs="" role="button" aria-haspopup="dialog" data-fs-need="Estimating & bids">{copy[230]}</a><button type="button" className="ag-toggle" aria-expanded="false" aria-controls="more-carlos">{copy[231]}</button>
</div>

</div>

</article>

<article className="ag-card" id="agent-kevin" data-cat="operations">

<div className="ag-photo">
<Image src="/redesign/7e024a8f36ca.jpg" alt="Kevin Orellana, Virtual Assistant" style={{"objectPosition":"center 18%"} as CSSProperties} loading="lazy" width={1200} height={900} sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 600px" />
</div>

<div className="ag-body">
<span className="ag-code">{copy[232]}</span>
<div className="ag-name">

<h3>
{copy[233]}
</h3>

<p>
{copy[234]}
</p>

</div>

<p className="ag-quote">
{copy[235]}
</p>

<div className="ag-tools">
<span>{copy[236]}</span><span>{copy[237]}</span><span>{copy[238]}</span><span>{copy[239]}</span>
</div>

<div className="ag-stats">

<div>
<b>{copy[240]}</b><span>{copy[241]}</span>
</div>

<div>
<b>{copy[242]}</b><span>{copy[243]}</span>
</div>

<div>
<b>{copy[244]}</b><span>{copy[245]}</span>
</div>

</div>

<div className="ag-more" id="more-kevin" hidden>

<dl className="ag-meta">

<div>
<dt>{copy[246]}</dt><dd>{copy[247]}</dd>
</div>

<div>
<dt>{copy[248]}</dt><dd>{copy[249]}</dd>
</div>

</dl>

<div className="ag-chips">
<small>{copy[250]}</small><span>{copy[251]}</span><span>{copy[252]}</span><span>{copy[253]}</span>
</div>

<div className="ag-chips ag-int">
<small>{copy[254]}</small><span>{copy[255]}</span><span>{copy[256]}</span>
</div>

</div>

<div className="ag-actions">
<a className="ag-btn" href="#find-specialist" data-open-fs="" role="button" aria-haspopup="dialog" data-fs-need="Admin & scheduling">{copy[257]}</a><button type="button" className="ag-toggle" aria-expanded="false" aria-controls="more-kevin">{copy[258]}</button>
</div>

</div>

</article>

<article className="ag-card" id="agent-sofia" data-cat="property">

<div className="ag-photo">
<Image src="/redesign/d0c8d4068aaa.jpg" alt="Sofía Martínez, Property Manager" style={{"objectPosition":"center 18%"} as CSSProperties} loading="lazy" width={1200} height={900} sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 600px" />
</div>

<div className="ag-body">
<span className="ag-code">{copy[259]}</span>
<div className="ag-name">

<h3>
{copy[260]}
</h3>

<p>
{copy[261]}
</p>

</div>

<p className="ag-quote">
{copy[262]}
</p>

<div className="ag-tools">
<span>{copy[263]}</span><span>{copy[264]}</span><span>{copy[265]}</span>
</div>

<div className="ag-stats">

<div>
<b>{copy[266]}</b><span>{copy[267]}</span>
</div>

<div>
<b>{copy[268]}</b><span>{copy[269]}</span>
</div>

<div>
<b>{copy[270]}</b><span>{copy[271]}</span>
</div>

</div>

<div className="ag-more" id="more-sofia" hidden>

<dl className="ag-meta">

<div>
<dt>{copy[272]}</dt><dd>{copy[273]}</dd>
</div>

<div>
<dt>{copy[274]}</dt><dd>{copy[275]}</dd>
</div>

</dl>

<div className="ag-chips">
<small>{copy[276]}</small><span>{copy[277]}</span><span>{copy[278]}</span><span>{copy[279]}</span>
</div>

<div className="ag-chips ag-int">
<small>{copy[280]}</small><span>{copy[281]}</span><span>{copy[282]}</span>
</div>

</div>

<div className="ag-actions">
<a className="ag-btn" href="#find-specialist" data-open-fs="" role="button" aria-haspopup="dialog" data-fs-need="Property management">{copy[283]}</a><button type="button" className="ag-toggle" aria-expanded="false" aria-controls="more-sofia">{copy[284]}</button>
</div>

</div>

</article>

</div>

</section>

<section className="faq">

<div className="faq-head">

<p className="eyebrow">
{copy[285]}
</p>

<h2>
{copy[286]}
</h2>

<p>
{copy[287]}
</p>
<a className="ag-btn" href="#find-specialist" data-open-fs="" role="button" aria-haspopup="dialog">{copy[288]}<ArrowRight className="ic-arrow" aria-hidden="true" /></a>
</div>

<div className="faq-list">

<details>

<summary>
{copy[289]}<span className="faq-ic" aria-hidden="true"></span>
</summary>

<p>
{copy[290]}
</p>

</details>

<details>

<summary>
{copy[291]}<span className="faq-ic" aria-hidden="true"></span>
</summary>

<p>
{copy[292]}
</p>

</details>

<details>

<summary>
{copy[293]}<span className="faq-ic" aria-hidden="true"></span>
</summary>

<p>
{copy[294]}
</p>

</details>

<details>

<summary>
{copy[295]}<span className="faq-ic" aria-hidden="true"></span>
</summary>

<p>
{copy[296]}
</p>

</details>

<details>

<summary>
{copy[297]}<span className="faq-ic" aria-hidden="true"></span>
</summary>

<p>
{copy[298]}
</p>

</details>

<details>

<summary>
{copy[299]}<span className="faq-ic" aria-hidden="true"></span>
</summary>

<p>
{copy[300]}
</p>

</details>

<details>

<summary>
{copy[301]}<span className="faq-ic" aria-hidden="true"></span>
</summary>

<p>
{copy[302]}<Link href="/calculator">{copy[303]}</Link>{copy[304]}
</p>

</details>

<details>

<summary>
{copy[305]}<span className="faq-ic" aria-hidden="true"></span>
</summary>

<p>
{copy[306]}
</p>

</details>

</div>

</section>

<section className="ag-final">

<div>

<p className="eyebrow">
{copy[307]}
</p>

<h2>
{copy[308]}<br />{copy[309]}
</h2>

</div>

<div className="ag-final-cta">
<BookingButton className="btn-lime-lg">{copy[310]}<ArrowRight className="ic-arrow" aria-hidden="true" /></BookingButton><Link className="btn-ghost-lg" href="/calculator">{copy[311]}</Link>
</div>

</section>

</div>
);
}

export function ConstructionDesign() {
 const copy = [
  "CONSTRUCTION & TRADES",
  "Back-office support ",
  "built for contractors.",
  "Bilingual specialists who handle your estimates, calls, paperwork and billing, so your team can stay on the job site.",
  "Roofing",
  "General contractors",
  "Remodeling",
  "Tile & flooring",
  "HVAC",
  "Plumbing",
  "Electrical",
  "Book a call ",
  "See what we cover",
  "Takeoffs & bids",
  "Done in your software",
  "English + Spanish",
  "With clients and crews",
  "Trained on the software contractors already use",
  "Xactimate",
  "Bluebeam Revu",
  "PlanSwift",
  "Procore",
  "AccuLynx",
  "Buildertrend",
  "Jobber",
  "Microsoft Excel",
  "WHAT WE OFFER",
  "Construction Support ",
  "by Role.",
  "Four roles that cover your project, from the first bid to the final invoice. Hire one, or build a team with several.",
  "01 · Bid",
  "Estimator",
  "02 · Win",
  "Sales & Customer Support Rep",
  "03 · Build",
  "Project Coordinator",
  "04 · Bill",
  "Office & Billing Admin",
  "ROLE 01 · BID",
  "Estimator",
  "Prices your jobs so you can bid on more of them.",
  "What your Estimator handles →",
  "Hire an Estimator ",
  "Material takeoffs",
  "From blueprints, aerial roof reports and field notes.",
  "Line-item pricing",
  "Clean, consistent pricing on every estimate.",
  "Software-driven bid prep",
  "Bids built in the estimating software you already use.",
  "Vendor & material cost comparisons",
  "Quotes gathered and compared before you price.",
  "Bid invite tracking",
  "Invitations, due dates and addenda in one place.",
  "Proposal management",
  "Proposals built, sent and tracked in your CRM.",
  "ROLE 02 · WIN",
  "Sales & Customer Support Rep",
  "Answers your calls and follows up every lead.",
  "What your Sales & Customer Support Rep handles →",
  "Hire a Sales & Customer Support Rep ",
  "Inbound calls & lead intake",
  "Every call answered, every lead logged.",
  "Estimate & inspection scheduling",
  "Appointments booked straight into your calendar.",
  "Quote follow-ups",
  "Consistent follow-up until the client decides.",
  "CRM updates",
  "Contacts, stages and notes kept current.",
  "Customer updates",
  "Clients informed in English or Spanish.",
  "Review requests",
  "Happy customers asked for reviews after the job.",
  "ROLE 03 · BUILD",
  "Project Coordinator",
  "Keeps every job organized and on schedule.",
  "What your Project Coordinator handles →",
  "Hire a Project Coordinator ",
  "Crew & sub scheduling",
  "Schedules confirmed with crews and subcontractors.",
  "Submittals & RFI tracking",
  "Logged, followed up and closed on time.",
  "Daily logs & job documentation",
  "Photos, notes and reports filed by job.",
  "Change order paperwork",
  "Change orders documented and sent for approval.",
  "Permit & inspection tracking",
  "Applications, dates and results tracked.",
  "Material order follow-up",
  "Deliveries confirmed with your suppliers.",
  "ROLE 04 · BILL",
  "Office & Billing Admin",
  "Gets your invoices out and your books clean.",
  "What your Office & Billing Admin handles →",
  "Hire an Office & Billing Admin ",
  "Invoicing & progress billing",
  "Invoices out on time, every billing cycle.",
  "AP, AR & collections",
  "Payables processed and receivables followed up.",
  "Bookkeeping & reconciliations",
  "Books coded and reconciled every month.",
  "Lien waivers & COI tracking",
  "Waivers and insurance certificates on file.",
  "Data entry",
  "Accurate data across your systems.",
  "Job & owner reporting",
  "Simple reports on jobs, costs and status.",
  "See all 4 roles at once",
  "Each role is a ",
  "separate, dedicated specialist",
  ". Start with the one you need most and add more as you grow.",
  "DEDICATED",
  "Dedicated remote estimator",
  "A full-time specialist who learns your trade, your software and your pricing.",
  "or",
  "FLEXIBLE",
  "Project-based takeoff support",
  "Takeoff help when you need it, without adding a full-time role.",
  "REAL RESULTS",
  "A contractor’s view.",
  "“Moving takeoffs and estimates out of the daily workload of our project team has been one of the best decisions we’ve made.”",
  "M",
  "Moses G.",
  "Project Manager, Artistic Tile & Installation",
  "MONTH-END CLOSE",
  "14d",
  "3d",
  "↑ Improved",
  "NEW ADMIN HIRES",
  "4",
  "0",
  "↑ Improved",
  "WHY VIRTUAL VALUE BRIDGE",
  "A specialist with ",
  "a team behind them.",
  "English + Spanish",
  "Bilingual with your clients, crews and suppliers.",
  "Your time zone",
  "Working CST hours, aligned with U.S. teams.",
  "Trained on your stack",
  "Real onboarding into your tools and SOPs.",
  "Backed by an on-site team",
  "HR, supervisors and quality reviews in San Salvador.",
  "Free replacement",
  "No long-term contract if the fit isn't right.",
  "See real work first",
  "Review real work before you commit to anything.",
  "CONTRACTOR FAQ",
  "What contractors ask us.",
  "Quick answers before your first call.",
  "Can they work from my plans and roof reports?",
  "Yes. Takeoffs are built from blueprints, aerial roof reports and field notes.",
  "Which estimating software do they use?",
  "Xactimate, Bluebeam Revu, PlanSwift, Procore, AccuLynx and Excel, among others. We match you with someone who knows your tools.",
  "Do I need a full-time person?",
  "No. You can add a dedicated remote estimator or use project-based takeoff support.",
  "Can they talk to my suppliers and subs?",
  "Yes. They can gather vendor quotes, compare material costs and follow up on schedules and deliveries.",
  "Do they speak Spanish with my crews?",
  "Every specialist is bilingual in English and Spanish.",
  "What if it isn't the right fit?",
  "We replace your specialist at no cost. There's no long-term contract.",
  "LET’S TALK",
  "Tell us about ",
  "your company.",
  "A few details help us bring the right specialist profiles to your first call.",
  "Free replacement, no long-term contract",
  "See real work before you commit",
  "Direct line to the founders",
  "Match with a construction specialist.",
  "Four quick questions, with construction already selected. All we ask for is your email.",
  "Start now ",
  "Compare the cost",
  " of a dedicated specialist with a local hire"
];
 return (
<div className="view" id="construction">

<section className="c-hero">

<div className="c-hero-copy">

<p className="eyebrow">
{copy[0]}
</p>

<h1>
{copy[1]}<em>{copy[2]}</em>
</h1>

<p className="c-lede">
{copy[3]}
</p>

<ul className="c-trades" aria-label="Contractors we support">

<li>
<House strokeWidth="1.8" aria-hidden="true" /><span>{copy[4]}</span>
</li>

<li>
<House strokeWidth="1.8" aria-hidden="true" /><span>{copy[5]}</span>
</li>

<li>
<Hammer strokeWidth="1.8" aria-hidden="true" /><span>{copy[6]}</span>
</li>

<li>
<Grid2X2 strokeWidth="1.8" aria-hidden="true" /><span>{copy[7]}</span>
</li>

<li>
<Fan strokeWidth="1.8" aria-hidden="true" /><span>{copy[8]}</span>
</li>

<li>
<Droplet strokeWidth="1.8" aria-hidden="true" /><span>{copy[9]}</span>
</li>

<li>
<Zap strokeWidth="1.8" aria-hidden="true" /><span>{copy[10]}</span>
</li>

</ul>

<div className="ag-cta">
<BookingButton className="ag-btn big">{copy[11]}<ArrowRight className="ic-arrow" aria-hidden="true" /></BookingButton><a className="ag-btn-o big" href="#c-cover">{copy[12]}</a>
</div>

</div>

<div className="c-visual">
<span className="c-shape" aria-hidden="true"></span><Image src="/redesign/constructiontrades.png" alt="Virtual Value Bridge specialists reviewing an estimate together" width={1200} height={900} sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 600px" preload />
<div className="c-float f1">
<span><Ruler strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<b>{copy[13]}</b><small>{copy[14]}</small>
</div>

</div>

<div className="c-float f2">
<span><Globe strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<b>{copy[15]}</b><small>{copy[16]}</small>
</div>

</div>

</div>

</section>

<section className="c-tools" aria-label="Software our specialists use">

<p>
{copy[17]}
</p>

<ul>

<li>
{copy[18]}
</li>

<li>
{copy[19]}
</li>

<li>
{copy[20]}
</li>

<li>
{copy[21]}
</li>

<li>
{copy[22]}
</li>

<li>
{copy[23]}
</li>

<li>
{copy[24]}
</li>

<li>
{copy[25]}
</li>

</ul>

</section>

<section className="c-cover" id="c-cover">

<div className="c-cover-head">

<p className="eyebrow">
{copy[26]}
</p>

<h2>
{copy[27]}<em>{copy[28]}</em>
</h2>

<p>
{copy[29]}
</p>

</div>

<div className="cl">

<div className="cl-track" role="tablist" aria-label="Roles by project stage">
<span className="cl-line" aria-hidden="true"><i></i></span><button type="button" className="cl-node is-active" data-i="0" role="tab" aria-selected="true" aria-controls="cl-panel-bid" id="cl-tab-bid"><span className="cl-dot"><Ruler strokeWidth="2" aria-hidden="true" /></span><b>{copy[30]}</b><small>{copy[31]}</small></button><button type="button" className="cl-node" data-i="1" role="tab" aria-selected="false" aria-controls="cl-panel-win" id="cl-tab-win"><span className="cl-dot"><Phone strokeWidth="2" aria-hidden="true" /></span><b>{copy[32]}</b><small>{copy[33]}</small></button><button type="button" className="cl-node" data-i="2" role="tab" aria-selected="false" aria-controls="cl-panel-build" id="cl-tab-build"><span className="cl-dot"><Hammer strokeWidth="2" aria-hidden="true" /></span><b>{copy[34]}</b><small>{copy[35]}</small></button><button type="button" className="cl-node" data-i="3" role="tab" aria-selected="false" aria-controls="cl-panel-bill" id="cl-tab-bill"><span className="cl-dot"><ReceiptText strokeWidth="2" aria-hidden="true" /></span><b>{copy[36]}</b><small>{copy[37]}</small></button>
</div>

<div className="cl-panel" id="cl-panel-bid" role="tabpanel" aria-labelledby="cl-tab-bid">

<div className="cl-panel-head">
<span className="cl-tag">{copy[38]}</span>
<h3>
{copy[39]}
</h3>

<p>
{copy[40]}
</p>

<p className="cl-what">
{copy[41]}
</p>
<a className="ag-btn" href="#find-specialist" data-open-fs="" role="button" aria-haspopup="dialog" data-fs-need="Estimating & bids" data-fs-industry="Construction & trades">{copy[42]}<ArrowRight className="ic-arrow" aria-hidden="true" /></a>
</div>

<div className="cl-cards">

<article style={{"--d":"0"} as CSSProperties}>
<span className="cl-ic"><Ruler strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[43]}</h4>
<p>
{copy[44]}
</p>

</div>

</article>

<article style={{"--d":"1"} as CSSProperties}>
<span className="cl-ic"><Calculator strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[45]}</h4>
<p>
{copy[46]}
</p>

</div>

</article>

<article style={{"--d":"2"} as CSSProperties}>
<span className="cl-ic"><Monitor strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[47]}</h4>
<p>
{copy[48]}
</p>

</div>

</article>

<article style={{"--d":"3"} as CSSProperties}>
<span className="cl-ic"><ClipboardCheck strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[49]}</h4>
<p>
{copy[50]}
</p>

</div>

</article>

<article style={{"--d":"4"} as CSSProperties}>
<span className="cl-ic"><ClipboardCheck strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[51]}</h4>
<p>
{copy[52]}
</p>

</div>

</article>

<article style={{"--d":"5"} as CSSProperties}>
<span className="cl-ic"><FileText strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[53]}</h4>
<p>
{copy[54]}
</p>

</div>

</article>

</div>

</div>

<div className="cl-panel" id="cl-panel-win" role="tabpanel" aria-labelledby="cl-tab-win" hidden>

<div className="cl-panel-head">
<span className="cl-tag">{copy[55]}</span>
<h3>
{copy[56]}
</h3>

<p>
{copy[57]}
</p>

<p className="cl-what">
{copy[58]}
</p>
<a className="ag-btn" href="#find-specialist" data-open-fs="" role="button" aria-haspopup="dialog" data-fs-need="Customer support" data-fs-industry="Construction & trades">{copy[59]}<ArrowRight className="ic-arrow" aria-hidden="true" /></a>
</div>

<div className="cl-cards">

<article style={{"--d":"0"} as CSSProperties}>
<span className="cl-ic"><Phone strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[60]}</h4>
<p>
{copy[61]}
</p>

</div>

</article>

<article style={{"--d":"1"} as CSSProperties}>
<span className="cl-ic"><CalendarDays strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[62]}</h4>
<p>
{copy[63]}
</p>

</div>

</article>

<article style={{"--d":"2"} as CSSProperties}>
<span className="cl-ic"><RefreshCw strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[64]}</h4>
<p>
{copy[65]}
</p>

</div>

</article>

<article style={{"--d":"3"} as CSSProperties}>
<span className="cl-ic"><ClipboardCheck strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[66]}</h4>
<p>
{copy[67]}
</p>

</div>

</article>

<article style={{"--d":"4"} as CSSProperties}>
<span className="cl-ic"><MessageSquare strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[68]}</h4>
<p>
{copy[69]}
</p>

</div>

</article>

<article style={{"--d":"5"} as CSSProperties}>
<span className="cl-ic"><Star strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[70]}</h4>
<p>
{copy[71]}
</p>

</div>

</article>

</div>

</div>

<div className="cl-panel" id="cl-panel-build" role="tabpanel" aria-labelledby="cl-tab-build" hidden>

<div className="cl-panel-head">
<span className="cl-tag">{copy[72]}</span>
<h3>
{copy[73]}
</h3>

<p>
{copy[74]}
</p>

<p className="cl-what">
{copy[75]}
</p>
<a className="ag-btn" href="#find-specialist" data-open-fs="" role="button" aria-haspopup="dialog" data-fs-need="Admin & scheduling" data-fs-industry="Construction & trades">{copy[76]}<ArrowRight className="ic-arrow" aria-hidden="true" /></a>
</div>

<div className="cl-cards">

<article style={{"--d":"0"} as CSSProperties}>
<span className="cl-ic"><Users strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[77]}</h4>
<p>
{copy[78]}
</p>

</div>

</article>

<article style={{"--d":"1"} as CSSProperties}>
<span className="cl-ic"><ClipboardCheck strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[79]}</h4>
<p>
{copy[80]}
</p>

</div>

</article>

<article style={{"--d":"2"} as CSSProperties}>
<span className="cl-ic"><Grid2X2 strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[81]}</h4>
<p>
{copy[82]}
</p>

</div>

</article>

<article style={{"--d":"3"} as CSSProperties}>
<span className="cl-ic"><ClipboardCheck strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[83]}</h4>
<p>
{copy[84]}
</p>

</div>

</article>

<article style={{"--d":"4"} as CSSProperties}>
<span className="cl-ic"><ClipboardCheck strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[85]}</h4>
<p>
{copy[86]}
</p>

</div>

</article>

<article style={{"--d":"5"} as CSSProperties}>
<span className="cl-ic"><ClipboardCheck strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[87]}</h4>
<p>
{copy[88]}
</p>

</div>

</article>

</div>

</div>

<div className="cl-panel" id="cl-panel-bill" role="tabpanel" aria-labelledby="cl-tab-bill" hidden>

<div className="cl-panel-head">
<span className="cl-tag">{copy[89]}</span>
<h3>
{copy[90]}
</h3>

<p>
{copy[91]}
</p>

<p className="cl-what">
{copy[92]}
</p>
<a className="ag-btn" href="#find-specialist" data-open-fs="" role="button" aria-haspopup="dialog" data-fs-need="Bookkeeping & billing" data-fs-industry="Construction & trades">{copy[93]}<ArrowRight className="ic-arrow" aria-hidden="true" /></a>
</div>

<div className="cl-cards">

<article style={{"--d":"0"} as CSSProperties}>
<span className="cl-ic"><ReceiptText strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[94]}</h4>
<p>
{copy[95]}
</p>

</div>

</article>

<article style={{"--d":"1"} as CSSProperties}>
<span className="cl-ic"><ClipboardCheck strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[96]}</h4>
<p>
{copy[97]}
</p>

</div>

</article>

<article style={{"--d":"2"} as CSSProperties}>
<span className="cl-ic"><ReceiptText strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[98]}</h4>
<p>
{copy[99]}
</p>

</div>

</article>

<article style={{"--d":"3"} as CSSProperties}>
<span className="cl-ic"><ShieldCheck strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[100]}</h4>
<p>
{copy[101]}
</p>

</div>

</article>

<article style={{"--d":"4"} as CSSProperties}>
<span className="cl-ic"><ClipboardCheck strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[102]}</h4>
<p>
{copy[103]}
</p>

</div>

</article>

<article style={{"--d":"5"} as CSSProperties}>
<span className="cl-ic"><ChartNoAxesCombined strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[104]}</h4>
<p>
{copy[105]}
</p>

</div>

</article>

</div>

</div>

</div>
<button type="button" className="cl-all" aria-expanded="false">{copy[106]}</button>
<p className="cl-note">
<Users strokeWidth="1.8" aria-hidden="true" /><span>{copy[107]}<b>{copy[108]}</b>{copy[109]}</span>
</p>

<div className="c-models">

<article>
<span className="c-model-tag">{copy[110]}</span>
<h3>
{copy[111]}
</h3>

<p>
{copy[112]}
</p>

</article>
<span className="c-or" aria-hidden="true">{copy[113]}</span>
<article>
<span className="c-model-tag lime">{copy[114]}</span>
<h3>
{copy[115]}
</h3>

<p>
{copy[116]}
</p>

</article>

</div>

</section>

<section className="c-result">

<div className="c-result-head">

<p className="eyebrow">
{copy[117]}
</p>

<h2>
{copy[118]}
</h2>

</div>

<article className="case c-case">

<div className="case-quote">

<div className="c-case-logo">
<Image src="/redesign/0cf08bebf8b1.png" alt="Artistic Tile logo" width={1200} height={900} sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 600px" />
</div>

<blockquote>
{copy[119]}
</blockquote>

<div className="story-author">
<span className="avatar av-lime">{copy[120]}</span>
<div>
<b>{copy[121]}</b><span>{copy[122]}</span>
</div>

</div>

</div>

<div className="case-stats two">

<div className="case-stat">
<small>{copy[123]}</small>
<p>
<s>{copy[124]}</s><b>{copy[125]}</b>
</p>
<em>{copy[126]}</em>
</div>

<div className="case-stat">
<small>{copy[127]}</small>
<p>
<s>{copy[128]}</s><b>{copy[129]}</b>
</p>
<em>{copy[130]}</em>
</div>

</div>

</article>

</section>

<section className="c-trust">

<div className="c-trust-head">

<p className="eyebrow">
{copy[131]}
</p>

<h2>
{copy[132]}<em>{copy[133]}</em>
</h2>

</div>

<div className="c-trust-grid">

<article>
<span className="ct-ic"><Globe strokeWidth="1.8" aria-hidden="true" /></span>
<h3>
{copy[134]}
</h3>

<p>
{copy[135]}
</p>

</article>

<article>
<span className="ct-ic"><Clock strokeWidth="1.8" aria-hidden="true" /></span>
<h3>
{copy[136]}
</h3>

<p>
{copy[137]}
</p>

</article>

<article>
<span className="ct-ic"><Hammer strokeWidth="1.8" aria-hidden="true" /></span>
<h3>
{copy[138]}
</h3>

<p>
{copy[139]}
</p>

</article>

<article>
<span className="ct-ic"><Users strokeWidth="1.8" aria-hidden="true" /></span>
<h3>
{copy[140]}
</h3>

<p>
{copy[141]}
</p>

</article>

<article>
<span className="ct-ic"><RefreshCw strokeWidth="1.8" aria-hidden="true" /></span>
<h3>
{copy[142]}
</h3>

<p>
{copy[143]}
</p>

</article>

<article>
<span className="ct-ic"><Eye strokeWidth="1.8" aria-hidden="true" /></span>
<h3>
{copy[144]}
</h3>

<p>
{copy[145]}
</p>

</article>

</div>

</section>

<section className="faq c-faq">

<div className="faq-head">

<p className="eyebrow">
{copy[146]}
</p>

<h2>
{copy[147]}
</h2>

<p>
{copy[148]}
</p>

</div>

<div className="faq-list">

<details>

<summary>
{copy[149]}<span className="faq-ic" aria-hidden="true"></span>
</summary>

<p>
{copy[150]}
</p>

</details>

<details>

<summary>
{copy[151]}<span className="faq-ic" aria-hidden="true"></span>
</summary>

<p>
{copy[152]}
</p>

</details>

<details>

<summary>
{copy[153]}<span className="faq-ic" aria-hidden="true"></span>
</summary>

<p>
{copy[154]}
</p>

</details>

<details>

<summary>
{copy[155]}<span className="faq-ic" aria-hidden="true"></span>
</summary>

<p>
{copy[156]}
</p>

</details>

<details>

<summary>
{copy[157]}<span className="faq-ic" aria-hidden="true"></span>
</summary>

<p>
{copy[158]}
</p>

</details>

<details>

<summary>
{copy[159]}<span className="faq-ic" aria-hidden="true"></span>
</summary>

<p>
{copy[160]}
</p>

</details>

</div>

</section>

<section className="c-form-wrap" id="c-form">

<div className="c-form-copy">

<p className="eyebrow">
{copy[161]}
</p>

<h2>
{copy[162]}<em>{copy[163]}</em>
</h2>

<p>
{copy[164]}
</p>

<ul className="checks">

<li>
<Check strokeWidth="2.6" aria-hidden="true" />{copy[165]}
</li>

<li>
<Check strokeWidth="2.6" aria-hidden="true" />{copy[166]}
</li>

<li>
<Check strokeWidth="2.6" aria-hidden="true" />{copy[167]}
</li>

</ul>

</div>

<div className="contact-form cta-card">
<span className="cta-card-ic"><House strokeWidth="1.8" aria-hidden="true" /></span>
<h3>
{copy[168]}
</h3>

<p>
{copy[169]}
</p>
<a className="ag-btn big" href="#find-specialist" data-open-fs="" role="button" aria-haspopup="dialog" data-fs-industry="Construction & trades">{copy[170]}<ArrowRight className="ic-arrow" aria-hidden="true" /></a><Link className="cta-cost" href="/calculator"><Calculator strokeWidth="1.8" aria-hidden="true" /><span><b>{copy[171]}</b>{copy[172]}</span></Link>
</div>

</section>

</div>
);
}

export function PropertyManagementDesign() {
 const copy = [
  "PROPERTY MANAGEMENT",
  "Back-office support ",
  "built for property managers.",
  "Bilingual specialists who handle your tenant calls, maintenance tickets, rent follow-ups and owner reports, so your team can focus on growing the portfolio.",
  "Single-family rentals",
  "Multifamily",
  "HOA & condo",
  "Commercial",
  "Mixed-use",
  "Book a call ",
  "See what we cover",
  "Tenants & tickets",
  "Done in your software",
  "English + Spanish",
  "With tenants and owners",
  "Trained on the software property managers already use",
  "AppFolio",
  "Buildium",
  "RentManager",
  "Yardi",
  "QuickBooks",
  "Google Workspace",
  "DocuSign",
  "Slack",
  "WHAT WE OFFER",
  "Property Management Support ",
  "by Role.",
  "Four roles that cover your portfolio, from the first showing to the owner report. Hire one, or build a team with several.",
  "01 · Lease",
  "Leasing Coordinator",
  "02 · Maintain",
  "Maintenance Coordinator",
  "03 · Collect",
  "Rent & Accounting Specialist",
  "04 · Report",
  "Owner Reporting Admin",
  "ROLE 01 · LEASE",
  "Leasing Coordinator",
  "Fills your vacancies and keeps tenants informed.",
  "What your Leasing Coordinator handles →",
  "Hire a Leasing Coordinator ",
  "Tenant communication",
  "Calls, emails and texts answered in English or Spanish.",
  "Leasing inquiries",
  "Every prospect answered and followed up.",
  "Showing scheduling",
  "Tours booked straight into your calendar.",
  "Applications & lease paperwork",
  "Applications tracked and leases sent for signature.",
  "Move-in / move-out coordination",
  "Keys, inspections and checklists on schedule.",
  "Listing updates & vacancy management",
  "Listings kept current until every unit is filled.",
  "ROLE 02 · MAINTAIN",
  "Maintenance Coordinator",
  "Turns every request into a closed work order.",
  "What your Maintenance Coordinator handles →",
  "Hire a Maintenance Coordinator ",
  "Maintenance request triage",
  "Requests logged, prioritized and assigned.",
  "Vendor coordination",
  "Vendors scheduled, confirmed and followed up.",
  "Work order tracking",
  "Every ticket tracked until it is closed.",
  "Tenant updates",
  "Tenants told when the repair is scheduled and done.",
  "After-hours escalation",
  "Urgent issues routed to the right person.",
  "Preventive maintenance calendar",
  "Recurring inspections and service on schedule.",
  "ROLE 03 · COLLECT",
  "Rent & Accounting Specialist",
  "Keeps rent coming in and the books clean.",
  "What your Rent & Accounting Specialist handles →",
  "Hire a Rent & Accounting Specialist ",
  "Rent collection follow-ups",
  "Friendly reminders before and after the due date.",
  "Delinquency tracking",
  "Late balances tracked and escalated on time.",
  "Vendor invoices & bills",
  "Invoices entered and routed for approval.",
  "Bank reconciliations",
  "Accounts reconciled every month.",
  "Security deposit tracking",
  "Deposits and move-out deductions documented.",
  "Ledger entries",
  "Charges and payments posted in your software.",
  "ROLE 04 · REPORT",
  "Owner Reporting Admin",
  "Gets owners their numbers on time, every month.",
  "What your Owner Reporting Admin handles →",
  "Hire an Owner Reporting Admin ",
  "Owner reporting",
  "Clear reports on occupancy, rent and maintenance.",
  "Monthly statements",
  "Owner statements prepared and sent on time.",
  "Data entry & record-keeping",
  "Accurate records inside your property management software.",
  "Lease & insurance document tracking",
  "Renewals, COIs and expirations on file.",
  "Lease renewal reminders",
  "Renewals flagged before they expire.",
  "Portfolio admin support",
  "Inbox, calendar and files kept organized.",
  "See all 4 roles at once",
  "Each role is a ",
  "separate, dedicated specialist",
  ". Start with the one you need most and add more as you grow.",
  "ONE SPECIALIST",
  "Dedicated property management specialist",
  "A full-time specialist who learns your properties, runs your systems and reports directly to you.",
  "or",
  "A TEAM",
  "A property support team",
  "Several roles working together as your portfolio grows, from leasing to owner reports.",
  "REAL RESULTS",
  "A property manager’s view.",
  "“The team at Virtual Value Bridge has become a valuable extension of our team.”",
  "M",
  "Mendy K.",
  "Maintenance Coordinator, Stone Edge NY",
  "Tenant communication",
  "Lease renewals",
  "Rent follow-ups",
  "WHY VIRTUAL VALUE BRIDGE",
  "A specialist with ",
  "a team behind them.",
  "English + Spanish",
  "Bilingual with your tenants, owners and vendors.",
  "Your time zone",
  "Working CST hours, aligned with U.S. teams.",
  "Trained on your stack",
  "Real onboarding into your software and SOPs.",
  "Backed by an on-site team",
  "HR, supervisors and quality reviews in San Salvador.",
  "Free replacement",
  "No long-term contract if the fit isn't right.",
  "See real work first",
  "Review real work before you commit to anything.",
  "PROPERTY MANAGER FAQ",
  "What property managers ask us.",
  "Quick answers before your first call.",
  "Which property management software do they use?",
  "AppFolio, Buildium, RentManager, Yardi and QuickBooks, among others. We match you with someone who knows your system.",
  "Can they talk to my tenants and vendors?",
  "Yes. They handle tenant communication, leasing inquiries and vendor coordination for maintenance requests.",
  "Do they speak Spanish with my tenants?",
  "Every specialist is bilingual in English and Spanish.",
  "Who approves repairs and payments?",
  "You do. Your specialist triages requests, coordinates vendors and prepares the paperwork; you keep the final approval.",
  "Do I need all four roles?",
  "No. Start with the role you need most. Many teams begin with one specialist and add more as the portfolio grows.",
  "What if it isn't the right fit?",
  "We replace your specialist at no cost. There's no long-term contract.",
  "LET’S TALK",
  "Tell us about ",
  "your portfolio.",
  "A few details help us bring the right specialist profiles to your first call.",
  "Free replacement, no long-term contract",
  "See real work before you commit",
  "Direct line to the founders",
  "Match with a property management specialist.",
  "Four quick questions, with property management already selected. All we ask for is your email.",
  "Start now ",
  "Compare the cost",
  " of a dedicated specialist with a local hire"
];
 return (
<div className="view" id="property-management">

<section className="c-hero">

<div className="c-hero-copy">

<p className="eyebrow">
{copy[0]}
</p>

<h1>
{copy[1]}<em>{copy[2]}</em>
</h1>

<p className="c-lede">
{copy[3]}
</p>

<ul className="c-trades" aria-label="Property types we support">

<li>
<House strokeWidth="1.8" aria-hidden="true" /><span>{copy[4]}</span>
</li>

<li>
<Building2 strokeWidth="1.8" aria-hidden="true" /><span>{copy[5]}</span>
</li>

<li>
<Users strokeWidth="1.8" aria-hidden="true" /><span>{copy[6]}</span>
</li>

<li>
<Store strokeWidth="1.8" aria-hidden="true" /><span>{copy[7]}</span>
</li>

<li>
<KeyRound strokeWidth="1.8" aria-hidden="true" /><span>{copy[8]}</span>
</li>

</ul>

<div className="ag-cta">
<BookingButton className="ag-btn big">{copy[9]}<ArrowRight className="ic-arrow" aria-hidden="true" /></BookingButton><a className="ag-btn-o big" href="#pm-cover">{copy[10]}</a>
</div>

</div>

<div className="c-visual">
<span className="c-shape" aria-hidden="true"></span><Image src="/redesign/property.png" alt="Property management specialist" width={1200} height={900} sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 600px" preload />
<div className="c-float f1">
<span><Inbox strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<b>{copy[11]}</b><small>{copy[12]}</small>
</div>

</div>

<div className="c-float f2">
<span><Globe strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<b>{copy[13]}</b><small>{copy[14]}</small>
</div>

</div>

</div>

</section>

<section className="c-tools" aria-label="Software our specialists use">

<p>
{copy[15]}
</p>

<ul>

<li>
{copy[16]}
</li>

<li>
{copy[17]}
</li>

<li>
{copy[18]}
</li>

<li>
{copy[19]}
</li>

<li>
{copy[20]}
</li>

<li>
{copy[21]}
</li>

<li>
{copy[22]}
</li>

<li>
{copy[23]}
</li>

</ul>

</section>

<section className="c-cover" id="pm-cover">

<div className="c-cover-head">

<p className="eyebrow">
{copy[24]}
</p>

<h2>
{copy[25]}<em>{copy[26]}</em>
</h2>

<p>
{copy[27]}
</p>

</div>

<div className="cl pm-cl">

<div className="cl-track" role="tablist" aria-label="Roles by property stage">
<span className="cl-line" aria-hidden="true"><i></i></span><button type="button" className="cl-node is-active" data-i="0" role="tab" aria-selected="true" aria-controls="pm-panel-lease" id="pm-tab-lease"><span className="cl-dot"><KeyRound strokeWidth="2" aria-hidden="true" /></span><b>{copy[28]}</b><small>{copy[29]}</small></button><button type="button" className="cl-node" data-i="1" role="tab" aria-selected="false" aria-controls="pm-panel-maintain" id="pm-tab-maintain"><span className="cl-dot"><Wrench strokeWidth="2" aria-hidden="true" /></span><b>{copy[30]}</b><small>{copy[31]}</small></button><button type="button" className="cl-node" data-i="2" role="tab" aria-selected="false" aria-controls="pm-panel-collect" id="pm-tab-collect"><span className="cl-dot"><Banknote strokeWidth="2" aria-hidden="true" /></span><b>{copy[32]}</b><small>{copy[33]}</small></button><button type="button" className="cl-node" data-i="3" role="tab" aria-selected="false" aria-controls="pm-panel-report" id="pm-tab-report"><span className="cl-dot"><ChartNoAxesCombined strokeWidth="2" aria-hidden="true" /></span><b>{copy[34]}</b><small>{copy[35]}</small></button>
</div>

<div className="cl-panel" id="pm-panel-lease" role="tabpanel" aria-labelledby="pm-tab-lease">

<div className="cl-panel-head">
<span className="cl-tag">{copy[36]}</span>
<h3>
{copy[37]}
</h3>

<p>
{copy[38]}
</p>

<p className="cl-what">
{copy[39]}
</p>
<a className="ag-btn" href="#find-specialist" data-open-fs="" role="button" aria-haspopup="dialog" data-fs-need="Property management" data-fs-industry="Property management">{copy[40]}<ArrowRight className="ic-arrow" aria-hidden="true" /></a>
</div>

<div className="cl-cards">

<article style={{"--d":"0"} as CSSProperties}>
<span className="cl-ic"><MessageSquare strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[41]}</h4>
<p>
{copy[42]}
</p>

</div>

</article>

<article style={{"--d":"1"} as CSSProperties}>
<span className="cl-ic"><Inbox strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[43]}</h4>
<p>
{copy[44]}
</p>

</div>

</article>

<article style={{"--d":"2"} as CSSProperties}>
<span className="cl-ic"><CalendarDays strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[45]}</h4>
<p>
{copy[46]}
</p>

</div>

</article>

<article style={{"--d":"3"} as CSSProperties}>
<span className="cl-ic"><FileText strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[47]}</h4>
<p>
{copy[48]}
</p>

</div>

</article>

<article style={{"--d":"4"} as CSSProperties}>
<span className="cl-ic"><DoorOpen strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[49]}</h4>
<p>
{copy[50]}
</p>

</div>

</article>

<article style={{"--d":"5"} as CSSProperties}>
<span className="cl-ic"><House strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[51]}</h4>
<p>
{copy[52]}
</p>

</div>

</article>

</div>

</div>

<div className="cl-panel" id="pm-panel-maintain" role="tabpanel" aria-labelledby="pm-tab-maintain" hidden>

<div className="cl-panel-head">
<span className="cl-tag">{copy[53]}</span>
<h3>
{copy[54]}
</h3>

<p>
{copy[55]}
</p>

<p className="cl-what">
{copy[56]}
</p>
<a className="ag-btn" href="#find-specialist" data-open-fs="" role="button" aria-haspopup="dialog" data-fs-need="Property management" data-fs-industry="Property management">{copy[57]}<ArrowRight className="ic-arrow" aria-hidden="true" /></a>
</div>

<div className="cl-cards">

<article style={{"--d":"0"} as CSSProperties}>
<span className="cl-ic"><Inbox strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[58]}</h4>
<p>
{copy[59]}
</p>

</div>

</article>

<article style={{"--d":"1"} as CSSProperties}>
<span className="cl-ic"><Users strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[60]}</h4>
<p>
{copy[61]}
</p>

</div>

</article>

<article style={{"--d":"2"} as CSSProperties}>
<span className="cl-ic"><ListChecks strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[62]}</h4>
<p>
{copy[63]}
</p>

</div>

</article>

<article style={{"--d":"3"} as CSSProperties}>
<span className="cl-ic"><MessageSquare strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[64]}</h4>
<p>
{copy[65]}
</p>

</div>

</article>

<article style={{"--d":"4"} as CSSProperties}>
<span className="cl-ic"><TriangleAlert strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[66]}</h4>
<p>
{copy[67]}
</p>

</div>

</article>

<article style={{"--d":"5"} as CSSProperties}>
<span className="cl-ic"><CalendarDays strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[68]}</h4>
<p>
{copy[69]}
</p>

</div>

</article>

</div>

</div>

<div className="cl-panel" id="pm-panel-collect" role="tabpanel" aria-labelledby="pm-tab-collect" hidden>

<div className="cl-panel-head">
<span className="cl-tag">{copy[70]}</span>
<h3>
{copy[71]}
</h3>

<p>
{copy[72]}
</p>

<p className="cl-what">
{copy[73]}
</p>
<a className="ag-btn" href="#find-specialist" data-open-fs="" role="button" aria-haspopup="dialog" data-fs-need="Bookkeeping & billing" data-fs-industry="Property management">{copy[74]}<ArrowRight className="ic-arrow" aria-hidden="true" /></a>
</div>

<div className="cl-cards">

<article style={{"--d":"0"} as CSSProperties}>
<span className="cl-ic"><Banknote strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[75]}</h4>
<p>
{copy[76]}
</p>

</div>

</article>

<article style={{"--d":"1"} as CSSProperties}>
<span className="cl-ic"><TriangleAlert strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[77]}</h4>
<p>
{copy[78]}
</p>

</div>

</article>

<article style={{"--d":"2"} as CSSProperties}>
<span className="cl-ic"><ReceiptText strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[79]}</h4>
<p>
{copy[80]}
</p>

</div>

</article>

<article style={{"--d":"3"} as CSSProperties}>
<span className="cl-ic"><ClipboardCheck strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[81]}</h4>
<p>
{copy[82]}
</p>

</div>

</article>

<article style={{"--d":"4"} as CSSProperties}>
<span className="cl-ic"><ShieldCheck strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[83]}</h4>
<p>
{copy[84]}
</p>

</div>

</article>

<article style={{"--d":"5"} as CSSProperties}>
<span className="cl-ic"><Calculator strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[85]}</h4>
<p>
{copy[86]}
</p>

</div>

</article>

</div>

</div>

<div className="cl-panel" id="pm-panel-report" role="tabpanel" aria-labelledby="pm-tab-report" hidden>

<div className="cl-panel-head">
<span className="cl-tag">{copy[87]}</span>
<h3>
{copy[88]}
</h3>

<p>
{copy[89]}
</p>

<p className="cl-what">
{copy[90]}
</p>
<a className="ag-btn" href="#find-specialist" data-open-fs="" role="button" aria-haspopup="dialog" data-fs-need="Admin & scheduling" data-fs-industry="Property management">{copy[91]}<ArrowRight className="ic-arrow" aria-hidden="true" /></a>
</div>

<div className="cl-cards">

<article style={{"--d":"0"} as CSSProperties}>
<span className="cl-ic"><ChartNoAxesCombined strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[92]}</h4>
<p>
{copy[93]}
</p>

</div>

</article>

<article style={{"--d":"1"} as CSSProperties}>
<span className="cl-ic"><FileText strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[94]}</h4>
<p>
{copy[95]}
</p>

</div>

</article>

<article style={{"--d":"2"} as CSSProperties}>
<span className="cl-ic"><ClipboardCheck strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[96]}</h4>
<p>
{copy[97]}
</p>

</div>

</article>

<article style={{"--d":"3"} as CSSProperties}>
<span className="cl-ic"><ShieldCheck strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[98]}</h4>
<p>
{copy[99]}
</p>

</div>

</article>

<article style={{"--d":"4"} as CSSProperties}>
<span className="cl-ic"><CalendarDays strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[100]}</h4>
<p>
{copy[101]}
</p>

</div>

</article>

<article style={{"--d":"5"} as CSSProperties}>
<span className="cl-ic"><ListChecks strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[102]}</h4>
<p>
{copy[103]}
</p>

</div>

</article>

</div>

</div>

</div>
<button type="button" className="cl-all pm-all" aria-expanded="false">{copy[104]}</button>
<p className="cl-note">
<Users strokeWidth="1.8" aria-hidden="true" /><span>{copy[105]}<b>{copy[106]}</b>{copy[107]}</span>
</p>

<div className="c-models">

<article>
<span className="c-model-tag">{copy[108]}</span>
<h3>
{copy[109]}
</h3>

<p>
{copy[110]}
</p>

</article>
<span className="c-or" aria-hidden="true">{copy[111]}</span>
<article>
<span className="c-model-tag lime">{copy[112]}</span>
<h3>
{copy[113]}
</h3>

<p>
{copy[114]}
</p>

</article>

</div>

</section>

<section className="c-result">

<div className="c-result-head">

<p className="eyebrow">
{copy[115]}
</p>

<h2>
{copy[116]}
</h2>

</div>

<article className="case c-case pm-case">

<div className="case-quote">

<div className="c-case-logo">
<Image src="/redesign/d9467c9bad9f.png" alt="Stone Edge Management logo" width={1200} height={900} sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 600px" />
</div>

<blockquote>
{copy[117]}
</blockquote>

<div className="story-author">
<span className="avatar av-lime">{copy[118]}</span>
<div>
<b>{copy[119]}</b><span>{copy[120]}</span>
</div>

</div>

</div>

<ul className="pm-case-list">

<li>
<Check strokeWidth="2.6" aria-hidden="true" />{copy[121]}
</li>

<li>
<Check strokeWidth="2.6" aria-hidden="true" />{copy[122]}
</li>

<li>
<Check strokeWidth="2.6" aria-hidden="true" />{copy[123]}
</li>

</ul>

</article>

</section>

<section className="c-trust">

<div className="c-trust-head">

<p className="eyebrow">
{copy[124]}
</p>

<h2>
{copy[125]}<em>{copy[126]}</em>
</h2>

</div>

<div className="c-trust-grid">

<article>
<span className="ct-ic"><Globe strokeWidth="1.8" aria-hidden="true" /></span>
<h3>
{copy[127]}
</h3>

<p>
{copy[128]}
</p>

</article>

<article>
<span className="ct-ic"><Clock strokeWidth="1.8" aria-hidden="true" /></span>
<h3>
{copy[129]}
</h3>

<p>
{copy[130]}
</p>

</article>

<article>
<span className="ct-ic"><Wrench strokeWidth="1.8" aria-hidden="true" /></span>
<h3>
{copy[131]}
</h3>

<p>
{copy[132]}
</p>

</article>

<article>
<span className="ct-ic"><Users strokeWidth="1.8" aria-hidden="true" /></span>
<h3>
{copy[133]}
</h3>

<p>
{copy[134]}
</p>

</article>

<article>
<span className="ct-ic"><RefreshCw strokeWidth="1.8" aria-hidden="true" /></span>
<h3>
{copy[135]}
</h3>

<p>
{copy[136]}
</p>

</article>

<article>
<span className="ct-ic"><Eye strokeWidth="1.8" aria-hidden="true" /></span>
<h3>
{copy[137]}
</h3>

<p>
{copy[138]}
</p>

</article>

</div>

</section>

<section className="faq c-faq">

<div className="faq-head">

<p className="eyebrow">
{copy[139]}
</p>

<h2>
{copy[140]}
</h2>

<p>
{copy[141]}
</p>

</div>

<div className="faq-list">

<details>

<summary>
{copy[142]}<span className="faq-ic" aria-hidden="true"></span>
</summary>

<p>
{copy[143]}
</p>

</details>

<details>

<summary>
{copy[144]}<span className="faq-ic" aria-hidden="true"></span>
</summary>

<p>
{copy[145]}
</p>

</details>

<details>

<summary>
{copy[146]}<span className="faq-ic" aria-hidden="true"></span>
</summary>

<p>
{copy[147]}
</p>

</details>

<details>

<summary>
{copy[148]}<span className="faq-ic" aria-hidden="true"></span>
</summary>

<p>
{copy[149]}
</p>

</details>

<details>

<summary>
{copy[150]}<span className="faq-ic" aria-hidden="true"></span>
</summary>

<p>
{copy[151]}
</p>

</details>

<details>

<summary>
{copy[152]}<span className="faq-ic" aria-hidden="true"></span>
</summary>

<p>
{copy[153]}
</p>

</details>

</div>

</section>

<section className="c-form-wrap">

<div className="c-form-copy">

<p className="eyebrow">
{copy[154]}
</p>

<h2>
{copy[155]}<em>{copy[156]}</em>
</h2>

<p>
{copy[157]}
</p>

<ul className="checks">

<li>
<Check strokeWidth="2.6" aria-hidden="true" />{copy[158]}
</li>

<li>
<Check strokeWidth="2.6" aria-hidden="true" />{copy[159]}
</li>

<li>
<Check strokeWidth="2.6" aria-hidden="true" />{copy[160]}
</li>

</ul>

</div>

<div className="contact-form cta-card">
<span className="cta-card-ic"><Building2 strokeWidth="1.8" aria-hidden="true" /></span>
<h3>
{copy[161]}
</h3>

<p>
{copy[162]}
</p>
<a className="ag-btn big" href="#find-specialist" data-open-fs="" role="button" aria-haspopup="dialog" data-fs-need="Property management" data-fs-industry="Property management">{copy[163]}<ArrowRight className="ic-arrow" aria-hidden="true" /></a><Link className="cta-cost" href="/calculator"><Calculator strokeWidth="1.8" aria-hidden="true" /><span><b>{copy[164]}</b>{copy[165]}</span></Link>
</div>

</section>

</div>
);
}

export function AccountingDesign() {
 const copy = [
  "ACCOUNTING & BOOKKEEPING",
  "Bookkeeping support ",
  "built for growing businesses.",
  "Bilingual bookkeeping specialists who record transactions, reconcile accounts, chase invoices and close your books on a fixed monthly schedule.",
  "Accounting & CPA firms",
  "Small businesses",
  "Property managers",
  "Contractors",
  "Professional services",
  "Book a call ",
  "See what we cover",
  "Books reconciled",
  "In QuickBooks or Xero",
  "English + Spanish",
  "With clients and vendors",
  "Trained on the accounting software you already use",
  "QuickBooks Online",
  "Xero",
  "Bill.com",
  "Dext",
  "Gusto",
  "Melio",
  "Excel / Google Sheets",
  "NetSuite",
  "FreshBooks",
  "Expensify",
  "WHAT WE OFFER",
  "Accounting Support ",
  "by Role.",
  "Four roles that cover your books, from the first transaction to the monthly close. Hire one, or build a team with several.",
  "01 · Record",
  "Bookkeeper",
  "02 · Pay",
  "Accounts Payable Specialist",
  "03 · Collect",
  "Accounts Receivable Specialist",
  "04 · Close",
  "Month-End & Reporting Specialist",
  "ROLE 01 · RECORD",
  "Bookkeeper",
  "Keeps every transaction recorded and every account reconciled.",
  "What your Bookkeeper handles →",
  "Hire a Bookkeeper ",
  "Daily transaction recording",
  "Every transaction recorded and categorized in QuickBooks or Xero.",
  "Bank & credit card reconciliations",
  "Accounts matched against your records.",
  "Receipt & document capture",
  "Receipts captured and missing statements chased.",
  "Expense categorization",
  "Clean, consistent categories every week.",
  "Vendor record cleanup",
  "Vendor details kept complete for your accountant.",
  "ROLE 02 · PAY",
  "Accounts Payable Specialist",
  "Gets your bills entered, approved and paid on time.",
  "What your Accounts Payable Specialist handles →",
  "Hire an Accounts Payable Specialist ",
  "Vendor bill entry",
  "Bills entered as soon as they arrive.",
  "Approval routing",
  "Every bill sent to the right person for approval.",
  "Payment scheduling",
  "Payments scheduled so nothing is late.",
  "1099 prep support",
  "Vendor records ready for 1099 season.",
  "Payroll run support",
  "Runs supported in Gusto or ADP; final review stays with your accountant.",
  "ROLE 03 · COLLECT",
  "Accounts Receivable Specialist",
  "Keeps invoices going out and payments coming in.",
  "What your Accounts Receivable Specialist handles →",
  "Hire an Accounts Receivable Specialist ",
  "Invoicing",
  "Invoices created and sent on time.",
  "Payment application",
  "Payments applied to the right invoices.",
  "Collections follow-up",
  "Friendly, consistent follow-up on open balances.",
  "AR aging review",
  "Overdue invoices flagged every week.",
  "Weekly cash-flow snapshot",
  "A quick view of what came in and what is due.",
  "ROLE 04 · CLOSE",
  "Month-End & Reporting Specialist",
  "Closes your books on a fixed calendar, every month.",
  "What your Month-End & Reporting Specialist handles →",
  "Hire a Month-End & Reporting Specialist ",
  "Monthly close prep",
  "Books closed on a fixed calendar and delivered by a set date.",
  "Financial reporting",
  "P&L, balance sheet and the summaries you ask for.",
  "W-2 prep support",
  "Year-end paperwork ready for your accountant.",
  "Accountant handoff",
  "Clean books and supporting documents ready for review.",
  "Close checklist",
  "Every step tracked so nothing slips through.",
  "See all 4 roles at once",
  "Each role is a ",
  "separate, dedicated specialist",
  ". Start with the one you need most and add more as you grow.",
  "ONE SPECIALIST",
  "Dedicated bookkeeper",
  "A full-time specialist who learns your books, your software and your monthly calendar.",
  "or",
  "A TEAM",
  "An accounting support team",
  "Several roles working together as your volume grows, from AP to the monthly close.",
  "REAL RESULTS",
  "An accountant’s view.",
  "“It’s dependable support that truly makes my job easier.”",
  "M",
  "Luis M.",
  "Owner, L&M Accounting",
  "Transactions coded correctly",
  "Bank reconciliations on time",
  "Smoother month-end close",
  "WHY VIRTUAL VALUE BRIDGE",
  "A specialist with ",
  "a team behind them.",
  "English + Spanish",
  "Bilingual with your clients, vendors and team.",
  "Your time zone",
  "Working CST hours, aligned with U.S. teams.",
  "Trained on your stack",
  "Real onboarding into your software and SOPs.",
  "Backed by an on-site team",
  "HR, supervisors and quality reviews in San Salvador.",
  "Free replacement",
  "No long-term contract if the fit isn't right.",
  "See real work first",
  "Review real work before you commit to anything.",
  "ACCOUNTING FAQ",
  "What business owners ask us.",
  "Quick answers before your first call.",
  "Which accounting software do they use?",
  "QuickBooks Online, Xero, Bill.com, Dext, Gusto, Melio, NetSuite, FreshBooks and Expensify, among others. We match you with someone who knows your stack.",
  "Do they replace my accountant or CPA?",
  "No. Your specialist keeps the books clean and ready; final reviews, payroll sign-off and tax work stay with your accountant.",
  "When will my books be closed each month?",
  "Close prep follows a fixed calendar, with books delivered by a set date you agree on.",
  "Can they follow up on unpaid invoices?",
  "Yes. They handle invoicing, payment application and collections follow-up, with a weekly AR aging review.",
  "Do I need all four roles?",
  "No. Most businesses start with one bookkeeper and add roles as volume grows.",
  "What if it isn't the right fit?",
  "We replace your specialist at no cost. There's no long-term contract.",
  "LET’S TALK",
  "Tell us about ",
  "your books.",
  "A few details help us bring the right specialist profiles to your first call.",
  "Free replacement, no long-term contract",
  "See real work before you commit",
  "Direct line to the founders",
  "Match with a bookkeeping specialist.",
  "Four quick questions, with accounting already selected. All we ask for is your email.",
  "Start now ",
  "Compare the cost",
  " of a dedicated specialist with a local hire"
];
 return (
<div className="view" id="accounting">

<section className="c-hero">

<div className="c-hero-copy">

<p className="eyebrow">
{copy[0]}
</p>

<h1>
{copy[1]}<em>{copy[2]}</em>
</h1>

<p className="c-lede">
{copy[3]}
</p>

<ul className="c-trades" aria-label="Businesses we support">

<li>
<Building2 strokeWidth="1.8" aria-hidden="true" /><span>{copy[4]}</span>
</li>

<li>
<Store strokeWidth="1.8" aria-hidden="true" /><span>{copy[5]}</span>
</li>

<li>
<House strokeWidth="1.8" aria-hidden="true" /><span>{copy[6]}</span>
</li>

<li>
<Wrench strokeWidth="1.8" aria-hidden="true" /><span>{copy[7]}</span>
</li>

<li>
<Users strokeWidth="1.8" aria-hidden="true" /><span>{copy[8]}</span>
</li>

</ul>

<div className="ag-cta">
<BookingButton className="ag-btn big">{copy[9]}<ArrowRight className="ic-arrow" aria-hidden="true" /></BookingButton><a className="ag-btn-o big" href="#acc-cover">{copy[10]}</a>
</div>

</div>

<div className="c-visual">
<span className="c-shape" aria-hidden="true"></span><Image src="/redesign/book.png" alt="Bookkeeping and accounting specialist" width={1200} height={900} sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 600px" preload />
<div className="c-float f1">
<span><Inbox strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<b>{copy[11]}</b><small>{copy[12]}</small>
</div>

</div>

<div className="c-float f2">
<span><Globe strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<b>{copy[13]}</b><small>{copy[14]}</small>
</div>

</div>

</div>

</section>

<section className="c-tools" aria-label="Software our specialists use">

<p>
{copy[15]}
</p>

<ul>

<li>
{copy[16]}
</li>

<li>
{copy[17]}
</li>

<li>
{copy[18]}
</li>

<li>
{copy[19]}
</li>

<li>
{copy[20]}
</li>

<li>
{copy[21]}
</li>

<li>
{copy[22]}
</li>

<li>
{copy[23]}
</li>

<li>
{copy[24]}
</li>

<li>
{copy[25]}
</li>

</ul>

</section>

<section className="c-cover" id="acc-cover">

<div className="c-cover-head">

<p className="eyebrow">
{copy[26]}
</p>

<h2>
{copy[27]}<em>{copy[28]}</em>
</h2>

<p>
{copy[29]}
</p>

</div>

<div className="cl acc-cl">

<div className="cl-track" role="tablist" aria-label="Roles by accounting stage">
<span className="cl-line" aria-hidden="true"><i></i></span><button type="button" className="cl-node is-active" data-i="0" role="tab" aria-selected="true" aria-controls="acc-panel-record" id="acc-tab-record"><span className="cl-dot"><Calculator strokeWidth="2" aria-hidden="true" /></span><b>{copy[30]}</b><small>{copy[31]}</small></button><button type="button" className="cl-node" data-i="1" role="tab" aria-selected="false" aria-controls="acc-panel-pay" id="acc-tab-pay"><span className="cl-dot"><ReceiptText strokeWidth="2" aria-hidden="true" /></span><b>{copy[32]}</b><small>{copy[33]}</small></button><button type="button" className="cl-node" data-i="2" role="tab" aria-selected="false" aria-controls="acc-panel-collect" id="acc-tab-collect"><span className="cl-dot"><Banknote strokeWidth="2" aria-hidden="true" /></span><b>{copy[34]}</b><small>{copy[35]}</small></button><button type="button" className="cl-node" data-i="3" role="tab" aria-selected="false" aria-controls="acc-panel-close" id="acc-tab-close"><span className="cl-dot"><ChartNoAxesCombined strokeWidth="2" aria-hidden="true" /></span><b>{copy[36]}</b><small>{copy[37]}</small></button>
</div>

<div className="cl-panel" id="acc-panel-record" role="tabpanel" aria-labelledby="acc-tab-record">

<div className="cl-panel-head">
<span className="cl-tag">{copy[38]}</span>
<h3>
{copy[39]}
</h3>

<p>
{copy[40]}
</p>

<p className="cl-what">
{copy[41]}
</p>
<a className="ag-btn" href="#find-specialist" data-open-fs="" role="button" aria-haspopup="dialog" data-fs-need="Bookkeeping & billing" data-fs-industry="Accounting & finance">{copy[42]}<ArrowRight className="ic-arrow" aria-hidden="true" /></a>
</div>

<div className="cl-cards">

<article style={{"--d":"0"} as CSSProperties}>
<span className="cl-ic"><Calculator strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[43]}</h4>
<p>
{copy[44]}
</p>

</div>

</article>

<article style={{"--d":"1"} as CSSProperties}>
<span className="cl-ic"><ClipboardCheck strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[45]}</h4>
<p>
{copy[46]}
</p>

</div>

</article>

<article style={{"--d":"2"} as CSSProperties}>
<span className="cl-ic"><FileText strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[47]}</h4>
<p>
{copy[48]}
</p>

</div>

</article>

<article style={{"--d":"3"} as CSSProperties}>
<span className="cl-ic"><ListChecks strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[49]}</h4>
<p>
{copy[50]}
</p>

</div>

</article>

<article style={{"--d":"4"} as CSSProperties}>
<span className="cl-ic"><Users strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[51]}</h4>
<p>
{copy[52]}
</p>

</div>

</article>

</div>

</div>

<div className="cl-panel" id="acc-panel-pay" role="tabpanel" aria-labelledby="acc-tab-pay" hidden>

<div className="cl-panel-head">
<span className="cl-tag">{copy[53]}</span>
<h3>
{copy[54]}
</h3>

<p>
{copy[55]}
</p>

<p className="cl-what">
{copy[56]}
</p>
<a className="ag-btn" href="#find-specialist" data-open-fs="" role="button" aria-haspopup="dialog" data-fs-need="Bookkeeping & billing" data-fs-industry="Accounting & finance">{copy[57]}<ArrowRight className="ic-arrow" aria-hidden="true" /></a>
</div>

<div className="cl-cards">

<article style={{"--d":"0"} as CSSProperties}>
<span className="cl-ic"><ReceiptText strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[58]}</h4>
<p>
{copy[59]}
</p>

</div>

</article>

<article style={{"--d":"1"} as CSSProperties}>
<span className="cl-ic"><RefreshCw strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[60]}</h4>
<p>
{copy[61]}
</p>

</div>

</article>

<article style={{"--d":"2"} as CSSProperties}>
<span className="cl-ic"><CalendarDays strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[62]}</h4>
<p>
{copy[63]}
</p>

</div>

</article>

<article style={{"--d":"3"} as CSSProperties}>
<span className="cl-ic"><ShieldCheck strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[64]}</h4>
<p>
{copy[65]}
</p>

</div>

</article>

<article style={{"--d":"4"} as CSSProperties}>
<span className="cl-ic"><Banknote strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[66]}</h4>
<p>
{copy[67]}
</p>

</div>

</article>

</div>

</div>

<div className="cl-panel" id="acc-panel-collect" role="tabpanel" aria-labelledby="acc-tab-collect" hidden>

<div className="cl-panel-head">
<span className="cl-tag">{copy[68]}</span>
<h3>
{copy[69]}
</h3>

<p>
{copy[70]}
</p>

<p className="cl-what">
{copy[71]}
</p>
<a className="ag-btn" href="#find-specialist" data-open-fs="" role="button" aria-haspopup="dialog" data-fs-need="Bookkeeping & billing" data-fs-industry="Accounting & finance">{copy[72]}<ArrowRight className="ic-arrow" aria-hidden="true" /></a>
</div>

<div className="cl-cards">

<article style={{"--d":"0"} as CSSProperties}>
<span className="cl-ic"><FileText strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[73]}</h4>
<p>
{copy[74]}
</p>

</div>

</article>

<article style={{"--d":"1"} as CSSProperties}>
<span className="cl-ic"><Calculator strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[75]}</h4>
<p>
{copy[76]}
</p>

</div>

</article>

<article style={{"--d":"2"} as CSSProperties}>
<span className="cl-ic"><MessageSquare strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[77]}</h4>
<p>
{copy[78]}
</p>

</div>

</article>

<article style={{"--d":"3"} as CSSProperties}>
<span className="cl-ic"><TriangleAlert strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[79]}</h4>
<p>
{copy[80]}
</p>

</div>

</article>

<article style={{"--d":"4"} as CSSProperties}>
<span className="cl-ic"><ChartNoAxesCombined strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[81]}</h4>
<p>
{copy[82]}
</p>

</div>

</article>

</div>

</div>

<div className="cl-panel" id="acc-panel-close" role="tabpanel" aria-labelledby="acc-tab-close" hidden>

<div className="cl-panel-head">
<span className="cl-tag">{copy[83]}</span>
<h3>
{copy[84]}
</h3>

<p>
{copy[85]}
</p>

<p className="cl-what">
{copy[86]}
</p>
<a className="ag-btn" href="#find-specialist" data-open-fs="" role="button" aria-haspopup="dialog" data-fs-need="Bookkeeping & billing" data-fs-industry="Accounting & finance">{copy[87]}<ArrowRight className="ic-arrow" aria-hidden="true" /></a>
</div>

<div className="cl-cards">

<article style={{"--d":"0"} as CSSProperties}>
<span className="cl-ic"><CalendarDays strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[88]}</h4>
<p>
{copy[89]}
</p>

</div>

</article>

<article style={{"--d":"1"} as CSSProperties}>
<span className="cl-ic"><ChartNoAxesCombined strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[90]}</h4>
<p>
{copy[91]}
</p>

</div>

</article>

<article style={{"--d":"2"} as CSSProperties}>
<span className="cl-ic"><ShieldCheck strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[92]}</h4>
<p>
{copy[93]}
</p>

</div>

</article>

<article style={{"--d":"3"} as CSSProperties}>
<span className="cl-ic"><Eye strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[94]}</h4>
<p>
{copy[95]}
</p>

</div>

</article>

<article style={{"--d":"4"} as CSSProperties}>
<span className="cl-ic"><ListChecks strokeWidth="1.8" aria-hidden="true" /></span>
<div>
<h4>{copy[96]}</h4>
<p>
{copy[97]}
</p>

</div>

</article>

</div>

</div>

</div>
<button type="button" className="cl-all acc-all" aria-expanded="false">{copy[98]}</button>
<p className="cl-note">
<Users strokeWidth="1.8" aria-hidden="true" /><span>{copy[99]}<b>{copy[100]}</b>{copy[101]}</span>
</p>

<div className="c-models">

<article>
<span className="c-model-tag">{copy[102]}</span>
<h3>
{copy[103]}
</h3>

<p>
{copy[104]}
</p>

</article>
<span className="c-or" aria-hidden="true">{copy[105]}</span>
<article>
<span className="c-model-tag lime">{copy[106]}</span>
<h3>
{copy[107]}
</h3>

<p>
{copy[108]}
</p>

</article>

</div>

</section>

<section className="c-result">

<div className="c-result-head">

<p className="eyebrow">
{copy[109]}
</p>

<h2>
{copy[110]}
</h2>

</div>

<article className="case c-case acc-case">

<div className="case-quote">

<div className="c-case-logo">
<Image src="/redesign/b54b2648a039.png" alt="L&M Accounting logo" width={1200} height={900} sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 600px" />
</div>

<blockquote>
{copy[111]}
</blockquote>

<div className="story-author">
<span className="avatar av-lime">{copy[112]}</span>
<div>
<b>{copy[113]}</b><span>{copy[114]}</span>
</div>

</div>

</div>

<ul className="acc-case-list">

<li>
<Check strokeWidth="2.6" aria-hidden="true" />{copy[115]}
</li>

<li>
<Check strokeWidth="2.6" aria-hidden="true" />{copy[116]}
</li>

<li>
<Check strokeWidth="2.6" aria-hidden="true" />{copy[117]}
</li>

</ul>

</article>

</section>

<section className="c-trust">

<div className="c-trust-head">

<p className="eyebrow">
{copy[118]}
</p>

<h2>
{copy[119]}<em>{copy[120]}</em>
</h2>

</div>

<div className="c-trust-grid">

<article>
<span className="ct-ic"><Globe strokeWidth="1.8" aria-hidden="true" /></span>
<h3>
{copy[121]}
</h3>

<p>
{copy[122]}
</p>

</article>

<article>
<span className="ct-ic"><Clock strokeWidth="1.8" aria-hidden="true" /></span>
<h3>
{copy[123]}
</h3>

<p>
{copy[124]}
</p>

</article>

<article>
<span className="ct-ic"><Wrench strokeWidth="1.8" aria-hidden="true" /></span>
<h3>
{copy[125]}
</h3>

<p>
{copy[126]}
</p>

</article>

<article>
<span className="ct-ic"><Users strokeWidth="1.8" aria-hidden="true" /></span>
<h3>
{copy[127]}
</h3>

<p>
{copy[128]}
</p>

</article>

<article>
<span className="ct-ic"><RefreshCw strokeWidth="1.8" aria-hidden="true" /></span>
<h3>
{copy[129]}
</h3>

<p>
{copy[130]}
</p>

</article>

<article>
<span className="ct-ic"><Eye strokeWidth="1.8" aria-hidden="true" /></span>
<h3>
{copy[131]}
</h3>

<p>
{copy[132]}
</p>

</article>

</div>

</section>

<section className="faq c-faq">

<div className="faq-head">

<p className="eyebrow">
{copy[133]}
</p>

<h2>
{copy[134]}
</h2>

<p>
{copy[135]}
</p>

</div>

<div className="faq-list">

<details>

<summary>
{copy[136]}<span className="faq-ic" aria-hidden="true"></span>
</summary>

<p>
{copy[137]}
</p>

</details>

<details>

<summary>
{copy[138]}<span className="faq-ic" aria-hidden="true"></span>
</summary>

<p>
{copy[139]}
</p>

</details>

<details>

<summary>
{copy[140]}<span className="faq-ic" aria-hidden="true"></span>
</summary>

<p>
{copy[141]}
</p>

</details>

<details>

<summary>
{copy[142]}<span className="faq-ic" aria-hidden="true"></span>
</summary>

<p>
{copy[143]}
</p>

</details>

<details>

<summary>
{copy[144]}<span className="faq-ic" aria-hidden="true"></span>
</summary>

<p>
{copy[145]}
</p>

</details>

<details>

<summary>
{copy[146]}<span className="faq-ic" aria-hidden="true"></span>
</summary>

<p>
{copy[147]}
</p>

</details>

</div>

</section>

<section className="c-form-wrap">

<div className="c-form-copy">

<p className="eyebrow">
{copy[148]}
</p>

<h2>
{copy[149]}<em>{copy[150]}</em>
</h2>

<p>
{copy[151]}
</p>

<ul className="checks">

<li>
<Check strokeWidth="2.6" aria-hidden="true" />{copy[152]}
</li>

<li>
<Check strokeWidth="2.6" aria-hidden="true" />{copy[153]}
</li>

<li>
<Check strokeWidth="2.6" aria-hidden="true" />{copy[154]}
</li>

</ul>

</div>

<div className="contact-form cta-card">
<span className="cta-card-ic"><Building2 strokeWidth="1.8" aria-hidden="true" /></span>
<h3>
{copy[155]}
</h3>

<p>
{copy[156]}
</p>
<a className="ag-btn big" href="#find-specialist" data-open-fs="" role="button" aria-haspopup="dialog" data-fs-need="Bookkeeping & billing" data-fs-industry="Accounting & finance">{copy[157]}<ArrowRight className="ic-arrow" aria-hidden="true" /></a><Link className="cta-cost" href="/calculator"><Calculator strokeWidth="1.8" aria-hidden="true" /><span><b>{copy[158]}</b>{copy[159]}</span></Link>
</div>

</section>

</div>
);
}

export function ReferenceFooter() {
 const copy = [
  "© 2026 Virtual Value Bridge",
  "info@vvbridge.net"
];
 return (
<footer>
<Link className="brand" href="/" aria-label="Virtual Value Bridge"><Image className="brand-logo" src="/redesign/4378676b61b1.png" alt="Virtual Value Bridge logo" width={450} height={120} sizes="180px" /></Link><span>{copy[0]}</span><a href="mailto:info@vvbridge.net">{copy[1]}</a>
</footer>
);
}

export function ProcessDesign() {
 const copy = [
  "THE VIRTUAL VALUE BRIDGE APPROACH",
  "More than a resume.",
  "A great fit.",
  "We look at the person, the skills, and the needs of your business to help create a working relationship that lasts. Here’s how we work together:",
  "01",
  "GETTING STARTED",
  "Tell us what you need",
  "Share the role you need.",
  "02",
  "THE MATCH",
  "Meet your specialist",
  "Hand-picked for your industry.",
  "03",
  "WORKING TOGETHER",
  "Watch your business run smoother",
  "Plugs right into your team.",
  "Book a call ",
  "HOW IT WORKS",
  "01",
  "GETTING",
  "STARTED",
  "02",
  "THE",
  "MATCH",
  "03",
  "WORKING",
  "TOGETHER",
  "1",
  "Tell us what you need",
  "STEP 01 · GETTING STARTED",
  "Your role and tools",
  "Talk to a founder"
];
 return (
<section className="approach" id="how-it-works">

<div className="approach-copy">

<p className="eyebrow">
{copy[0]}
</p>

<h2>
{copy[1]}<br /><em>{copy[2]}</em>
</h2>

<p className="approach-text">
{copy[3]}
</p>

<ol className="hiw-steps">

<li>
<button type="button" data-step="0" aria-pressed="true" className="is-active"><span className="hiw-n">{copy[4]}</span><span className="hiw-txt"><small>{copy[5]}</small><b>{copy[6]}</b><em>{copy[7]}</em></span><i className="hiw-prog" aria-hidden="true"><i></i></i></button>
</li>

<li>
<button type="button" data-step="1" aria-pressed="false"><span className="hiw-n">{copy[8]}</span><span className="hiw-txt"><small>{copy[9]}</small><b>{copy[10]}</b><em>{copy[11]}</em></span><i className="hiw-prog" aria-hidden="true"><i></i></i></button>
</li>

<li>
<button type="button" data-step="2" aria-pressed="false"><span className="hiw-n">{copy[12]}</span><span className="hiw-txt"><small>{copy[13]}</small><b>{copy[14]}</b><em>{copy[15]}</em></span><i className="hiw-prog" aria-hidden="true"><i></i></i></button>
</li>

</ol>
<BookingButton className="pill-navy">{copy[16]}<ArrowRight className="ic-arrow" aria-hidden="true" /></BookingButton>
</div>

<div className="fit-board hiw" id="hiw" data-step="0">
<span className="fit-back" aria-hidden="true"></span>
<div className="fit-card">

<div className="hiw-top">
<span className="hiw-label"><i></i>{copy[17]}</span><button type="button" className="hiw-toggle" aria-label="Pause animation"><Pause className="i-pause" aria-hidden="true" /><Play className="i-play" aria-hidden="true" /></button>
</div>

<div className="fit-arc">
<svg viewBox="0 0 440 220" aria-hidden="true"><defs><mask id="hiwMask" maskUnits="userSpaceOnUse" x="-20" y="-60" width="480" height="300"><path className="hiw-mask" d="M70 165 Q220 -40 370 165" pathLength="100"></path></mask></defs><path className="hiw-base" d="M70 165 Q220 -40 370 165"></path><path className="hiw-fill" d="M70 165 Q220 -40 370 165" mask="url(#hiwMask)"></path><circle className="hiw-dot" r="8" cx="70" cy="165"></circle></svg><button type="button" className="hiw-node n1 is-active" data-step="0" aria-label="Step 1: Tell us what you need"><span>{copy[18]}</span>{copy[19]}<br />{copy[20]}</button><button type="button" className="hiw-node n2" data-step="1" aria-label="Step 2: Meet your specialist"><span>{copy[21]}</span>{copy[22]}<br />{copy[23]}</button><button type="button" className="hiw-node n3" data-step="2" aria-label="Step 3: Watch your business run smoother"><span>{copy[24]}</span>{copy[25]}<br />{copy[26]}</button>
<div className="hiw-center" aria-live="polite">
<b className="hiw-num" aria-hidden="true">{copy[27]}</b><span className="hiw-title">{copy[28]}</span>
</div>

</div>

<div className="hiw-bottom">
<span className="fit-blob" aria-hidden="true"></span>
<div className="fit-person hiw-person" aria-hidden="true">
<Star className="doodle d-star" aria-hidden="true" /><MessageSquare className="doodle d-bubble" aria-hidden="true" /><Heart className="doodle d-heart" aria-hidden="true" />
<div className="fit-avatar hiw-avatar">
<span className="hiw-ph"><BriefcaseBusiness aria-hidden="true" /></span><Image className="hiw-main" alt="" src="/redesign/1b11547f4755.jpg" width={1200} height={900} sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 600px" />
</div>
<span className="hiw-icons"><span className="hiw-ico s0 p0"><ClipboardCheck strokeWidth="2" aria-hidden="true" /></span><span className="hiw-ico s0 p1"><ClipboardCheck strokeWidth="2" aria-hidden="true" /></span><span className="hiw-ico s0 p2"><MessageSquare strokeWidth="2" aria-hidden="true" /></span><span className="hiw-ico s1 p0"><Search strokeWidth="2" aria-hidden="true" /></span><span className="hiw-ico s1 p1"><ShieldCheck strokeWidth="2" aria-hidden="true" /></span><span className="hiw-ico s1 p2"><Star strokeWidth="2" aria-hidden="true" /></span><span className="hiw-ico s2 p0"><ClipboardCheck strokeWidth="2" aria-hidden="true" /></span><span className="hiw-ico s2 p1"><ClipboardCheck strokeWidth="2" aria-hidden="true" /></span><span className="hiw-ico s2 p2"><Headphones strokeWidth="2" aria-hidden="true" /></span></span><span className="hiw-team"><Image alt="" data-src-from="0" src="/redesign/681ca71001b1.jpg" width={1200} height={900} sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 600px" /><Image alt="" data-src-from="1" src="/redesign/7e024a8f36ca.jpg" width={1200} height={900} sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 600px" /><Image alt="" data-src-from="2" src="/redesign/d0c8d4068aaa.jpg" width={1200} height={900} sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 600px" /></span>
</div>

<div className="hiw-panel">
<small className="hiw-phase">{copy[29]}</small>
<ul className="hiw-list">

<li style={{"--d":"0"} as CSSProperties}>
<Check aria-hidden="true" /><span>{copy[30]}</span>
</li>

<li style={{"--d":"1"} as CSSProperties}>
<Check aria-hidden="true" /><span>{copy[31]}</span>
</li>

</ul>
<span className="hiw-timer" aria-hidden="true"><i></i></span>
</div>

</div>

</div>

</div>

</section>
);
}

export function ServicesDesign() {
 const copy = [
  "EXPLORE BY SPECIALTY",
  "What kind of support",
  "are you looking for?",
  "Pick the role you need and meet a bilingual specialist who fits the way you work.",
  "All roles",
  "Construction",
  "Property",
  "Finance",
  "Marketing",
  "Operations",
  "CONSTRUCTION",
  "Estimating & Bid Support",
  "Takeoff assistance, bid preparation, project documentation.",
  "Learn more ",
  "PROPERTY",
  "Leasing & Tenant Support",
  "Tenant requests, leasing administration, maintenance follow-up.",
  "Learn more ",
  "FINANCE",
  "Bookkeeping Assistant",
  "Accounts payable, reconciliations, and reporting support.",
  "Learn more ",
  "MARKETING",
  "Digital Marketing Assistant",
  "Social media, campaign coordination, and content support.",
  "Learn more ",
  "OPERATIONS",
  "Administrative Assistant",
  "Scheduling, inbox support, data entry, and research.",
  "Learn more ",
  "OPERATIONS",
  "Project Coordinator",
  "Task tracking, team follow-ups, and project organization.",
  "Learn more "
];
 return (
<section className="support" id="roles">
<span className="support-ring" aria-hidden="true"></span>
<div className="support-head">

<div className="support-title">

<p className="eyebrow underline">
{copy[0]}
</p>

<h2>
{copy[1]}<br />{copy[2]}
</h2>

<p className="support-lede">
{copy[3]}
</p>

</div>

<div className="role-filters">
<button className="active" data-filter="all">{copy[4]}</button><button data-filter="construction">{copy[5]}</button><button data-filter="property">{copy[6]}</button><button data-filter="finance">{copy[7]}</button><button data-filter="marketing">{copy[8]}</button><button data-filter="operations">{copy[9]}</button>
</div>

</div>

<div className="support-wrap">

<div className="support-grid">

<article data-type="construction">

<div className="support-top">
<span className="support-icon"><Calculator strokeWidth="1.8" aria-hidden="true" /></span><small>{copy[10]}</small>
</div>

<h3>
{copy[11]}
</h3>

<p>
{copy[12]}
</p>
<Link className="learn" href="/services/estimating-support">{copy[13]}<ArrowRight className="ic-arrow" aria-hidden="true" /></Link>
</article>

<article data-type="property">

<div className="support-top">
<span className="support-icon"><House strokeWidth="1.8" aria-hidden="true" /></span><small>{copy[14]}</small>
</div>

<h3>
{copy[15]}
</h3>

<p>
{copy[16]}
</p>
<Link className="learn" href="/services/property-management">{copy[17]}<ArrowRight className="ic-arrow" aria-hidden="true" /></Link>
</article>

<article data-type="finance">

<div className="support-top">
<span className="support-icon"><ChartNoAxesCombined strokeWidth="1.8" aria-hidden="true" /></span><small>{copy[18]}</small>
</div>

<h3>
{copy[19]}
</h3>

<p>
{copy[20]}
</p>
<Link className="learn" href="/services/bookkeeping-accounting">{copy[21]}<ArrowRight className="ic-arrow" aria-hidden="true" /></Link>
</article>

<article data-type="marketing">

<div className="support-top">
<span className="support-icon"><Megaphone strokeWidth="1.8" aria-hidden="true" /></span><small>{copy[22]}</small>
</div>

<h3>
{copy[23]}
</h3>

<p>
{copy[24]}
</p>
<Link className="learn" href="/services/marketing-support">{copy[25]}<ArrowRight className="ic-arrow" aria-hidden="true" /></Link>
</article>

<article data-type="operations">

<div className="support-top">
<span className="support-icon"><CalendarDays strokeWidth="1.8" aria-hidden="true" /></span><small>{copy[26]}</small>
</div>

<h3>
{copy[27]}
</h3>

<p>
{copy[28]}
</p>
<Link className="learn" href="/services/virtual-assistant">{copy[29]}<ArrowRight className="ic-arrow" aria-hidden="true" /></Link>
</article>

<article data-type="operations">

<div className="support-top">
<span className="support-icon"><ListChecks strokeWidth="1.8" aria-hidden="true" /></span><small>{copy[30]}</small>
</div>

<h3>
{copy[31]}
</h3>

<p>
{copy[32]}
</p>
<Link className="learn" href="/services/project-coordination">{copy[33]}<ArrowRight className="ic-arrow" aria-hidden="true" /></Link>
</article>

</div>

</div>

</section>
);
}
