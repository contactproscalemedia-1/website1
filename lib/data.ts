export const navLinks = [
  { label: "Home", href: "#", active: true },
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#work" },
  { label: "About", href: "#approach" },
  { label: "Approach", href: "#approach" },
];

export const tickerLogos = [
  { src: "/images/brand/client-logos/esthetic-dubai.png", alt: "Esthetic Dubai" },
  { src: "/images/brand/client-logos/kabana.png", alt: "Kabana" },
  { src: "/images/brand/client-logos/binous-gym.png", alt: "Binous Gym" },
  { src: "/images/brand/client-logos/tickmill.png", alt: "Tickmill" },
  { src: "/images/brand/client-logos/licorne-realestate.png", alt: "Licorne Realestate" },
  { src: "/images/brand/client-logos/supremefx.png", alt: "SupremeFX" },
  { src: "/images/brand/client-logos/dubai-muscle-show.png", alt: "Dubai Muscle Show" },
  { src: "/images/brand/client-logos/handel-education.png", alt: "Handel Education" },
  { src: "/images/brand/client-logos/tadawol.png", alt: "Tadawol" },
];

export const heroStats = [
  { target: 50, prefix: "", suffix: "+", label: "Brands Built" },
  { target: 9, prefix: "", suffix: "", label: "Industries" },
  { target: 4, prefix: "+", suffix: "K", label: "Ads Launched" },
  { target: 8, prefix: "+", suffix: "M", label: "AED Ad Spend" },
];

export const services = [
  {
    num: "01",
    name: "Social Media",
    desc: "Content, community, growth. Built to make your feed a reason people follow, not just a place they pass. We run the calendar. You run the venue.",
  },
  {
    num: "02",
    name: "Paid Advertising",
    desc: "Meta. Google. TikTok. Snapchat. We test where your buyers actually are. Compound the winner. Cost per reservation, per lead, per sale. The only metrics that matter.",
  },
  {
    num: "03",
    name: "Lead Generation",
    desc: "Qualified clients that fills itself. Automated outbound, qualification, handoff. Built once, run daily. Real conversations, not lead spam.",
  },
  {
    num: "04",
    name: "Event Promotion",
    desc: "Local launches. International events. Sold-out weekends. 350 finance tickets in 48 hours. Same engine, your event.",
  },
  {
    num: "05",
    name: "Websites & Apps",
    desc: "The homepage is a closer, not a brochure. Speed, structure, copy, conversion. Websites and apps built to book the reservation, the consultation, the viewing. iOS and Android for founders who want a product, not a prototype.",
  },
];

