export type ProjectLinkKind = "github" | "live" | "download" | "drive";

export type ProjectLink = {
  label: string;
  href: string;
  kind: ProjectLinkKind;
};

export type Project = {
  index: string;
  title: string;
  platform: string;
  description: string;
  tech: string[];
  year: string;
  links: ProjectLink[];
};

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
};

export type Language = {
  name: string;
  level: string;
};

export type Stat = {
  value: string;
  label: string;
};
