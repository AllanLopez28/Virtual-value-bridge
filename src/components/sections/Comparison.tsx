import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";

const comparisonData = [
    {
      factor: "Time zone",
      vvb: "Same as U.S. (CST)",
      offshore: "10-13 hour offset",
    },
    {
      factor: "English fluency",
      vvb: "Native / near-native, neutral accent",
      offshore: "Variable, often heavy accent",
    },
    {
      factor: "Founder oversight",
      vvb: "Founders on every account",
      offshore: "Account managers, high turnover",
    },
    {
      factor: "Replacement guarantee",
      vvb: "Free replacement, no long-term contract",
      offshore: "Long contracts, fees to switch",
    },
    {
      factor: "Software training",
      vvb: "AppFolio, Buildium, RentManager",
      offshore: "Generalist, learns on your time",
    },
    {
      factor: "Cultural alignment",
      vvb: "U.S.-centric work style",
      offshore: "Often misaligned expectations",
    },
    {
      factor: "Onboarding speed",
      vvb: "Curated profiles in ~5 days",
      offshore: "Weeks of screening",
    },
  ];

const copy = ["BUYER’S GUIDE", "Nearshore vs offshore", "VAs.", "The honest comparison. If you’ve been burned by offshore agencies or generic VA platforms, here’s what changes with a nearshore partner.", "Factor", "Virtual Value Bridge", "Nearshore · El Salvador", "Typical Offshore VAs", "India / Philippines agencies", "Calculate your savings"];

export default function Comparison() {
 return <section className="comparison-page"><div className="simple-page-title"><p className="eyebrow">{copy[0]}</p><h1>{copy[1]} <em>{copy[2]}</em></h1><p>{copy[3]}</p></div><div className="comparison-scroll"><table><caption className="sr-only">Virtual Value Bridge compared with typical offshore virtual assistants</caption><thead><tr><th scope="col">{copy[4]}</th><th scope="col">{copy[5]}<small>{copy[6]}</small></th><th scope="col">{copy[7]}<small>{copy[8]}</small></th></tr></thead><tbody>{comparisonData.map(item=><tr key={item.factor}><th scope="row">{item.factor}</th><td><span><Check aria-hidden="true" />{item.vvb}</span></td><td><span><X aria-hidden="true" />{item.offshore}</span></td></tr>)}</tbody></table></div><Link className="ag-btn" href="/calculator">{copy[9]}<ArrowRight size={16} /></Link></section>;
}
