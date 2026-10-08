export const profile = {
  name: "Harish Kumar S",
  role: "React Developer",
  company: "iStreams ERP Solutions",
  email: "harishkumarsivaraman@gmail.com",
  phone: "+91 75581 47790",
  whatsapp: `https://wa.me/917558147790?text=${encodeURIComponent("Hi Harish, I saw your portfolio and would like to chat about a project.")}`,
  location: "Tirupur, Tamilnadu, India",
  github: "https://github.com/harishkumar7558",
  githubUser: "harishkumar7558",
  linkedin: "https://www.linkedin.com/in/harish-kumar-61b49327b",
  resume: "/Harish-Kumar-S-Resume.pdf",
}

export const stats = [
  { value: 3, suffix: "+", label: "Years building React apps" },
  { value: 30, suffix: "+", label: "Public repositories" },
  { value: 15, suffix: "+", label: "Features shipped in 6 months" },
  { value: 10, suffix: "+", label: "Apps performance-tuned" },
]

export const marquee = [
  "React 19",
  "TypeScript",
  "Tailwind CSS",
  "shadcn/ui",
  "Redux Toolkit",
  "Framer Motion",
  "GSAP",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Firebase",
  "Netlify",
  "Vercel",
]

export const experience = {
  role: "React Developer",
  company: "iStreams ERP Solutions",
  period: "04/2023 — Present",
  location: "Tirupur, India",
  highlights: [
    { metric: "20%", text: "lift in user engagement from highly scalable, interactive React applications." },
    { metric: "15+", text: "features delivered in 6 months alongside product, design and backend teams." },
    { metric: "30%", text: "faster load times across 10+ apps via code splitting, lazy loading and lean state." },
    { metric: "25%", text: "shorter release cycles by automating CI/CD with GitHub Actions and Netlify." },
  ],
  products: [
    {
      name: "DMS",
      full: "Document Management System",
      points: [
        { metric: "89%", text: "less manual entry with an AI invoice booking flow: upload, preview, autofill." },
        { metric: "90%", text: "extraction accuracy with secure uploads for PDF, PNG, DOCX, JPG and XLSX." },
        { metric: "50%", text: "faster dashboards built on shadcn/ui charts with real-time analytics." },
        { metric: "40%", text: "more engagement from a WhatsApp-style in-app AI support chatbot." },
        { metric: "70%", text: "better scheduling with a drag-and-drop, resizable timesheet board." },
        { metric: "80%", text: "fewer approval delays with an automated leave management module." },
      ],
    },
    {
      name: "CRM",
      full: "Customer Relationship Management",
      points: [
        { metric: "60%", text: "faster quotes with a dual-table RFQ system for vendor and material comparison." },
        { metric: "90%", text: "smoother cross-device experience from a fully responsive UI." },
        { metric: "useMemo", text: "and useCallback applied across heavy tables to cut unnecessary re-renders." },
      ],
    },
  ],
}

export type ProjectCategory = "Enterprise" | "Websites" | "Backend"

