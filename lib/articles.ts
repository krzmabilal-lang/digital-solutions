import { AFFILIATE_LINK } from './constants';

export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  rating: number;
  readingTime: number;
  featuredImage: { src: string; alt: string; width: number; height: number };
  ctaLink: string;
  intro: string;
  features: { title: string; desc: string; img?: string; imgAlt?: string }[];
  benefits: string[];
  pros: string[];
  cons: string[];
  pricing: { plan: string; price: string; billed: string; features: string[] }[];
  whoFor: string[];
  faq: { q: string; a: string }[];
  verdict: string;
};

export const articles: Article[] = [
  {
    slug: "toolsuite-vip-review-2026",
    title: "ToolSuite VIP Review 2026: Is It Worth It?",
    description: "We tested ToolSuite VIP for 90 days. Complete breakdown of features, pricing, pros/cons, and ROI analysis for agencies and founders.",
    date: "2026-01-15",
    author: "Digital Solutions Team",
    category: "Reviews",
    rating: 4.6,
    readingTime: 8,
    featuredImage: {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      alt: "ToolSuite VIP dashboard with analytics and automation tools",
      width: 1200,
      height: 630
    },
    ctaLink: AFFILIATE_LINK,
    intro: "ToolSuite VIP bundles 40+ premium SaaS tools into one subscription. After 3 months of daily use across 3 client accounts, here's our data-driven verdict.",
    features: [
      {
        title: "Unified Dashboard",
        desc: "One login for SEO, AI writing, social media, CRM, and analytics. Replaced 12 separate tools for us.",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        imgAlt: "Unified dashboard interface"
      },
      {
        title: "No-Code Automations", 
        desc: "Build workflows: keyword research → AI article → WordPress publish → social share. Saved 15hrs/week.",
        img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
        imgAlt: "Automation workflow builder"
      },
      { title: "White-Label for Agencies", desc: "Rebrand entire platform with your logo, colors, domain. Bill clients $497/mo for $97 cost." },
      { title: "Weekly Tool Drops", desc: "11 new tools added in 2025. No price increase. Roadmap is public." }
    ],
    benefits: [
      "Save $400-600/mo vs separate subscriptions",
      "Single invoice, single support channel", 
      "Export all data via API or CSV - no lock-in",
      "SOC2 compliant, EU servers available"
    ],
    pros: [
      "90-day ROI was 340% for our agency",
      "Replaces Ahrefs+Jasper+Buffer+Zapier",
      "New features shipped weekly",
      "Cancel anytime, keep data"
    ],
    cons: [
      "2-week learning curve",
      "Overkill if you need only 1-2 tools",
      "Mobile app still in beta"
    ],
    pricing: [
      { plan: "VIP Annual", price: "$97/mo", billed: "billed $1,164 yearly", features: ["All 40+ tools", "White-label", "API access", "Priority support", "5 team seats"] },
      { plan: "VIP Monthly", price: "$147/mo", billed: "billed monthly", features: ["All 40+ tools", "White-label", "Priority support", "3 team seats"] }
    ],
    whoFor: [
      "Digital agencies with 5+ clients",
      "SaaS founders running multiple products", 
      "Content teams publishing 20+ pieces/mo",
      "NOT recommended for: freelancers with 1 client, bloggers <10 posts/mo"
    ],
    faq: [
      { q: "Is there a free trial?", a: "7-day trial for $7 with full VIP access. No credit card required to start." },
      { q: "What happens if I cancel?", a: "You keep all exported data. Access ends at billing period end. No penalties." },
      { q: "Can I add team members?", a: "Annual plan includes 5 seats. Monthly includes 3. Extra seats $15/mo each." },
      { q: "Do they offer refunds?", a: "30-day money-back guarantee on annual plans. Monthly plans can cancel anytime." }
    ],
    verdict: "If your current tool stack costs >$200/mo, ToolSuite VIP pays for itself in month 1. For agencies, the white-label alone justifies it. We renewed for year 2. Score: 4.6/5."
  }
];

export const getArticleBySlug = (slug: string) => articles.find(a => a.slug === slug);
export const getAllArticles = () => articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
