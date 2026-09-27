export const projects = [
  {
    id: "softyeone",
    title: "SoftyeOne",
    subtitle: "Business Management / Invoice & Billing Platform",
    category: ["web", "mobile", "fullstack"],
    status: "COMPLETED",
    featured: true,
    badges: ["WEB APPLICATION", "MOBILE APPLICATION"],
    description: "A business management platform focused on invoice, billing and business-related operations across web and mobile platforms.",
    overview: "SoftyeOne is an enterprise-grade business management suite engineered to streamline company financial workflows, customer accounts, and invoicing cycles. It provides business owners with instant financial visibility, automated tax calculations (GST/IGST), subscription management, and customer relationship oversight.",
    role: "Full Stack MERN Developer & Mobile App Developer",
    platforms: ["Web", "Mobile"],
    technologies: [
      "React.js",
      "React Native",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Tailwind CSS"
    ],
    features: [
      "Invoice Management",
      "Billing",
      "Customer Management",
      "Payment Management",
      "GST",
      "IGST",
      "Subscription",
      "Offers",
      "Coupons",
      "Reports",
      "Notifications",
      "Settings"
    ],
    webDetails: {
      title: "SoftyeOne Web Portal",
      description: "A comprehensive administrative web dashboard for accounting teams, administrators, and business executives to monitor revenue, generate multi-currency invoices, configure GST rules, and export deep financial audit reports.",
      highlights: [
        "Interactive KPI dashboards with real-time revenue breakdowns",
        "Configurable GST and IGST tax calculation engines",
        "Automated recurring subscription and discount coupon rules",
        "Role-based access control for administrative staff"
      ]
    },
    mobileDetails: {
      title: "SoftyeOne Mobile App",
      description: "A cross-platform React Native mobile application allowing managers on-the-go to generate quick bills, record cash or digital payments, view customer ledger balances, and receive instant settlement notifications.",
      highlights: [
        "Fast on-site invoice dispatch via SMS or WhatsApp",
        "Customer directory with call and settlement shortcuts",
        "Offline-tolerant data synchronization with REST API backend",
        "Instant push notifications for paid invoices"
      ]
    },
    challenges: "Handling real-time calculations for complex Indian tax matrices (CGST, SGST, IGST) while ensuring seamless synchronization between the React web portal and React Native mobile clients.",
    implementation: "Designed unified REST API schemas with Express.js and MongoDB. Built reusable modular components in React for desktop tables and tailored mobile card layouts in React Native.",
    github: "",
    liveDemo: "https://www.softyeone.com/"
  },
  {
    id: "softye-pg",
    title: "Softye PG",
    subtitle: "PG Management System",
    category: ["web", "mobile", "fullstack", "in-development"],
    status: "IN DEVELOPMENT",
    featured: true,
    badges: ["WEB APPLICATION", "MOBILE APPLICATION", "CURRENT DEVELOPMENT"],
    description: "A complete PG management platform for managing properties, rooms, residents, bookings, rent, attendance, food and resident activities.",
    overview: "Softye PG is an all-in-one ecosystem for Paying Guest (PG) and co-living property operators and their residents. It bridges property administrators with residents through a comprehensive Web Admin Portal and a companion Resident Mobile App.",
    role: "Full Stack MERN Developer & React Native Developer",
    platforms: ["Web", "Mobile"],
    technologies: [
      "React.js",
      "React Native",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Expo"
    ],
    features: [
      "Admin Dashboard",
      "Property Management",
      "Room Management",
      "Resident Management",
      "Booking Management",
      "Staff Management",
      "Complaints",
      "Rent Management",
      "Payment Management",
      "Food / Meals",
      "Attendance",
      "Reports"
    ],
    webDetails: {
      title: "PG Management Web Portal (Admin & Staff)",
      description: "Full-scale administrative hub for PG owners to monitor room occupancy, assign rooms, track security deposits, manage meal schedules, resolve resident complaints, and generate monthly revenue statements.",
      highlights: [
        "Interactive floor-by-floor room grid showing occupancy status in real-time",
        "Automated rent cycle generation with due-date alerts",
        "Complaint resolution tracking system with staff assignment",
        "Meal menu scheduling and staff duty rosters"
      ]
    },
    mobileDetails: {
      title: "PG Management Mobile App (Resident Companion)",
      description: "Dedicated React Native mobile app for PG residents to check in, browse meal menus, log daily attendance, submit maintenance complaints, and pay monthly rent digitally.",
      highlights: [
        "Instant room booking and stay history timeline",
        "Daily meal opting and dining preferences",
        "One-touch complaint ticket submission with photo uploads",
        "Digital rent payment history and downloadable receipts"
      ]
    },
    challenges: "Synchronizing high-frequency resident attendance and meal counts in real-time with property kitchen staff dashboards, while managing complex room vacancy allocations.",
    implementation: "Engineered scalable REST endpoints with Express.js, indexed MongoDB collections for fast room queries, and used Expo for a seamless mobile experience.",
    github: "",
    liveDemo: ""
  },
  {
    id: "qchecker",
    title: "QChecker",
    subtitle: "Quality Checking Platform",
    category: ["web", "fullstack"],
    status: "COMPLETED",
    featured: false,
    badges: ["WEB APPLICATION"],
    description: "Digital quality checking platform for quality inspection workflows and analytical reporting.",
    overview: "QChecker standardizes multi-stage inspection criteria for production items, tracking checklist verifications and generating automated compliance reports.",
    role: "Full Stack Developer",
    platforms: ["Web"],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    features: [
      "Quality Checking",
      "Workflows",
      "Reports"
    ],
    challenges: "Implementing dynamic checklist form builders with diverse input types (pass/fail, numeric tolerances, photo verifications).",
    implementation: "Designed schema-driven React dynamic form renderers linked with MongoDB document storage.",
    github: "",
    liveDemo: ""
  },
  {
    id: "school-management-system",
    title: "School Management System",
    subtitle: "Campus Administration & Operations",
    category: ["web", "fullstack"],
    status: "COMPLETED",
    featured: false,
    badges: ["WEB APPLICATION"],
    description: "An integrated academic platform for managing student records, administration workflows, and daily school operations.",
    overview: "Designed for school administrators, this platform centralizes student enrollments, academic records, staff profiles, and administrative notices.",
    role: "Full Stack Developer",
    platforms: ["Web"],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    features: [
      "Student Management",
      "Administration Management",
      "School Operations"
    ],
    challenges: "Organizing relational student-class-teacher hierarchies in a high-performance MongoDB schema.",
    implementation: "Implemented normalized MongoDB schemas with Mongoose population, role-protected API middleware, and modular React admin views.",
    github: "",
    liveDemo: ""
  },
  {
    id: "global-finance",
    title: "Global Finance",
    subtitle: "Finance & Accounting Application",
    category: ["web", "fullstack"],
    status: "COMPLETED",
    featured: false,
    badges: ["WEB APPLICATION"],
    description: "Finance-related application offering ledger balance tracking, fiscal reporting, and monetary calculation modules.",
    overview: "Global Finance delivers financial tracking modules, helping businesses keep audit-proof ledgers, track cash flows, and export summaries.",
    role: "Full Stack Developer",
    platforms: ["Web"],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Finance Modules",
      "Application Enhancements"
    ],
    challenges: "Ensuring precision in floating-point financial computations and audit trail integrity.",
    implementation: "Built double-entry bookkeeping ledger models on Express.js and created clear data summary cards in React.",
    github: "",
    liveDemo: ""
  },
  {
    id: "today-local",
    title: "Today Local",
    subtitle: "Local Business & Community Directory",
    category: ["web"],
    status: "COMPLETED",
    featured: false,
    badges: ["WEB APPLICATION"],
    description: "Responsive web application connecting local businesses, services, and neighborhood listings with consumers.",
    overview: "Today Local offers a modern, high-speed directory for discovering neighborhood services, ratings, operational hours, and contact points.",
    role: "Frontend Developer",
    platforms: ["Web"],
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "REST APIs"],
    features: [
      "Local Business Listings",
      "Category Browsing",
      "Search & Filtering",
      "Responsive Layout"
    ],
    challenges: "Delivering instantaneous search and filtering across hundreds of categorized business items on mobile viewports.",
    implementation: "Implemented debounced search filters, client-side indexing, and mobile-first Tailwind CSS UI components.",
    github: "",
    liveDemo: ""
  },
  {
    id: "indiglope",
    title: "Indiglope",
    subtitle: "Global Enterprise Services Portal",
    category: ["web"],
    status: "COMPLETED",
    featured: false,
    badges: ["WEB APPLICATION"],
    description: "Corporate web application showcasing international business consulting services, client portals, and case studies.",
    overview: "Indiglope provides a modern digital presence for consulting and global business services with interactive inquiries and portfolio showcases.",
    role: "Frontend Developer",
    platforms: ["Web"],
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Responsive Design"],
    features: [
      "Service Portfolio",
      "Consultation Inquiry Forms",
      "Client Testimonials",
      "Interactive Navigation"
    ],
    challenges: "Achieving high aesthetic polish and snappy responsive page transitions.",
    implementation: "Crafted sleek CSS animations, optimized responsive grid structures, and integrated form state management.",
    github: "",
    liveDemo: ""
  },
  {
    id: "food-munch",
    title: "Food Munch",
    subtitle: "Hotel Food Ordering Web Application",
    category: ["web"],
    status: "COMPLETED",
    featured: false,
    badges: ["WEB APPLICATION"],
    description: "Responsive hotel food ordering frontend application with curated menus and visual food galleries.",
    overview: "Food Munch allows hotel diners to browse diverse cuisines, explore chef specials, inspect item ingredients, and build food orders seamlessly.",
    role: "Frontend Developer",
    platforms: ["Web"],
    technologies: ["React.js", "HTML", "CSS", "JavaScript", "Bootstrap"],
    features: [
      "Menu Categories",
      "Interactive Food Cards",
      "Offer Banners",
      "Mobile-Optimized Ordering"
    ],
    challenges: "Creating fluid mobile card layouts with quick touch navigation across extensive food menus.",
    implementation: "Built clean responsive layouts using Bootstrap and modern JavaScript UI components.",
    github: "",
    liveDemo: ""
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    subtitle: "Personal Developer Portfolio Platform",
    category: ["web"],
    status: "COMPLETED",
    featured: false,
    badges: ["WEB APPLICATION"],
    description: "Modern, responsive Full Stack Developer Portfolio highlighting MERN stack & mobile app capabilities with dedicated project case studies.",
    overview: "A showcase portfolio built with React, Vite, and Tailwind CSS engineered to deliver a fast, accessible, and elegant presentation for recruiters and clients.",
    role: "Full Stack Developer",
    platforms: ["Web"],
    technologies: ["React.js", "Vite", "JavaScript", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Dark / Light Theme Toggle",
      "Category Project Filtering",
      "Dedicated Case Study Pages",
      "Interactive Resume Viewer",
      "Mobile First Responsive UX"
    ],
    challenges: "Balancing rich developer visual aesthetics and interactive animations while maintaining fast load times and clean code.",
    implementation: "Designed a custom component architecture, data-driven content models, and smooth Framer Motion micro-interactions.",
    github: "",
    liveDemo: ""
  }
];

export const projectFilters = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Applications" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "fullstack", label: "Full Stack" },
  { id: "in-development", label: "In Development" }
];