export type Project = {
  title: string
  category: ProjectCategory
  summary: string
  stack: string[]
  client?: string
  live?: string
  host?: "Vercel" | "Netlify"
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: "iStreams DMS",
    client: "iStreams ERP Solutions",
    category: "Enterprise",
    summary:
      "AI-driven invoice booking and document platform with OCR-style extraction, previews, analytics dashboards and an in-app chatbot.",
    stack: ["React", "TypeScript", "Redux Toolkit", "shadcn/ui", "Recharts", "Firebase"],
    featured: true,
  },
  {
    title: "Milestone Geo Services",
    category: "Websites",
    summary:
      "Animated marketing site for a geotechnical and surveying firm, with GSAP scroll motion, particles, tilt cards and maps.",
    stack: ["React", "GSAP", "Framer Motion", "tsParticles", "Tailwind"],
    live: "https://mile-stone-builders.vercel.app",
    host: "Vercel",
    featured: true,
  },
  {
    title: "iStreams CRM",
    client: "iStreams ERP Solutions",
    category: "Enterprise",
    summary:
      "Sales CRM with a dual-table RFQ engine, PDF quotations, map-based lead search and Tesseract OCR for scanned documents.",
    stack: ["React", "Redux Toolkit", "React PDF", "Leaflet", "Tesseract.js"],
    featured: true,
  },
  {
    title: "Priya Embroideries",
    category: "Websites",
    summary:
      "Storefront and order management for an embroidery business, with filterable data tables and smooth motion.",
    stack: ["React", "Tailwind", "TanStack Table", "Motion"],
    live: "https://priyaembroidaries.netlify.app",
    host: "Netlify",
    featured: true,
  },
  {
    title: "iStreams Cloud",
    client: "iStreams ERP Solutions",
    category: "Enterprise",
    summary:
      "Collaboration suite with peer-to-peer video meetings, file sharing, Excel/PDF exports and progress analytics.",
    stack: ["React", "PeerJS", "Jitsi", "Recharts", "shadcn/ui"],
  },
  {
    title: "HRMS Recruitment",
    client: "iStreams ERP Solutions",
    category: "Enterprise",
    summary: "Applicant tracking module for an HRMS: candidate pipelines, scheduling with date pickers and hiring reports.",
    stack: ["React", "Radix UI", "Recharts", "Tailwind"],
  },
  {
    title: "Task Management",
    client: "iStreams ERP Solutions",
    category: "Enterprise",
    summary: "Team task board with calendars, tabbed workspaces, PDF and Excel exports built on shadcn/ui.",
    stack: ["React", "shadcn/ui", "date-fns", "jsPDF", "XLSX"],
  },
  {
    title: "Vitalink Admin Portal",
    category: "Enterprise",
    summary: "Healthcare admin portal built from Figma, with validated forms, reporting tables and PDF/Excel exports.",
    stack: ["React", "TypeScript", "MUI", "Formik", "Yup"],
  },
  {
    title: "Junior Doctor",
    category: "Websites",
    summary: "Healthcare web app with an animated, accessible UI built on Radix primitives and Tailwind.",
    stack: ["React", "Radix UI", "Framer Motion", "Tailwind"],
  },
  {
    title: "Keventers Website",
    client: "iStreams ERP Solutions",
    category: "Websites",
    summary: "Multi-page brand website for Keventers built with React Router.",
    stack: ["React", "React Router", "CSS3"],
  },
  {
    title: "Express Master",
    category: "Backend",
    summary: "REST API with Express and PostgreSQL: auth with bcrypt, Helmet security headers, CORS and request logging.",
    stack: ["Node.js", "Express", "PostgreSQL", "bcrypt", "Helmet"],
  },
  {
    title: "BookMyShow Clone",
    category: "Websites",
    summary: "Responsive movie-ticketing landing page recreated in pure HTML and CSS.",
    stack: ["HTML5", "CSS3", "JavaScript"],
  },
]

export const skillGroups = [
  { title: "Frontend", items: ["React 19", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "React Router"] },
  { title: "UI & Motion", items: ["Tailwind CSS", "shadcn/ui", "Radix UI", "Bootstrap 5", "MUI", "Ant Design", "Framer Motion", "GSAP"] },
  { title: "State & Data", items: ["Redux Toolkit", "TanStack Table", "Formik", "Yup", "React Hook Form", "Axios", "Recharts"] },
  { title: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "MS SQL", "Firebase"] },
  { title: "Ship", items: ["Git & GitHub", "GitHub Actions", "Netlify", "Vercel", "Vite"] },
]

export const proficiency = [
  { name: "React JS (v19+)", level: "Expert", value: 95 },
  { name: "JavaScript (ES6+)", level: "Expert", value: 92 },
  { name: "HTML5 & CSS3", level: "Expert", value: 95 },
  { name: "Bootstrap 5", level: "Expert", value: 90 },
  { name: "Tailwind CSS", level: "Advanced", value: 85 },
  { name: "Responsive Design", level: "Advanced", value: 88 },
  { name: "GitHub", level: "Advanced", value: 82 },
  { name: "Netlify & Vercel", level: "Intermediate", value: 70 },
]

export const education = [
  {
    title: "B.E. Electronics & Communication",
    school: "Kalaignar Karunanidhi Institute of Technology",
    period: "2020 — 2023",
    score: "7.456 CGPA",
  },
  {
    title: "HSC — Computer Science",
    school: "Sri Ramakrishna Vidhayala Matric Hr Sec School",
    period: "2018 — 2019",
    score: "66%",
  },
  {
    title: "SSLC",
    school: "Sri Ramakrishna Vidhayala Matric Hr Sec School",
    period: "2017 — 2018",
    score: "88%",
  },
]

export const deployments = [
  { name: "Milestone Geo Services", url: "https://mile-stone-builders.vercel.app", host: "Vercel" },
  { name: "Priya Embroideries", url: "https://priyaembroidaries.netlify.app", host: "Netlify" },
] as const
