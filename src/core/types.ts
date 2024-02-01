export interface FundingRound {
  id: string;
  date: number;
  roundName: string | null;
  raisedAmount: number | null;
  sourceLink: string | null;
}

export interface Investor {
  id: string;
  name: string;
}

export interface Chain {
  id: string;
  name: string;
  logo: number | null;
}

export interface Hack {
  id: string;
  category: string | null;
  issueType: string | null;
  fundsLost: string | null;
}

export interface Audit {
  id: string;
  name: string | null;
  link: string | null;
  techIssues?: number | null;
}

export interface Tag {
  id: string;
  name: string;
  normalizedName: string;
}

export interface Socials {
  website: string | null;
  discord: string | null;
  telegram: string | null;
  github: string | null;
  docs: string | null;
  twitter: string | null;
}

export interface ProjectInfo extends Socials {
  id: string;
  name: string;
  logo: string | null;
  category: string | null;
  isMainnet: boolean;
  tvl: number | null;
  monthlyRevenue: number | null;
  monthlyVolume: number | null;
  monthlyFees: number | null;
  monthlyActiveUsers: number | null;
  chains: Chain[];
  hacks: Hack[];
  audits: Audit[];
}

export interface OrgInfoTags {
  website: string | null;
  location: string | null;
  headcountEstimate: number | null;
  aggregateRating: number;
  reviewCount: number;
}

export interface OrgSocials extends Omit<Socials, 'website'> {
  website: string;
}

export interface OrgInfo extends OrgSocials {
  id: string;
  name: string;
  orgId: string;
  summary: string;
  description: string;
  logoUrl: string | null;
  headcountEstimate: number | null;
  createdTimestamp: number | null;
  updatedTimestamp: number | null;
}

export interface JobInfoTags {
  seniority: string | null;
  minimumSalary: number | null;
  maximumSalary: number | null;
  salaryCurrency: string | null;
  location: string | null;
  locationType: string | null;
  commitment: string | null;
  paysInCrypto: boolean | null;
  offersTokenAllocation: boolean | null;
  classification: string | null;
}

export interface JobOrganization extends OrgInfo {
  fundingRounds: FundingRound[];
  investors: Investor[];
  projects: ProjectInfo[];
}

export interface JobInfo extends JobInfoTags {
  id: string;
  url: string;
  title: string;
  shortUUID: string;
  timestamp: number;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  summary: string | null;
  description: string | null;
  culture: string | null;
}

export interface JobDetails extends JobInfo {
  organization: JobOrganization;
  tags: Tag[];
}

export interface InfoTagProps {
  text: string;
  icon: React.ReactNode;
  link?: string;
  showExternalIcon?: boolean;
}

export interface Tab {
  text: string;
  isActive: boolean;
}
