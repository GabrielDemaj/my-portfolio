// app/projects/page.tsx
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import type { Project } from "../../types";

const allProjects: Project[] = [
  {
    slug: "two-jobs-app",
    title: "Two Jobs (Mobile App)",
    description:
      "With the two.jobs app, you can easily share exciting jobs with your network. At the same time, you collect TWO$, which you can use to purchase interesting products and discounts in the shop.",
    date: "2022-12-10",
    published: true,
    link: "https://apps.apple.com/al/app/two-jobs/id1601302023",
  },
  {
    slug: "pro-real-estate-app",
    title: "Pro Real Estate (Mobile App)",
    description:
      "A real estate app for browsing and listing properties in Kosovo.",
    date: "2022-10-05",
    published: true,
    link: "https://apps.apple.com/al/app/pro-real-estate/id1645344489",
  },
  {
    slug: "klan-kosova-app",
    title: "Klan Kosova (Mobile App)",
    description:
      "Official app for Kosovo's Klan Kosova TV — watch live and catch up on shows.",
    date: "2023-02-15",
    published: true,
    link: "https://apps.apple.com/al/app/klan-kosova/id1608890216",
  },
  {
    slug: "fajnd-delivery-food-and-more",
    title: "Fajnd (Mobile App)",
    description:
      "A food delivery app for ordering food and more from local restaurants and stores.",
    date: "2026-01-26",
    published: true,
    link: "https://apps.apple.com/us/app/fajnd-delivery-food-and-more/id6741737180",
  },
  {
    slug: "fajnd-partner",
    title: "Fajnd Partner (Mobile App)",
    description:
      "A partner app for Fajnd, a food delivery app for ordering food and more from local restaurants and stores.",
    date: "2026-01-26",
    published: true,
    link: "https://apps.apple.com/us/app/fajnd-partner/id6744256690",
  },
  {
    slug: "two-jobs-website",
    title: "Two Jobs (Website)",
    description:
      "A fast and simple web platform for job seekers and employers.",
    date: "2021-09-30",
    published: true,
    link: "https://www.two.jobs/",
  },
  {
    slug: "pro-real-estate-website",
    title: "Pro Real Estate (Website)",
    description:
      "A modern real estate platform offering listings and property management tools.",
    date: "2021-06-20",
    published: true,
    link: "https://www.pro-rks.com/?page=1",
  },
  {
    slug: "prishtina-real-estate",
    title: "Prishtina Real Estate (Website)",
    description:
      "A modern real estate platform offering listings and property management tools.",
    date: "2026-01-26",
    published: true,
    link: "https://prishtina.io/",
  },
  {
    slug: "creaclean",
    title: "Creaclean (Website)",
    description:
      "A cleaning company in Switzerland that offers cleaning services for homes and offices.",
    date: "2026-01-26",
    published: true,
    link: "https://www.creaclean.ch/en",
  },
  {
    slug: "socialist",
    title: "SOCIALIST (Website)",
    description: "Swiss agency creating videos and ads to grow brands.",
    date: "2025-08-22",
    published: true,
    link: "https://www.socialist.ch/",
  },
  {
    slug: "fajnd-web",
    title: "Fajnd Web (Website)",
    description:
      "A web application for managing and tracking tasks and projects.",
    date: "2025-08-22",
    published: true,
    link: "https://fajnd.app/",
  },
  {
    slug: "kush-mendon-qe",
    title: "Kush Mendon Qe (Website)",
    description:
      "A modern, responsive website built to showcase the brand and engage its audience.",
    date: "2026-06-04",
    published: true,
    link: "https://www.kushmendoniqe.com",
  },
  {
    slug: "marashi-care-consulting",
    title: "Marashi Care Consulting (Website)",
    description:
      "A Swiss care consulting platform presenting services and connecting clients with support.",
    date: "2026-06-25",
    published: true,
    link: "https://marashicareconsulting.ch",
  },
  {
    slug: "home-appliance-experts",
    title: "Home Appliance Experts (Website)",
    description:
      "A service website for home appliance repair and maintenance experts.",
    date: "2026-07-16",
    published: true,
    link: "https://www.homeappliance-experts.com",
  },
];

// For this example, we'll assume all view counts are zero.
const views = allProjects.reduce((acc, p) => {
  acc[p.slug] = 0;
  return acc;
}, {} as Record<string, number>);

export const revalidate = 60;

export default function ProjectsPage() {
  const mobileApps = allProjects.slice(0, 5);
  const webProjects = allProjects.slice(5);

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from work and some are on my own time.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-2 lg:grid-cols-3">
          {mobileApps.map((project) => (
            <Card key={project.slug}>
              <Article project={project} views={views[project.slug] ?? 0} />
            </Card>
          ))}
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-2 lg:grid-cols-3">
          {webProjects.map((project) => (
            <Card key={project.slug}>
              <Article project={project} views={views[project.slug] ?? 0} />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
