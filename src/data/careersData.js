// Single source of truth for Careers & Open Positions at Neoriz Solutions
export const careersData = [
  {
    id: "full-stack-developer-intern",
    slug: "full-stack-developer-intern",
    title: "Full Stack Developer Intern",
    type: "Full-time internship",
    arrangement: "Remote / Work from Home",
    location: "Kochi, Kerala, India",
    department: "Engineering & Product",
    status: "open", // "open" | "opening_soon" | "closed"
    
    // Application destination configuration:
    // - "email": Uses direct email / on-page quick form connected to hradmin@neorizsolutions.com
    // - "linkedin": Redirects directly to the live LinkedIn job post once supplied in linkedInUrl
    // - "opening_soon": Displays "Applications opening soon"
    applyMode: "email", 
    applyEmail: "hradmin@neorizsolutions.com",
    linkedInUrl: "", // Paste live LinkedIn job URL here once supplied

    companyDescription:
      "Neoriz Solutions is a technology and digital solutions company that builds websites, mobile applications, custom software, and business automation solutions. We work with clients to turn business requirements into practical software and develop our own digital products.",

    roleDescription:
      "This is a full-time, remote internship. You’ll work on client projects and in-house products with guidance from experienced developers, contributing from feature planning through deployment.",

    responsibilities: [
      "Build responsive user interfaces, develop and integrate REST APIs, and work with databases and server-side logic.",
      "Debug issues, write and run tests, participate in code reviews, and collaborate through Git and pull requests.",
      "Help configure application environments, run builds, and deploy updates to staging and production under guidance. Learn how CI/CD workflows work, verify changes after release, and use logs to troubleshoot issues.",
      "Use AI coding tools such as ChatGPT, GitHub Copilot, or Cursor to explore approaches, debug code, draft tests, and document changes. Review and test AI-generated code before submitting it.",
      "Share progress, raise blockers early, and document setup steps and technical decisions."
    ],

    qualifications: [
      "Working knowledge of HTML, CSS, and JavaScript, with exposure to React or a similar front-end framework.",
      "Familiarity with a back-end stack such as Python with Django or FastAPI, or Node.js with Express.",
      "Basic understanding of REST APIs, databases, and how front-end and back-end components connect.",
      "Familiarity with Git. Exposure to cloud hosting, Docker, or CI/CD is a plus.",
      "Ability to explain and test your code, solve problems, and collaborate in a remote team.",
      "Currently pursuing or recently completed a relevant degree, or equivalent practical experience. Personal, academic, and open-source projects are welcome."
    ],

    applicationNote:
      "Please include your résumé and, if available, a GitHub, portfolio, or live project link. Briefly explain what you built, what you personally contributed, and one technical problem you solved."
  }
];

export const getJobBySlug = (slug) => {
  return careersData.find((job) => job.slug === slug) || null;
};
