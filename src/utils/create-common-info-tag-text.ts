import { capitalize } from './capitalize';

export const createCommonInfoTagText = (text: string | null) => {
  if (!text) return null;

  const sanitized = text.replaceAll('_', ' ');

  return capitalize(sanitized, true);
};
