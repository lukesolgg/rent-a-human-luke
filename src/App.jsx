import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
  FaCheck,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaEnvelope,
  FaStar,
  FaBolt,
  FaCoffee,
  FaWifi,
  FaBed,
  FaBrain,
  FaExternalLinkAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiSolana,
  SiRust,
  SiVite,
} from "react-icons/si";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

// ─── NAVBAR ───
function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[var(--color-dark)]/80 backdrop-blur-md border-b border-[var(--color-dark-border)]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-[family-name:var(--font-display)] text-xl font-bold">
          hire<span className="text-[var(--color-lime)]">A</span>Human
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-[var(--color-muted)]">
          <a href="#specs" className="hover:text-white transition-colors">Specs</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </div>
        <a
          href="#hire"
          className="bg-[var(--color-lime)] text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[var(--color-lime-dark)] transition-colors"
        >
          Hire Now
        </a>
      </div>
    </nav>
  );
}

// ─── HERO ───
function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 bg-[var(--color-dark-card)] border border-[var(--color-dark-border)] rounded-full px-4 py-2 text-sm text-[var(--color-muted)] mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Currently available for hire
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
        >
          Rent a{" "}
          <span className="text-[var(--color-lime)]">Premium</span>
          <br />
          Human Developer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-[var(--color-muted)] max-w-2xl mx-auto mb-4"
        >
          Why hire a boring agency when you can rent an actual human? Full-stack
          developer, blockchain enthusiast, and professional coffee consumer
          based in Belfast, Northern Ireland.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm text-[var(--color-muted)]/60 mb-10"
        >
          Model: Luke Knight v28.0 | Firmware: Self-Taught + CareerSwitchIT Certified | Region: UK/EU
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#pricing"
            className="bg-[var(--color-lime)] text-black px-8 py-4 rounded-xl text-base font-semibold hover:bg-[var(--color-lime-dark)] transition-all hover:scale-105"
          >
            View Pricing &darr;
          </a>
          <a
            href="#specs"
            className="border border-[var(--color-dark-border)] px-8 py-4 rounded-xl text-base font-semibold hover:border-[var(--color-muted)] transition-all hover:scale-105"
          >
            Read the Specs
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs text-[var(--color-muted)]/50"
        >
          <span>&#9733; 4.9/5 on Human Reviews</span>
          <span>|</span>
          <span>100% Organic, Free-Range Developer</span>
          <span>|</span>
          <span>No AI Was Harmed in Making This Site</span>
        </motion.div>
      </div>
    </section>
  );
}

