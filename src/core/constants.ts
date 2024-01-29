export const JOB_TABS = {
  JOB_DETAILS: 'Job Details',
  ORGANIZATION: 'Organization',
  REQUIREMENTS: 'Requirements',
  RESPONSIBILITIES: 'Responsibilities',
  BENEFITS: 'Benefits',
  SKILLS: 'Skills',
} as const;

export const JOB_TAB_PARAMS = {
  DETAILS: 'details',
  ORG: 'org',
  REQUIREMENTS: 'requirements',
  RESPONSIBILITIES: 'responsibilities',
  BENEFITS: 'benefits',
  SKILLS: 'skills',
} as const;

export type JobTabText = (typeof JOB_TABS)[keyof typeof JOB_TABS];
export type JobTabParamsText =
  (typeof JOB_TAB_PARAMS)[keyof typeof JOB_TAB_PARAMS];

export const MULTI_STRING_LIMIT = 7;
