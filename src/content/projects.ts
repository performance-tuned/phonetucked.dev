export type Project = {
  slug: string;
  name: string;
  date: string;
  external?: {
    url: string;
    via: string;
  };
};

export const projects: Project[] = [
  {
    slug: "github",
    name: "github",
    date: "2026-11-20",
    external: { url: "https://github.com/performance-tuned", via: "github" },
  },
  {
    slug: "field-guide",
    name: "from, 1/PT FIELD GUIDE",
    date: "2026-11-24",
  },
  {
    slug: "ankle",
    name: "ANKLE",
    date: "2026-11-23",
  },
  {
    slug: "plenty-missed-calls",
    name: "plenty missed calls",
    date: "2026-09-12",
    external: { url: "https://plentymissedcalls.vercel.app", via: "vercel" },
  },
  {
    slug: "standards",
    name: "standards",
    date: "2026-08-12",
  },
  {
    slug: "sd-net-2-0",
    name: "sd - net 2.0",
    date: "2026-08-02",
  },
  {
    slug: "sd-net-1-5",
    name: "sd - net 1.5",
    date: "2026-07-20",
    external: {
      url: "https://www.are.na/standard-znnmqwgrka8/sd-net-1-5",
      via: "are.na",
    },
  },
  {
    slug: "tigernetwork",
    name: "tigernetwork",
    date: "2026-07-10",
  },
  {
    slug: "protocol-accessories",
    name: "protocol accessories",
    date: "2026-06-19",
  },
];
