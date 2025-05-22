// app/projects/page.tsx
import Link from "next/link";
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
    slug: "fresh-boutique",
    title: "Fresh Boutique",
    description:
      "Coming soon: A stylish online boutique for exclusive fashion.",
    date: "",
    published: true,
    link: "https://freshboutique.ct.ws/",
  },
];

// For this example, we'll assume all view counts are zero.
const views = allProjects.reduce((acc, p) => {
  acc[p.slug] = 0;
  return acc;
}, {} as Record<string, number>);

export const revalidate = 60;

export default function ProjectsPage() {
  const featured = allProjects[0];
  const top2 = allProjects[1];
  const top3 = allProjects[2];
  const sorted = allProjects
    .filter((p) => p.published)
    .filter(
      (project) =>
        project.slug !== featured.slug &&
        project.slug !== top2.slug &&
        project.slug !== top3.slug
    )
    .sort(
      (a, b) =>
        new Date(b.date as any).getTime() - new Date(a.date as any).getTime()
    );

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

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
          <Card>
            <Link
              href={featured.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    {featured.date ? (
                      <time dateTime={new Date(featured.date).toISOString()}>
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: "medium",
                        }).format(new Date(featured.date))}
                      </time>
                    ) : (
                      <span>SOON</span>
                    )}
                  </div>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  {featured.title}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {featured.description}
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0">
            {[top2, top3].map((project) => (
              <Card key={project.slug}>
                <Article project={project} views={views[project.slug] ?? 0} />
              </Card>
            ))}
          </div>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 0)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 1)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 2)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
