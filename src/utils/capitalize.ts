export const capitalize = (word: string, lowercase?: boolean) => {
  if (!word) return '';

  const partial = lowercase ? word.toLowerCase() : word;

  return partial.replaceAll(/\b\w/g, (s) => s.toUpperCase());
};