export type CaseStudy = {
  img: string;
  alt: string;
  tag: string;
  name: string;
  desc: string;
  stats: { val: string; label: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    img: "/images/case-studies/real-nadir-fx/cover.png",
    alt: "@RealNadirFX",
    tag: "Personal Brand · Finance · Dubai",
    name: "@RealNadirFX",
    desc: "From 4,820 to 100K Instagram followers. Full personal brand strategy for Moroccan day trader Nadir Doulfakkar based in Dubai.",
    stats: [
      { val: "+100K", label: "Followers" },
      { val: "3 Weeks", label: "To +65K New Followers" },
    ],
  },
  {
    img: "/images/case-studies/kabana/restaurant.png",
    alt: "@Kabana Restaurant",
    tag: "Website · Restaurant · Dubai",
    name: "@Kabana Restaurant",
    desc: "Premium showcase website for Kabana Restaurant & Cafe in Dubai. Branded, menu-first, built to drive reservations.",
    stats: [
      { val: "Live", label: "KabanaRestaurant.com" },
      { val: "100%", label: "Custom Design" },
    ],
  },
  {
    img: "/images/case-studies/esthetic-dubai/branding.png",
    alt: "Esthetic Dubai: Branding",
    tag: "Branding · Dental Clinic · Dubai",
    name: "@Esthetic Dubai",
    desc: "Complete brand rebuild for a Dubai dental clinic. From zero presence to a premium identity that attracts high-value patients.",
    stats: [
      { val: "0→362+", label: "Followers After Rebrand" },
      { val: "Full", label: "Brand Identity Built" },
    ],
  },
  {
    img: "/images/case-studies/mohammed-ben-rjab/cover.png",
    alt: "@Mohammed Ben Rjab",
    tag: "Event Promotion · Finance · Tunisia",
    name: "@Mohammed Ben Rjab",
    desc: "Sold out one of Tunisia's first major finance events in 48 hours. Over 350 online ticket sales.",
    stats: [
      { val: "350+", label: "Tickets Sold" },
      { val: "48H", label: "Full Sellout" },
    ],
  },
  {
    img: "/images/case-studies/handel-education/cover.png",
    alt: "@Handel Education",
    tag: "Lead Generation · Education · Morocco",
    name: "@Handel Education",
    desc: "Partnered with Handel Academy, Morocco's leading online course platform. 321+ direct Instagram inquiries for $60 in ad spend.",
    stats: [
      { val: "321+", label: "Direct Inquiries" },
      { val: "$60", label: "Total Ad Spend" },
    ],
  },
  {
    img: "/images/case-studies/binous-gym/cover.png",
    alt: "@BinousGym",
    tag: "YouTube Growth · Fitness · Dubai",
    name: "@BinousGym",
    desc: "Launched Binous Gym's YouTube channel from 3 subscribers to 24K+ in 2 months. Strategic content and distribution.",
    stats: [
      { val: "+24K", label: "Subscribers" },
      { val: "2 Months", label: "From 3 Subs" },
    ],
  },
  {
    img: "/images/case-studies/micha-fit/cover.png",
    alt: "@MichaFit",
    tag: "Personal Brand · Fitness · UAE",
    name: "@MichaFit",
    desc: "Grew fitness expert Michaoui Abderrahman from 192K to 287K Instagram followers through strategic content and paid campaigns.",
    stats: [
      { val: "+268K", label: "Followers" },
      { val: "<1 Month", label: "First +31K" },
    ],
  },
  {
    img: "/images/case-studies/esthetic-dubai/website.png",
    alt: "Esthetic Dubai: Website",
    tag: "Website · Dental Clinic · Dubai",
    name: "@Esthetic Dubai",
    desc: "Premium showcase website for Esthetic Dubai. Built for conversion. Booked more patients.",
    stats: [
      { val: "Live", label: "EstheticDubai.com" },
      { val: "100%", label: "Custom Design" },
    ],
  },
  {
    img: "/images/case-studies/kabana/branding.png",
    alt: "@Kabana Restaurant: Branding",
    tag: "Branding · Restaurant · Dubai",
    name: "@Kabana Restaurant",
    desc: "Built Kabana's brand identity from scratch and grew their Instagram to 27.8K followers as a premium Dubai dining destination.",
    stats: [
      { val: "27.8K", label: "Followers" },
      { val: "243", label: "Posts Published" },
    ],
  },
  {
    img: "/images/case-studies/chohaibb/cover.png",
    alt: "@Chohaibb",
    tag: "Account Recovery · Personal Brand",
    name: "@Chohaibb",
    desc: "Removed Instagram shadowban for a 400K creator in 30 minutes. Full account visibility and features restored.",
    stats: [
      { val: "30 Min", label: "Shadowban Removed" },
      { val: "400K", label: "Followers Restored" },
    ],
  },
  {
    img: "/images/case-studies/kabana/meta-ads.png",
    alt: "@Kabana: Meta Ads",
    tag: "Paid Ads · Restaurant · Dubai",
    name: "@Kabana Restaurant",
    desc: "Generated 620+ direct Instagram messages for Kabana Restaurant in the first months with strategic Meta ad campaigns.",
    stats: [
      { val: "620+", label: "DMs Generated" },
      { val: "$2.16", label: "Per Conversation" },
    ],
  },
  {
    img: "/images/case-studies/rifino-world/cover.png",
    alt: "@Rifino World",
    tag: "YouTube Growth · Lifestyle · UAE",
    name: "@Rifino World",
    desc: "Grew Rifino World's YouTube channel from 154 to 53.7K subscribers in 1 month. Content strategy and distribution.",
    stats: [
      { val: "+54K", label: "Subscribers" },
      { val: "1 Month", label: "From 154 Subs" },
    ],
  },
];

export const protocolSteps = [
  {
    num: "01",
    title: "Audit",
    desc: "We find where you're bleeding money. We find what's actually working. Nothing gets built until we know both.",
  },
  {
    num: "02",
    title: "Strategy",
    desc: "One system. Built around your category, your buyer, your revenue targets. No template plays.",
  },
  {
    num: "03",
    title: "Execution",
    desc: "We run the ads. We ship the content. Every move tracked to a number that matters to the P&L.",
  },
  {
    num: "04",
    title: "Scale",
    desc: "Double down on what works. Cut what doesn't. Revenue compounds. Every month.",
  },
];

export const footerServiceLinks = [
  { label: "Social Media", href: "#services" },
  { label: "Paid Advertising", href: "#services" },
  { label: "Lead Generation", href: "#services" },
  { label: "Event Promotion", href: "#services" },
  { label: "Websites That Sell", href: "#services" },
];

export const footerCompanyLinks = [
  { label: "Our LLC & Certifications", href: "#" },
  { label: "Our Work", href: "#work" },
  { label: "Privacy Policy", href: "https://www.pro-scalemedia.com/privacy-policy" },
  { label: "Terms and Conditions", href: "#" },
  { label: "Pledge", href: "https://www.pro-scalemedia.com/pledge-marketing-agency" },
  { label: "FAQs", href: "https://www.pro-scalemedia.com/faq-meta-ads-management" },
];
