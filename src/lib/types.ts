export interface CaseStudy {
  slug: string;
  title: string;
  company: string;
  period: string;
  summary: string;
  role: string;
  tags: string[];
  metrics: Metric[];
  context: string;
  constraints: string[];
  ownership: string;
  technicalDecisions: TechnicalDecision[];
  testingApproach: string;
  outcomes: string[];
  techStack: string[];
  featured?: boolean;
  category?: 'flagship' | 'secondary';
  detailedDescription?: string[];
  image?: string;
  liveUrl?: string;
  liveUrlNote?: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface TechnicalDecision {
  title: string;
  description: string;
}

export interface Article {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  content: string;
}

export interface AIProject {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  role: string;
  tags: string[];
  metrics: Metric[];
  description: string[];
  advancedFeatures: string[];
  techStack: string[];
  image?: string;
}
