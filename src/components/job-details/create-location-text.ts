const LOCATION_KEYWORDS = {
  GLOBAL: 'Global',
  REMOTE: 'Remote',
  UNSPECIFIED: 'unspecified',
};

const LOCATION_TYPE = {
  REMOTE: 'REMOTE',
  ONSITE: 'ONSITE',
};

export const createLocationText = (
  location: string | null,
  locationType: string | null,
): string | null => {
  if (!location) return null;
  if (location === LOCATION_KEYWORDS.UNSPECIFIED) return null;
  if (locationType === LOCATION_TYPE.REMOTE) {
    return location
      .replace(LOCATION_KEYWORDS.REMOTE, '')
      .replace(LOCATION_KEYWORDS.GLOBAL, '')
      .replace(/\W+/g, ' ')
      .trim();
  }

  return location;
};
