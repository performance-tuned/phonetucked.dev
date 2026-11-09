export type Project = {
  slug: string;
  name: string;
  kind: "build" | "gallery";
  date: string;
  external?: {
    url: string;
    via: string;
  };
};

export const projects: Project[] = [
  {
    slug: "nokia-bell-labs",
    name: "nokia bell labs",
    kind: "gallery",
    date: "2026-10-26",
  },
  {
    slug: "plenty-missed-calls",
    name: "plenty missed calls",
    kind: "build",
    date: "2026-09-12",
    external: { url: "https://plentymissedcalls.vercel.app", via: "vercel" },
  },
  {
    slug: "standards",
    name: "standards",
    kind: "gallery",
    date: "2026-08-12",
  },
  {
    slug: "sd-net-2-0",
    name: "sd - net 2.0",
    kind: "build",
    date: "2026-08-02",
  },
  {
    slug: "sd-net-1-5",
    name: "sd - net 1.5",
    kind: "build",
    date: "2026-07-20",
    external: {
      url: "https://www.are.na/phonetucked/sd-net-1-5",
      via: "are.na",
    },
  },
  {
    slug: "tigernetwork",
    name: "tigernetwork",
    kind: "build",
    date: "2026-07-10",
  },
  {
    slug: "protocol-accessories",
    name: "protocol accessories",
    kind: "gallery",
    date: "2026-06-19",
  },
  {
    slug: "phonetucked-benchmark",
    name: "benchmark",
    kind: "gallery",
    date: "2025-06-25",
  },
];
