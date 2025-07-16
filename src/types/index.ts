export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  goals: string[];
  impact: string;
  team: TeamMember[];
  sdgs: SDG[];
}

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
}

export interface SDG {
  number: number;
  title: string;
  color: string;
  image: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  content: string;
  image: string;
  category: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}