import { projectsData } from "./portfolioData.js";

// Canonical references matching the 6 active projects
export const productsData = projectsData.filter(p => p.projectType === "product");
export const clientProjectsData = projectsData.filter(p => p.projectType === "client" || p.projectType === "service");

// Re-export full dataset and services
export { projectsData };
export { servicesData } from "./portfolioData.js";
