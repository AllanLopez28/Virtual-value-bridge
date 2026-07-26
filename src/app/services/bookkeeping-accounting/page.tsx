import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Menu } from "lucide-react";

export default function BookkeepingAccountingPage() {
  const responsibilities = [
    "Daily transaction recording and expense categorization in QuickBooks or Xero",
    "Bank and credit card reconciliations matched against your records",
    "Accounts payable: vendor bill entry, approval routing, and payment scheduling",
    "Accounts receivable: invoicing, payment application, and collections follow-up",
    "Receipt and document capture, plus chasing missing statements and paperwork",
    "Weekly cash-flow snapshot and AR aging review so nothing slips through",
    "Monthly close prep on a fixed calendar, with books delivered by a set date",
    "Financial reporting: P&L, balance sheet, and the summaries you ask for",
    "1099 and W-2 prep support and vendor record cleanup for your accountant",
    "Payroll run support in Gusto or ADP — final review stays with your accountant",
  ];

  const tools = [
    "QuickBooks Online",
    "Xero",
    "Bill.com",
    "Dext",
    "Gusto",
    "Melio",
    "Excel / Google Sheets",
    "NetSuite",
    "FreshBooks",
    "Expensify"
  ];

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-slate-50 py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Column (Text Content) */}
            <div className="flex flex-col">
              {/* Breadcrumbs */}
              <div className="text-sm font-medium mb-6">
                <Link href="/" className="text-slate-400 hover:text-slate-600 transition-colors">Home</Link>
                <span className="mx-2 text-slate-400">&gt;</span>
                <span className="text-slate-900">Bookkeeping & Accounting</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
                Meet Your <br className="hidden sm:block" />
                <span className="text-blue-600 italic">Bookkeeping & Accounting Support Specialist</span>
              </h1>

              {/* Paragraph */}
              <p className="text-lg text-slate-700 max-w-xl leading-relaxed mb-8">
                Clean books only happen when someone keeps up with them every week. Get a dedicated bookkeeping specialist who records your transactions, reconciles your accounts, chases your invoices, and closes your books on a fixed monthly schedule — so your numbers are always ready.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-3">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3.5 text-sm font-bold text-white hover:bg-blue-700 transition-colors shadow-sm"
                >
                  Get Matched &rarr;
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center justify-center rounded-full bg-white border border-slate-300 px-8 py-3.5 text-sm font-bold text-slate-900 hover:bg-slate-50 transition-colors shadow-sm"
                >
                  See How It Works
                </Link>
              </div>

              {/* Footer text */}
              <p className="text-xs text-slate-500">
                Free replacement if not a fit. No long-term contracts.
              </p>
            </div>

            {/* Right Column (Image) */}
            <div className="flex justify-center lg:justify-end relative mt-8 lg:mt-0">
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full bg-white shadow-xl flex items-center justify-center p-2">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-blue-50/50">
                  <Image
                    src="/karla.png"
                    alt="Bookkeeping & Accounting Support Specialist"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-5 py-2 rounded-full shadow-lg whitespace-nowrap">
                  Available Now
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="w-full bg-white py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-16">

            {/* Left Column (Responsibilities) */}
            <div>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">
                DAY-TO-DAY RESPONSIBILITIES
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 tracking-tight">
                What Your Bookkeeping Specialist Handles
              </h2>

              <ul className="space-y-5">
                {responsibilities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-white fill-green-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-[17px] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column (Profile & Tools) */}
            <div className="flex flex-col">

              {/* Meet Your Specialist */}
              <div className="mb-12">
                <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">
                  MEET YOUR SPECIALIST
                </p>
                <div className="flex items-center gap-4 p-5 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                  {/* Avatar */}
                  <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 bg-blue-50">
                    <Image
                      src="/karla.png"
                      alt="Karla"
                      fill
                      className="object-cover object-top"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-slate-900 truncate">Karla</h3>
                    <p className="text-sm text-slate-500 truncate">
                      Bookkeeping & Accounting, AP/AR, Reconciliations & Monthly Close
                    </p>
                  </div>

                  {/* Experience Badge */}
                  <div className="bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap shrink-0">
                    4+ yrs
                  </div>
                </div>
              </div>

              {/* Tools They Know */}
              <div>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">
                  TOOLS THEY KNOW
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {tools.map((tool, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg bg-white shadow-sm hover:border-blue-200 transition-colors"
                    >
                      <Menu className="w-4 h-4 text-blue-500 shrink-0" />
                      <span className="text-sm font-semibold text-slate-700 truncate">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
