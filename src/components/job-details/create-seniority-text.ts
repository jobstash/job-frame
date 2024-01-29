const jobSeniorityMapping = {
  Intern: '1',
  Junior: '2',
  Senior: '3',
  Lead: '4',
  Head: '5',
} as const;

export const createSeniorityText = (seniority: string | null) => {
  if (!seniority) return null;

  for (const [k, v] of Object.entries(jobSeniorityMapping)) {
    if (v === seniority) return k;
  }

  return null;
};
