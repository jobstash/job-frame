export const getLogoUrl = (url: string, logo: string | null) =>
  logo ?? `https://www.google.com/s2/favicons?domain=${url}&sz=128`;