// ─── SPECS ───
function Specs() {
  const specs = [
    { icon: <FaBolt />, label: "Processing Speed", value: "Variable", note: "Peaks after 2nd coffee, dips after lunch" },
    { icon: <FaCoffee />, label: "Fuel Type", value: "Coffee + Wi-Fi", note: "Premium blend preferred. Will accept tea in emergencies" },
    { icon: <FaWifi />, label: "Connectivity", value: "Remote-First", note: "Functional worldwide. Timezone flexible (GMT base)" },
    { icon: <FaBed />, label: "Uptime", value: "~75%", note: "Requires 7-8 hours of downtime (sleep mode). Non-negotiable" },
    { icon: <FaBrain />, label: "Memory", value: "Excellent", note: "Can remember your entire codebase. Forgets where he left his keys" },
    { icon: <FaStar />, label: "Experience", value: "4+ Years", note: "Solana Hacker Houses, startup dev work, freelance builds" },
  ];

  return (
    <section id="specs" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p className="text-[var(--color-lime)] text-sm font-semibold mb-2 font-[family-name:var(--font-display)]">TECHNICAL SPECIFICATIONS</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-bold mb-4">What You're Getting</h2>
          <p className="text-[var(--color-muted)] max-w-xl mb-16">
            Full spec sheet for the Luke Knight unit. Please review carefully before placing your order. All specs subject to caffeine intake.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {specs.map((spec, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-[var(--color-dark-card)] border border-[var(--color-dark-border)] rounded-xl p-6 hover:border-[var(--color-lime)]/20 transition-colors"
            >
              <div className="text-[var(--color-lime)] text-xl mb-4">{spec.icon}</div>
              <div className="text-xs text-[var(--color-muted)] mb-1">{spec.label}</div>
              <div className="text-xl font-semibold mb-2">{spec.value}</div>
              <div className="text-sm text-[var(--color-muted)]">{spec.note}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SERVICES / SKILLS ───
function Services() {
  const services = [
    {
      title: "Frontend Development",
      description: "React, Next.js, TypeScript, Tailwind CSS. Pixel-perfect UIs that don't make designers cry.",
      icons: [<FaReact key="r" />, <SiNextdotjs key="n" />, <SiTypescript key="t" />, <SiTailwindcss key="tw" />],
    },
    {
      title: "Backend & APIs",
      description: "Node.js, Express, REST APIs, database design. The invisible part that makes everything actually work.",
      icons: [<FaNodeJs key="nd" />, <SiVite key="v" />],
    },
    {
      title: "Blockchain / Web3",
      description: "Solana development, DApp frontends, wallet integrations, token swap interfaces. Attended Solana Hacker Houses in Barcelona & London.",
      icons: [<SiSolana key="s" />, <SiRust key="rs" />],
    },
    {
      title: "Full Business Websites",
      description: "End-to-end builds for businesses. Responsive, fast, SEO-friendly. From takeaways to tech startups. You name it, I'll build it.",
      icons: [<FaReact key="r2" />, <SiTailwindcss key="tw2" />],
    },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-[var(--color-dark-card)]">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p className="text-[var(--color-lime)] text-sm font-semibold mb-2 font-[family-name:var(--font-display)]">CAPABILITIES</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-bold mb-4">What This Human Can Do</h2>
          <p className="text-[var(--color-muted)] max-w-xl mb-16">
            Surprisingly versatile for a biological unit. Here's a non-exhaustive list of deployable skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="border border-[var(--color-dark-border)] rounded-xl p-8 hover:border-[var(--color-lime)]/20 transition-all group"
            >
              <div className="flex gap-3 text-2xl text-[var(--color-muted)] group-hover:text-[var(--color-lime)] transition-colors mb-4">
                {service.icons}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PRICING ───
function Pricing() {
  const plans = [
    {
      name: "Quick Fix",
      price: "30",
      unit: "/hr",
      description: "Got a bug? Need a small feature? Rent me for a few hours.",
      features: [
        { text: "Bug fixes & small tweaks", included: true },
        { text: "Code review & feedback", included: true },
        { text: "Response within 24hrs", included: true },
        { text: "Dedicated Slack channel", included: false },
        { text: "Architectural planning", included: false },
      ],
      highlight: false,
    },
    {
      name: "Full Build",
      price: "25",
      unit: "/hr",
      description: "Need a full project built? Best value. Long-term rental discount.",
      features: [
        { text: "Full project development", included: true },
        { text: "UI/UX implementation", included: true },
        { text: "Dedicated Slack channel", included: true },
        { text: "Weekly progress updates", included: true },
        { text: "Post-launch support (2 weeks)", included: true },
      ],
      highlight: true,
    },
    {
      name: "Web3 Specialist",
      price: "40",
      unit: "/hr",
      description: "Blockchain work. Solana DApps, wallet integrations, token interfaces.",
      features: [
        { text: "Solana DApp development", included: true },
        { text: "Wallet integration", included: true },
        { text: "Smart contract frontends", included: true },
        { text: "Token swap interfaces", included: true },
        { text: "Architectural planning", included: true },
      ],
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p className="text-[var(--color-lime)] text-sm font-semibold mb-2 font-[family-name:var(--font-display)]">PRICING</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-bold mb-4">Surprisingly Affordable for a Real Human</h2>
          <p className="text-[var(--color-muted)] max-w-xl mb-16">
            No subscriptions. No hidden fees. No venture capital required. Just honest human labour at competitive rates.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`rounded-xl p-8 border transition-all ${
                plan.highlight
                  ? "border-[var(--color-lime)] bg-[var(--color-dark-card)] scale-105"
                  : "border-[var(--color-dark-border)] bg-[var(--color-dark-card)] hover:border-[var(--color-muted)]/30"
              }`}
            >
              {plan.highlight && (
                <div className="bg-[var(--color-lime)] text-black text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                  BEST VALUE
                </div>
              )}
              <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
              <p className="text-sm text-[var(--color-muted)] mb-6">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold font-[family-name:var(--font-display)]">
                  &pound;{plan.price}
                </span>
                <span className="text-[var(--color-muted)]">{plan.unit}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fi) => (
                  <li key={fi} className="flex items-center gap-3 text-sm">
                    {feature.included ? (
                      <FaCheck className="text-[var(--color-lime)] flex-shrink-0" />
                    ) : (
                      <FaTimes className="text-[var(--color-muted)]/30 flex-shrink-0" />
                    )}
                    <span className={feature.included ? "text-white" : "text-[var(--color-muted)]/40"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#hire"
                className={`block text-center py-3 rounded-lg font-semibold text-sm transition-all ${
                  plan.highlight
                    ? "bg-[var(--color-lime)] text-black hover:bg-[var(--color-lime-dark)]"
                    : "border border-[var(--color-dark-border)] hover:border-[var(--color-muted)]"
                }`}
              >
                Hire for {plan.name}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-xs text-[var(--color-muted)]/40 mt-8"
        >
          * Prices in GBP. VAT not included. Human may require tea breaks. No refunds if code works first time (unlikely but possible).
        </motion.p>
      </div>
    </section>
  );
}

// ─── PORTFOLIO ───
function Portfolio() {
  const projects = [
    {
      title: "Soms Pot - Thai Takeaway",
      description: "Full business website for a real Thai restaurant. Menu, ordering flow, responsive design.",
      tech: ["React", "JavaScript", "Tailwind CSS"],
      link: "https://soms-pot-website.vercel.app/",
      github: "https://github.com/lukesolgg/soms-pot-website",
    },
    {
      title: "Solana Swap DApp",
      description: "Decentralised token swap application on Solana. Real-time price data, wallet integration.",
      tech: ["TypeScript", "Solana Web3.js", "Next.js"],
      link: "https://solana-swap-dapp.vercel.app/",
      github: "https://github.com/lukesolgg/solana-swap-dapp",
    },
    {
      title: "Personal Finance Manager",
      description: "Income & expense tracker with budgeting dashboard. Built with React and Redux.",
      tech: ["React", "TypeScript", "Redux"],
      link: "https://personal-finance-manager.vercel.app/",
      github: "https://github.com/lukesolgg/Personal-Finance-Manager",
    },
    {
      title: "Career Planner AI",
      description: "AI-powered career path planning tool with personalised recommendations and goal tracking.",
      tech: ["TypeScript", "Next.js", "AI/ML"],
      link: "https://career-planner-ai.vercel.app/",
      github: "https://github.com/lukesolgg/Career-Planner-AI",
    },
    {
      title: "Ski Holiday Planner",
      description: "Resort browser and trip planner with a clean, modern interface.",
      tech: ["JavaScript", "React", "Tailwind CSS"],
      link: "https://ski-holiday-planner.vercel.app/",
      github: "https://github.com/lukesolgg/ski-holiday-planner",
    },
    {
      title: "Solana Wallet Tracker",
      description: "Mobile-first wallet balance tracker, transaction history, and token holdings.",
      tech: ["React Native", "Solana Web3.js", "Expo"],
      link: "https://solana-mobile-wallet-tracker.vercel.app/",
      github: "https://github.com/lukesolgg/solana-mobile-wallet-tracker",
    },
  ];

  return (
    <section id="portfolio" className="py-24 px-6 bg-[var(--color-dark-card)]">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p className="text-[var(--color-lime)] text-sm font-semibold mb-2 font-[family-name:var(--font-display)]">PROOF OF WORK</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-bold mb-4">Things This Human Has Built</h2>
          <p className="text-[var(--color-muted)] max-w-xl mb-16">
            Receipts. Evidence. Proof that this isn't just a very convincing chatbot selling you vapourware.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="border border-[var(--color-dark-border)] rounded-xl p-6 hover:border-[var(--color-lime)]/20 transition-all group"
            >
              <h3 className="text-lg font-semibold mb-2 group-hover:text-[var(--color-lime)] transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-[var(--color-muted)] mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, ti) => (
                  <span
                    key={ti}
                    className="text-xs bg-[var(--color-lime)]/10 text-[var(--color-lime)] px-2 py-1 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-sm">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[var(--color-muted)] hover:text-white transition-colors"
                >
                  <FaExternalLinkAlt size={12} /> Live
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[var(--color-muted)] hover:text-white transition-colors"
                >
                  <FaGithub size={14} /> Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ───
function Testimonials() {
  const reviews = [
    {
      name: "Luke's Mum",
      role: "Chief Encouragement Officer",
      text: "He's very good with computers. I don't understand what he does but he seems happy. 5 stars.",
      stars: 5,
    },
    {
      name: "The Family Dog",
      role: "Quality Assurance",
      text: "Woof. Woof woof. (Translation: Sits at desk too much. Could throw ball more. Code seems fine though.)",
      stars: 4,
    },
    {
      name: "His Rubber Duck",
      role: "Senior Debugging Consultant",
      text: "I've heard things. Terrible things. Variable names that would make a grown duck cry. But he always figures it out eventually.",
      stars: 5,
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p className="text-[var(--color-lime)] text-sm font-semibold mb-2 font-[family-name:var(--font-display)]">REVIEWS</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-bold mb-4">Verified Human Reviews</h2>
          <p className="text-[var(--color-muted)] max-w-xl mb-16">
            Totally real, definitely not made-up testimonials from extremely credible sources.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-[var(--color-dark-card)] border border-[var(--color-dark-border)] rounded-xl p-6"
            >
              <div className="flex gap-1 text-[var(--color-lime)] mb-4">
                {Array.from({ length: review.stars }).map((_, si) => (
                  <FaStar key={si} size={14} />
                ))}
              </div>
              <p className="text-sm text-[var(--color-muted)] mb-6 leading-relaxed italic">
                "{review.text}"
              </p>
              <div>
                <div className="font-semibold text-sm">{review.name}</div>
                <div className="text-xs text-[var(--color-muted)]">{review.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ───
function FAQ() {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      q: "Is this a real human or an AI?",
      a: "100% real, grass-fed, free-range human developer. Certified organic. No artificial intelligence was used in the making of this developer (though some was used to help build this website, ironically).",
    },
    {
      q: "What if the human breaks?",
      a: "Standard warranty covers bugs and minor breakdowns. For major issues (existential crises, burnout), a 24-hour reset period may be required. Supply coffee to expedite repairs.",
    },
    {
      q: "Can I return the human?",
      a: "All work is non-refundable once shipped, but the human comes with a satisfaction guarantee. If the code doesn't work, he'll fix it. If it does work first time, please check for a glitch in the matrix.",
    },
    {
      q: "Does the human work weekends?",
      a: "By prior arrangement and at a slight premium. The human values work-life balance and occasionally needs to touch grass. Urgent Web3 deadlines are the exception.",
    },
    {
      q: "What's the human's actual experience?",
      a: "4+ years of development experience. CareerSwitchIT certified. Junior Developer at Gaian Guardians. Attended Solana Hacker Houses in Barcelona and London. Currently building full-stack and Web3 projects while plotting his return to full-time dev work.",
    },
    {
      q: "How do I actually hire this human?",
      a: "Scroll down to the contact section and send an email. Include what you need, your timeline, and your budget. The human responds to all enquiries within 24 hours (faster if bribed with interesting projects).",
    },
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-[var(--color-dark-card)]">
      <div className="max-w-3xl mx-auto">
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p className="text-[var(--color-lime)] text-sm font-semibold mb-2 font-[family-name:var(--font-display)]">FAQ</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-[var(--color-muted)] max-w-xl mb-16">
            Everything you need to know before renting a human.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="border border-[var(--color-dark-border)] rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-[var(--color-dark-hover)] transition-colors"
              >
                <span className="font-medium pr-4">{faq.q}</span>
                {open === i ? (
                  <FaChevronUp className="text-[var(--color-muted)] flex-shrink-0" />
                ) : (
                  <FaChevronDown className="text-[var(--color-muted)] flex-shrink-0" />
                )}
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-sm text-[var(--color-muted)] leading-relaxed">
                  {faq.a}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA / CONTACT ───
function Contact() {
  return (
    <section id="hire" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-bold mb-4">
            Ready to Hire a Human?
          </h2>
          <p className="text-[var(--color-muted)] max-w-lg mx-auto mb-10">
            Drop me an email with what you need. I reply to everything within 24 hours.
            Interesting Web3 projects get priority in the queue.
          </p>

          <a
            href="mailto:lukeknightdev@gmail.com"
            className="inline-flex items-center gap-3 bg-[var(--color-lime)] text-black px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[var(--color-lime-dark)] transition-all hover:scale-105"
          >
            <FaEnvelope />
            lukeknightdev@gmail.com
          </a>

          <div className="flex justify-center gap-6 mt-10 text-2xl text-[var(--color-muted)]">
            <a
              href="https://github.com/lukesolgg"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/luke-knight-5a6394205/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── FOOTER ───
function Footer() {
  return (
    <footer className="border-t border-[var(--color-dark-border)] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--color-muted)]">
        <span>&copy; {new Date().getFullYear()} Luke Knight. All rights reserved. The human retains ownership of itself.</span>
        <span>Built with React, Tailwind CSS, and a questionable sense of humour.</span>
      </div>
    </footer>
  );
}

// ─── APP ───
function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Specs />
      <Services />
      <Pricing />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
